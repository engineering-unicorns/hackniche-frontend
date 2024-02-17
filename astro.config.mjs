import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["oslo"],
    },
    resolve: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
