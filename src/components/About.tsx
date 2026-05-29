import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="Background" title="About" />

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        I&apos;m Jayden Flitton, an engineering and finance student building
        technical projects and developing business thinking at the intersection
        of hardware, software, and markets.
      </p>
    </section>
  );
}
