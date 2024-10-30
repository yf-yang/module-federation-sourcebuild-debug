import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from "@module-federation/modern-js";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<"rspack">({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack",
    }),
    moduleFederationPlugin(),
  ],
  experiments: {
    sourceBuild: true,
  },
});
