const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/

export function isBlank(value: string): boolean {
  return value.trim().length === 0
}

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim())
}

export function isValidPhone(value: string): boolean {
  return PHONE_PATTERN.test(value.trim())
}

export function hasMinLength(value: string, min: number): boolean {
  return value.trim().length >= min
}

export function requireField(value: string, message: string): string | undefined {
  return isBlank(value) ? message : undefined
}

export function requireEmail(value: string): string | undefined {
  if (isBlank(value)) {
    return 'Ingresa un correo electrónico'
  }

  return isValidEmail(value) ? undefined : 'Ingresa un correo electrónico válido'
}

export function requirePhone(value: string): string | undefined {
  if (isBlank(value)) {
    return 'Ingresa un número de contacto'
  }

  return isValidPhone(value) ? undefined : 'Ingresa un número de teléfono válido'
}

export function requireMinLength(value: string, min: number, message: string): string | undefined {
  return hasMinLength(value, min) ? undefined : message
}

export function collectErrors<T extends Record<string, string | undefined>>(fields: T): Record<string, string> {
  const entries = Object.entries(fields).filter(([, message]) => typeof message === 'string' && message.length > 0)
  return Object.fromEntries(entries) as Record<string, string>
}

export function hasErrors(errors: Record<string, string>): boolean {
  return Object.keys(errors).length > 0
}
