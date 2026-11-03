import PageHeader from '@/components/layout/PageHeader'
import NewsCard from '@/components/shared/NewsCard'
import Reveal from '@/components/ui/Reveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import { newsPosts } from '@/lib/news'

export default function News() {
  usePageMeta({
    title: 'Noticias',
    description: '[[Descripción de la página de noticias de ACOPI Boyacá]]',
    path: '/noticias',
  })

  return (
    <>
      <PageHeader
        eyebrow="[[Etiqueta de la página de noticias]]"
        title="[[Título de la página de noticias]]"
        description="[[Descripción introductoria de las noticias y novedades de ACOPI Boyacá]]"
        currentLabel="Noticias"
      />

      <section className="py-20 md:py-28">
        <div className="container-page flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-slate-600">[[Etiqueta del archivo de noticias]]</span>
            <h2 className="display-section text-brand-900">[[Título del archivo de noticias]]</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 70}>
                <NewsCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
