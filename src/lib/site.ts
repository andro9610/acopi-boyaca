export type SocialLink = {
  label: string
  icon: string
  href: string
}

const fallback = {
  email: 'contacto@acopi-boyaca.org.co',
  phone: '+57 000 000 0000',
  whatsapp: '573000000000',
}

export const site = {
  name: 'ACOPI Boyacá',
  legalName: '[[Razón social completa de ACOPI Boyacá]]',
  domain: 'acopi-boyaca.org.co',
  url: 'https://acopi-boyaca.org.co',
  tagline: '[[Lema institucional por definir]]',
  description: '[[Descripción institucional de ACOPI Boyacá para buscadores]]',
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || fallback.email,
    phone: import.meta.env.VITE_CONTACT_PHONE || fallback.phone,
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || fallback.whatsapp,
    address: '[[Dirección de la sede principal]]',
    city: '[[Ciudad]], Boyacá, Colombia',
    hours: '[[Horario de atención al público]]',
    mapQuery: '[[Dirección de la sede principal]], Boyacá, Colombia',
  },
} as const

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: 'public', href: '[[URL del perfil de Facebook]]' },
  { label: 'Instagram', icon: 'photo_camera', href: '[[URL del perfil de Instagram]]' },
  { label: 'LinkedIn', icon: 'work', href: '[[URL del perfil de LinkedIn]]' },
  { label: 'YouTube', icon: 'play_circle', href: '[[URL del canal de YouTube]]' },
]

export function whatsappLink(message: string): string {
  const digits = site.contact.whatsapp.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function mapEmbedLink(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}
