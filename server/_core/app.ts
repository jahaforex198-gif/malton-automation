import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";

/**
 * Creates and configures the Express app WITHOUT starting the HTTP server.
 * Used by both the local dev server (index.ts) and the Cloudflare Worker (worker.ts).
 */
export function createApp() {
  const app = express();

  // express.json and express.urlencoded are removed for Cloudflare Workers compatibility

  registerStorageProxy(app);
  registerOAuthRoutes(app);

  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  return app;
}
