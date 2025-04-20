// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";


// import node from "@astrojs/node";



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

  integrations: [],

  // adapter: node({
  //   mode: "standalone",
  // }),
});