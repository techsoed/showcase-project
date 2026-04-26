import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function LocationSection({ config, locale }: Props) {
  const title = locale === "id" ? "Lokasi Kami" : "Our Location";

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 border-t border-black/10">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">{title}</h2>
          <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-black/10 bg-black/5">
            <iframe
              src="https://maps.google.com/maps?q=Markas+Gacorian&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Showroom Location"
            />
          </div>
          <p className="mt-4 text-base text-black/70 font-medium">
            {config.contact.address}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
