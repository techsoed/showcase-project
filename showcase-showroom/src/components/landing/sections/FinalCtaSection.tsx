import { LandingSectionsCommonProps } from "./types";
import RevealOnScroll from "./RevealOnScroll";

export default function FinalCtaSection({ config, whatsappHref, locale }: LandingSectionsCommonProps) {
  const title =
    locale === "id" ? config.mainContent.sectionTitles.finalCta : "Find Your Dream Car Today";
  const description =
    locale === "id"
      ? config.mainContent.finalCtaDescription
      : "Talk to our team now. We are ready to help you find the best unit for your budget.";

  return (
    <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <RevealOnScroll
        delayMs={150}
        className="mx-auto w-full max-w-6xl rounded-3xl bg-[var(--wl-black)] p-7 text-white sm:p-10"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="pressable inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-base font-semibold text-[var(--wl-black)]"
          >
            {locale === "id" ? "Hubungi via WhatsApp" : "Contact via WhatsApp"}
          </a>
          <a
            href={`tel:${config.contact.phone.replace(/\s+/g, "")}`}
            className="pressable inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 text-base font-semibold text-white"
          >
            {locale === "id" ? "Konsultasi Sekarang" : "Get Consultation"}
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
