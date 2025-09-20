import { about } from "@/lib/data";

export default function Name() {
  return (
    <h1>
      {about.name.first} {about.name.middle} {about.name.last}
    </h1>
  );
}
