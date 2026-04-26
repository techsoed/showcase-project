import { CalendarIcon, DoorIcon, DriverIcon, PriceIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AdvantageItem } from "@/lib/site-config";

type AdvantagesSectionProps = {
  items: AdvantageItem[];
  lang?: "id" | "en";
};

const iconMap = {
  door: DoorIcon,
  driver: DriverIcon,
  calendar: CalendarIcon,
  price: PriceIcon,
};

export function AdvantagesSection({ items, lang = "id" }: AdvantagesSectionProps) {
  return (
    <section className="border-b border-[var(--border-soft)] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow={lang === "en" ? "Advantages" : "Keunggulan"}
          title={lang === "en" ? "Why Choose Our Service" : "Kenapa Memilih Layanan Kami"}
          description={lang === "en" ? "Focused on comfort, safety, and transparency for every journey." : "Fokus pada kenyamanan, keamanan, dan transparansi untuk setiap perjalanan."}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <ScrollReveal key={item.title} delayMs={index * 60} yOffset={20}>
                <article className="rounded-xl border border-zinc-200 bg-[var(--bg-soft)] p-5">
                  <Icon className="mb-4 h-7 w-7 text-zinc-700" />
                  <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-zinc-700">{item.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
