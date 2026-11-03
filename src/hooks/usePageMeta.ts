import { useEffect } from 'react'
import { site } from '@/lib/site'

type PageMeta = {
  title?: string
  description?: string
  path?: string
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

export function usePageMeta({ title, description, path }: PageMeta): void {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.name

    const resolvedDescription = description ?? site.description
    upsertMeta('name', 'description', resolvedDescription)
    upsertMeta('property', 'og:title', title ?? site.name)
    upsertMeta('property', 'og:description', resolvedDescription)

    if (path) {
      upsertMeta('property', 'og:url', `${site.url}${path}`)
    }
  }, [title, description, path])
}
