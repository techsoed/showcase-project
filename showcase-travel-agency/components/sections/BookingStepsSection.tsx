import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BookingStep } from "@/lib/site-config";

type BookingStepsSectionProps = {
  steps: BookingStep[];
  lang?: "id" | "en";
};

export function BookingStepsSection({ steps, lang = "id" }: BookingStepsSectionProps) {
  return (
    <section className="border-b border-[var(--border-soft)] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <SectionTitle
          eyebrow={lang === "en" ? "How to Book" : "Cara Pemesanan"}
          title={lang === "en" ? "Book Travel in 4 Steps" : "Pesan Travel Dalam 4 Langkah"}
          description={lang === "en" ? "Simple process so you can depart without confusion." : "Alur sederhana agar Anda bisa langsung berangkat tanpa kebingungan."}
        />

        <div className="space-y-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delayMs={index * 65} yOffset={18}>
              <article className="rounded-xl border border-zinc-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-base font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-zinc-700">{step.description}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
