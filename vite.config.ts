import { fileURLToPath, URL } from "node:url";

import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type PluginOption } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig(({ command, mode }) => {
  const envDefine = Object.fromEntries(
    Object.entries(loadEnv(mode, process.cwd(), "VITE_")).map(([key, value]) => [
      `import.meta.env.${key}`,
      JSON.stringify(value),
    ]),
  );

  const plugins: PluginOption[] = [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] })];

  if (command === "build") {
    plugins.push(cloudflare({ viteEnvironment: { name: "ssr" } }));
  }

  plugins.push(
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    viteReact(),
  );

  return {
    define: envDefine,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: {
      host: "::",
      port: 8080,
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 1000,
          pollInterval: 100,
        },
      },
    },
    plugins,
  };
});
