import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

const data = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/data/" }),
});

export const collections = { data };
