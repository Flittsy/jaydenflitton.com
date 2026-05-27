const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jayden-flitton/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4g%2BO7rfcQh2003l9DxkZng%3D%3D" },
  { label: "Email", href: "mailto:jayden.flitton@outlook.com" },
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
