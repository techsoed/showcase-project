export type Transmission = "Manual" | "Matic";
export type CarStatus = "Ready" | "Sold";

export interface CarItem {
  id: string;
  name: string;
  brand: string;
  year: number;
  mileageKm: number;
  transmission: Transmission;
  price: number;
  status: CarStatus;
  badge?: "Best Deal" | "Low KM" | "Favorit";
  image: string;
  imageAlt: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socialLinks: Array<{ label: string; href: string }>;
}

export interface SeoConfig {
  siteUrl: string;
  ogImage: string;
  twitterHandle?: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryAction: string;
  secondaryAction: string;
  heroImage: string;
  heroImageAlt: string;
}

export interface TrustStat {
  label: string;
  value: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  rating: number;
  image?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface PurchaseStep {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MainContent {
  sectionTitles: {
    trust: string;
    catalog: string;
    filter: string;
    benefits: string;
    purchaseSteps: string;
    testimonials: string;
    finalCta: string;
  };
  trustStats: TrustStat[];
  trustClaims: string[];
  benefits: BenefitItem[];
  purchaseSteps: PurchaseStep[];
  testimonials: Testimonial[];
  finalCtaDescription: string;
  faq: FaqItem[];
  leasingPartners: string[];
}

export interface WhiteLabelTheme {
  background: string;
  silver: string;
  black: string;
  mutedText: string;
}

export interface WhiteLabelConfig {
  brand: BrandInfo;
  theme: WhiteLabelTheme;
  hero: HeroContent;
  contact: ContactInfo;
  seo: SeoConfig;
  mainContent: MainContent;
  cars: CarItem[];
}
