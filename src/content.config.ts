import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/contents/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3),
      description: z.string(),
      technologies: z.array(z.string()),
      hosted: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
      github: z.union([z.url(), z.literal("")]).optional(),
      live: z.union([z.url(), z.literal("")]).optional(),
      images: z.array(image()).default([]),
      draft: z.boolean().default(false),
      featureOrder: z.number().optional(),
    }),
});

export const collections = { projects };
