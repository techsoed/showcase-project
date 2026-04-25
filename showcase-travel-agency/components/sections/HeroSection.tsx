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
    "-bottom-8 right-[-10%] w-[85%] z-30 opacity-100", // 0: Front
    "top-1/4 left-0 w-3/5 z-20 opacity-80 -translate-x-4", // 1: Back Left
    "top-0 right-0 w-3/5 z-10 opacity-60 translate-x-4 -translate-y-4", // 2: Back Right
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
          <div>
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

          <div className="relative w-full">
            <div className="absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(circle,_rgba(209,213,219,0.5)_0%,_rgba(255,255,255,0)_70%)]" />
            <div className="relative mx-auto w-full max-w-xl h-[280px] sm:h-[350px] lg:h-[400px] mt-8 lg:mt-0">
              
              {/* Hiace (Index 2) */}
              <div className={`absolute transition-all duration-1000 ease-in-out ${getPositionClass(2)}`}>
                <Image
                  src="/images/hiace.png"
                  alt="Armada Hiace"
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain mix-blend-multiply"
                />
              </div>
              
              {/* Innova (Index 1) */}
              <div className={`absolute transition-all duration-1000 ease-in-out ${getPositionClass(1)}`}>
                <Image
                  src="/images/innova.png"
                  alt="Armada Innova"
                  width={800}
                  height={600}
                  className="h-auto w-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Avanza (Index 0) */}
              <div className={`absolute transition-all duration-1000 ease-in-out ${getPositionClass(0)}`}>
                <Image
                  src="/images/avanza.png"
                  alt="Armada Avanza"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-contain mix-blend-multiply"
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
