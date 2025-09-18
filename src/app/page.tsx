import { Button } from "@/components/ui/button";
import { about } from "@/lib/data";

export default function Home() {
  return (
    <div className="hero">
      <h1>
        {about.name.first} {about.name.middle} {about.name.last}
      </h1>
      <h2 className="tagline">{about.header}</h2>
      <Button
        className="bg-background text-foreground font-bold text-lg"
        size="lg"
      >
        <a href="/about">About Me</a>
      </Button>
    </div>
  );
}
