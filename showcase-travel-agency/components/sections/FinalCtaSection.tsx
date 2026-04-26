import { BrandConfig } from "@/lib/site-config";

type FinalCtaSectionProps = {
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  brand: BrandConfig;
  lang?: "id" | "en";
};

export function FinalCtaSection({ cta, brand, lang = "id" }: FinalCtaSectionProps) {
  const waUrl = `https://wa.me/${brand.whatsappNumber}`;

  return (
    <section className="border-b border-[var(--border-soft)] bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-main)] sm:text-4xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-700">{cta.description}</p>

        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-8 inline-flex h-13 min-w-64 items-center justify-center rounded-xl bg-[var(--accent-main)] px-7 text-base font-semibold text-white transition hover:opacity-90"
        >
          {cta.buttonLabel}
        </a>
      </div>
    </section>
  );
}
