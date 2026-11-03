import Button from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { featuredServices } from '@/lib/services'

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page flex flex-col gap-12">
        <Reveal>
          <SectionHeader
            eyebrow="[[Etiqueta de la sección de servicios]]"
            title="[[Título de la sección de servicios]]"
            description="[[Descripción introductoria de los servicios que ofrece ACOPI Boyacá a sus empresas afiliadas]]"
            action={
              <Button to="/servicios" variant="outline" size="md" icon="arrow_forward">
                Ver todos los servicios
              </Button>
            }
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90}>
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.summary}
                to={`/servicios#${service.slug}`}
                linkLabel="Ver detalle"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
