import AboutButton from "@/components/home/about-button";
import Name from "@/components/home/name";
import Tagline from "@/components/home/tagline";

export default function Home() {
  return (
    <div className="hero">
      <Name />
      <Tagline />
      <AboutButton />
    </div>
  );
}
