// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelAdapter from "@astrojs/vercel";

// import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: "https://larasoft123.github.io",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  adapter: vercelAdapter(),
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.github/**']
      }
    }
  },


  // integrations: [sitemap()],
});