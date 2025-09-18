# Minimal Technical Personal Website and Portfolio

This is a minimal technical personal website and portfolio Next.js template!. You can click `Use this template` in the top right hand of this page to create your own website with this as a starting point. Please remove existing content (specified in `src/lib/data.ts` and add your own content before deploying it anywhere).

## Features
- Modular design
- Easily customizable
- Light and dark mode
- Perfect Pagespeed Insights score

## Tech Stack
*This project uses Bun. If you want to use NPM instead of Bun, use `npm` instead of `bun` in the setup steps below*
- Next.js
- Tailwind CSS
- Shadcn UI

## Setup
1. `bun install`
2. `bun run dev`
3. Open `http://localhost:3000`

## Customization
All website content is stored at `src/lib/data/ts`. Once you copy this as a template, you can put your own information in. In the future there will be even more customization options. Most styling is in `src/app/globals/css`, so feel free to customize it to your needs! Feel free to open an issue if you find any issues or need any help! Any requirements below can be removed, just ensure to update `src/lib/types.ts` and conditonally render content as neccessary. This is meant to be a starter template, so you can customize and/or change it in any way you want.

### Sections

#### Hero
The hero requires first, middle (optional) and last name and a header/tagline

#### About
The about page requires a portrait image and an about me text.

#### Projects
The required fields for a project is name, dates, description, and Github link. You can optionally specify a link for where the project is hosted.

### Styling
As previously mentioned, most custom styling is in `src/app/globals.css`. Some styling may be in the component or page files themselves. Please note that `src/components/ui` contains components directly from Shadcn UI. These most likely do not need to be edited to customize styling.

## Deploying 
Using Netlify or Vercel is reccomended for a free way to host your website at a subdomain, with the ability to add a purchased custom domain if desired. Both of these deployment providers have Next.js support, so it should be a extremely straightforward process

## Contributing
If you want this template to have a specific feature or you find bug, please open an issue/pull request with your requested changes/contributions!
