import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost' | 'light'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  iconPosition?: 'left' | 'right'
  to?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  ariaLabel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800',
  dark: 'bg-brand-700 text-white hover:bg-brand-600 active:bg-brand-800',
  outline: 'border border-brand-700/25 bg-transparent text-brand-700 hover:border-brand-700/50 hover:bg-brand-700/5',
  ghost: 'bg-transparent text-brand-700 hover:bg-brand-700/5',
  light: 'bg-white text-brand-700 hover:bg-slate-100 active:bg-slate-200',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 gap-1.5 px-4 text-sm',
  md: 'h-12 gap-2 px-6 text-sm',
  lg: 'h-14 gap-2.5 px-8 text-base',
}

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: 'text-[18px]',
  md: 'text-[20px]',
  lg: 'text-[22px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  to,
  href,
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium tracking-tight transition-all duration-300 ease-out-soft',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    disabled && 'pointer-events-none opacity-50',
    className,
  )

  const content = (
    <>
      {icon && iconPosition === 'left' ? <Icon name={icon} className={iconSizeStyles[size]} /> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <Icon name={icon} className={iconSizeStyles[size]} /> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer noopener" aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
