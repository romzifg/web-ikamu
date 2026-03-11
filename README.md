# IKA-UNM — Website Ikatan Alumni

Website resmi Ikatan Alumni Universitas Nusantara Maju, dibangun dengan **Next.js 15**, **TypeScript**, dan **Tailwind CSS**.

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production
```bash
npm run build
npm start
```

## 📁 Struktur Project

```
ika-unm/
├── app/
│   ├── globals.css       # Global styles + Tailwind
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Entry point
├── components/
│   └── AlumniWebsite.tsx # Komponen utama (semua section)
├── public/               # Aset statis
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## ✏️ Kustomisasi Data

Edit variabel di bagian `DATA` dalam `components/AlumniWebsite.tsx`:

- `UNI` — Info universitas (nama, motto, dll)
- `STATS` — Statistik hero section
- `PROGRAMS` — Daftar program kerja
- `MEMBERS` — Daftar pengurus

## 🎨 Tema

Website mendukung **Light & Dark mode** dengan tombol toggle di navbar.  
Warna utama dapat diubah pada objek `M` (maroon palette) di bagian paling atas file komponen.
