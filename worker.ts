/**
 * Cloudflare Workers entry point.
 * Bridges the Express app to the Workers fetch API.
 *
 * - API routes (/api/*, /manus-storage/*) → Express
 * - Everything else → Cloudflare Assets (static React build)
 */


import { createApp } from "./server/_core/app";

// Initialise the Express app once (cold start)
const app = createApp();

// ─── Express → Workers fetch adapter ────────────────────────────────────────

async function handleWithExpress(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const rawBody =
    request.body && request.method !== "GET" && request.method !== "HEAD"
      ? await request.arrayBuffer()
      : null;

  return new Promise<Response>((resolve) => {
    // Build a Node.js-compatible IncomingMessage
    const nodeReq: any = {
      method: request.method,
      url: url.pathname + url.search,
      headers: Object.fromEntries(request.headers.entries()),
      socket: { remoteAddress: "127.0.0.1", encrypted: request.url.startsWith("https") },
      connection: { remoteAddress: "127.0.0.1" },
      httpVersion: "1.1",
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      on: () => {},
      once: () => {},
      emit: () => {},
      body: rawBody,
    };

    // Collect the response
    const resHeaders: Record<string, string | string[]> = {};
    const chunks: any[] = [];

    const nodeRes: any = {
      statusCode: 200,
      headersSent: false,
      finished: false,
      locals: {},

      setHeader(k: string, v: string | string[]) {
        resHeaders[k.toLowerCase()] = v;
        return this;
      },
      getHeader(k: string) {
        return resHeaders[k.toLowerCase()];
      },
      getHeaders() {
        return resHeaders;
      },
      removeHeader(k: string) {
        delete resHeaders[k.toLowerCase()];
      },
      hasHeader(k: string) {
        return k.toLowerCase() in resHeaders;
      },
      writeHead(status: number, hdrs?: Record<string, string>) {
        this.statusCode = status;
        if (hdrs) {
          for (const [k, v] of Object.entries(hdrs)) {
            resHeaders[k.toLowerCase()] = v;
          }
        }
        this.headersSent = true;
        return this;
      },
      write(chunk: any) {
        chunks.push(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk);
        return true;
      },
      end(chunk?: any) {
        if (chunk != null) {
          chunks.push(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk);
        }
        this.finished = true;

        const flat: Record<string, string> = {};
        for (const [k, v] of Object.entries(resHeaders)) {
          flat[k] = Array.isArray(v) ? v.join(", ") : v;
        }

        let totalLength = 0;
        for (const c of chunks) totalLength += c.length;
        const body = new Uint8Array(totalLength);
        let offset = 0;
        for (const c of chunks) {
          body.set(c, offset);
          offset += c.length;
        }

        resolve(
          new Response(totalLength ? body : null, {
            status: this.statusCode,
            headers: flat,
          })
        );
      },
      on() { return this; },
      once() { return this; },
      emit() { return false; },
      destroy() {},
      status(code: number) { this.statusCode = code; return this; },
      json(data: any) {
        this.setHeader('Content-Type', 'application/json');
        this.end(JSON.stringify(data));
      },
      send(data: any) {
        if (typeof data === 'object') return this.json(data);
        this.end(data);
      },
      cookie(name: string, value: string, options: any) {
        let cookie = `${name}=${value}`;
        if (options.path) cookie += `; Path=${options.path}`;
        if (options.httpOnly) cookie += `; HttpOnly`;
        if (options.secure) cookie += `; Secure`;
        if (options.sameSite) cookie += `; SameSite=${options.sameSite}`;
        if (options.maxAge) cookie += `; Max-Age=${Math.floor(options.maxAge / 1000)}`;
        const existing = this.getHeader('Set-Cookie');
        if (existing) {
          const cookies = Array.isArray(existing) ? existing : [existing];
          cookies.push(cookie);
          this.setHeader('Set-Cookie', cookies);
        } else {
          this.setHeader('Set-Cookie', cookie);
        }
        return this;
      },
      clearCookie(name: string, options: any) {
        return this.cookie(name, '', { ...options, maxAge: 0 });
      },
      redirect(status: number | string, url?: string) {
        if (typeof status === 'string') {
          url = status;
          status = 302;
        }
        this.statusCode = status;
        this.setHeader('Location', url!);
        this.end();
      },
    };

    // Run through Express; if no route matched, resolve 404
    app(nodeReq, nodeRes, () => {
      resolve(new Response("Not Found", { status: 404 }));
    });
  });
}

// ─── Worker export ────────────────────────────────────────────────────────────

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  DATABASE_URL?: string;
  JWT_SECRET?: string;
  OAUTH_SERVER_URL?: string;
  BUILT_IN_FORGE_API_URL?: string;
  BUILT_IN_FORGE_API_KEY?: string;
  VITE_APP_ID?: string;
  OWNER_OPEN_ID?: string;
  NODE_ENV?: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Inject Cloudflare secrets into process.env so existing server code works
    const vars: Record<string, string | undefined> = {
      DATABASE_URL: env.DATABASE_URL,
      JWT_SECRET: env.JWT_SECRET,
      OAUTH_SERVER_URL: env.OAUTH_SERVER_URL,
      BUILT_IN_FORGE_API_URL: env.BUILT_IN_FORGE_API_URL,
      BUILT_IN_FORGE_API_KEY: env.BUILT_IN_FORGE_API_KEY,
      VITE_APP_ID: env.VITE_APP_ID,
      OWNER_OPEN_ID: env.OWNER_OPEN_ID,
      NODE_ENV: env.NODE_ENV ?? "production",
    };
    for (const [k, v] of Object.entries(vars)) {
      if (v !== undefined) process.env[k] = v;
    }

    const { pathname } = new URL(request.url);

    // Route API traffic to Express
    if (
      pathname.startsWith("/api/") ||
      pathname.startsWith("/manus-storage/")
    ) {
      // return handleWithExpress(request);
      return new Response("API disabled for Workers compatibility", { status: 501 });
    }

    // Everything else → static assets (React SPA)
    return env.ASSETS.fetch(request);
  },
};
