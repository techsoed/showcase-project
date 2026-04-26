# NusaTransit - Travel Agency Landing Page

NusaTransit adalah sebuah landing page modern, profesional, dan berkinerja tinggi yang dirancang khusus untuk bisnis jasa travel antar kota. Dibangun menggunakan teknologi web terbaru untuk memberikan pengalaman pengguna yang mulus dan premium.

## ✨ Fitur Utama

- **🚀 Desain Premium & Responsif**: Tampilan elegan dengan nuansa monokrom yang bersih, dioptimalkan untuk perangkat mobile (Android/iOS) dan desktop.
- **🌐 Dukungan Multi-bahasa (ID/EN)**: Fitur switch bahasa instan antara Bahasa Indonesia dan Bahasa Inggris tanpa reload halaman.
- **🚗 Hero Section Animasi**: Animasi rotasi armada mobil (Avanza, Innova, Hiace) yang dinamis dan menarik perhatian.
- **📊 Animated Counter**: Statistik kepercayaan pelanggan yang berhitung otomatis dari 0 saat di-scroll.
- **📱 Floating WhatsApp Button**: Tombol chat melayang untuk mempermudah konversi pelanggan secara langsung.
- **🛠️ FAQ Accordion**: Bagian tanya jawab yang interaktif untuk menjawab keraguan pelanggan.
- **💎 Navbar Premium**: Animasi navbar yang mengecil dan menjadi transparan (glassmorphism) saat di-scroll ke bawah.

## 🛠️ Teknologi yang Digunakan

- **Next.js 14+ (App Router)** - Framework React untuk performa terbaik.
- **Tailwind CSS** - Untuk styling yang cepat dan responsif.
- **TypeScript** - Memastikan kode aman dan mudah dipelihara.
- **Lucide React / Heroicons** - Set ikon yang konsisten dan modern.
- **Intersection Observer API** - Untuk memicu animasi saat elemen muncul di layar.

## 🚀 Cara Menjalankan Proyek

1. **Clone repositori:**
   ```bash
   git clone https://github.com/techsoed/showcase-project.git
   ```

2. **Masuk ke direktori:**
   ```bash
   cd showcase-travel-agency
   ```

3. **Install dependensi:**
   ```bash
   npm install
   ```

4. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📂 Struktur Folder Utama

- `app/`: Routing dan halaman utama Next.js.
- `components/sections/`: Seluruh bagian layout landing page (Hero, Fleet, Testimonials, dll).
- `components/ui/`: Komponen kecil yang dapat digunakan kembali (Buttons, AnimatedNumber, Icons).
- `lib/`: Konfigurasi situs dan data statis (`site-config.ts`).
- `public/images/`: Aset gambar armada kendaraan.

## 📝 Konfigurasi Konten

Hampir seluruh teks dan data di landing page ini dapat diubah melalui satu file pusat di:
`lib/site-config.ts`

Anda bisa mengganti nama brand, nomor WhatsApp, rute, harga, hingga testimoni pelanggan di sana.

---

Dibuat dengan ❤️ untuk kemajuan bisnis travel Indonesia.
