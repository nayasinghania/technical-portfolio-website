import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const data = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/content/data/" }),
});

export const collections = { data };
