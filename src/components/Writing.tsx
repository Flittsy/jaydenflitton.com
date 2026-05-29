import SectionHeader from "@/components/SectionHeader";

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="Ideas & Analysis" title="Writing" />

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        This section will contain essays, ideas, and analysis — long-form
        thinking on engineering, finance, technology, and the problems I find
        worth exploring.
      </p>
    </section>
  );
}
