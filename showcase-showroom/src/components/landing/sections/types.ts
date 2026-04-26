import { CarItem, Transmission, WhiteLabelConfig } from "@/types/showroom";

export type Locale = "id" | "en";

export type PriceFilter = "all" | "lt200" | "200to300" | "gt300";
export type YearFilter = "all" | "2024" | "2023" | "2022" | "2021" | "2020";
export type TransmissionFilter = "all" | Transmission;

export interface LandingSectionsCommonProps {
  config: WhiteLabelConfig;
  whatsappHref: string;
  locale: Locale;
}

export interface CatalogSectionProps extends LandingSectionsCommonProps {
  filteredCars: CarItem[];
  availableBrands: string[];
  priceFilter: PriceFilter;
  yearFilter: YearFilter;
  transmissionFilter: TransmissionFilter;
  brandFilter: string;
  setPriceFilter: (value: PriceFilter) => void;
  setYearFilter: (value: YearFilter) => void;
  setTransmissionFilter: (value: TransmissionFilter) => void;
  setBrandFilter: (value: string) => void;
}

export function inPriceRange(price: number, filter: PriceFilter) {
  if (filter === "lt200") return price < 200000000;
  if (filter === "200to300") return price >= 200000000 && price <= 300000000;
  if (filter === "gt300") return price > 300000000;

  return true;
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatMileage(value: number) {
  return new Intl.NumberFormat("id-ID").format(value);
}

export function getStars(rating: number) {
  return "★".repeat(rating).padEnd(5, "☆");
}
