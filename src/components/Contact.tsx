export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-16 pt-24">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Get in Touch
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>

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
