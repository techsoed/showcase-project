import Image from "next/image";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FleetItem } from "@/lib/site-config";

type FleetSectionProps = {
  fleet: FleetItem[];
  lang?: "id" | "en";
};

export function FleetSection({ fleet, lang = "id" }: FleetSectionProps) {
  return (
    <section id="fleet" className="border-b border-[var(--border-soft)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow={lang === "en" ? "Fleet" : "Armada"}
          title={lang === "en" ? "Choose Fleet For Your Needs" : "Pilih Armada Sesuai Kebutuhan Perjalanan"}
          description={lang === "en" ? "Every vehicle is regularly maintained for your safety and comfort." : "Setiap kendaraan dirawat rutin agar perjalanan tetap aman dan nyaman."}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fleet.map((vehicle, index) => (
            <ScrollReveal key={vehicle.name} delayMs={index * 70} yOffset={20}>
              <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_16px_30px_-24px_rgba(0,0,0,0.3)]">
                <div className="relative h-44 border-b border-zinc-200 bg-zinc-100">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain p-4 mix-blend-multiply"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-700">
                    {vehicle.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--text-main)]">{vehicle.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 border-l-2 border-zinc-200 pl-3 italic">
                    {vehicle.routeDescription}
                  </p>
                  <p className="mt-4 text-base text-zinc-700">{lang === "en" ? "Capacity" : "Kapasitas"}: {vehicle.capacity}</p>
                  <p className="mt-1 text-base font-semibold text-zinc-900">{vehicle.startingPrice}</p>
                  <button
                    type="button"
                    className="mt-5 inline-flex w-full h-11 items-center justify-center rounded-xl bg-[var(--text-main)] px-5 text-base font-semibold text-[var(--bg-main)] transition hover:opacity-90"
                  >
                    {lang === "en" ? "Select Fleet" : "Pilih Armada"}
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
