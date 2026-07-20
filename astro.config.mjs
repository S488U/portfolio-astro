// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";
import icon from "@dallay/astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://shahabas.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],

  fonts: [
    {
      name: "Cormorant Garamond",
      cssVariable: "--font-heading",
      provider: fontProviders.google(),
      weights: ["400", "500", "600", "700"],
      formats: ["woff2", "woff"],
    },
    {
      name: "Inter",
      cssVariable: "--font-normal",
      provider: fontProviders.google(),
      styles: ["normal", "italic"],
      formats: ["woff2", "woff"],
    },
    {
      name: "Recursive",
      cssVariable: "--font-body",
      provider: fontProviders.google(),
      styles: ["normal", "italic"],
      weights: ["400", "500", "600", "700"],
      formats: ["woff2", "woff"],
    },
  ],

  markdown: {
    shikiConfig: {
      theme: "vitesse-dark",
    },
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] },
        ],
      ],
    }),
  },

  output: "static",
  adapter: vercel(),
});
