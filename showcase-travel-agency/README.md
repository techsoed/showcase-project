# Showcase Travel Agency Landing Page

Landing page jasa travel antar kota berbasis Next.js App Router + Tailwind CSS, dengan desain modern, profesional, bersih, dan siap deploy ke Vercel.

## Jalankan Lokal

1. Install dependency:

	npm install

2. Jalankan mode development:

	npm run dev

3. Buka di browser:

	http://localhost:3000

## Struktur Utama

- app/: entry layout dan halaman utama
- components/sections/: komponen per section landing page
- components/ui/: komponen UI reusable (judul section, ikon)
- lib/site-config.ts: pusat konfigurasi whitelabel
- public/fleet/: aset gambar armada

## Cara Whitelabel (Tanpa Ubah Struktur)

Semua konten utama bisa diganti di satu file:

- Nama brand, kontak, sosial media
- Warna tema (preset)
- Headline dan CTA
- Statistik trust
- Rute populer
- Data armada (nama, kapasitas, harga, tag, gambar)
- Keunggulan layanan
- Langkah pemesanan
- Testimoni

Edit file berikut:

- lib/site-config.ts

### Ganti Tema Cepat

Pilih tema aktif melalui key berikut di `siteConfig`:

- activeTheme: "silver" | "steel"

Contoh:

activeTheme: "steel"

Preset warna disimpan di `themePresets`, jadi Anda bisa menambah varian baru tanpa mengubah komponen section.

## Catatan Desain dan Teknis

- Font menggunakan Poppins (next/font/google)
- Tema default: putih + silver + aksen hitam
- Mobile-first dan responsive
- Ukuran teks dasar minimum 16px
- Tombol dibuat tinggi dan mudah disentuh di mobile
- Gambar armada menggunakan Next Image untuk optimasi
- Animasi dibuat ringan dan tidak berlebihan

## Build Produksi

Jalankan build untuk verifikasi:

npm run build

## Deploy ke Vercel

Project ini kompatibel langsung dengan Vercel:

1. Push repository ke Git provider.
2. Import project di Vercel.
3. Gunakan setting default Next.js.
4. Deploy.

