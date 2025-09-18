import Image from "next/image";
import Title from "@/components/title";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/lib/data";

export default function About() {
  return (
    <div>
      <Title>About Me</Title>
      <Card>
        <CardContent>
          <Image
            src="/portrait.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="portrait"
          />
          {about.description.map((paragraph: string) => (
            <p key={paragraph} className="paragraph">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
