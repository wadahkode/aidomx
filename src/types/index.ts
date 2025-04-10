export type Config = {
  code?: string
  dir?: string
  file?: string
  framework?: boolean
  frameworkName?: string
  env?: string
}

export type AIDOMXConfig = {
  eventMap?: Record<string, string>
}

export type Component = {
  tagName?: string
  className?: string
  text?: string
  style?: Record<string, string>
  posBefore?: boolean
  posAfter?: boolean
  [key: string]: any
}

export type Rules = {
  root?: string
  style?: Record<string, string>
  components?: Component[]
  [key: string]: any
}

export type Data = Rules | Record<string, string>
