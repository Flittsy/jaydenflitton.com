import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl px-6 py-24${className ? ` ${className}` : ""}`}
    >
      {eyebrow || title ? (
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-label">
              {eyebrow}
            </p>
          ) : null}

          {title ? (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          ) : null}
        </div>
      ) : null}

      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      ) : null}

      {children}
    </section>
  );
}
