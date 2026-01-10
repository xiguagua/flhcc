import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const apps = defineCollection({
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/content/apps" }),
  // type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    appURL: z.string(),
    appIcon: z.string(),
    keywords: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, work, apps };
