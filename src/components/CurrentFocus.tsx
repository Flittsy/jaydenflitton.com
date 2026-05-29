import Section from "@/components/Section";

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
    <Section eyebrow="Right Now" title="Current Focus">
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {focusItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-light">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
