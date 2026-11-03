import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  action?: ReactNode
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  action,
  className,
}: SectionHeaderProps) {
  const isLight = tone === 'light'

  return (
    <div
      className={cn(
        'flex flex-col gap-6',
        align === 'center' && 'items-center text-center',
        action ? 'md:flex-row md:items-end md:justify-between' : undefined,
        className,
      )}
    >
      <div className={cn('flex max-w-3xl flex-col gap-4', align === 'center' && 'items-center')}>
        {eyebrow ? (
          <span className={cn('eyebrow', isLight ? 'text-accent-300' : 'text-slate-600')}>{eyebrow}</span>
        ) : null}
        <h2 className={cn('display-section', isLight ? 'text-white' : 'text-brand-900')}>{title}</h2>
        {description ? (
          <p className={cn('text-base leading-relaxed', isLight ? 'text-white/80' : 'text-slate-700')}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
