import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type IconProps = {
  name: string
  filled?: boolean
  weight?: 300 | 400 | 500 | 600
  className?: string
  style?: CSSProperties
}

export default function Icon({ name, filled = false, weight = 400, className, style }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'material-symbols-rounded inline-flex shrink-0 select-none items-center justify-center leading-none',
        className,
      )}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        ...style,
      }}
    >
      {name}
    </span>
  )
}
