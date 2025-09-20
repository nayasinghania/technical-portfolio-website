import { ModeToggle } from "@/components/theme/mode-toggle";
import { headerLinks } from "@/lib/data";

export default function Header() {
  return (
    <header className="header">
      <div className="header-links">
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
