const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", external: true, hideOnMobile: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 overflow-x-hidden border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl min-w-0 items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6">
        <a
          href="/"
          className="shrink-0 whitespace-nowrap text-xs font-semibold tracking-tight text-foreground sm:text-sm"
        >
          Jayden Flitton
        </a>

        <ul className="flex min-w-0 shrink items-center gap-2 sm:gap-6">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={link.hideOnMobile ? "max-sm:hidden" : undefined}
            >
              <a
                href={link.href}
                className="text-xs text-muted-light transition-colors hover:text-ice-blue sm:text-sm"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
