# Minimal Personal Website + Portfolio Astro Theme

## About

This is the Minimal Personal Website + Portfolio template for the latest version of Astro (v5.x.x)

This is the same template I use for my personal website! You can use it to build a personal website and portfolio that suits your needs! Read below to learn how to use this as a template for your own personal website!

I deployed my site via Netlify, but there are many other free services where you can deploy your site. I reccommend Netlify's or Vercel's free tier, or Github Pages, but it is completely up to you!

## Features

- Light or dark mode
- Fade in animation for all pages
- Gradient card for page data
- Footer links
- Mobile-friendly (responsive)
- Automatic sitemap generation upon build

### Pages

- Home - This is the main page. The headline below the name has a typing animation
- About - This about page has an image with some text. The text goes below the image on small screens
- Projects - A list of projects, with relevant icons.
- Resume - links to a PDF of a resume

## Using this as a template

Want to create your own website from this template? Click `Use this template` to get started! This is an theme that has been verified by Astro (the framework used to built my website) as a theme. You can find the posting [here](https://astro.build/themes/details/minimal-personal-website-portfolio/).

Once you've copied the code via the use template button and cloned your copy of the template locally, you can get started by running `npm install`. This will install the dependencies (you only need to do this once). Next, run `npm run dev` to start the dev server. Now, you can open the site locally and see the template with the example data in it!

Now, you can edit the json files in src/content/data to customize the template with your own information. Make sure to update each file in src/content/data accordingly. Make sure to update the site's domain in `astro.config.mjs` to your website's domain as well.

Make sure to remove my resume and add your own pdf resume, and update src/content/data/navbar.json accordingly. If you don't want a resume on the site you can remove it from navbar.json

While these instructions just give you basic information on how to use the template, feel free to change any of the code to fit your needs! This template was made using Astro and React, so taking a look at their documentation may help!

Please open an issue [here](https://github.com/raspberri05/website/issues) if you are having any trouble with using this repository as a template and I can help resolve the issue.

## Customizing or Removing the Background Gradient

To change or remove the background gradient on this website:

1. **Locate the Gradient Definition**: Go to `src/styles/globals/css`.

2. **Modify the Gradient**:
   Adjust gradient colors by editing the hex values in the CSS where it says `linear-gradient`.

## Images

Here is what the dark version and light version of the template looks like (The template can be toggled between light or dark mode). These are just the defaults, but you can customize the theme as you see fit

![2024-11-13 12_50_14-Naya Singhania _ Home](https://github.com/user-attachments/assets/452460b5-9204-463e-a2aa-bbe2410cb69c)
![2024-11-13 12_49_52-Naya Singhania _ About](https://github.com/user-attachments/assets/58b75f25-7c7e-4d97-978b-79c602dfe91c)
![2024-11-13 12_50_32-Naya Singhania _ Projects](https://github.com/user-attachments/assets/7138965b-d44a-4ead-bef4-973e3a10f2d0)

![2024-11-13 12_50_47-Naya Singhania _ Home](https://github.com/user-attachments/assets/58ff8937-2203-498e-8af8-3a4c42a4b18d)
![2024-11-13 12_50_54-Naya Singhania _ About](https://github.com/user-attachments/assets/36a6f6ed-b1e6-449d-8437-6e17a537222f)
![2024-11-13 12_51_09-Naya Singhania _ Projects](https://github.com/user-attachments/assets/1bfbc564-fd6e-42c7-9f5b-e82e58ca01e5)

## Want new features or improvements in this template?

Please open an issue that explains the change in detail or pull request making the feature on this template repository (not your copy of the template)!
