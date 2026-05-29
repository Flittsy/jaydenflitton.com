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
    <article className="border-b border-border py-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-maroon">
            {category}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="text-sm text-accent">{status}</p>
      </div>

      <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
        {description}
      </p>

      <p className="mt-3 text-sm text-muted-light">{tools.join(" · ")}</p>
    </article>
  );
}
