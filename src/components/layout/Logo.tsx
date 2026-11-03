import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  tone?: 'light' | 'dark'
}

export default function Logo({ className, tone = 'light' }: LogoProps) {
  const isLight = tone === 'light'

  return (
    <Link to="/" className={cn('group flex items-center gap-2.5', className)} aria-label="ACOPI Boyacá, ir al inicio">
      <span
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-full transition-colors duration-300',
          isLight ? 'bg-white text-brand-900' : 'bg-brand-800 text-white',
        )}
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" focusable="false">
          <path d="M12 3.2 20 20.8h-4.3L12 12l-3.7 8.8H4L12 3.2Z" fill="currentColor" />
          <circle cx="12" cy="17.4" r="1.5" fill="currentColor" opacity="0.55" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[15px] font-semibold tracking-tight',
            isLight ? 'text-white' : 'text-brand-900',
          )}
        >
          ACOPI
        </span>
        <span className={cn('text-[11px] tracking-[0.18em]', isLight ? 'text-white/70' : 'text-slate-600')}>
          BOYACÁ
        </span>
      </span>
    </Link>
  )
}
