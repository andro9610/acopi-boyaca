import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/layout/PageHeader'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import StatItem from '@/components/ui/StatItem'
import { usePageMeta } from '@/hooks/usePageMeta'
import { assetPath } from '@/lib/utils'

const pillars = [
  {
    icon: 'flag',
    title: 'Misión',
    description: '[[Texto de la misión institucional de ACOPI Boyacá]]',
  },
  {
    icon: 'visibility',
    title: 'Visión',
    description: '[[Texto de la visión institucional de ACOPI Boyacá]]',
  },
  {
    icon: 'diversity_3',
    title: 'Propósito',
    description: '[[Texto del propósito institucional de ACOPI Boyacá]]',
  },
]

const values = [
  { icon: 'handshake', title: '[[Valor uno]]', description: '[[Descripción del valor uno]]' },
  { icon: 'lightbulb', title: '[[Valor dos]]', description: '[[Descripción del valor dos]]' },
  { icon: 'balance', title: '[[Valor tres]]', description: '[[Descripción del valor tres]]' },
  { icon: 'groups', title: '[[Valor cuatro]]', description: '[[Descripción del valor cuatro]]' },
  { icon: 'trending_up', title: '[[Valor cinco]]', description: '[[Descripción del valor cinco]]' },
  { icon: 'public', title: '[[Valor seis]]', description: '[[Descripción del valor seis]]' },
]

const team = [
  { name: '[[Nombre completo]]', role: '[[Cargo en la junta directiva]]' },
  { name: '[[Nombre completo]]', role: '[[Cargo en la junta directiva]]' },
  { name: '[[Nombre completo]]', role: '[[Cargo en la junta directiva]]' },
  { name: '[[Nombre completo]]', role: '[[Cargo en la junta directiva]]' },
]

function getInitials(name: string): string {
  return name
    .replace(/[[\]]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export default function About() {
  usePageMeta({
    title: 'Nosotros',
    description: '[[Descripción de la página institucional de ACOPI Boyacá]]',
    path: '/nosotros',
  })

  return (
    <>
      <PageHeader
        eyebrow="[[Etiqueta de la página nosotros]]"
        title="[[Título de la página nosotros]]"
        description="[[Descripción introductoria de la página institucional de ACOPI Boyacá]]"
        currentLabel="Nosotros"
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow text-slate-600">[[Etiqueta de la historia]]</span>
            <h2 className="display-section text-brand-900">[[Título de la historia institucional]]</h2>
            <p className="text-base leading-relaxed text-slate-700">[[Primer párrafo de la historia institucional]]</p>
            <p className="text-base leading-relaxed text-slate-700">[[Segundo párrafo de la historia institucional]]</p>
            <div className="grid grid-cols-2 gap-6 border-t border-brand-900/10 pt-8">
              <StatItem value="[[00]]" label="Años de trayectoria" />
              <StatItem value="[[000+]]" label="Empresas acompañadas" />
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-hero">
            <img
              src={assetPath('/images/hero.svg')}
              alt="[[Descripción de la imagen de la historia institucional]]"
              className="h-[24rem] w-full object-cover md:h-[32rem]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-muted py-20 md:py-28">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="[[Etiqueta de misión y visión]]"
              title="[[Título de misión y visión]]"
              description="[[Descripción introductoria de misión, visión y propósito]]"
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <article className="flex h-full flex-col gap-4 rounded-card border border-brand-900/10 bg-white p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent-200 text-brand-800">
                    <Icon name={pillar.icon} className="text-[24px]" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-brand-900">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{pillar.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              eyebrow="[[Etiqueta de valores]]"
              title="[[Título de la sección de valores]]"
              description="[[Descripción introductoria de los valores corporativos]]"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="flex h-full items-start gap-4 rounded-card border border-brand-900/10 bg-white p-6">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                    <Icon name={value.icon} className="text-[20px]" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-base font-semibold text-brand-900">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-700">{value.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 md:py-28">
        <div className="container-page flex flex-col gap-12">
          <Reveal>
            <SectionHeader
              tone="light"
              eyebrow="[[Etiqueta de la junta directiva]]"
              title="[[Título de la junta directiva]]"
              description="[[Descripción introductoria del equipo directivo]]"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={`${member.name}-${index}`} delay={index * 80}>
                <article className="flex h-full flex-col items-center gap-4 rounded-card border border-white/10 bg-white/5 p-7 text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-white font-display text-lg font-semibold text-brand-900">
                    {getInitials(member.name)}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-base font-semibold text-white">{member.name}</h3>
                    <p className="text-xs text-white/70">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="flex justify-center">
            <Button to="/contacto" variant="primary" size="lg" icon="arrow_forward">
              Contactar a ACOPI Boyacá
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
