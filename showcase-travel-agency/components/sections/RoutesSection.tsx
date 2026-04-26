"use client";

import { useMemo, useState } from "react";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ClockIcon } from "@/components/ui/Icons";
import { RouteItem } from "@/lib/site-config";

type RoutesSectionProps = {
  routes: RouteItem[];
  lang?: "id" | "en";
};

export function RoutesSection({ routes, lang = "id" }: RoutesSectionProps) {
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
          eyebrow={lang === "en" ? "Popular Routes" : "Rute Populer"}
          title={lang === "en" ? "Favorite Intercity Routes" : "Pilihan Jalur Antar Kota Favorit"}
          description={lang === "en" ? "The most frequently chosen routes by our customers." : "Rute paling sering dipilih pelanggan untuk perjalanan harian dan bisnis."}
        />

        <div className="mx-auto mb-6 max-w-xl sm:mb-8">
          <label className="sr-only" htmlFor="route-search">
            {lang === "en" ? "Search route" : "Cari rute"}
          </label>
          <input
            id="route-search"
            type="search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setShowAll(false);
            }}
            placeholder={lang === "en" ? "Search origin or destination city..." : "Cari kota asal atau tujuan..."}
            className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none transition focus:border-zinc-700"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedRoutes.map((route, index) => (
            <ScrollReveal key={`${route.from}-${route.to}`} delayMs={index * 45} yOffset={18}>
              <article className="rounded-xl border border-zinc-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">{lang === "en" ? "From" : "Asal"}</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-900">{route.from}</p>
                  </div>
                  <div className="flex-1 px-4">
                    <div className="flex w-full items-center">
                      <div className="h-[1px] w-full bg-zinc-200"></div>
                      <div className="mx-2 shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-bold text-zinc-500">
                        {lang === "en" ? "TO" : "KE"}
                      </div>
                      <div className="h-[1px] w-full bg-zinc-200"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-zinc-500">{lang === "en" ? "To" : "Tujuan"}</p>
                    <p className="mt-1 text-lg font-semibold text-zinc-900">{route.to}</p>
                  </div>
                </div>

                {route.schedules && route.schedules.length > 0 && (
                  <div className="mt-5 border-t border-zinc-100 pt-4">
                    <div className="mb-3 flex items-center gap-1.5">
                      <ClockIcon className="h-4 w-4 text-zinc-500" />
                      <p className="text-xs font-semibold text-zinc-600">
                        {lang === "en" ? "Departure Schedules" : "Jadwal Keberangkatan"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {route.schedules.map((time) => (
                        <span
                          key={time}
                          className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-800"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>

        {displayedRoutes.length === 0 ? (
          <p className="mt-6 text-center text-base text-zinc-600">
            {lang === "en" ? "No routes found. Try another city." : "Rute tidak ditemukan. Coba kata kunci kota lain."}
          </p>
        ) : null}

        <div className="mt-7 flex justify-center">
          {filteredRoutes.length > 6 ? (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              {showAll ? (lang === "en" ? "Show Less" : "Tampilkan Lebih Sedikit") : (lang === "en" ? "View All Routes" : "Lihat Semua Rute")}
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
