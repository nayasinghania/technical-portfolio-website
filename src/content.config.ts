import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const data = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/data/" }),
});

export const collections = { data };
