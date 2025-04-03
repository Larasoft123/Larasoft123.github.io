// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: {
      mode: "inline",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
