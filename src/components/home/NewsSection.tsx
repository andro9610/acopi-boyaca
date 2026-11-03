import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import NewsCard from '@/components/shared/NewsCard'
import { featuredNews } from '@/lib/news'

export default function NewsSection() {
  return (
    <section className="bg-surface-muted py-20 md:py-28">
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeader
            eyebrow="[[Etiqueta de la sección de noticias]]"
            title="[[Título de la sección de noticias]]"
            description="[[Descripción introductoria de las noticias y novedades gremiales]]"
            action={
              <Button to="/noticias" variant="outline" size="md" icon="arrow_forward">
                Ver todas las noticias
              </Button>
            }
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredNews.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <NewsCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
