import { Car, FileCheck2, HandCoins, ShieldCheck, Wrench } from "lucide-react";
import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

const benefitIcons = [ShieldCheck, Wrench, HandCoins, FileCheck2, Car];

export default function BenefitsSection({ config, locale }: Props) {
  const title =
    locale === "id" ? config.mainContent.sectionTitles.benefits : "Showroom Advantages";

  const benefitsList =
    locale === "id"
      ? config.mainContent.benefits
      : [
          { title: "Multi-Point Inspection", description: "Every unit undergoes detailed checking before being marketed." },
          { title: "Engine Warranty", description: "Engine protection to provide peace of mind after purchase." },
          { title: "Credit Available", description: "Flexible tenor options with fast application process." },
          { title: "Complete Documents", description: "Legal vehicle documents are complete and verified." },
          { title: "Test Drive Available", description: "Try the unit directly before making a decision." },
        ];

  return (
    <section id="keunggulan" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        </RevealOnScroll>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefitsList.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];

            return (
              <RevealOnScroll key={benefit.title} delayMs={index * 100} className="h-full">
                <article
                  className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-[var(--wl-black)]">
                  <Icon size={20} strokeWidth={2.1} />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-base leading-7 text-black/70">{benefit.description}</p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
