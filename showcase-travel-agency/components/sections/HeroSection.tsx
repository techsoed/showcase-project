"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { BrandConfig, HeroConfig } from "@/lib/site-config";

type HeroSectionProps = {
  brand: BrandConfig;
  hero: HeroConfig;
};

export function HeroSection({ brand, hero }: HeroSectionProps) {
  const waUrl = `https://wa.me/${brand.whatsappNumber}`;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 3);
    }, 3000); // Ganti mobil tiap 3 detik
    return () => clearInterval(interval);
  }, []);

  const positions = [
    "z-30 opacity-100 translate-y-[20%] sm:translate-y-[15%] translate-x-[5%] scale-100", // 0: Front
    "z-20 opacity-80 -translate-y-[5%] sm:-translate-y-[10%] -translate-x-[20%] scale-75", // 1: Back Left
    "z-10 opacity-60 -translate-y-[25%] sm:-translate-y-[30%] translate-x-[20%] scale-[0.65]", // 2: Back Right
  ];

  const getPositionClass = (carIndex: number) => {
    const positionIndex = (carIndex - offset + 3) % 3;
    return positions[positionIndex];
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border-soft)] bg-[var(--bg-main)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e5e7eb_0%,transparent_45%),radial-gradient(circle_at_bottom_left,#f3f4f6_0%,transparent_38%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
              {hero.heading}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-700 sm:text-lg">
              {hero.subheading}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#routes"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--accent-main)] px-6 text-base font-semibold text-white transition hover:opacity-90"
              >
                {hero.primaryCta}
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--accent-main)] bg-white px-6 text-base font-semibold text-[var(--accent-main)] transition hover:bg-zinc-100"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative w-full order-1 lg:order-2">
            <div className="absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(circle,_rgba(209,213,219,0.5)_0%,_rgba(255,255,255,0)_70%)]" />
            <div className="relative mx-auto w-full max-w-xl h-[280px] sm:h-[350px] lg:h-[400px] mt-2 lg:mt-0">
              
              {/* Hiace (Index 2) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${getPositionClass(2)}`}>
                <Image
                  src="/images/hiace.png"
                  alt="Armada Hiace"
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-[28%] object-contain mix-blend-multiply"
                />
              </div>
              
              {/* Innova (Index 1) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${getPositionClass(1)}`}>
                <Image
                  src="/images/innova.png"
                  alt="Armada Innova"
                  width={800}
                  height={600}
                  className="h-auto w-full max-w-[28%] object-contain mix-blend-multiply"
                />
              </div>

              {/* Avanza (Index 0) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${getPositionClass(0)}`}>
                <Image
                  src="/images/avanza.png"
                  alt="Armada Avanza"
                  width={1200}
                  height={900}
                  className="h-auto w-full max-w-[28%] object-contain mix-blend-multiply drop-shadow-xl"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
