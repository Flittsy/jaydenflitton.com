import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="Get in Touch" title="Contact" />

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        Interested in collaborating, discussing an idea, or just saying hello?
        Reach out anytime.
      </p>

      <a
        href="mailto:jayden.flitton@outlook.com"
        className="mt-8 inline-block rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500"
      >
        jayden.flitton@outlook.com
      </a>
    </section>
  );
}
