const focusItems = [
  {
    title: "Building technical projects",
    description:
      "Hands-on work across software, robotics, and embedded systems to deepen practical engineering skills.",
  },
  {
    title: "Studying engineering and finance",
    description:
      "Balancing technical coursework with markets, economics, and business fundamentals.",
  },
  {
    title: "Writing about business, technology, and markets",
    description:
      "Developing clear thinking through essays and analysis on industries and ideas worth exploring.",
  },
];

export default function CurrentFocus() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Right Now
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Current Focus
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {focusItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
