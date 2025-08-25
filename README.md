# Website Desa (React + GitHub Pages)

Website desa sederhana berbasis React. Siap di-deploy ke GitHub Pages.

## Cara menjalankan lokal
```bash
npm install
npm start
```

## Deploy ke GitHub Pages
1. Edit `package.json` → ganti `username` pada `homepage` dengan username GitHub kamu.
2. Inisialisasi repo dan push ke GitHub:
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/username/desa-website.git
git push -u origin main
```
3. Deploy:
```bash
npm run deploy
```
4. Akses: `https://username.github.io/desa-website`

## Kustomisasi
- Edit konten di folder `src/pages/`
- Ganti nama desa, kontak, dan isi halaman sesuai data asli.