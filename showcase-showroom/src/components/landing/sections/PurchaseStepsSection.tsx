import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function PurchaseStepsSection({ config, locale }: Props) {
  const title = locale === "id" ? config.mainContent.sectionTitles.purchaseSteps : "How to Buy";
  const stepLabel = locale === "id" ? "Langkah" : "Step";

  const stepsList =
    locale === "id"
      ? config.mainContent.purchaseSteps
      : [
          { title: "Choose Car", description: "Browse the catalog and compare the most suitable units." },
          { title: "Contact Admin", description: "Discuss price details, credit simulation, and availability." },
          { title: "Survey / Test Drive", description: "Check unit condition directly with our team." },
          { title: "Deal & Payment", description: "Complete the administration, and the car is ready to go home." },
        ];

  return (
    <section id="pembelian" className="px-4 py-10 sm:px-6 lg:px-8">
      <div
        className="mx-auto w-full max-w-4xl rounded-3xl border border-black/10 bg-black/5 p-6 sm:p-8"
      >
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        </RevealOnScroll>
        <div className="mt-6 space-y-4">
          {stepsList.map((step, index) => (
            <RevealOnScroll key={step.title} delayMs={index * 100}>
              <article className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-black/70">
                {stepLabel} {index + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-base text-black/70">{step.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
