import Section from "@/components/Section";

export default function Writing() {
  return (
    <Section id="writing" eyebrow="Ideas & Analysis" title="Writing">
      <div className="mt-10 border-t border-border">
        <div className="border-b border-border py-8">
          <p className="max-w-3xl text-base leading-7 text-muted">
            This section will contain essays, ideas, and analysis — long-form
            thinking on engineering, finance, technology, and the problems I
            find worth exploring.
          </p>
        </div>
      </div>
    </Section>
  );
}
