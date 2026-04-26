"use client";

import { useEffect, useState } from "react";
import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";

type Props = {
  config: WhiteLabelConfig;
  whatsappHref: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export default function CapsuleNavbar({
  config,
  whatsappHref,
  locale,
  onLocaleChange,
}: Props) {
  const navItems =
    locale === "id"
      ? [
          { label: "Home", href: "#home" },
          { label: "Katalog", href: "#katalog" },
          { label: "Keunggulan", href: "#keunggulan" },
          { label: "Testimoni", href: "#testimoni" },
          { label: "Kontak", href: "#kontak" },
        ]
      : [
          { label: "Home", href: "#home" },
          { label: "Catalog", href: "#katalog" },
          { label: "Advantages", href: "#keunggulan" },
          { label: "Reviews", href: "#testimoni" },
          { label: "Contact", href: "#kontak" },
        ];

  const [activeHref, setActiveHref] = useState<string>("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const bottomHref = navItems[navItems.length - 1]?.href ?? "#kontak";

    const updateActiveSection = () => {
      const currentLine = window.scrollY + 140;
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      setIsScrolled(window.scrollY > 10);

      if (reachedBottom) {
        setActiveHref(bottomHref);
        return;
      }

      let current = "#home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.offsetTop <= currentLine) {
          current = `#${id}`;
        }
      }

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-2 z-50 px-4 pt-2 sm:px-6 lg:px-8 animate-[fadeIn_500ms_ease-out]">
      <div
        className={`mx-auto relative flex w-full max-w-6xl items-center gap-3 rounded-full border border-black/15 px-3 py-2 backdrop-blur transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
            : "bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        }`}
      >
        <a
          href="#home"
          className="pressable shrink-0 rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-black"
        >
          {config.brand.name}
        </a>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`pressable shrink-0 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black/70 hover:bg-black hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex md:hidden items-center ml-auto mr-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="pressable p-2 text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex shrink-0 items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={() => onLocaleChange(locale === "id" ? "en" : "id")}
            className="pressable rounded-full border border-black/20 px-3 py-2 text-xs font-semibold text-black"
            aria-label={locale === "id" ? "Switch language to English" : "Ubah bahasa ke Indonesia"}
          >
            {locale === "id" ? "ID" : "EN"}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="pressable shrink-0 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            {locale === "id" ? "Chat" : "Chat"}
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-black/15 bg-white p-4 shadow-xl md:hidden animate-[fadeIn_200ms_ease-out]">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive ? "bg-black text-white" : "bg-black/5 text-black hover:bg-black/10"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 flex gap-2 border-t border-black/10 pt-4">
            <button
              type="button"
              onClick={() => onLocaleChange(locale === "id" ? "en" : "id")}
              className="pressable flex-1 rounded-xl border border-black/20 py-3 text-sm font-semibold text-black"
            >
              {locale === "id" ? "Switch to English" : "Ubah ke Indonesia"}
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="pressable flex-1 rounded-xl bg-black py-3 text-center text-sm font-semibold text-white"
            >
              {locale === "id" ? "Chat WA" : "Chat WA"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
