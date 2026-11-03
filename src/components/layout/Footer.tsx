import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import Logo from '@/components/layout/Logo'
import { navItems } from '@/lib/navigation'
import { mailtoLink, site, socialLinks, whatsappLink } from '@/lib/site'
import { serviceLinks } from '@/lib/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-white/70">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed">
              [[Descripción corta institucional de ACOPI Boyacá para el pie de página]]
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition-colors hover:border-white/25 hover:text-white"
                >
                  <Icon name={social.icon} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Enlaces del sitio" className="flex flex-col gap-3">
            <h3 className="eyebrow text-white">Navegación</h3>
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="text-sm transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Servicios" className="flex flex-col gap-3">
            <h3 className="eyebrow text-white">Servicios</h3>
            {serviceLinks.map((service) => (
              <Link
                key={service.slug}
                to={`/servicios#${service.slug}`}
                className="text-sm transition-colors hover:text-white"
              >
                {service.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h3 className="eyebrow text-white">Contacto</h3>
            <span className="flex items-start gap-2 text-sm leading-relaxed">
              <Icon name="location_on" className="mt-0.5 text-[18px]" />
              <span>
                {site.contact.address}
                <br />
                {site.contact.city}
              </span>
            </span>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
              <Icon name="call" className="text-[18px]" />
              {site.contact.phone}
            </a>
            <a
              href={mailtoLink('Solicitud de información', 'Hola, quisiera recibir información sobre ACOPI Boyacá.')}
              className="flex items-center gap-2 break-all text-sm transition-colors hover:text-white"
            >
              <Icon name="mail" className="text-[18px]" />
              {site.contact.email}
            </a>
            <a
              href={whatsappLink('Hola, quisiera recibir información sobre ACOPI Boyacá.')}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
              <Icon name="chat" className="text-[18px]" />
              Escríbenos por WhatsApp
            </a>
            <span className="flex items-center gap-2 text-sm">
              <Icon name="schedule" className="text-[18px]" />
              {site.contact.hours}
            </span>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/contacto" className="transition-colors hover:text-white">
              [[Política de tratamiento de datos]]
            </Link>
            <span className="text-white/40">{site.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
