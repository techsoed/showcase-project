import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { whiteLabelConfig } from "@/config/whitelabel";

const title = `${whiteLabelConfig.brand.name} | ${whiteLabelConfig.hero.headline}`;
const description = whiteLabelConfig.hero.subheadline;

export const metadata: Metadata = {
  metadataBase: new URL(whiteLabelConfig.seo.siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: whiteLabelConfig.seo.siteUrl,
    title,
    description,
    siteName: whiteLabelConfig.brand.name,
    locale: "id_ID",
    images: [
      {
        url: whiteLabelConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: whiteLabelConfig.hero.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [whiteLabelConfig.seo.ogImage],
    creator: whiteLabelConfig.seo.twitterHandle,
  },
};

export default function Home() {
  const autoDealerSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: whiteLabelConfig.brand.name,
    description,
    url: whiteLabelConfig.seo.siteUrl,
    image: whiteLabelConfig.seo.ogImage,
    telephone: whiteLabelConfig.contact.phone,
    email: whiteLabelConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: whiteLabelConfig.contact.address,
      addressCountry: "ID",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      reviewCount: "500",
    },
    makesOffer: whiteLabelConfig.cars.map((car) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Car",
        name: car.name,
        vehicleModelDate: car.year,
      },
      availability:
        car.status === "Ready"
          ? "https://schema.org/InStock"
          : "https://schema.org/SoldOut",
      price: car.price,
      priceCurrency: "IDR",
      url: `${whiteLabelConfig.seo.siteUrl}/#katalog`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
      />
      <LandingPage config={whiteLabelConfig} />
    </>
  );
}
