"use client";

import { useState } from "react";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { CapsuleNavbar } from "@/components/sections/CapsuleNavbar";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoutesSection } from "@/components/sections/RoutesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getActiveTheme, translations } from "@/lib/site-config";

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const siteConfig = translations[lang];
  const activeTheme = getActiveTheme(siteConfig.activeTheme);

  return (
    <div
      className="bg-[var(--bg-main)] text-[var(--text-main)]"
      style={
        {
          "--bg-main": activeTheme.background,
          "--bg-soft": activeTheme.softBackground,
          "--border-soft": activeTheme.border,
          "--text-main": activeTheme.text,
          "--accent-main": activeTheme.accent,
          "--accent-soft": activeTheme.accentSoft,
        } as React.CSSProperties
      }
    >
      <CapsuleNavbar brand={siteConfig.brand} lang={lang} setLang={setLang} />
      <ScrollReveal>
        <HeroSection brand={siteConfig.brand} hero={siteConfig.hero} />
      </ScrollReveal>
      <ScrollReveal delayMs={40}>
        <TrustSection stats={siteConfig.trustStats} />
      </ScrollReveal>
      <ScrollReveal delayMs={70}>
        <RoutesSection routes={siteConfig.popularRoutes} />
      </ScrollReveal>
      <ScrollReveal delayMs={90}>
        <FleetSection fleet={siteConfig.fleet} />
      </ScrollReveal>
      <ScrollReveal delayMs={110}>
        <AdvantagesSection items={siteConfig.advantages} />
      </ScrollReveal>
      <ScrollReveal delayMs={130}>
        <BookingStepsSection steps={siteConfig.bookingSteps} />
      </ScrollReveal>
      <FaqSection faqs={siteConfig.faqs} />
      <ScrollReveal delayMs={150}>
        <TestimonialsSection testimonials={siteConfig.testimonials} />
      </ScrollReveal>
      <ScrollReveal delayMs={170}>
        <FinalCtaSection cta={siteConfig.finalCta} brand={siteConfig.brand} />
      </ScrollReveal>
      <FooterSection brand={siteConfig.brand} />
      <FloatingWhatsApp brand={siteConfig.brand} />
    </div>
  );
}
