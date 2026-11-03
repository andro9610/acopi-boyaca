import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  currentLabel: string
}

export default function PageHeader({ eyebrow, title, description, currentLabel }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-full bg-accent-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 size-[22rem] rounded-full bg-brand-400/25 blur-3xl" />
      <div className="container-page relative flex flex-col gap-6">
        <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-white/60">
          <Link to="/" className="transition-colors hover:text-white">
            Inicio
          </Link>
          <Icon name="chevron_right" className="text-[16px]" />
          <span className="text-white">{currentLabel}</span>
        </nav>
        <span className="eyebrow text-accent-300">{eyebrow}</span>
        <h1 className="display-hero max-w-4xl text-white">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-white/75">{description}</p>
      </div>
    </section>
  )
}
