import { defineConfig, loadEnv } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { staticAssetsAdapter } from "@vinext/cloudflare/cache/static-assets-adapter";

// vinext inlines NEXT_PUBLIC_* into the client bundle from process.env, but
// Vite never loads .env into process.env — only import.meta.env. Seed it from
// .env.production (public values only; mirrors wrangler.jsonc vars). `??=`
// keeps real env precedence.
for (const [k, v] of Object.entries(loadEnv("production", process.cwd(), "NEXT_PUBLIC_"))) {
  process.env[k] ??= v;
}

export default defineConfig({
  plugins: [
    vinext({
      cache: { cdn: staticAssetsAdapter() },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
