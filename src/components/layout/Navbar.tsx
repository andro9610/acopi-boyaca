import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import Logo from '@/components/layout/Logo'
import { ctaNavItem, navItems } from '@/lib/navigation'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-5">
      <div className="container-page">
        <div
          className={cn(
            'flex items-center justify-between gap-4 rounded-full px-3 py-2.5 transition-all duration-300 ease-out-soft md:px-5',
            scrolled || open ? 'glass-dark shadow-float' : 'border border-transparent',
          )}
        >
          <Logo />

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3.5 py-2 text-sm transition-colors duration-200',
                    isActive ? 'text-white' : 'text-white/70 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button to={ctaNavItem.to} size="sm" variant="primary" className="hidden sm:inline-flex">
              {ctaNavItem.label}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <Icon name={open ? 'close' : 'menu'} className="text-[24px]" />
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            'mt-2 overflow-hidden rounded-card glass-dark transition-all duration-300 ease-out-soft lg:hidden',
            open
              ? 'visible max-h-[32rem] opacity-100'
              : 'invisible pointer-events-none max-h-0 border-transparent opacity-0',
          )}
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors',
                    isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5',
                  )
                }
              >
                {item.label}
                <Icon name="chevron_right" className="text-[18px]" />
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button to={ctaNavItem.to} variant="primary" size="md" fullWidth icon="arrow_forward">
                {ctaNavItem.label}
              </Button>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-xs text-white/70"
              >
                <Icon name="call" className="text-[16px]" />
                {site.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
