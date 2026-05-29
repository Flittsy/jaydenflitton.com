import Image from "next/image";

const profile = {
  name: "Jayden Flitton",
  tagline: "Engineering • Finance • Builder • Student",
  intro:
    "I am building a portfolio of engineering projects, business analysis, and ideas at the intersection of technology, energy, and finance.",
  imageSrc: "/profile.png",
  imageAlt: "Jayden Flitton",
};

const socialLinks = [
  { label: "Email", href: "mailto:jayden.flitton@outlook.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayden-flitton/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4g%2BO7rfcQh2003l9DxkZng%3D%3D",
  },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
        <div className="shrink-0 overflow-hidden rounded-[1.75rem] border border-border sm:rounded-[2rem]">
          <Image
            src={profile.imageSrc}
            alt={profile.imageAlt}
            width={192}
            height={192}
            priority
            className="aspect-square w-36 object-cover object-top sm:w-44 md:w-48"
          />
        </div>

        <div className="max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-label">
            {profile.tagline}
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">{profile.intro}</p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-light transition-colors hover:text-ice-blue"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
