import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { about } from "@/lib/data";

export default function Introduction() {
  return (
    <Card>
      <CardContent>
        <Image
          src={about.image}
          alt="Profile Picture"
          width={200}
          height={200}
          className="portrait"
        />
        <div>
          {about.description.map((paragraph: string) => (
            <p key={paragraph} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
