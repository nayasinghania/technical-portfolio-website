# Minimal Technical Personal Website and Portfolio

This is a minimal technical personal website and portfolio Next.js template!. You can click `Use As Template` in the top right hand of this page to create your own website with this as a starting point.

## Features
- Next.js
- Tailwind CSS
- Shadcn UI
- Modular design
- Easily customizable
- Light and dark mode
- Perfect Pagespeed Insights score

## Setup
1. `bun install`
2. `bun run dev`
3. Open `http://localhost:3000`

## Customization
All website content is stored at `src/lib/data/ts`. Once you copy this as a template, you can put your own information in. In the future there will be even more customization options. Most styling is in `src/app/globals/css`, so feel free to customize it to your needs! Feel free to open an issue if you find any issues or need any help! Any requirements below can be removed, just ensure to update `src/lib/types.ts` and conditonally render content as neccessary.

### Hero
The hero requires first, middle (optional) and last name and a header/tagline

### About
The about page requires a portrait image and an about me text.

### Projects
The required fields for a project is name, dates, description, and Github link. You can optionally specify a link for where the project is hosted.

## Deploying 
Using Netlify or Vercel is reccomended for a free way to host your website at a subdomain, with the ability to add a purchased custom domain if desired. 
