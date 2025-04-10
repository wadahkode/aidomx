![Build](https://github.com/wadahkode/aidomx/actions/workflows/build.yml/badge.svg)
![NPM Downloads](https://img.shields.io/npm/dt/%40wadahkode%2Faidomx)
![jsDelivr](https://data.jsdelivr.com/v1/package/npm/@wadahkode/aidomx/badge)
[![pnpm](https://img.shields.io/badge/powered_by-pnpm-4DAD4A?logo=pnpm)](https://pnpm.io)

# AIDOMX

**AIDOMX** adalah sebuah pustaka yang memungkinkan Anda untuk menulis gaya dan logika interaktif dalam satu file dengan ekstensi `.aidomx`. Dengan pendekatan ini, pengembangan komponen menjadi lebih modular dan terstruktur.

## Fitur Utama

- **Gaya Terpadu**: Menggabungkan CSS dan JavaScript dalam satu file `.aidomx` untuk kemudahan pengelolaan.
- **Modularitas**: Memungkinkan pemisahan logika dan gaya per komponen.
- **Konfigurasi Fleksibel**: Mendukung konfigurasi melalui file `aidomx.config.json` untuk menyesuaikan peta event.

## Instalasi

Untuk menggunakan AIDOMX dalam proyek Anda, ikuti langkah-langkah berikut:

### 1. Kloning Repository

```bash
git clone https://github.com/wadahkode/aidomx.git
```

### 2. Masuk ke Direktori Proyek

```bash
cd aidomx
```

### 3. Instal Dependensi

```bash
npm install
```

## Penggunaan Dasar

Setelah instalasi, Anda dapat mulai menggunakan AIDOMX dengan langkah-langkah berikut:

### 1. Buat File `.aidomx`

Misalnya, buat file `button.aidomx` dengan konten berikut:

```javascript
export default {
  component: [
    {
      name: "btn-primary",
      styles: {
        background: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      },
      onClick(event) {
        alert("Tombol diklik!");
      }
    }
  ]
}
```

### 2. Tambahkan Elemen di HTML

```html
<button v-ai="btn-primary">Klik Saya</button>
```

### 3. Integrasikan AIDOMX dalam Proyek

Pastikan Anda telah mengimpor dan menerapkan AIDOMX dalam proyek Anda sesuai dengan kebutuhan.

## Konfigurasi

Anda dapat menyesuaikan konfigurasi AIDOMX dengan membuat file `aidomx.config.json` di root proyek Anda:

```json
{
  "eventMap": {
    "onSwipe": "swipe",
    "onLongPress": "longpress"
  }
}
```

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).


