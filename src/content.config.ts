import { defineCollection } from 'astro:content';
import z from 'astro/zod';

import { glob, file } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog', pattern: '**/*.{md,mdx}'
	}),
	schema: z.object({
		title: z.string(),
		date: z.string()
	})
});

export const collections = { blog };