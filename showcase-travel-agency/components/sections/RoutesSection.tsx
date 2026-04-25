"use client";

import { useMemo, useState } from "react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RouteItem } from "@/lib/site-config";

type RoutesSectionProps = {
  routes: RouteItem[];
};

export function RoutesSection({ routes }: RoutesSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredRoutes = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    if (!keyword) {
      return routes;
    }

    return routes.filter(
      (route) =>
        route.from.toLowerCase().includes(keyword) || route.to.toLowerCase().includes(keyword),
    );
  }, [routes, searchTerm]);

  const displayedRoutes = showAll ? filteredRoutes : filteredRoutes.slice(0, 6);

  return (
    <section id="routes" className="border-b border-[var(--border-soft)] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionTitle
          eyebrow="Rute Populer"
          title="Pilihan Jalur Antar Kota Favorit"
          description="Rute paling sering dipilih pelanggan untuk perjalanan harian dan bisnis."
        />

        <div className="mx-auto mb-6 max-w-xl sm:mb-8">
          <label className="sr-only" htmlFor="route-search">
            Cari rute
          </label>
          <input
            id="route-search"
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setShowAll(false);
            }}
            placeholder="Cari kota asal atau tujuan..."
            className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none transition focus:border-zinc-700"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {displayedRoutes.map((route, index) => (
            <ScrollReveal key={`${route.from}-${route.to}`} delayMs={index * 45} yOffset={18}>
              <article className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="text-base text-zinc-600">Asal</p>
                <p className="text-xl font-semibold text-[var(--text-main)]">{route.from}</p>
                <p className="my-2 text-base text-zinc-400">Menuju</p>
                <p className="text-xl font-semibold text-[var(--text-main)]">{route.to}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {displayedRoutes.length === 0 ? (
          <p className="mt-6 text-center text-base text-zinc-600">
            Rute tidak ditemukan. Coba kata kunci kota lain.
          </p>
        ) : null}

        <div className="mt-7 flex justify-center">
          {filteredRoutes.length > 6 ? (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Rute"}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
