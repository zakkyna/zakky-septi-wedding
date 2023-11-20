# Wedding Invitation Project

## Deskripsi

Proyek ini adalah situs web undangan pernikahan interaktif yang menggunakan MongoDB dan Mongoose untuk menyimpan dan mengelola data.

## Setup Project

1. Clone repositori ini.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Buat file `.env.local` di root proyek Anda.

## Setup MongoDB dan Mongoose

1. Buat akun di [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) dan buat cluster baru.
2. Dapatkan connection string MongoDB dengan mengikuti [petunjuk ini](https://docs.mongodb.com/guides/cloud/connectionstring/).
3. Tambahkan connection string MongoDB sebagai variabel lingkungan `MONGODB_URI` di file `.env.local`.

```markdown
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
Ganti `<username>` dan `<password>` dengan username dan password MongoDB Anda. Anda juga perlu mengganti `myFirstDatabase` dengan nama database yang Anda gunakan.

## Menjalankan Proyek

1. Jalankan `npm run dev` untuk memulai server pengembangan.
2. Buka `localhost:3000` di browser Anda.

## Deploy di Vercel

1. Install Vercel CLI dengan menjalankan `npm i -g vercel` di terminal Anda.
2. Jalankan `vercel` di direktori proyek Anda.
3. Ikuti petunjuk yang diberikan oleh CLI. Anda mungkin perlu masuk ke akun Vercel Anda atau membuat akun baru.
4. Setelah proses selesai, Anda akan mendapatkan URL dari situs yang telah di-deploy.

Perlu diingat bahwa Anda perlu menambahkan environment variable `MONGODB_URI` di dashboard Vercel Anda. Anda dapat melakukannya di bagian "Settings" -> "Environment Variables".

## Kontribusi

Kontribusi sangat diterima. Untuk perubahan besar, harap buka issue terlebih dahulu untuk membahas apa yang ingin Anda ubah.

## Lisensi

[MIT](https://opensource.org/licenses/MIT)