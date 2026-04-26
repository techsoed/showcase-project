# Showcase Showroom Landing Page

Landing page showroom mobil dengan konsep modern, profesional, bersih, premium, mobile-first, dan siap deploy ke Vercel.

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
- next/image optimization
- Poppins (next/font)

## Jalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Konfigurasi Whitelabel

Semua data utama dipusatkan di:

- `src/config/whitelabel.ts`

Yang bisa diganti tanpa mengubah struktur komponen:

- Nama brand
- Warna tema
- Headline dan konten section
- Daftar mobil
- Kontak dan sosial media

Tipe data konfigurasi tersedia di:

- `src/types/showroom.ts`

## Struktur Utama

- `src/app/page.tsx` -> Entrypoint landing page
- `src/components/landing/LandingPage.tsx` -> Seluruh section landing page
- `src/config/whitelabel.ts` -> Sumber data whitelabel

## Build Produksi

```bash
npm run build
npm start
```

## Deploy ke Vercel

1. Push repository ke Git provider.
2. Import project ke Vercel.
3. Framework otomatis terdeteksi sebagai Next.js.
4. Jalankan deploy.

Project ini sudah tervalidasi melalui lint dan build, sehingga siap untuk proses deployment.
