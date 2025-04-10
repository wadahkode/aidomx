import { Plugin } from 'vite'
import { transformAIDOMX } from '../src/transformer'
import path from 'path-browserify'

interface AIDOMXOptions {
  dir?: string // Direktori file .aidomx
}

export default function AidomxPlugin(options: AIDOMXOptions = {}): Plugin {
  const aidomxDir = options.dir || ''

  return {
    name: 'vite-plugin-aidomx',
    enforce: 'pre',
    configureServer(server) {
      server.watcher.on('change', (file) => {
        if (
          file.startsWith(path.resolve(aidomxDir)) &&
          file.endsWith('.aidomx')
        ) {
          console.log(`🔄 Reloading ${file}`)
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
    transform(code: string, id: string) {
      if (id.startsWith(path.resolve(aidomxDir)) && id.endsWith('.aidomx')) {
        return transformAIDOMX(code)
      }
    },
  }
}
