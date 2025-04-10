import type { Rules } from '../types'

export const Parse = (rules: Rules) => {
  const result: Record<string, string> = {}

  if (rules?.root) return rules
  if (!rules.component) return result

  for (const rule of rules.component) {
    if (rule?.name && rule?.className) {
      result[rule.name] = rule.className
    }
  }

  return result
}
