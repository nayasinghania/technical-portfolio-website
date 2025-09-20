import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/types";

export default function ProjectCard({
  title,
  dates,
  description,
  github,
  link,
  images,
}: Project) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{dates}</CardDescription>
      </CardHeader>
      <CardContent>
        {description.map((paragraph) => (
          <p key={paragraph} className="paragraph">
            {paragraph}
          </p>
        ))}
        {images && (
          <div className="project-images-container">
            {images.map((image) => (
              <div key={image} className="project-image-container">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="project-image"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {github && (
          <Button asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
        <div className="w-2"></div>
        {link && (
          <Button asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
