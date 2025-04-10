import { getEventHandlers } from './eventHandlers'
import { transformAIDOMX } from './transformer'

export async function loadAIDOMX(file: string) {
  try {
    const moduleUrl = `/public/${file}.aidomx?timestamp=${Date.now()}`
    const response = await fetch(moduleUrl)
    let text = await response.text()
    text = transformAIDOMX(text)

    return new Function(`return ${text}`)()
  } catch (error) {
    console.error(`❌ Error loading ${file}.aidomx:`, error)
    return null
  }
}

export async function applyAIDOMX(config: any) {
  if (!config || !config.component) return

  const eventHandlers = await getEventHandlers()

  config.component.forEach((comp: any) => {
    //const classElements = document.querySelectorAll<HTMLElement>(
    //`.${comp.name}`
    //)
    const elements = document.querySelectorAll<HTMLElement>(
      `[v-ai="${comp.name}"]`
    )

    //const elements = [...classElements, ...attrElements]

    elements.forEach((el) => {
      el.setAttribute('data-aidomx', 'applied')
      el.setAttribute('v-ai', 'applied')

      if (comp.className) {
        el.classList.add(...comp.className.split(' ')) // Tambahkan class Tailwind
      } else {
        Object.assign(el.style, comp.styles)
      }

      Object.entries(eventHandlers).forEach(([prop, eventName]) => {
        if (comp[prop]) {
          el.removeEventListener(eventName, comp[prop])
          el.addEventListener(eventName, comp[prop])
        }
      })
    })
  })
}

// 🔄 Watch perubahan file AIDOMX
export function watchAIDOMX() {
  setInterval(async () => {
    const config = await loadAIDOMX('globals')
    if (config) applyAIDOMX(config)
  }, 2000)
}
