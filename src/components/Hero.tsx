export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted-light">
        Jayden Flitton
      </p>
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        I build things that make scarcity smaller.
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
        Engineering, finance, and technology — not as separate disciplines, but as tools toward the same end.
      </p>
      <div className="mt-10 flex gap-6">
        <a href="mailto:jayden.flitton@outlook.com" className="text-sm text-muted-light transition-colors hover:text-accent">
          Email
        </a>
        <a href="https://www.linkedin.com/in/jayden-flitton" className="text-sm text-muted-light transition-colors hover:text-accent">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
