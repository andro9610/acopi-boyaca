export type NewsPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  body: string[]
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'noticia-destacada-uno',
    title: '[[Título de la noticia destacada uno]]',
    excerpt: '[[Resumen de la noticia destacada uno para el listado del sitio]]',
    date: '2026-01-15',
    category: '[[Categoría]]',
    image: '/images/news-1.svg',
    body: [
      '[[Primer párrafo del cuerpo de la noticia destacada uno]]',
      '[[Segundo párrafo del cuerpo de la noticia destacada uno]]',
      '[[Tercer párrafo del cuerpo de la noticia destacada uno]]',
    ],
  },
  {
    slug: 'noticia-destacada-dos',
    title: '[[Título de la noticia destacada dos]]',
    excerpt: '[[Resumen de la noticia destacada dos para el listado del sitio]]',
    date: '2026-01-08',
    category: '[[Categoría]]',
    image: '/images/news-2.svg',
    body: [
      '[[Primer párrafo del cuerpo de la noticia destacada dos]]',
      '[[Segundo párrafo del cuerpo de la noticia destacada dos]]',
    ],
  },
  {
    slug: 'noticia-destacada-tres',
    title: '[[Título de la noticia destacada tres]]',
    excerpt: '[[Resumen de la noticia destacada tres para el listado del sitio]]',
    date: '2025-12-19',
    category: '[[Categoría]]',
    image: '/images/news-3.svg',
    body: [
      '[[Primer párrafo del cuerpo de la noticia destacada tres]]',
      '[[Segundo párrafo del cuerpo de la noticia destacada tres]]',
    ],
  },
  {
    slug: 'noticia-destacada-cuatro',
    title: '[[Título de la noticia destacada cuatro]]',
    excerpt: '[[Resumen de la noticia destacada cuatro para el listado del sitio]]',
    date: '2025-12-02',
    category: '[[Categoría]]',
    image: '/images/news-4.svg',
    body: [
      '[[Primer párrafo del cuerpo de la noticia destacada cuatro]]',
      '[[Segundo párrafo del cuerpo de la noticia destacada cuatro]]',
    ],
  },
]

export const featuredNews = newsPosts.slice(0, 3)

export function formatNewsDate(value: string): string {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export function findNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug)
}
