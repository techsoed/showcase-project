import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function LeasingPartnersSection({ config, locale }: Props) {
  const title = locale === "id" ? "Partner Pembiayaan Kami" : "Our Financing Partners";

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 border-y border-black/10 bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <p className="text-center text-sm font-semibold text-black/50 uppercase tracking-widest mb-6">
            {title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-70">
            {config.mainContent.leasingPartners.map((partner) => (
              <span key={partner} className="text-lg sm:text-xl font-bold tracking-tight grayscale">
                {partner}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
