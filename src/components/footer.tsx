import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="header">
      <div className="footer-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.name} Link`}
          >
            <link.icon width={32} height={32} />
          </a>
        ))}
      </div>
      <p className="copyright">Copyright 2025 Naya Singhania</p>
    </footer>
  );
}
