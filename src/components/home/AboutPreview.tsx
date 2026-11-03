import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import { assetPath } from '@/lib/utils'

const highlights = [
  {
    icon: 'verified',
    title: '[[Atributo diferencial uno]]',
    description: '[[Descripción del atributo diferencial uno]]',
  },
  {
    icon: 'insights',
    title: '[[Atributo diferencial dos]]',
    description: '[[Descripción del atributo diferencial dos]]',
  },
  {
    icon: 'handshake',
    title: '[[Atributo diferencial tres]]',
    description: '[[Descripción del atributo diferencial tres]]',
  },
]

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-hero">
            <img
              src={assetPath('/images/news-3.svg')}
              alt="[[Descripción de la imagen de la sección institucional]]"
              className="h-[22rem] w-full object-cover md:h-[30rem]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-card md:left-10">
            <p className="font-display text-2xl font-semibold text-brand-900">[[00]]</p>
            <p className="text-xs text-slate-700">[[Dato destacado de la tarjeta]]</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-7">
          <span className="eyebrow text-slate-600">[[Etiqueta de la sección institucional]]</span>
          <h2 className="display-section text-brand-900">[[Título de la sección institucional]]</h2>
          <p className="text-base leading-relaxed text-slate-700">[[Párrafo introductorio sobre ACOPI Boyacá]]</p>

          <ul className="flex flex-col gap-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                  <Icon name={item.icon} className="text-[20px]" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-base font-semibold text-brand-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button to="/nosotros" variant="dark" size="md" icon="arrow_forward" className="w-fit">
            Conoce ACOPI Boyacá
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
