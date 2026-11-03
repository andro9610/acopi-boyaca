import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgeTone = 'white' | 'accent' | 'brand' | 'glass' | 'outline'

type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

const toneStyles: Record<BadgeTone, string> = {
  white: 'bg-white text-brand-700',
  accent: 'bg-accent-600 text-white',
  brand: 'bg-brand-700 text-white',
  glass: 'glass-dark text-white',
  outline: 'border border-brand-700/25 text-brand-700',
}

export default function Badge({ children, tone = 'white', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight',
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
