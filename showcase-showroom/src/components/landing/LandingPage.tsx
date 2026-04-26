"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { WhiteLabelConfig } from "@/types/showroom";
import BenefitsSection from "./sections/BenefitsSection";
import CapsuleNavbar from "./sections/CapsuleNavbar";
import CatalogSection from "./sections/CatalogSection";
import FinalCtaSection from "./sections/FinalCtaSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import FaqSection from "./sections/FaqSection";
import LeasingPartnersSection from "./sections/LeasingPartnersSection";
import LocationSection from "./sections/LocationSection";
import PurchaseStepsSection from "./sections/PurchaseStepsSection";
import StickyWhatsappButton from "./sections/StickyWhatsappButton";
import TestimonialsSection from "./sections/TestimonialsSection";
import TrustSection from "./sections/TrustSection";
import {
  inPriceRange,
  Locale,
  PriceFilter,
  TransmissionFilter,
  YearFilter,
} from "./sections/types";

type Props = {
  config: WhiteLabelConfig;
};

export default function LandingPage({ config }: Props) {
  const [locale, setLocale] = useState<Locale>("id");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [yearFilter, setYearFilter] = useState<YearFilter>("all");
  const [transmissionFilter, setTransmissionFilter] =
    useState<TransmissionFilter>("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");

  const availableBrands = useMemo(
    () => Array.from(new Set(config.cars.map((car) => car.brand))),
    [config.cars],
  );

  const filteredCars = useMemo(() => {
    return config.cars.filter((car) => {
      if (!inPriceRange(car.price, priceFilter)) return false;
      if (yearFilter !== "all" && car.year !== Number(yearFilter)) return false;
      if (transmissionFilter !== "all" && car.transmission !== transmissionFilter) {
        return false;
      }
      if (brandFilter !== "all" && car.brand !== brandFilter) return false;

      return true;
    });
  }, [brandFilter, config.cars, priceFilter, transmissionFilter, yearFilter]);

  const whatsappHref = `https://wa.me/${config.contact.whatsapp}`;

  return (
    <main
      style={
        {
          "--wl-bg": config.theme.background,
          "--wl-silver": config.theme.silver,
          "--wl-black": config.theme.black,
          "--wl-muted": config.theme.mutedText,
        } as CSSProperties
      }
      className="bg-[var(--wl-bg)] text-[var(--wl-black)]"
    >
      <CapsuleNavbar
        config={config}
        whatsappHref={whatsappHref}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <HeroSection config={config} whatsappHref={whatsappHref} locale={locale} />
      <TrustSection config={config} locale={locale} />
      <CatalogSection
        config={config}
        filteredCars={filteredCars}
        availableBrands={availableBrands}
        priceFilter={priceFilter}
        yearFilter={yearFilter}
        transmissionFilter={transmissionFilter}
        brandFilter={brandFilter}
        setPriceFilter={setPriceFilter}
        setYearFilter={setYearFilter}
        setTransmissionFilter={setTransmissionFilter}
        setBrandFilter={setBrandFilter}
        whatsappHref={whatsappHref}
        locale={locale}
      />
      <BenefitsSection config={config} locale={locale} />
      <LeasingPartnersSection config={config} locale={locale} />
      <PurchaseStepsSection config={config} locale={locale} />
      <TestimonialsSection config={config} locale={locale} />
      <FaqSection config={config} locale={locale} />
      <FinalCtaSection config={config} whatsappHref={whatsappHref} locale={locale} />
      <LocationSection config={config} locale={locale} />
      <FooterSection config={config} locale={locale} />
      <StickyWhatsappButton whatsappHref={whatsappHref} />
    </main>
  );
}
