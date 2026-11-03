import { Link, useParams } from 'react-router-dom'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import { findNewsBySlug, formatNewsDate, newsPosts } from '@/lib/news'
import { assetPath } from '@/lib/utils'

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? findNewsBySlug(slug) : undefined

  usePageMeta({
    title: post ? post.title : 'Noticia no encontrada',
    description: post ? post.excerpt : '[[Noticia no encontrada]]',
    path: post ? `/noticias/${post.slug}` : '/noticias',
  })

  if (!post) {
    return (
      <section className="py-32 md:py-40">
        <div className="container-page flex max-w-xl flex-col items-start gap-6">
          <span className="eyebrow text-slate-600">Noticias</span>
          <h1 className="display-section text-brand-900">[[No encontramos esta noticia]]</h1>
          <p className="text-base leading-relaxed text-slate-700">
            [[La noticia solicitada no existe o fue movida a otra dirección]]
          </p>
          <Button to="/noticias" variant="dark" size="md" icon="arrow_back" iconPosition="left">
            Volver a noticias
          </Button>
        </div>
      </section>
    )
  }

  const related = newsPosts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-page relative flex flex-col gap-6">
          <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-white/60">
            <Link to="/" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <Icon name="chevron_right" className="text-[16px]" />
            <Link to="/noticias" className="transition-colors hover:text-white">
              Noticias
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="glass">{post.category}</Badge>
            <time dateTime={post.date} className="text-xs text-white/70">
              {formatNewsDate(post.date)}
            </time>
          </div>
          <h1 className="display-hero max-w-4xl text-white">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.6fr_0.7fr] lg:items-start">
          <Reveal className="flex flex-col gap-8">
            <div className="overflow-hidden rounded-hero">
              <img
                src={assetPath(post.image)}
                alt={post.title}
                className="h-[20rem] w-full object-cover md:h-[26rem]"
              />
            </div>
            <div className="flex flex-col gap-5">
              {post.body.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button to="/noticias" variant="outline" size="md" icon="arrow_back" iconPosition="left">
              Volver a noticias
            </Button>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-5">
            <h2 className="eyebrow text-slate-600">[[Título de noticias relacionadas]]</h2>
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/noticias/${item.slug}`}
                className="group flex flex-col gap-3 rounded-card border border-brand-900/10 bg-white p-5 transition-colors hover:border-brand-900/25"
              >
                <time dateTime={item.date} className="text-xs text-slate-500">
                  {formatNewsDate(item.date)}
                </time>
                <h3 className="font-display text-base font-semibold leading-snug text-brand-900 transition-colors group-hover:text-brand-600">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-800">
                  Leer noticia
                  <Icon name="arrow_forward" className="text-[18px]" />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}
