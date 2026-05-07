# VeloraNovel

Template **webnovel modern** yang siap di-upload ke **GitHub Pages**.

## Fitur
- Desain unik, modis, dan responsif
- Glassmorphism + gradient modern
- Dark mode / light mode
- Pencarian judul dan genre
- Filter kategori
- Sorting novel
- Modal detail novel
- Reader chapter preview
- Bookmark via `localStorage`
- Tanpa framework, cocok untuk GitHub Pages

## Struktur File
```bash
webnovel-github/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Cara Upload ke GitHub
1. Buat repository baru di GitHub
2. Upload semua file ini ke root repository
3. Masuk ke **Settings > Pages**
4. Pada **Build and deployment**, pilih:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
5. Simpan, lalu tunggu beberapa detik
6. Situs akan aktif di URL GitHub Pages kamu

## Cara Ganti Isi Novel
Buka file `script.js`, lalu edit array `novels`.

Bagian yang bisa kamu ubah:
- `title`
- `genre`
- `rating`
- `readers`
- `chapters`
- `updated`
- `description`
- `cover`
- `synopsis`
- `chapterList`

## Pengembangan Lanjutan
Kalau kamu ingin versi yang lebih canggih, kamu bisa menambahkan:
- Login user
- Backend Firebase / Supabase
- Database chapter dinamis
- Komentar pembaca
- Like, vote, dan ranking real-time
- Dashboard admin upload novel

## Lisensi
Gratis dipakai dan dimodifikasi untuk proyek pribadi maupun portfolio.
