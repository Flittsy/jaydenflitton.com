import SectionHeader from "@/components/SectionHeader";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayden-flitton/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4g%2BO7rfcQh2003l9DxkZng%3D%3D",
  },
  { label: "Email", href: "mailto:jayden.flitton@outlook.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeader title="Jayden Flitton" />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-light">
          Engineering • Finance • Projects • Writing
        </p>

        <ul className="mt-8 flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-light transition-colors hover:text-ice-blue"
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
