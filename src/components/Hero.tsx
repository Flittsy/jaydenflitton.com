export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
        Engineering • Finance • Builder
      </p>

      <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
        Jayden Flitton
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        I am building a portfolio of engineering projects, business analysis,
        and ideas at the intersection of technology, energy, and finance.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
        >
          View Projects
        </a>

        <a
          href="mailto:your-email@example.com"
          className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
