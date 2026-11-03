import { useState } from 'react'
import type { FormEvent } from 'react'
import FormField from '@/components/forms/FormField'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/layout/PageHeader'
import Reveal from '@/components/ui/Reveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import { mailtoLink, mapEmbedLink, site, socialLinks, whatsappLink } from '@/lib/site'
import { collectErrors, hasErrors, requireEmail, requireField, requireMinLength, requirePhone } from '@/lib/validation'
import { cn } from '@/lib/utils'

type ContactForm = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  accepted: boolean
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  accepted: false,
}

const subjectOptions = [
  { value: 'informacion', label: '[[Asunto: solicitud de información]]' },
  { value: 'afiliacion', label: '[[Asunto: afiliación]]' },
  { value: 'servicios', label: '[[Asunto: servicios empresariales]]' },
  { value: 'alianzas', label: '[[Asunto: alianzas y convenios]]' },
  { value: 'prensa', label: '[[Asunto: prensa y comunicaciones]]' },
  { value: 'otro', label: '[[Asunto: otro]]' },
]

export default function Contact() {
  usePageMeta({
    title: 'Contacto',
    description: '[[Descripción de la página de contacto de ACOPI Boyacá]]',
    path: '/contacto',
  })

  const [form, setForm] = useState<ContactForm>(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function updateField<K extends keyof ContactForm>(key: K, value: ContactForm[K]): void {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[key]
      return next
    })
  }

  function validate(): Record<string, string> {
    return collectErrors({
      name: requireField(form.name, 'Ingresa tu nombre'),
      email: requireEmail(form.email),
      phone: requirePhone(form.phone),
      subject: requireField(form.subject, 'Selecciona un asunto'),
      message: requireMinLength(form.message, 10, 'Escribe un mensaje de al menos 10 caracteres'),
      accepted: form.accepted ? undefined : 'Debes aceptar el tratamiento de datos personales',
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const validationErrors = validate()

    if (hasErrors(validationErrors)) {
      setErrors(validationErrors)
      return
    }

    setSubmitted(true)
  }

  function resetForm(): void {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  const summary = [
    'Mensaje desde el sitio web - ACOPI Boyacá',
    `Nombre: ${form.name}`,
    `Correo: ${form.email}`,
    `Teléfono: ${form.phone}`,
    `Asunto: ${form.subject}`,
    '',
    form.message,
  ].join('\n')

  return (
    <>
      <PageHeader
        eyebrow="[[Etiqueta de la página de contacto]]"
        title="[[Título de la página de contacto]]"
        description="[[Descripción introductoria para comunicarse con ACOPI Boyacá]]"
        currentLabel="Contacto"
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-slate-600">[[Etiqueta de canales de atención]]</span>
              <h2 className="display-section text-brand-900">[[Título de los canales de atención]]</h2>
              <p className="text-base leading-relaxed text-slate-700">[[Texto introductorio de los canales de atención]]</p>
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                  <Icon name="location_on" className="text-[20px]" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-500">Dirección</span>
                  <span className="text-sm text-brand-900">
                    {site.contact.address}
                    <br />
                    {site.contact.city}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                  <Icon name="schedule" className="text-[20px]" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-500">Horario</span>
                  <span className="text-sm text-brand-900">{site.contact.hours}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                  <Icon name="call" className="text-[20px]" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-500">Teléfono</span>
                  <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`} className="text-sm text-brand-900">
                    {site.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 rounded-2xl bg-white p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-800">
                  <Icon name="mail" className="text-[20px]" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-500">Correo</span>
                  <a
                    href={mailtoLink('Contacto desde el sitio web', 'Hola, quisiera comunicarme con ACOPI Boyacá.')}
                    className="break-all text-sm text-brand-900"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="flex flex-col gap-3">
              <span className="eyebrow text-slate-600">Redes sociales</span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-brand-900/15 text-brand-800 transition-colors hover:border-brand-900/35 hover:bg-white"
                  >
                    <Icon name={social.icon} className="text-[20px]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-card border border-brand-900/10">
              <iframe
                title="[[Ubicación de la sede de ACOPI Boyacá]]"
                src={mapEmbedLink(site.contact.mapQuery)}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-card border border-brand-900/10 bg-surface p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-8 text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-800 text-white">
                    <Icon name="mark_email_read" className="text-[28px]" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-brand-900">
                    [[Título del mensaje de confirmación de contacto]]
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-slate-700">
                    [[Mensaje que explica cómo continuar el contacto]]
                  </p>
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button href={whatsappLink(summary)} variant="dark" size="md" icon="chat">
                      Enviar por WhatsApp
                    </Button>
                    <Button href={mailtoLink('Contacto desde el sitio web', summary)} variant="outline" size="md" icon="mail">
                      Enviar por correo
                    </Button>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-medium text-slate-700 underline underline-offset-4"
                  >
                    Escribir otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-display text-xl font-semibold text-brand-900">
                      [[Título del formulario de contacto]]
                    </h2>
                    <p className="text-sm text-slate-700">[[Texto de apoyo del formulario de contacto]]</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      id="name"
                      label="Nombre completo"
                      value={form.name}
                      onChange={(value) => updateField('name', value)}
                      error={errors.name}
                      placeholder="[[Nombre y apellido]]"
                      autoComplete="name"
                      required
                    />
                    <FormField
                      id="email"
                      label="Correo electrónico"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateField('email', value)}
                      error={errors.email}
                      placeholder="[[correo@empresa.com]]"
                      autoComplete="email"
                      required
                    />
                    <FormField
                      id="phone"
                      label="Teléfono"
                      type="tel"
                      value={form.phone}
                      onChange={(value) => updateField('phone', value)}
                      error={errors.phone}
                      placeholder="[[Número de contacto]]"
                      autoComplete="tel"
                      required
                    />
                    <FormField
                      id="subject"
                      label="Asunto"
                      field="select"
                      value={form.subject}
                      onChange={(value) => updateField('subject', value)}
                      error={errors.subject}
                      options={subjectOptions}
                      required
                    />
                  </div>

                  <FormField
                    id="message"
                    label="Mensaje"
                    field="textarea"
                    value={form.message}
                    onChange={(value) => updateField('message', value)}
                    error={errors.message}
                    placeholder="[[Escribe tu mensaje]]"
                    rows={5}
                    required
                  />

                  <label htmlFor="accepted" className="flex items-start gap-3 text-sm text-slate-700">
                    <input
                      id="accepted"
                      name="accepted"
                      type="checkbox"
                      checked={form.accepted}
                      onChange={(event) => updateField('accepted', event.target.checked)}
                      className={cn('checkbox mt-0.5', errors.accepted ? 'is-invalid' : undefined)}
                      aria-invalid={Boolean(errors.accepted)}
                      aria-describedby={errors.accepted ? 'accepted-error' : undefined}
                    />
                    <span>[[Texto de autorización de tratamiento de datos personales]]</span>
                  </label>
                  {errors.accepted ? (
                    <span id="accepted-error" role="alert" className="-mt-3 text-xs font-medium text-error">
                      {errors.accepted}
                    </span>
                  ) : null}

                  <Button type="submit" variant="dark" size="md" icon="send" fullWidth>
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
