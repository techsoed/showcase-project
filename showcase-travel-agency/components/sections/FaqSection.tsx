import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaqItem } from "@/lib/site-config";

type FaqSectionProps = {
  faqs: FaqItem[];
  lang?: "id" | "en";
};

export function FaqSection({ faqs, lang = "id" }: FaqSectionProps) {
  return (
    <section id="faq" className="border-b border-[var(--border-soft)] bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="FAQ"
          title={lang === "en" ? "Frequently Asked Questions" : "Pertanyaan yang Sering Diajukan"}
          description={lang === "en" ? "Quick answers to the most common questions from our customers." : "Jawaban cepat untuk pertanyaan yang paling sering ditanyakan oleh pelanggan kami."}
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delayMs={index * 50} yOffset={10}>
              <details className="group rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-soft)] [&_summary::-webkit-details-marker]:hidden transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-base font-semibold text-[var(--text-main)] outline-none sm:text-lg">
                  {faq.question}
                  <span className="shrink-0 rounded-full border border-[var(--border-soft)] bg-white p-1 text-[var(--accent-main)] shadow-sm transition duration-300 group-open:-rotate-180">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-base leading-relaxed text-zinc-700">
                  <div className="border-t border-[var(--border-soft)] pt-4">
                    {faq.answer}
                  </div>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
