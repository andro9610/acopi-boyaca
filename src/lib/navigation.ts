export type NavItem = {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Afiliación', to: '/afiliacion' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Contacto', to: '/contacto' },
]

export const ctaNavItem: NavItem = { label: 'Afíliate', to: '/afiliacion' }
