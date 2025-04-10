import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'es2020',
  outDir: 'dist',
  dts: true,
  clean: false,
  shims: true,
})
