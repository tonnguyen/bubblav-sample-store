import vinextWorker from "vinext/server/app-router-entry";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return vinextWorker.fetch(request, env, ctx);
  },
};
