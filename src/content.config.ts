import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The blog: every Markdown file in src/content/blog/ becomes a page.
 * The frontmatter schema below is validated at build time.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };
