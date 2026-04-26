export type BrandConfig = {
  name: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  address: string;
  socials: Array<{ label: string; url: string }>;
};

export type HeroConfig = {
  heading: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ThemeConfig = {
  background: string;
  softBackground: string;
  border: string;
  text: string;
  accent: string;
  accentSoft: string;
};

export type TrustStat = {
  label: string;
  value: string;
  icon: "star" | "users" | "shield" | "clock";
};

export type RouteItem = {
  from: string;
  to: string;
  schedules: string[];
};

export type FleetItem = {
  name: string;
  capacity: string;
  startingPrice: string;
  tag: string;
  image: string;
  routeDescription: string;
};

export type AdvantageItem = {
  title: string;
  description: string;
  icon: "door" | "driver" | "calendar" | "price";
};

export type BookingStep = {
  title: string;
  description: string;
};

export type TestimonialItem = {
  name: string;
  comment: string;
  rating: number;
  avatar: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const themePresets = {
  silver: {
    background: "#FFFFFF",
    softBackground: "#F3F4F6",
    border: "#D1D5DB",
    text: "#111111",
    accent: "#111111",
    accentSoft: "#E5E7EB",
  },
  steel: {
    background: "#FCFCFD",
    softBackground: "#EEF2F7",
    border: "#CBD5E1",
    text: "#0F172A",
    accent: "#1E293B",
    accentSoft: "#E2E8F0",
  },
} satisfies Record<string, ThemeConfig>;

export type ThemePresetKey = keyof typeof themePresets;

export const siteConfigId = {
  activeTheme: "silver" as ThemePresetKey,
  brand: {
    name: "NusaTransit",
    tagline: "Travel Antar Kota Tepat Waktu",
    description:
      "Layanan travel antar kota dengan armada terawat, driver profesional, dan jadwal fleksibel.",
    whatsappNumber: "6285869236023",
    phone: "+62 858-6923-6023",
    email: "hello@nusatransit.id",
    address: "Jl. Gatot Subroto No. 88, Jakarta",
    socials: [
      { label: "Instagram", url: "https://instagram.com" },
      { label: "Facebook", url: "https://facebook.com" },
      { label: "TikTok", url: "https://tiktok.com" },
    ],
  } satisfies BrandConfig,
  hero: {
    heading: "Travel antar kota nyaman, aman, dan terjangkau.",
    subheading:
      "Pesan kursi Anda dalam hitungan menit. Berangkat tepat waktu dengan pelayanan door to door.",
    primaryCta: "Cari Jadwal",
    secondaryCta: "Pesan Sekarang",
  } satisfies HeroConfig,
  trustStats: [
    { label: "Rating Pelanggan", value: "4.9/5", icon: "star" },
    { label: "Pengguna Terlayani", value: "12.000+", icon: "users" },
    { label: "Keamanan Perjalanan", value: "100%", icon: "shield" },
    { label: "Ketepatan Waktu", value: "98%", icon: "clock" },
  ] satisfies TrustStat[],
  popularRoutes: [
    { from: "Jakarta", to: "Bandung", schedules: ["05:00", "10:00", "15:00", "20:00"] },
    { from: "Bandung", to: "Yogyakarta", schedules: ["16:00", "19:00"] },
    { from: "Surabaya", to: "Malang", schedules: ["06:00", "09:00", "13:00", "17:00"] },
    { from: "Semarang", to: "Solo", schedules: ["07:00", "11:00", "15:00"] },
    { from: "Jakarta", to: "Cirebon", schedules: ["08:00", "14:00", "20:00"] },
    { from: "Yogyakarta", to: "Solo", schedules: ["06:00", "12:00", "18:00"] },
  ] satisfies RouteItem[],
  fleet: [
    {
      name: "Toyota Avanza",
      image: "/images/avanza.png",
      capacity: "5 Penumpang",
      startingPrice: "Rp 150.000 / kursi",
      tag: "Ekonomis",
      routeDescription: "Melayani rute jarak pendek (Semarang - Solo, Yogya - Solo) di semua jadwal.",
    },
    {
      name: "Innova Reborn",
      image: "/images/innova.png",
      capacity: "7 Penumpang",
      startingPrice: "Rp 250.000 / kursi",
      tag: "Premium",
      routeDescription: "Khusus rute bisnis (Jakarta - Bandung, Surabaya - Malang) jadwal pagi & sore.",
    },
    {
      name: "Hiace Commuter",
      image: "/images/hiace.png",
      capacity: "14 Penumpang",
      startingPrice: "Rp 200.000 / kursi",
      tag: "Rombongan",
      routeDescription: "Tersedia untuk semua rute antar provinsi dengan jadwal keberangkatan malam.",
    },
  ] satisfies FleetItem[],
  advantages: [
    {
      title: "Door to Door Service",
      description: "Penjemputan dan pengantaran langsung ke titik yang Anda pilih.",
      icon: "door",
    },
    {
      title: "Driver Profesional",
      description: "Pengemudi berpengalaman, ramah, dan mengutamakan keselamatan.",
      icon: "driver",
    },
    {
      title: "Jadwal Fleksibel",
      description: "Tersedia pilihan jadwal pagi, siang, hingga malam setiap hari.",
      icon: "calendar",
    },
    {
      title: "Harga Transparan",
      description: "Tanpa biaya tersembunyi, semua biaya terlihat sejak awal.",
      icon: "price",
    },
  ] satisfies AdvantageItem[],
  bookingSteps: [
    {
      title: "Pilih Rute",
      description: "Masukkan kota asal, tujuan, dan tanggal keberangkatan.",
    },
    {
      title: "Pilih Armada",
      description: "Sesuaikan jenis kendaraan dengan kebutuhan perjalanan Anda.",
    },
    {
      title: "Konfirmasi Pemesanan",
      description: "Cek detail perjalanan lalu lakukan konfirmasi pembayaran.",
    },
    {
      title: "Berangkat",
      description: "Tim kami akan menjemput Anda sesuai jadwal yang dipilih.",
    },
  ] satisfies BookingStep[],
  testimonials: [
    {
      name: "Rina W.",
      comment: "Perjalanan nyaman dan tepat waktu. Driver juga sangat membantu.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rinaw",
    },
    {
      name: "Fajar P.",
      comment: "Booking cepat dan harga jelas sejak awal, recommended.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=fajarp",
    },
    {
      name: "Nadia S.",
      comment: "Armada bersih dan AC dingin. Cocok untuk perjalanan keluarga.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=nadias",
    },
  ] satisfies TestimonialItem[],
  faqs: [
    {
      question: "Apakah harga tiket sudah termasuk tol dan kapal penyeberangan?",
      answer: "Ya, harga tiket kami sudah *all-in*, mencakup biaya tol, bahan bakar, dan tiket kapal (jika rute menyeberang pulau). Tidak ada biaya tambahan tersembunyi.",
    },
    {
      question: "Berapa batas maksimal barang bawaan penumpang?",
      answer: "Setiap penumpang diperbolehkan membawa 1 tas koper/travel ukuran sedang (maksimal 15kg) dan 1 tas ransel kecil. Jika melebihi kapasitas tersebut, harap informasikan kepada admin karena mungkin ada biaya tambahan.",
    },
    {
      question: "Apakah boleh membawa hewan peliharaan?",
      answer: "Mohon maaf, demi kenyamanan dan kebersihan bersama, kami tidak mengizinkan penumpang membawa hewan peliharaan ke dalam kabin kendaraan.",
    },
    {
      question: "Bagaimana kebijakan pembatalan atau perubahan jadwal?",
      answer: "Pembatalan atau perubahan jadwal dapat dilakukan maksimal 12 jam sebelum waktu keberangkatan tanpa potongan biaya. Kurang dari waktu tersebut, akan ada penyesuaian biaya.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "Siap Berangkat Hari Ini?",
    description:
      "Konsultasikan rute Anda sekarang dan dapatkan jadwal terbaik untuk perjalanan antar kota.",
    buttonLabel: "Pesan Sekarang via WhatsApp",
  },
};

export const siteConfigEn = {
  activeTheme: "silver" as ThemePresetKey,
  brand: {
    name: "NusaTransit",
    tagline: "Punctual Intercity Travel",
    description:
      "Intercity travel service with well-maintained fleets, professional drivers, and flexible schedules.",
    whatsappNumber: "6285869236023",
    phone: "+62 858-6923-6023",
    email: "hello@nusatransit.id",
    address: "Jl. Gatot Subroto No. 88, Jakarta",
    socials: [
      { label: "Instagram", url: "https://instagram.com" },
      { label: "Facebook", url: "https://facebook.com" },
      { label: "TikTok", url: "https://tiktok.com" },
    ],
  } satisfies BrandConfig,
  hero: {
    heading: "Comfortable, safe, and affordable intercity travel.",
    subheading:
      "Book your seat in minutes. Depart on time with our reliable door-to-door service.",
    primaryCta: "Find Schedules",
    secondaryCta: "Book Now",
  } satisfies HeroConfig,
  trustStats: [
    { label: "Customer Rating", value: "4.9/5", icon: "star" },
    { label: "Passengers Served", value: "12,000+", icon: "users" },
    { label: "Travel Safety", value: "100%", icon: "shield" },
    { label: "On-Time Rate", value: "98%", icon: "clock" },
  ] satisfies TrustStat[],
  popularRoutes: [
    { from: "Jakarta", to: "Bandung", schedules: ["05:00", "10:00", "15:00", "20:00"] },
    { from: "Bandung", to: "Yogyakarta", schedules: ["16:00", "19:00"] },
    { from: "Surabaya", to: "Malang", schedules: ["06:00", "09:00", "13:00", "17:00"] },
    { from: "Semarang", to: "Solo", schedules: ["07:00", "11:00", "15:00"] },
    { from: "Jakarta", to: "Cirebon", schedules: ["08:00", "14:00", "20:00"] },
    { from: "Yogyakarta", to: "Solo", schedules: ["06:00", "12:00", "18:00"] },
  ] satisfies RouteItem[],
  fleet: [
    {
      name: "Toyota Avanza",
      image: "/images/avanza.png",
      capacity: "5 Passengers",
      startingPrice: "Rp 150.000 / seat",
      tag: "Economy",
      routeDescription: "Serves short-distance routes (Semarang - Solo, Yogya - Solo) at all schedules.",
    },
    {
      name: "Innova Reborn",
      image: "/images/innova.png",
      capacity: "7 Passengers",
      startingPrice: "Rp 250.000 / seat",
      tag: "Premium",
      routeDescription: "Exclusive for business routes (Jakarta - Bandung, Surabaya - Malang) morning & evening.",
    },
    {
      name: "Hiace Commuter",
      image: "/images/hiace.png",
      capacity: "14 Passengers",
      startingPrice: "Rp 200.000 / seat",
      tag: "Group",
      routeDescription: "Available for all inter-provincial routes with night departure schedules.",
    },
  ] satisfies FleetItem[],
  advantages: [
    {
      title: "Door to Door Service",
      description: "Direct pick-up and drop-off at your chosen locations.",
      icon: "door",
    },
    {
      title: "Professional Drivers",
      description: "Experienced, friendly drivers who prioritize your safety.",
      icon: "driver",
    },
    {
      title: "Flexible Schedules",
      description: "Morning, afternoon, and evening departures available daily.",
      icon: "calendar",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. All costs are clear from the beginning.",
      icon: "price",
    },
  ] satisfies AdvantageItem[],
  bookingSteps: [
    {
      title: "Select Route",
      description: "Enter your departure city, destination, and travel date.",
    },
    {
      title: "Choose Fleet",
      description: "Select the vehicle type that suits your travel needs.",
    },
    {
      title: "Confirm Booking",
      description: "Review your travel details and complete the payment.",
    },
    {
      title: "Departure",
      description: "Our team will pick you up according to your schedule.",
    },
  ] satisfies BookingStep[],
  testimonials: [
    {
      name: "Rina W.",
      comment: "Comfortable and on-time journey. The driver was very helpful.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rinaw",
    },
    {
      name: "Fajar P.",
      comment: "Fast booking and transparent pricing, highly recommended.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=fajarp",
    },
    {
      name: "Nadia S.",
      comment: "Clean fleet with cold AC. Perfect for family trips.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=nadias",
    },
  ] satisfies TestimonialItem[],
  faqs: [
    {
      question: "Are toll and ferry tickets included in the price?",
      answer: "Yes, our ticket prices are all-in, covering toll fees, fuel, and ferry tickets (if crossing islands). There are no hidden charges.",
    },
    {
      question: "What is the maximum luggage allowance per passenger?",
      answer: "Each passenger is allowed 1 medium-sized suitcase/travel bag (max 15kg) and 1 small backpack. If exceeding this, please inform our admin as extra charges may apply.",
    },
    {
      question: "Are pets allowed in the vehicle?",
      answer: "We apologize, but for the comfort and cleanliness of all passengers, we do not allow pets inside the cabin.",
    },
    {
      question: "What is the cancellation or rescheduling policy?",
      answer: "Cancellations or rescheduling can be made up to 12 hours before departure without penalty. Changes within 12 hours will incur fee adjustments.",
    },
  ] satisfies FaqItem[],
  finalCta: {
    title: "Ready to Depart Today?",
    description:
      "Consult your route with us now and get the best schedule for your intercity travel.",
    buttonLabel: "Book Now via WhatsApp",
  },
};

export const translations = {
  id: siteConfigId,
  en: siteConfigEn,
};

// Default export for backward compatibility where language is not selected yet
export const siteConfig = siteConfigId;

export const getActiveTheme = (themeKey: ThemePresetKey): ThemeConfig => {
  return themePresets[themeKey] ?? themePresets.silver;
};
