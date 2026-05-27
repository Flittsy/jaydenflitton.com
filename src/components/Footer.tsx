const footerLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:your-email@example.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-sm font-semibold tracking-tight text-white">
          Jayden Flitton
        </p>

        <p className="mt-3 text-sm text-zinc-500">
          Engineering • Finance • Projects • Writing
        </p>

        <ul className="mt-6 flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
