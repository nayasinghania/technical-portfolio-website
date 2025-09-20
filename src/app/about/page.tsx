import Introduction from "@/components/about/introduction";
import Skills from "@/components/about/skills";
import Separator from "@/components/separator";
import Title from "@/components/title";

export default function About() {
  return (
    <div>
      <Title>About Me</Title>
      <Introduction />
      <Separator />
      <Skills />
    </div>
  );
}
