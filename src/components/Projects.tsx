import ProjectCard from "@/components/ProjectCard";

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
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
