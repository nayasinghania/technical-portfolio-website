import { about, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.name} Link`}
          >
            <link.icon width={32} height={32} className="my-0" />
          </a>
        ))}
      </div>
      <p className="copyright">
        Copyright 2025 {about.name.first} {about.name.last}
      </p>
    </footer>
  );
}
