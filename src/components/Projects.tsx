export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Selected Work
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            A personal site built with Next.js, TypeScript, and Tailwind to
            showcase projects, writing, and technical growth.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-xl font-semibold">Engineering Project</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            A placeholder for a hardware, CAD, robotics, or electronics project
            with clear documentation and iteration notes.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-xl font-semibold">Business Analysis</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            A placeholder for finance, market, strategy, or business analysis
            writing.
          </p>
        </article>
      </div>
    </section>
  );
}
