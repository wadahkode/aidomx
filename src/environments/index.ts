import { withBrowser } from './browser'

export const startWithEnvironment = async (
  name: string = 'browser',
  _data: string = ''
) => {
  switch (name) {
    case 'browser':
      return await withBrowser()
    default:
      throw new Error(`[Aidomx] Unknown env ${name}`)
  }
}

export * from './browser'
