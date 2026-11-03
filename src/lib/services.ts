export type Service = {
  slug: string
  icon: string
  title: string
  summary: string
  description: string
  benefits: string[]
}

export const services: Service[] = [
  {
    slug: 'representacion-gremial',
    icon: 'groups',
    title: 'Representación gremial',
    summary: '[[Resumen del servicio de representación gremial]]',
    description:
      '[[Descripción del servicio de representación gremial ante entidades públicas y privadas del departamento]]',
    benefits: [
      '[[Beneficio uno de representación gremial]]',
      '[[Beneficio dos de representación gremial]]',
      '[[Beneficio tres de representación gremial]]',
    ],
  },
  {
    slug: 'asesoria-empresarial',
    icon: 'support_agent',
    title: 'Asesoría empresarial',
    summary: '[[Resumen del servicio de asesoría empresarial]]',
    description: '[[Descripción del servicio de asesoría y acompañamiento técnico a las empresas afiliadas]]',
    benefits: [
      '[[Beneficio uno de asesoría empresarial]]',
      '[[Beneficio dos de asesoría empresarial]]',
      '[[Beneficio tres de asesoría empresarial]]',
    ],
  },
  {
    slug: 'formacion',
    icon: 'school',
    title: 'Formación y capacitación',
    summary: '[[Resumen del servicio de formación y capacitación]]',
    description: '[[Descripción de los programas de formación, talleres y capacitaciones para empresarios]]',
    benefits: [
      '[[Beneficio uno de formación]]',
      '[[Beneficio dos de formación]]',
      '[[Beneficio tres de formación]]',
    ],
  },
  {
    slug: 'convocatorias',
    icon: 'handshake',
    title: 'Convocatorias y alianzas',
    summary: '[[Resumen del servicio de convocatorias y alianzas]]',
    description: '[[Descripción del acompañamiento en convocatorias públicas y privadas y gestión de alianzas]]',
    benefits: [
      '[[Beneficio uno de convocatorias]]',
      '[[Beneficio dos de convocatorias]]',
      '[[Beneficio tres de convocatorias]]',
    ],
  },
  {
    slug: 'internacionalizacion',
    icon: 'travel_explore',
    title: 'Internacionalización',
    summary: '[[Resumen del servicio de internacionalización]]',
    description: '[[Descripción de las acciones de acompañamiento para la apertura de nuevos mercados]]',
    benefits: [
      '[[Beneficio uno de internacionalización]]',
      '[[Beneficio dos de internacionalización]]',
      '[[Beneficio tres de internacionalización]]',
    ],
  },
  {
    slug: 'asesoria-juridica',
    icon: 'gavel',
    title: 'Asesoría jurídica',
    summary: '[[Resumen del servicio de asesoría jurídica]]',
    description: '[[Descripción del acompañamiento normativo y jurídico para las empresas afiliadas]]',
    benefits: [
      '[[Beneficio uno de asesoría jurídica]]',
      '[[Beneficio dos de asesoría jurídica]]',
      '[[Beneficio tres de asesoría jurídica]]',
    ],
  },
]

export const serviceLinks = services.map((service) => ({
  slug: service.slug,
  label: service.title,
}))

export const featuredServices = services.slice(0, 3)
