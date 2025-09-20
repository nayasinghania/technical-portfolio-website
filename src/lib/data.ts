import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import type { About, HeaderLinks, Projects, SocialLinks } from "@/lib/types";

export const projects: Projects = [
  {
    title: "Title1",
    dates: "Month Year - Month Year",
    description: [
      "For each project, you should specify a title, the dates you worked on it, a description (a list of paragraphs), images (a list of image URLs), and optionally a GitHub link and/or a live link.",
      "This is the second paragraph of this project description. You can add as many paragraphs as you want! Images will have a black border added around them to ensure each picture is the same size",
    ],
    images: [
      "/projects/title1/placeholder-1.jpeg",
      "/projects/title1/placeholder-2.jpeg",
      "/projects/title1/placeholder-3.jpeg",
    ],
    github: "https://github.com/username/repository",
    link: "https://example.com",
  },
  {
    title: "Title2",
    dates: "Month Year - Month Year",
    description: [
      "You can add as many projects as you want! Each one is a separate entry in the Projects list in src/lib/data.ts",
      "I reccomend a maximum of 3 images per project, as more than that can make the page very long. If you don't have a Github or live link, simply leave that field out and the buttons won't show up.",
    ],
    images: [
      "/projects/title2/placeholder-1.jpeg",
      "/projects/title2/placeholder-2.jpeg",
    ],
  },
];

export const about: About = {
  name: {
    first: "John",
    last: "Doe",
  },
  header: "A Short And Descriptive Tagline",
  description: [
    "This page should include a brief introduction about your background, skills, interests, and goals. You can have multiple paragraphs if you want, just make sure to separate them into different strings in the description list. Above this text is a portrait image, whose path is specified in src/lib/data.ts (this is where all the site content is!). Having a professional-looking photo adds credibility to your portfolio.",
    "Below this section is the skills section, which is a list of your relevant skills categorized by type. You can add or remove categories as needed to showcase your most relevant skills. The icon at the top right is to toggle between light and dark mode. In the footer, there are customizable social links on the left and a copyright notice on the right.",
  ],
  image: "/placeholder-portrait.jpg",
};

export const headerLinks: HeaderLinks = [
  { name: "Home", path: "" },
  { name: "About", path: "about" },
  { name: "Projects", path: "projects" },
];

export const socialLinks: SocialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/username/repository",
    icon: GitHubLogoIcon,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/username",
    icon: LinkedInLogoIcon,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/username",
    icon: TwitterLogoIcon,
  },
];

export const skills = [
  {
    type: "Category1",
    list: ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  },
  {
    type: "Category2",
    list: ["Skill1", "Skill2", "Skill3"],
  },
  {
    type: "Category3",
    list: ["Skill1", "Skill2", "Skill3", "Skill4"],
  },
];
