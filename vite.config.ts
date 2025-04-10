import { defineConfig } from 'vite'
import AidomxPlugin from './plugins/vite-plugin-aidomx'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const fileName = (format: string) => {
  return format === 'umd' ? 'aidomx.min.js' : 'aidomx.js'
}

export default defineConfig({
  plugins: [
    AidomxPlugin(),
    {
      ...AidomxPlugin({ dir: 'public' }),
      apply: 'build',
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Aidomx',
      // the proper extensions will be added
      fileName,
      // formats: ['es', 'cjs'],
    },
    copyPublicDir: false,
    minify: 'terser',
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      external: ['vite'],
      output: {
        globals: {
          aidomx: 'AidomxPlugin',
        },
      },
      treeshake: true,
    },
  },
})
