import { About, HeaderLinks, Projects, SocialLinks } from "@/lib/types";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const projects: Projects = [
  {
    title: "Accuguide",
    dates: "Dec 2024 - Present",
    description: [
      "Accuguide is an open-source project designed to help people with disabilities find, review, and better understand the accessibility of public spaces. Users can search for and rate locations based on detailed accessibility indicators, such as wheelchair access, sensory-friendly environments, and more, making it easier for others to navigate the world with confidence.",
      "Powered by industry-standard technologies like Next.js, React, TypeScript, and PostgreSQL, Accuguide offers a fast and modern user experience. We’re also integrating AI capabilities, such as generative AI for sentiment and image analysis, to automatically extract accessibility insights and generate comprehensive summaries of each location.",
      "As someone with a disability myself, I’ve seen firsthand the need for tools like this. Accuguide is not only a personal passion project but also a step toward creating a more accessible world. By making the platform open source, I hope to invite contributions from developers, designers, and advocates alike, fostering a strong community around accessibility and inclusive tech.",
    ],
    images: [
      "/projects/accuguide/landing.png",
      "/projects/accuguide/reviews.png",
      "/projects/accuguide/sign-in.png",
    ],
    github: "",
  },
  {
    title: "Spartan Score",
    dates: "Jan 2025 - Present",
    description: [
      "Spartan Score is a web app for SJSU students to be able to easily calculate their current GPA and see how their grades will affect their GPA in the future.",
      "It is a simple, yet effective tool that I created to help students like myself who want to keep track of their academic performance. The app is built with Next.js and has multiple AI-powered features coming soon.",
    ],
    images: [
      "/projects/spartan-score/landing.png",
      "/projects/spartan-score/result.png",
    ],
    github: "",
  },
  {
    title: "Scrobble Quiz",
    dates: "Feb 2025 - Present",
    description: [
      "Test your music knowledge based on your Last.fm (music service) history! This project uses both traditional ML and generative AI to generate relevant quiz questions for the user.",
      "I am hoping to add support for other music services in the future as well, as well as refining ML pipelining and AI prompting to create various levels of questions!",
    ],
    images: [
      "/projects/scrobble-quiz/landing.png",
      "/projects/scrobble-quiz/results.png",
    ],
    github: "",
  },
  {
    title: "Website",
    dates: "Jan 2022 - Present",
    description: [
      "My personal website (the one you are currently on) that utilizes Astro with Tailwind CSS, with some CSS animations as well.",
      "I maintain this as an open source project to help developers easily get started with making their own portfolio websites.",
    ],
    images: ["/projects/website/landing.png", "/projects/website/projects.png"],
    github: "",
  },
  {
    title: "Persona.fm",
    dates: "June 2024 - Dec 2024",
    description: [
      "A full stack Next.js application that uses the Last.FM API to show users snapshots of their listening habits.",
      "This project uses OpenAI's 4o mini model to generate information about a user's listening history on Last.fm for the last 7 days, and utilizes a PostgreSQL database via Supabase to allow users to store their data.",
    ],
    github: "",
  },
  {
    title: "ChairSense",
    dates: "Sep 2021 - Dec 2021",
    description: [
      "For wheelchair users, it can be hard to see what's behind the chair, especially when backing up or turning, which can be dangerous because there is a high potential to hit an object or person.",
      "With this project, I prototyped a low cost device that can detect obstacles and warn the user so they do not hit objects or people.",
      "I used an Arduino board as well as some sensors to achieve over 90% accuracy with a cost of only about $50 per unit, which is far cheaper than any similar devices currently available.",
    ],
    github: "",
  },
];

export const about: About = {
  name: {
    first: "Naya",
    last: "Singhania",
  },
  header: "CS @ SJSU | Fullstack + AI Dev | ML Engineer",
  description: [
    "Hi, I'm Naya Singhania! I've been passionate about CS since I was 12, and that enthusiasm has driven me to explore various technologies and frameworks since then. I'm currently working towards a Computer Science degree as well as a Computational Linguistics certificate at SJSU, where I've deepened my understanding of CS fundamentals and honed my skills in Next.js and React. I mainly create dynamic fullstack applications with AI integration and seamless user experiences, and I'm always eager to learn and adapt to new challenges.",
    "In addition to my development work, I have a deep interest in AI and using it in production apps. For instance, I am developing a full-stack application that allows users to find and rate locations based on accessibility features that uses AI to get users the info they need. As someone who has a disability I hope that this project will help make life more accessible for those with disabilities. I also developed ChairSense, a project that utilizes various sensors and a microcontroller to implement obstacle detection on wheelchairs, showcasing my commitment to leveraging technology for accessibility. Beyond my own projects, I ensure to support the open source community with open source contributions, and I am passionate about choir and producing music, where I express my creativity and connect with others.",
    "As I continue my journey in tech, I'm actively seeking internship opportunities that will allow me to further develop my skills and gain hands-on experience. If you're looking for a dedicated and enthusiastic developer with a strong foundation in Fullstack + AI development and a passion for innovation, let's connect! I'm excited to collaborate and explore new possibilities in the tech world.",
  ],
};

export const headerLinks: HeaderLinks = [
  { name: "Home", path: "" },
  { name: "About", path: "about" },
  { name: "Projects", path: "projects" },
];

export const socialLinks: SocialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/nayasinghania",
    icon: GitHubLogoIcon,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/nayasinghania",
    icon: LinkedInLogoIcon,
  },
];
