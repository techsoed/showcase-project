"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { LandingSectionsCommonProps } from "./types";

export default function HeroSection({ config, whatsappHref, locale }: LandingSectionsCommonProps) {
  const heroCars = useMemo(
    () =>
      config.cars.map((car) => ({
        name: car.name,
        image: car.image,
        alt: car.imageAlt,
      })),
    [config.cars],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    if (heroCars.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroCars.length);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, [heroCars.length]);

  useEffect(() => {
    const desktopMotionQuery = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );

    const updateParallax = () => {
      if (!desktopMotionQuery.matches) {
        setParallaxOffset(0);
        return;
      }

      setParallaxOffset(Math.min(18, window.scrollY * 0.06));
    };

    const onQueryChange = () => updateParallax();

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    desktopMotionQuery.addEventListener("change", onQueryChange);

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      desktopMotionQuery.removeEventListener("change", onQueryChange);
    };
  }, []);

  const activeCar = heroCars[activeIndex] ?? {
    name: config.hero.headline,
    image: config.hero.heroImage,
    alt: config.hero.heroImageAlt,
  };

  const heroCopy =
    locale === "id"
      ? {
          headline: config.hero.headline,
          subheadline: config.hero.subheadline,
          primaryAction: config.hero.primaryAction,
          secondaryAction: config.hero.secondaryAction,
        }
      : {
          headline: "Quality & Trusted Car Showroom",
          subheadline:
            "Curated units, competitive prices, and a transparent process to help you get the right car without hassle.",
          primaryAction: "View Cars",
          secondaryAction: "Contact Us",
        };

  return (
    <section id="home" className="relative overflow-hidden bg-white px-4 pb-14 pt-2 sm:px-6 lg:px-8 lg:pb-20 lg:pt-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-8 py-0 md:py-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl animate-[fadeIn_700ms_ease-out]">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {heroCopy.headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-black/70 sm:text-lg">
            {heroCopy.subheadline}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#katalog"
              className="pressable inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--wl-black)] px-6 text-base font-semibold text-white transition hover:opacity-90"
            >
              {heroCopy.primaryAction}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="pressable inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-white px-6 text-base font-semibold text-[var(--wl-black)] transition hover:bg-black/5"
            >
              {heroCopy.secondaryAction}
            </a>
          </div>
        </div>

        <div
          className="w-full lg:max-w-xl animate-[slideUp_700ms_ease-out]"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="relative h-[260px] w-full sm:h-[340px] lg:h-[410px] animate-[floatGentle_8s_ease-in-out_infinite]">
            {heroCars.map((car, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={car.image}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-2 scale-[0.985] opacity-0"
                  }`}
                >
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    priority={index === 0}
                    className="object-contain object-center drop-shadow-[0_26px_34px_rgba(0,0,0,0.2)]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex flex-col items-center gap-1">
            <p className="rounded-full border border-black/20 bg-white/90 px-3 py-1 text-xs font-semibold text-black sm:text-sm">
              {activeCar.name}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              {heroCars.map((car, index) => (
                <button
                  key={car.image}
                  type="button"
                  aria-label={`Tampilkan ${car.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`pressable h-1.5 sm:h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-4 sm:w-5 bg-black" : "w-1.5 sm:w-2 bg-black/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
