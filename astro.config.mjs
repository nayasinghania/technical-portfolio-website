// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	// change the 'site' value to your site's domain
	site: "https://nayasinghania.com",

	image: {
		domains: ["raw.githubusercontent.com"],
	},

	integrations: [react(), sitemap()],

	vite: {
		// @ts-expect-error
		plugins: [tailwindcss()],
	},
});
