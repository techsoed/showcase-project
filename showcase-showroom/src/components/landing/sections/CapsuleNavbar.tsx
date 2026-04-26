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
    <header className="sticky top-2 z-50 px-2 pt-2 sm:px-6 lg:px-8 animate-[fadeIn_500ms_ease-out]">
      <div
        className={`mx-auto relative flex w-full max-w-6xl items-center gap-2 rounded-full border border-black/15 px-2 py-1.5 backdrop-blur transition-all duration-500 sm:gap-3 sm:px-3 sm:py-2 ${
          isScrolled
            ? "bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)]"
            : "bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        }`}
      >
        <a
          href="#home"
          className="pressable shrink-0 rounded-full border border-black/15 px-2.5 py-1.5 text-xs font-semibold text-black sm:px-4 sm:py-2 sm:text-sm"
        >
          {config.brand.name}
        </a>

        {/* Desktop nav — centered absolutely */}
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

        {/* Mobile nav — scrollable, hide scrollbar */}
        <nav
          className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto md:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`pressable shrink-0 rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 ml-auto sm:gap-2">
          <button
            type="button"
            onClick={() => onLocaleChange(locale === "id" ? "en" : "id")}
            className="pressable rounded-full border border-black/20 px-2 py-1.5 text-xs font-semibold text-black sm:px-3 sm:py-2"
            aria-label={locale === "id" ? "Switch language to English" : "Ubah bahasa ke Indonesia"}
          >
            {locale === "id" ? "ID" : "EN"}
          </button>
          {/* WA icon-only button */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat WhatsApp"
            className="pressable shrink-0 inline-flex items-center justify-center rounded-full bg-black transition-transform duration-300 hover:scale-[1.06] h-8 w-8 sm:h-auto sm:w-auto sm:px-4 sm:py-2 sm:gap-1.5"
          >
            {/* WhatsApp SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-white sm:h-3.5 sm:w-3.5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span className="hidden text-sm font-semibold text-white sm:inline">
              Chat
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
