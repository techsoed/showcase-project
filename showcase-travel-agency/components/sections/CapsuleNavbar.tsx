"use client";

import { useEffect, useState, useRef } from "react";

import { BrandConfig } from "@/lib/site-config";

type CapsuleNavbarProps = {
  brand: BrandConfig;
  lang?: "id" | "en";
  setLang?: (lang: "id" | "en") => void;
};

const navItemsId = [
  { label: "Beranda", href: "#hero" },
  { label: "Rute", href: "#routes" },
  { label: "Armada", href: "#fleet" },
  { label: "Testimoni", href: "#testimonials" },
];

const navItemsEn = [
  { label: "Home", href: "#hero" },
  { label: "Routes", href: "#routes" },
  { label: "Fleet", href: "#fleet" },
  { label: "Reviews", href: "#testimonials" },
];

export function CapsuleNavbar({ brand, lang = "id", setLang }: CapsuleNavbarProps) {
  const waUrl = `https://wa.me/${brand.whatsappNumber}`;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickScrolling = useRef(false);

  const activeNavItems = lang === "en" ? navItemsEn : navItemsId;

  const handleCloseMenu = () => setIsMenuOpen(false);

  const handleNavClick = (href: string) => {
    isClickScrolling.current = true;
    setActiveHref(href);
    
    // Matikan observer sementara selama proses scroll (sekitar 1 detik)
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = activeNavItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        visibleEntries.sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }

          return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
        });

        setActiveHref(`#${visibleEntries[0].target.id}`);
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.45, 0.6],
        rootMargin: "-22% 0px -58% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [activeNavItems]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full">
        <nav
          className={`mx-auto flex w-full items-center justify-between gap-3 rounded-full border border-[var(--border-soft)] transition-all duration-500 ${
            isScrolled
              ? "max-w-4xl bg-white/75 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-6 sm:py-2.5"
              : "max-w-6xl bg-white/95 px-4 py-3 shadow-[0_16px_40px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-6"
          }`}
        >
          <a href="#hero" className="shrink-0 text-base font-semibold text-[var(--text-main)] sm:text-lg">
            {brand.name}
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {activeNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`rounded-full px-3 py-1.5 text-base font-medium transition ${
                  activeHref === item.href
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {setLang && (
              <div className="hidden sm:flex items-center gap-0.5 rounded-full border border-zinc-200 bg-white p-0.5 shadow-sm">
                <button
                  onClick={() => setLang("id")}
                  className={`h-9 w-9 rounded-full text-xs font-bold transition-all ${
                    lang === "id" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:bg-zinc-100"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`h-9 w-9 rounded-full text-xs font-bold transition-all ${
                    lang === "en" ? "bg-zinc-900 text-white" : "text-zinc-500 hover:bg-zinc-100"
                  }`}
                >
                  EN
                </button>
              </div>
            )}

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-11 items-center justify-center rounded-full bg-[var(--accent-main)] px-5 text-base font-semibold text-white transition hover:opacity-90 md:inline-flex"
            >
              {lang === "en" ? "Book Now" : "Pesan"}
            </a>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label="Buka menu navigasi"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-900 transition hover:bg-zinc-100 md:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {isMenuOpen ? (
          <div className="mx-auto mt-3 max-w-4xl rounded-3xl border border-[var(--border-soft)] bg-white p-4 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.45)] md:hidden">
            <div className="grid gap-2">
              {activeNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    handleCloseMenu();
                  }}
                  className={`inline-flex h-11 items-center rounded-xl px-3 text-base font-medium transition ${
                    activeHref === item.href
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-800 hover:bg-zinc-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              onClick={handleCloseMenu}
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[var(--accent-main)] px-5 text-base font-semibold text-white transition hover:opacity-90"
            >
              {lang === "en" ? "Book Now" : "Pesan Sekarang"}
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
