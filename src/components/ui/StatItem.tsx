import { cn } from '@/lib/utils'

type StatItemProps = {
  value: string
  label: string
  tone?: 'light' | 'dark'
  className?: string
}

export default function StatItem({ value, label, tone = 'dark', className }: StatItemProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <span
        className={cn(
          'font-display text-3xl font-semibold tracking-tight md:text-4xl',
          tone === 'light' ? 'text-white' : 'text-brand-900',
        )}
      >
        {value}
      </span>
      <span className={cn('text-xs leading-snug', tone === 'light' ? 'text-white/80' : 'text-slate-700')}>
        {label}
      </span>
    </div>
  )
}
