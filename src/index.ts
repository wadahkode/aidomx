/**
 * Titik awal dari pustaka AIDOMX.
 *
 * File ini bertanggung jawab memulai proses inisialisasi AIDOMX berdasarkan environment.
 * Secara default, akan berjalan di browser menggunakan konfigurasi standar.
 * Framework lain seperti React atau Vue bisa diintegrasikan melalui sistem environment modular.
 *
 * Cocok digunakan pada proyek frontend modern yang ingin mendukung AI-driven styling
 * secara fleksibel dan scalable.
 *
 * @file src/index.ts
 * @created 2024-04-07
 * @author WadahKode
 * @project AIDOMX
 * @license MIT
 * @contact github.com/wadahkode
 */

import { startWithEnvironment } from './environments'

// Default: menjalankan AIDOMX di lingkungan browser
if (typeof window !== 'undefined') {
  startWithEnvironment()
}

export * from './core'
export * from './environments'
export * from './hooks'
export type { AIDOMXConfig, Component, Config, Data, Rules } from './types'
export * from './utils/cookie'
