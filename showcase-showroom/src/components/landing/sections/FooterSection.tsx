import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

export default function FooterSection({ config, locale }: Props) {
  return (
    <footer id="kontak" className="border-t border-black/10 bg-black/5 px-4 py-10 sm:px-6 lg:px-8">
      <RevealOnScroll
        delayMs={170}
        className="mx-auto grid w-full max-w-6xl gap-6 text-base sm:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <p className="text-lg font-semibold">{config.brand.name}</p>
          <p className="mt-2 text-black/70">{config.brand.tagline}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === "id" ? "Alamat" : "Address"}</p>
          <p className="mt-2 text-black/70">{config.contact.address}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === "id" ? "Kontak" : "Contact"}</p>
          <p className="mt-2 text-black/70">{config.contact.phone}</p>
          <p className="text-black/70">{config.contact.email}</p>
        </div>
        <div>
          <p className="font-semibold">{locale === "id" ? "Sosial Media" : "Social Media"}</p>
          <div className="mt-2 flex flex-col gap-1">
            {config.contact.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-black/70 hover:text-[var(--wl-black)]"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
}
