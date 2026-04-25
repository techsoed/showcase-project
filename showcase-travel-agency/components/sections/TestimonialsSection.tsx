import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialItem } from "@/lib/site-config";

type TestimonialsSectionProps = {
  testimonials: TestimonialItem[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="border-b border-[var(--border-soft)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="Testimoni"
          title="Apa Kata Pelanggan Kami"
          description="Ulasan singkat dari pelanggan yang sudah menggunakan layanan travel kami."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delayMs={index * 70} yOffset={18}>
              <article className="flex h-full flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-base leading-relaxed text-zinc-700">&ldquo;{item.comment}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full bg-zinc-100 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-base font-bold text-zinc-900">{item.name}</p>
                    <div className="mt-0.5 flex text-zinc-900">
                      {"★".repeat(item.rating)}
                      <span className="text-zinc-200">{"★".repeat(5 - item.rating)}</span>
                    </div>
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
