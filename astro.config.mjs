// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--font-raleway",
      fallbacks: ["sans-serif"],
      name: "Raleway",
      provider: fontProviders.google(),
      styles: ["normal"],
      weights: ["400 700"],
    },
    {
      cssVariable: "--font-open-sans",
      fallbacks: ["sans-serif"],
      name: "Open Sans",
      provider: fontProviders.google(),
      styles: ["normal"],
      weights: ["400 700"],
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "jk-sass-lib" as lib;
          @use "/src/styles/_variables.scss" as *;
          `,
        },
      },
    },
  },
  site: "https://jkaps9.github.io/fylo/",
});
