import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'

export default function CtaBanner() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-hero bg-brand-900 px-6 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-accent-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-brand-400/25 blur-3xl" />

          <div className="relative flex flex-col items-start gap-8 md:max-w-2xl">
            <span className="eyebrow text-accent-300">[[Etiqueta del llamado a la acción]]</span>
            <h2 className="display-section text-white">[[Título del llamado a la acción]]</h2>
            <p className="text-base leading-relaxed text-white/75">[[Descripción del llamado a la acción]]</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/afiliacion" variant="primary" size="lg" icon="arrow_forward">
                Quiero afiliarme
              </Button>
              <Button to="/contacto" variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
                Hablar con el equipo
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
