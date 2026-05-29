type SectionHeaderProps = {
  label?: string;
  title: string;
};

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      {label ? (
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          {label}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
