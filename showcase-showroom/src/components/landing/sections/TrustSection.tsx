import {
  BadgeCheck,
  Car,
  CircleGauge,
  FileCheck2,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import { WhiteLabelConfig } from "@/types/showroom";
import { Locale } from "./types";
import RevealOnScroll from "./RevealOnScroll";
import CountUp from "./CountUp";

type Props = {
  config: WhiteLabelConfig;
  locale: Locale;
};

const trustIcons = [Car, Star, BadgeCheck, CircleGauge];
const claimIcons = [FileCheck2, Wrench, ShieldCheck];

export default function TrustSection({ config, locale }: Props) {
  const title =
    locale === "id" ? config.mainContent.sectionTitles.trust : "Trusted by Thousands of Customers";

  const stats =
    locale === "id"
      ? config.mainContent.trustStats
      : [
          { label: "Units Sold", value: "500+" },
          { label: "Customer Rating", value: "4.8/5" },
          { label: "Credit Approval", value: "95%" },
          { label: "Years Experience", value: "10+" },
        ];

  const claims =
    locale === "id"
      ? config.mainContent.trustClaims
      : ["100% Legal Documents", "Engine Warranty", "Comprehensive Inspection"];

  return (
    <section id="trust" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        </RevealOnScroll>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = trustIcons[index % trustIcons.length];

            return (
              <RevealOnScroll key={item.label} delayMs={index * 100} className="h-full">
                <article
                  className="flex h-full flex-col rounded-2xl border border-black/10 bg-black/5 p-5 shadow-sm"
                >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--wl-black)]">
                  <Icon size={20} strokeWidth={2.1} />
                </div>
                <CountUp value={item.value} className="text-3xl font-bold" />
                <p className="mt-1 text-base text-black/70">{item.label}</p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {claims.map((claim, index) => {
            const Icon = claimIcons[index % claimIcons.length];

            return (
              <RevealOnScroll key={claim} delayMs={index * 100}>
                <p
                  className="flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-medium"
                >
                  <Icon size={18} strokeWidth={2.2} /> {claim}
                </p>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
