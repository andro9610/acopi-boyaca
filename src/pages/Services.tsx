import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/layout/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { usePageMeta } from '@/hooks/usePageMeta'
import { services } from '@/lib/services'

const steps = [
  {
    icon: 'edit_note',
    title: '[[Paso uno del proceso]]',
    description: '[[Descripción del paso uno del proceso de servicio]]',
  },
  {
    icon: 'clinical_notes',
    title: '[[Paso dos del proceso]]',
    description: '[[Descripción del paso dos del proceso de servicio]]',
  },
  {
    icon: 'rocket_launch',
    title: '[[Paso tres del proceso]]',
    description: '[[Descripción del paso tres del proceso de servicio]]',
  },
]

export default function Services() {
  usePageMeta({
    title: 'Servicios',
    description: '[[Descripción de la página de servicios de ACOPI Boyacá]]',
    path: '/servicios',
  })

  return (
    <>
      <PageHeader
        eyebrow="[[Etiqueta de la página de servicios]]"
        title="[[Título de la página de servicios]]"
        description="[[Descripción introductoria del portafolio de servicios de ACOPI Boyacá]]"
        currentLabel="Servicios"
      />

      <section className="py-20 md:py-28">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="[[Etiqueta del portafolio]]"
              title="[[Título del portafolio de servicios]]"
              description="[[Descripción del portafolio de servicios disponibles para las empresas afiliadas]]"
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <article
                  id={service.slug}
                  className="flex h-full scroll-mt-32 flex-col gap-5 rounded-card border border-brand-900/10 bg-white p-7 transition-shadow duration-300 hover:shadow-card md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                      <Icon name={service.icon} className="text-[24px]" />
                    </span>
                    <span className="font-display text-xs tracking-[0.2em] text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-brand-900 md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700">{service.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5 border-t border-brand-900/10 pt-5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-sm text-brand-900">
                        <Icon name="check_circle" className="mt-0.5 text-[18px] text-brand-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20 md:py-28">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="[[Etiqueta del proceso]]"
              title="[[Título de la sección de proceso]]"
              description="[[Descripción introductoria de cómo acceder a los servicios]]"
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <article className="flex h-full flex-col gap-4 rounded-card border border-brand-900/10 bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent-200 text-brand-800">
                      <Icon name={step.icon} className="text-[24px]" />
                    </span>
                    <span className="font-display text-2xl font-semibold text-brand-900/15">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="flex justify-center">
            <Button to="/afiliacion" variant="dark" size="lg" icon="arrow_forward">
              Iniciar proceso de afiliación
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
