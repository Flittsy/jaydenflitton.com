const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

function SidebarLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2.5 text-sm text-muted-light transition-all duration-300 ease-out hover:-translate-x-1 hover:text-ice-blue"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-ice-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {label}
    </a>
  );
}

function MobileLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="text-xs text-muted-light transition-colors duration-300 hover:text-ice-blue sm:text-sm"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

export default function SidebarNav() {
  return (
    <>
      <header className="sticky top-0 z-50 overflow-x-hidden border-b border-border bg-background/90 backdrop-blur-sm lg:hidden">
        <nav className="mx-auto flex max-w-5xl min-w-0 items-center justify-between gap-3 px-4 py-4">
          <a
            href="/"
            className="shrink-0 whitespace-nowrap text-xs font-semibold tracking-tight text-foreground sm:text-sm"
          >
            Jayden Flitton
          </a>

          <ul className="flex min-w-0 shrink items-center gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={link.label === "Resume" ? "max-sm:hidden" : undefined}
              >
                <MobileLink
                  href={link.href}
                  label={link.label}
                  external={link.external}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <aside className="fixed inset-y-0 left-0 z-50 hidden w-56 flex-col px-8 py-12 lg:flex">
        <a
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Jayden Flitton
        </a>

        <nav className="mt-12">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SidebarLink
                  href={link.href}
                  label={link.label}
                  external={link.external}
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
