import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CarItem } from "@/types/showroom";
import {
  CatalogSectionProps,
  PriceFilter,
  TransmissionFilter,
  YearFilter,
} from "./types";
import { formatMileage, formatPrice } from "./types";
import RevealOnScroll from "./RevealOnScroll";

export default function CatalogSection({
  config,
  filteredCars,
  availableBrands,
  priceFilter,
  yearFilter,
  transmissionFilter,
  brandFilter,
  setPriceFilter,
  setYearFilter,
  setTransmissionFilter,
  setBrandFilter,
  whatsappHref,
  locale,
}: CatalogSectionProps) {
  const [selectedCar, setSelectedCar] = useState<CarItem | null>(null);
  const [isClosingModal, setIsClosingModal] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  const openModal = (car: CarItem) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsClosingModal(false);
    setSelectedCar(car);
  };

  const closeModal = () => {
    setIsClosingModal(true);

    closeTimeoutRef.current = window.setTimeout(() => {
      setSelectedCar(null);
      setIsClosingModal(false);
      closeTimeoutRef.current = null;
    }, 180);
  };

  useEffect(() => {
    if (!selectedCar) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCar]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="katalog" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {locale === "id" ? config.mainContent.sectionTitles.catalog : "Selected Car Catalog"}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delayMs={50}>
          <div className="mt-6 rounded-2xl border border-black/10 bg-black/5 p-4 sm:p-5">
            <h3 className="text-xl font-semibold">
              {locale === "id" ? config.mainContent.sectionTitles.filter : "Quick Filter"}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="text-base font-medium">
                {locale === "id" ? "Harga" : "Price"}
                <select
                  value={priceFilter}
                  onChange={(event) => setPriceFilter(event.target.value as PriceFilter)}
                  className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-base"
                >
                  <option value="all">{locale === "id" ? "Semua Harga" : "All Prices"}</option>
                  <option value="lt200">&lt; 200 juta</option>
                  <option value="200to300">200 - 300 juta</option>
                  <option value="gt300">&gt; 300 juta</option>
                </select>
              </label>

              <label className="text-base font-medium">
                {locale === "id" ? "Tahun" : "Year"}
                <select
                  value={yearFilter}
                  onChange={(event) => setYearFilter(event.target.value as YearFilter)}
                  className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-base"
                >
                  <option value="all">{locale === "id" ? "Semua Tahun" : "All Years"}</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </label>

              <label className="text-base font-medium">
                {locale === "id" ? "Transmisi" : "Transmission"}
                <select
                  value={transmissionFilter}
                  onChange={(event) =>
                    setTransmissionFilter(event.target.value as TransmissionFilter)
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-base"
                >
                  <option value="all">
                    {locale === "id" ? "Semua Transmisi" : "All Transmissions"}
                  </option>
                  <option value="Manual">Manual</option>
                  <option value="Matic">Matic</option>
                </select>
              </label>

              <label className="text-base font-medium">
                Brand
                <select
                  value={brandFilter}
                  onChange={(event) => setBrandFilter(event.target.value)}
                  className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-white px-3 text-base"
                >
                  <option value="all">{locale === "id" ? "Semua Brand" : "All Brands"}</option>
                  {availableBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCars.map((car, index) => (
            <RevealOnScroll key={car.id} delayMs={(index % 6) * 100} className="h-full">
              <article
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
              >
              <div className="relative h-64 w-full bg-black/5 sm:h-72">
                <Image
                  src={car.image}
                  alt={car.imageAlt}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {car.badge ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--wl-black)] px-3 py-1 text-sm font-semibold text-white">
                    {car.badge}
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-7">{car.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      car.status === "Ready" ? "bg-black text-white" : "bg-black/10 text-black/75"
                    }`}
                  >
                      {locale === "id" ? car.status : car.status === "Ready" ? "Ready" : "Sold"}
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-3 text-base">
                  <div>
                    <dt className="text-black/70">{locale === "id" ? "Tahun" : "Year"}</dt>
                    <dd className="font-medium">{car.year}</dd>
                  </div>
                  <div>
                    <dt className="text-black/70">KM</dt>
                    <dd className="font-medium">{formatMileage(car.mileageKm)} km</dd>
                  </div>
                  <div>
                    <dt className="text-black/70">{locale === "id" ? "Transmisi" : "Transmission"}</dt>
                    <dd className="font-medium">{car.transmission}</dd>
                  </div>
                  <div>
                    <dt className="text-black/70">Brand</dt>
                    <dd className="font-medium">{car.brand}</dd>
                  </div>
                </dl>

                <p className="mt-5 text-2xl font-bold">{formatPrice(car.price)}</p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-[var(--wl-black)] px-4 text-base font-semibold text-white transition hover:opacity-90"
                  >
                    {locale === "id" ? "Chat" : "Chat"}
                  </a>
                  <button
                    type="button"
                    onClick={() => openModal(car)}
                    className="pressable inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-black/20 bg-white px-4 text-base font-semibold"
                  >
                    {locale === "id" ? "Detail" : "Details"}
                  </button>
                </div>
              </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {filteredCars.length === 0 ? (
          <RevealOnScroll>
            <p className="mt-6 rounded-xl border border-black/10 bg-white p-5 text-base">
              {locale === "id"
                ? "Tidak ada mobil yang cocok dengan filter saat ini."
                : "No cars match the selected filters."}
            </p>
          </RevealOnScroll>
        ) : null}
      </div>

      {selectedCar ? (
        <div
          className={`fixed inset-0 z-[80] flex items-end justify-center p-3 transition-opacity duration-200 sm:items-center sm:p-6 ${
            isClosingModal ? "bg-black/0 opacity-0" : "bg-black/35 opacity-100"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={`${locale === "id" ? "Detail" : "Details"} ${selectedCar.name}`}
          onClick={closeModal}
        >
          <article
            className={`w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl ${
              isClosingModal
                ? "animate-[modalOut_180ms_ease-in_forwards]"
                : "animate-[modalIn_220ms_cubic-bezier(0.22,1,0.36,1)]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-64 w-full bg-black/5 sm:h-72">
              <Image
                src={selectedCar.image}
                alt={selectedCar.imageAlt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold leading-tight">{selectedCar.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    selectedCar.status === "Ready"
                      ? "bg-black text-white"
                      : "bg-black/10 text-black/75"
                  }`}
                >
                    {locale === "id"
                      ? selectedCar.status
                      : selectedCar.status === "Ready"
                        ? "Ready"
                        : "Sold"}
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3 text-base">
                <div>
                  <dt className="text-black/70">{locale === "id" ? "Tahun" : "Year"}</dt>
                  <dd className="font-medium">{selectedCar.year}</dd>
                </div>
                <div>
                  <dt className="text-black/70">KM</dt>
                  <dd className="font-medium">{formatMileage(selectedCar.mileageKm)} km</dd>
                </div>
                <div>
                  <dt className="text-black/70">{locale === "id" ? "Transmisi" : "Transmission"}</dt>
                  <dd className="font-medium">{selectedCar.transmission}</dd>
                </div>
                <div>
                  <dt className="text-black/70">Brand</dt>
                  <dd className="font-medium">{selectedCar.brand}</dd>
                </div>
              </dl>

              <div className="mt-5 flex items-end justify-between">
                <p className="text-3xl font-bold">{formatPrice(selectedCar.price)}</p>
                <div className="text-right">
                  <p className="text-sm text-black/60 font-medium">
                    {locale === "id" ? "Estimasi Cicilan" : "Est. Installment"}
                  </p>
                  <p className="text-lg font-bold text-black/80">
                    {formatPrice(selectedCar.price * 0.025)}/bln
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={`${whatsappHref}?text=${encodeURIComponent(`Halo, saya tertarik dengan ${selectedCar.name}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-black px-4 text-base font-semibold text-white"
                >
                  {locale === "id" ? "Chat Sekarang" : "Chat Now"}
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="pressable inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-black/20 bg-white px-4 text-base font-semibold"
                >
                  {locale === "id" ? "Tutup" : "Close"}
                </button>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
