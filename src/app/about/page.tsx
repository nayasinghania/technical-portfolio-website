import Image from "next/image";
import Title from "@/components/title";
import { about } from "@/lib/data";

export default function About() {
  return (
    <div>
      <Title>About Me</Title>
      <Image
        src="/portrait.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-lg mb-4"
      />
      {about.description.map((paragraph: string) => (
        <p key={paragraph} style={{ marginBottom: "1em" }}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
