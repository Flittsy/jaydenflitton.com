const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Software",
    description:
      "A personal portfolio site for showcasing engineering projects, business analysis, writing, and technical growth. Built as a clean, expandable platform rather than a one-off static page.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    status: "In progress",
  },
  {
    title: "Desk-Mounted Robot Arm",
    category: "Engineering / Robotics",
    description:
      "A robotics project focused on detecting and interacting with objects near a desk. The goal is to build technical depth in electronics, control, CAD, and embedded systems.",
    tools: ["ESP32", "sensors", "servos", "CAD", "3D printing"],
    status: "Planning / prototyping",
  },
  {
    title: "Business and Market Analysis",
    category: "Finance / Strategy",
    description:
      "A collection of written analysis on markets, companies, industries, and strategy. The goal is to develop judgment across engineering, finance, and business.",
    tools: ["Research", "economic analysis", "financial modeling"],
    status: "Ongoing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Selected Work
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {project.category}
            </p>

            <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6 space-y-4 border-t border-zinc-800 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Tools
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  {project.tools.join(", ")}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Status
                </p>
                <p className="mt-2 text-sm font-medium text-zinc-300">
                  {project.status}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
