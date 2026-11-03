import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

type FeatureCardTone = 'surface' | 'dark' | 'accent'

type FeatureCardProps = {
  icon: string
  title: string
  description: string
  to?: string
  linkLabel?: string
  tone?: FeatureCardTone
  className?: string
}

const toneStyles: Record<FeatureCardTone, string> = {
  surface: 'bg-white text-brand-900 border border-brand-900/10',
  dark: 'bg-brand-700 text-white border border-white/10',
  accent: 'bg-accent-600 text-white border border-white/10',
}

const iconStyles: Record<FeatureCardTone, string> = {
  surface: 'bg-brand-700/8 text-brand-700',
  dark: 'bg-white/12 text-white',
  accent: 'bg-white/15 text-white',
}

const linkStyles: Record<FeatureCardTone, string> = {
  surface: 'text-brand-700 hover:text-accent-600',
  dark: 'text-white hover:text-white/70',
  accent: 'text-white hover:text-white/70',
}

const descriptionStyles: Record<FeatureCardTone, string> = {
  surface: 'text-slate-700',
  dark: 'text-white/75',
  accent: 'text-white/80',
}

export default function FeatureCard({
  icon,
  title,
  description,
  to,
  linkLabel = 'Conocer más',
  tone = 'surface',
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-5 rounded-card p-6 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-card md:p-8',
        toneStyles[tone],
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex size-12 items-center justify-center rounded-full',
          iconStyles[tone],
        )}
      >
        <Icon name={icon} className="text-[24px]" />
      </span>
      <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>
      <p className={cn('text-sm leading-relaxed', descriptionStyles[tone])}>{description}</p>
      {to ? (
        <Link
          to={to}
          className={cn(
            'mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors',
            linkStyles[tone],
          )}
        >
          {linkLabel}
          <Icon name="arrow_outward" className="text-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </article>
  )
}
