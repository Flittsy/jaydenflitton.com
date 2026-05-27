type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  status: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  tools,
  status,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {category}
      </p>

      <h3 className="mt-3 text-xl font-semibold">{title}</h3>

      <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 space-y-4 border-t border-zinc-800 pt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Tools
          </p>
          <p className="mt-2 text-sm text-zinc-300">{tools.join(", ")}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Status
          </p>
          <p className="mt-2 text-sm font-medium text-zinc-300">{status}</p>
        </div>
      </div>
    </article>
  );
}
