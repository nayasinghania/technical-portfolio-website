import { headerLinks } from "@/lib/data";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="header flex items-center justify-between px-4 py-2">
      <div className="flex-1 flex justify-center font-bold">
        {headerLinks.map((link) => (
          <a key={link.name} href={`/${link.path}`} className="mx-4">
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </header>
  );
}
