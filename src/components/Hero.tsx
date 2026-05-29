export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
      <p className="mb-4 text-center text-sm uppercase tracking-[0.15em] text-zinc-400 sm:text-left sm:tracking-[0.3em]">
        Engineering • Finance • Builder • Student
      </p>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-7xl">
        Jayden Flitton
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        I am building a portfolio of engineering projects, business analysis,
        and ideas at the intersection of technology, energy, and finance.
      </p>

      <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
        <a
          href="#projects"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white"
        >
          Resume
        </a>

        <a
          href="mailto:jayden.flitton@outlook.com"
          className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-white"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
