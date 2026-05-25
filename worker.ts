/**
 * Cloudflare Workers entry point.
 * Bridges the Express app to the Workers fetch API.
 *
 * - API routes (/api/*, /manus-storage/*) → Express
 * - Everything else → Cloudflare Assets (static React build)
 */

import { Readable } from "node:stream";
import { createApp } from "./server/_core/app";

// Initialise the Express app once (cold start)
const app = createApp();

// ─── Express → Workers fetch adapter ────────────────────────────────────────

async function handleWithExpress(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const rawBody =
    request.body && request.method !== "GET" && request.method !== "HEAD"
      ? Buffer.from(await request.arrayBuffer())
      : null;

  return new Promise<Response>((resolve) => {
    // Build a Node.js-compatible IncomingMessage
    const nodeReq: any = Object.assign(new Readable({ read() {} }), {
      method: request.method,
      url: url.pathname + url.search,
      headers: Object.fromEntries(request.headers.entries()),
      socket: { remoteAddress: "127.0.0.1", encrypted: request.url.startsWith("https") },
      connection: { remoteAddress: "127.0.0.1" },
      httpVersion: "1.1",
      httpVersionMajor: 1,
      httpVersionMinor: 1,
    });

    if (rawBody) nodeReq.push(rawBody);
    nodeReq.push(null);

    // Collect the response
    const resHeaders: Record<string, string | string[]> = {};
    const chunks: Buffer[] = [];

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
      write(chunk: any, _enc?: any, cb?: () => void) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
        cb?.();
        return true;
      },
      end(chunk?: any, _enc?: any, cb?: () => void) {
        if (chunk != null) {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)));
        }
        this.finished = true;
        cb?.();

        const flat: Record<string, string> = {};
        for (const [k, v] of Object.entries(resHeaders)) {
          flat[k] = Array.isArray(v) ? v.join(", ") : v;
        }
        resolve(
          new Response(chunks.length ? Buffer.concat(chunks) : null, {
            status: this.statusCode,
            headers: flat,
          })
        );
      },
      on() { return this; },
      once() { return this; },
      emit() { return false; },
      destroy() {},
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
      return handleWithExpress(request);
    }

    // Everything else → static assets (React SPA)
    return env.ASSETS.fetch(request);
  },
};
