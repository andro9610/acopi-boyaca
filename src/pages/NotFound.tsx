import Button from '@/components/ui/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Página no encontrada',
    description: '[[Página no encontrada]]',
    path: '/404',
  })

  return (
    <section className="relative overflow-hidden bg-brand-900 py-32 md:py-44">
      <div className="pointer-events-none absolute -right-20 -top-24 size-[24rem] rounded-full bg-accent-600/25 blur-3xl" />
      <div className="container-page relative flex max-w-2xl flex-col items-start gap-7">
        <span className="eyebrow text-accent-300">Error 404</span>
        <h1 className="display-hero text-white">[[Título de página no encontrada]]</h1>
        <p className="text-base leading-relaxed text-white/75">
          [[Mensaje que explica que la página solicitada no existe]]
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/" variant="primary" size="lg" icon="home">
            Ir al inicio
          </Button>
          <Button to="/contacto" variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
            Contactar a ACOPI
          </Button>
        </div>
      </div>
    </section>
  )
}
