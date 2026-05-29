import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Contact"
      description="Interested in collaborating, discussing an idea, or just saying hello? Reach out anytime."
    >
      <a
        href="mailto:jayden.flitton@outlook.com"
        className="mt-8 inline-block rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-ice-blue hover:text-ice-blue"
      >
        jayden.flitton@outlook.com
      </a>
    </Section>
  );
}
