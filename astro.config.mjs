// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

import react from "@astrojs/react";


import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
  site: 'https://ricsasa.github.io',
  base: '/lumina-landing',
  integrations: [react(), sitemap()],
});