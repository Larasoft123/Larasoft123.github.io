// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";


import vercel from "@astrojs/vercel";


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  // env: {
  //   schema: {
  //     API_SECRET_KEY: envField.string({context: "server",  access:"secret", default:""  }),
  //   }

  // },




  vite: {
    
    plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: vercel(),
});