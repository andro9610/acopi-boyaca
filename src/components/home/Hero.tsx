import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import StatItem from '@/components/ui/StatItem'
import { assetPath } from '@/lib/utils'

const heroStats = [
  { value: '[[000+]]', label: 'Empresas afiliadas' },
  { value: '[[00]]', label: 'Años de trayectoria' },
  { value: '[[00]]', label: 'Municipios cubiertos' },
]

export default function Hero() {
  return (
    <section className="relative px-2.5 pt-2.5 md:px-4 md:pt-4">
      <div className="relative overflow-hidden rounded-hero">
        <img
          src={assetPath('/images/hero.svg')}
          alt="[[Descripción de la imagen principal del hero]]"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />

        <div className="relative flex min-h-[88dvh] flex-col justify-end pb-10 pt-28 md:min-h-[92dvh] md:pb-16">
          <div className="container-page w-full">
            <div className="grid gap-12 lg:grid-cols-[9rem_minmax(0,1fr)_19rem] lg:items-end lg:gap-6">
              <div className="hidden flex-col gap-14 lg:flex">
                {heroStats.map((stat) => (
                  <StatItem key={stat.label} value={stat.value} label={stat.label} tone="light" />
                ))}
              </div>

              <div className="flex flex-col items-start gap-8">
                <Icon name="graphic_eq" className="animate-reveal text-[34px] text-white/85" />
                <h1 className="display-hero text-white">
                  <span className="block">[[Titular</span>
                  <span className="block">principal</span>
                  <span className="block">del hero]]</span>
                </h1>
                <Button to="/servicios" variant="primary" size="lg" className="min-w-56 justify-center">
                  Ver servicios
                </Button>
                <p className="eyebrow text-white/75">[[Claim corto institucional]]</p>
              </div>

              <div className="flex w-full max-w-xs flex-col gap-3 lg:max-w-none">
                <div className="flex flex-col gap-4 rounded-card bg-accent-600 p-5 shadow-float">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <p className="font-display text-lg font-semibold leading-tight text-white">
                      [[Título del destacado]]
                    </p>
                    <p className="text-sm text-white/80">[[Subtítulo del destacado]]</p>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={assetPath('/images/news-2.svg')}
                      alt="[[Descripción del contenido destacado]]"
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                    <Badge tone="white" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      [[Etiqueta]]
                    </Badge>
                  </div>
                </div>
                <p className="text-center text-xs text-white/80">[[Texto bajo la tarjeta destacada]]</p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 lg:hidden">
              {heroStats.map((stat) => (
                <StatItem key={stat.label} value={stat.value} label={stat.label} tone="light" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
