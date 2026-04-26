import { WhiteLabelConfig } from "@/types/showroom";

export const whiteLabelConfig: WhiteLabelConfig = {
  brand: {
    name: "Silverline Auto Gallery",
    tagline: "Showroom Mobil Berkualitas & Terpercaya",
  },
  theme: {
    background: "#FFFFFF",
    silver: "#FFFFFF",
    black: "#111111",
    mutedText: "#111111",
  },
  hero: {
    headline: "Showroom Mobil Berkualitas & Terpercaya",
    subheadline:
      "Unit terkurasi, harga kompetitif, dan proses transparan untuk membantu Anda mendapatkan mobil terbaik tanpa drama.",
    primaryAction: "Lihat Mobil",
    secondaryAction: "Hubungi Kami",
    heroImage: "/images/fortuner.png",
    heroImageAlt: "Toyota Fortuner di showroom",
  },
  contact: {
    phone: "+62 812-3456-7890",
    whatsapp: "6281234567890",
    email: "halo@silverlineauto.id",
    address: "Jl. Boulevard Utama No. 88, Jakarta Selatan",
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "TikTok", href: "https://tiktok.com" },
      { label: "YouTube", href: "https://youtube.com" },
    ],
  },
  seo: {
    siteUrl: "https://showcase-showroom.vercel.app",
    ogImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    twitterHandle: "@silverlineauto",
  },
  mainContent: {
    sectionTitles: {
      trust: "Dipercaya Ribuan Pelanggan",
      catalog: "Katalog Mobil Pilihan",
      filter: "Filter Cepat",
      benefits: "Keunggulan Showroom",
      purchaseSteps: "Cara Pembelian",
      testimonials: "Testimoni Pelanggan",
      finalCta: "Temukan Mobil Impian Anda Sekarang",
    },
    trustStats: [
      { label: "Unit Terjual", value: "500+" },
      { label: "Rating Pelanggan", value: "4.8/5" },
      { label: "Approval Kredit", value: "95%" },
      { label: "Pengalaman", value: "10+ Tahun" },
    ],
    trustClaims: ["100% Surat Lengkap", "Garansi Mesin", "Inspeksi Menyeluruh"],
    benefits: [
      {
        title: "Inspeksi Multi-Point",
        description: "Setiap unit melewati pengecekan detail sebelum dipasarkan.",
      },
      {
        title: "Garansi Mesin",
        description: "Perlindungan mesin untuk memberi rasa aman setelah pembelian.",
      },
      {
        title: "Bisa Kredit",
        description: "Pilihan tenor fleksibel dengan proses pengajuan cepat.",
      },
      {
        title: "Surat Lengkap",
        description: "Dokumen legal kendaraan lengkap dan terverifikasi.",
      },
      {
        title: "Test Drive Tersedia",
        description: "Coba langsung unit pilihan sebelum membuat keputusan.",
      },
    ],
    purchaseSteps: [
      {
        title: "Pilih Mobil",
        description: "Jelajahi katalog dan bandingkan unit yang paling cocok.",
      },
      {
        title: "Hubungi Admin",
        description: "Diskusikan detail harga, simulasi kredit, dan ketersediaan.",
      },
      {
        title: "Survey / Test Drive",
        description: "Cek kondisi unit secara langsung bersama tim kami.",
      },
      {
        title: "Deal & Pembayaran",
        description: "Selesaikan administrasi, lalu mobil siap dibawa pulang.",
      },
    ],
    testimonials: [
      {
        name: "Rizki Setiawan",
        comment: "Pelayanannya cepat, unit sesuai foto, dan proses kredit dibantu sampai selesai.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Nadia Putri",
        comment: "Showroom bersih, admin informatif, dan transparan soal kondisi mobil.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Andi Pratama",
        comment: "Harga masuk akal, surat lengkap, mobil langsung siap dipakai harian.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    finalCtaDescription:
      "Konsultasikan kebutuhan Anda sekarang. Tim kami siap bantu pilihkan unit terbaik sesuai budget.",
    faq: [
      {
        question: "Apakah bisa kredit dengan KTP luar kota?",
        answer: "Bisa, selama Anda berdomisili atau bekerja di area jangkauan leasing rekanan kami. Tim kami akan membantu proses BI Checking dan administrasinya."
      },
      {
        question: "Apakah DP (Down Payment) bisa dinegosiasikan?",
        answer: "Tentu. Kami menyediakan berbagai paket TDP mulai dari yang paling minim hingga cicilan paling ringan sesuai budget Anda."
      },
      {
        question: "Berapa lama proses persetujuan kredit?",
        answer: "Biasanya memakan waktu 1-3 hari kerja setelah dokumen lengkap diterima oleh pihak leasing."
      },
      {
        question: "Apakah ada garansi setelah pembelian?",
        answer: "Ya, kami memberikan garansi mesin dan transmisi selama 30 hari untuk setiap unit yang kami jual, ditambah jaminan uang kembali jika surat tidak sah."
      }
    ],
    leasingPartners: ["BCA Finance", "Adira Finance", "BFI Finance", "OTO Kredit Mobil", "Clipan Finance"],
  },
  cars: [
    {
      id: "car-1",
      name: "Toyota Avanza 2022",
      brand: "Toyota",
      year: 2022,
      mileageKm: 24000,
      transmission: "Matic",
      price: 245000000,
      status: "Ready",
      badge: "Favorit",
      image: "/images/avanza.png",
      imageAlt: "Toyota Avanza putih tampak depan",
    },
    {
      id: "car-2",
      name: "Honda Civic 2021",
      brand: "Honda",
      year: 2021,
      mileageKm: 33000,
      transmission: "Matic",
      price: 372000000,
      status: "Ready",
      badge: "Low KM",
      image: "/images/civic.png",
      imageAlt: "Honda Civic hitam tampak samping",
    },
    {
      id: "car-3",
      name: "Suzuki Ertiga 2020",
      brand: "Suzuki",
      year: 2020,
      mileageKm: 46000,
      transmission: "Matic",
      price: 198000000,
      status: "Ready",
      badge: "Best Deal",
      image: "/images/ertiga.png",
      imageAlt: "Suzuki Ertiga putih",
    },
    {
      id: "car-4",
      name: "Daihatsu Sigra 2022",
      brand: "Daihatsu",
      year: 2022,
      mileageKm: 29000,
      transmission: "Manual",
      price: 171000000,
      status: "Ready",
      image: "/images/sigra.png",
      imageAlt: "Daihatsu Sigra putih",
    },
    {
      id: "car-5",
      name: "Toyota Innova Reborn 2021",
      brand: "Toyota",
      year: 2021,
      mileageKm: 34000,
      transmission: "Matic",
      price: 345000000,
      status: "Ready",
      badge: "Favorit",
      image: "/images/innova.png",
      imageAlt: "Toyota Innova hitam elegan",
    },
    {
      id: "car-6",
      name: "Mitsubishi Pajero Sport 2022",
      brand: "Mitsubishi",
      year: 2022,
      mileageKm: 25000,
      transmission: "Matic",
      price: 525000000,
      status: "Ready",
      image: "/images/pajero.png",
      imageAlt: "Mitsubishi Pajero Sport hitam",
    },
    {
      id: "car-7",
      name: "Toyota Fortuner 2023",
      brand: "Toyota",
      year: 2023,
      mileageKm: 18000,
      transmission: "Matic",
      price: 568000000,
      status: "Ready",
      badge: "Favorit",
      image: "/images/fortuner.png",
      imageAlt: "Toyota Fortuner hitam di showroom",
    },
    {
      id: "car-8",
      name: "Toyota Hiace 2020",
      brand: "Toyota",
      year: 2020,
      mileageKm: 62000,
      transmission: "Manual",
      price: 488000000,
      status: "Ready",
      badge: "Best Deal",
      image: "/images/hiace.png",
      imageAlt: "Toyota Hiace putih untuk kebutuhan travel",
    },
  ],
};
