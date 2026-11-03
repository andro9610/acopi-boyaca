export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export function normalizeBasePath(baseUrl: string): string {
  const withoutTrailingSlash = baseUrl.replace(/\/+$/, '')
  return withoutTrailingSlash.length > 0 ? withoutTrailingSlash : '/'
}

export function assetPath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}
