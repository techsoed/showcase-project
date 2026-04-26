import { BrandConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "@/components/ui/Icons";

type FooterSectionProps = {
  brand: BrandConfig;
  lang?: "id" | "en";
};

export function FooterSection({ brand, lang = "id" }: FooterSectionProps) {
  return (
    <footer className="bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold text-zinc-900">{brand.name}</p>
            <p className="mt-3 text-base leading-7 text-zinc-700">{brand.description}</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-zinc-900">{lang === "en" ? "Contact" : "Kontak"}</p>
            <p className="mt-3 text-base text-zinc-700">{lang === "en" ? "Phone" : "Telp"}: {brand.phone}</p>
            <p className="mt-2 text-base text-zinc-700">Email: {brand.email}</p>
            <p className="mt-2 text-base text-zinc-700">{lang === "en" ? "Address" : "Alamat"}: {brand.address}</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-zinc-900">{lang === "en" ? "Social Media" : "Sosial Media"}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {brand.socials.map((social) => {
                let Icon = FacebookIcon;
                if (social.label.toLowerCase() === "instagram") Icon = InstagramIcon;
                if (social.label.toLowerCase() === "tiktok") Icon = TiktokIcon;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 bg-white text-black transition hover:bg-zinc-100"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-zinc-300 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="text-sm font-semibold text-zinc-900">{lang === "en" ? "Payment Methods" : "Metode Pembayaran"}</p>
            <div className="flex gap-2">
              <span className="inline-flex h-8 items-center justify-center rounded border border-zinc-300 bg-white px-3 text-xs font-bold text-zinc-800">BCA</span>
              <span className="inline-flex h-8 items-center justify-center rounded border border-zinc-300 bg-white px-3 text-xs font-bold text-zinc-800">MANDIRI</span>
              <span className="inline-flex h-8 items-center justify-center rounded border border-zinc-300 bg-white px-3 text-xs font-bold text-zinc-800">BNI</span>
              <span className="inline-flex h-8 items-center justify-center rounded border border-zinc-300 bg-white px-3 text-xs font-bold text-zinc-800">QRIS</span>
            </div>
          </div>
          <div className="text-sm text-zinc-600 text-center sm:text-right">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
