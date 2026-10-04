import vinextWorker from "vinext/server/app-router-entry";

// This app defines no Server Actions, so POSTs carrying `next-action` /
// `x-rsc-action` can only come from stale clients, other Next.js sites'
// cached pages, or scanners. vinext already answers them with
// 404 + `x-nextjs-action-not-found` — but logs a "Failed to find Server
// Action" warning for every hit. Short-circuit here with the same response
// to keep the log clean. REMOVE this guard if a `"use server"` function is
// ever added, or real Server Action calls will start failing.
function isServerActionRequest(request: Request): boolean {
  return (
    request.method === "POST" &&
    (request.headers.has("next-action") || request.headers.has("x-rsc-action"))
  );
}

function serverActionNotFoundResponse(): Response {
  // Mirrors vinext's createServerActionNotFoundResponse(); the
  // `x-nextjs-action-not-found` header is what lets stale clients detect
  // the version skew and reload.
  return new Response("Server action not found.", {
    status: 404,
    headers: {
      "x-nextjs-action-not-found": "1",
      "content-type": "text/plain",
    },
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (isServerActionRequest(request)) return serverActionNotFoundResponse();
    return vinextWorker.fetch(request, env, ctx);
  },
};
