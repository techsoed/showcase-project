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

        <nav className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto px-1 md:hidden">
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

        <div className="flex shrink-0 items-center gap-2 ml-auto">
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
    </header>
  );
}
