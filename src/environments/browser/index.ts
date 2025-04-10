import { getGlobalAidomx } from '../../core'
import { AidomxDOM } from '../../core/aidomx-dom'
import { useWatch } from '../../hooks/useWatch'

let isInitialized: boolean = false

/**
 * Inisialisasi lingkungan AIDOMX untuk browser.
 *
 * Fungsi ini:
 * - Menghindari inisialisasi ulang (dijalankan hanya sekali).
 * - Mengambil dan menerapkan aturan dari file `globals.aidomx`.
 * - Mengaktifkan sistem pengawasan (`watch`) untuk mendeteksi perubahan file AIDOMX.
 *
 * @returns {Promise<void>}
 */
export const withBrowser = async (): Promise<void> => {
  if (isInitialized) return
  isInitialized = true

  const url = 'public/globals.aidomx'

  try {
    const rules = await getGlobalAidomx(url)
    if (rules) AidomxDOM(rules)
    useWatch(url)
  } catch (error) {
    console.warn('[Aidomx] Terjadi kesalahan saat inisialisasi:', error)
  }
}
