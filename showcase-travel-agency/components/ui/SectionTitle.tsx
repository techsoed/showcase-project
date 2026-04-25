type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-8 w-full max-w-3xl text-center sm:mb-10">
      <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-zinc-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-main)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}
