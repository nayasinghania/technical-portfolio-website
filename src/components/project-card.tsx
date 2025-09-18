import { Project } from "@/lib/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectCard({
  title,
  dates,
  description,
  github,
  link,
  images,
}: Project) {
  return (
    <Card className="bg-muted-foreground text-background border-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-background">{dates}</CardDescription>
      </CardHeader>
      <CardContent>
        {description.map((paragraph) => (
          <p key={paragraph} style={{ marginBottom: "1em" }}>
            {paragraph}
          </p>
        ))}
        {images && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image}
                className="aspect-3/2 overflow-hidden rounded-lg shadow-md bg-black"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p>{github}</p>
        {link && <p>{link}</p>}
      </CardFooter>
    </Card>
  );
}
