import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Project = {
  title: string;
  dates: string;
  description: string[];
  github: string;
  link?: string;
  images?: string[];
};

export type SocialLink = {
  name: string;
  link: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export type About = {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  header: string;
  description: string[];
};

export type HeaderLink = {
  name: string;
  path: string;
};

export type Projects = Project[];

export type SocialLinks = SocialLink[];

export type HeaderLinks = HeaderLink[];
