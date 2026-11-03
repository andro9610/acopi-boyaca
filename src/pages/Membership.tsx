import { useState } from 'react'
import type { FormEvent } from 'react'
import FormField from '@/components/forms/FormField'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/layout/PageHeader'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { usePageMeta } from '@/hooks/usePageMeta'
import { mailtoLink, site, whatsappLink } from '@/lib/site'
import { collectErrors, hasErrors, requireEmail, requireField, requireMinLength, requirePhone } from '@/lib/validation'
import { cn } from '@/lib/utils'

type MembershipForm = {
  companyName: string
  nit: string
  sector: string
  companySize: string
  municipality: string
  contactName: string
  role: string
  email: string
  phone: string
  interests: string
  accepted: boolean
}

const initialForm: MembershipForm = {
  companyName: '',
  nit: '',
  sector: '',
  companySize: '',
  municipality: '',
  contactName: '',
  role: '',
  email: '',
  phone: '',
  interests: '',
  accepted: false,
}

const stepLabels = ['Empresa', 'Contacto', 'Detalles']

const sectorOptions = [
  { value: 'manufactura', label: '[[Sector manufactura]]' },
  { value: 'agroindustria', label: '[[Sector agroindustria]]' },
  { value: 'comercio', label: '[[Sector comercio]]' },
  { value: 'servicios', label: '[[Sector servicios]]' },
  { value: 'tecnologia', label: '[[Sector tecnología]]' },
  { value: 'turismo', label: '[[Sector turismo]]' },
  { value: 'otro', label: '[[Otro sector]]' },
]

const sizeOptions = [
  { value: 'micro', label: 'Microempresa' },
  { value: 'pequena', label: 'Pequeña empresa' },
  { value: 'mediana', label: 'Mediana empresa' },
]

const benefits = [
  '[[Beneficio de afiliarse uno]]',
  '[[Beneficio de afiliarse dos]]',
  '[[Beneficio de afiliarse tres]]',
  '[[Beneficio de afiliarse cuatro]]',
]

export default function Membership() {
  usePageMeta({
    title: 'Afiliación',
    description: '[[Descripción de la página de afiliación de ACOPI Boyacá]]',
    path: '/afiliacion',
  })

  const [form, setForm] = useState<MembershipForm>(initialForm)
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function updateField<K extends keyof MembershipForm>(key: K, value: MembershipForm[K]): void {
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[key]
      return next
    })
  }

  function validateStep(currentStep: number): Record<string, string> {
    if (currentStep === 0) {
      return collectErrors({
        companyName: requireField(form.companyName, 'Ingresa la razón social de la empresa'),
        nit: requireMinLength(form.nit, 6, 'Ingresa un NIT válido'),
        sector: requireField(form.sector, 'Selecciona el sector económico'),
        companySize: requireField(form.companySize, 'Selecciona el tamaño de la empresa'),
        municipality: requireField(form.municipality, 'Ingresa el municipio de la empresa'),
      })
    }

    if (currentStep === 1) {
      return collectErrors({
        contactName: requireField(form.contactName, 'Ingresa el nombre del contacto'),
        role: requireField(form.role, 'Ingresa el cargo del contacto'),
        email: requireEmail(form.email),
        phone: requirePhone(form.phone),
      })
    }

    return collectErrors({
      interests: requireMinLength(form.interests, 10, 'Cuéntanos brevemente qué buscas con la afiliación'),
      accepted: form.accepted ? undefined : 'Debes aceptar el tratamiento de datos personales',
    })
  }

  function goNext(): void {
    const stepErrors = validateStep(step)

    if (hasErrors(stepErrors)) {
      setErrors(stepErrors)
      return
    }

    setErrors({})
    setStep((current) => Math.min(current + 1, stepLabels.length - 1))
  }

  function goBack(): void {
    setErrors({})
    setStep((current) => Math.max(current - 1, 0))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const stepErrors = validateStep(step)

    if (hasErrors(stepErrors)) {
      setErrors(stepErrors)
      return
    }

    setSubmitted(true)
  }

  function resetForm(): void {
    setForm(initialForm)
    setErrors({})
    setStep(0)
    setSubmitted(false)
  }

  const summary = [
    'Solicitud de afiliación - ACOPI Boyacá',
    `Empresa: ${form.companyName}`,
    `NIT: ${form.nit}`,
    `Sector: ${form.sector}`,
    `Tamaño: ${form.companySize}`,
    `Municipio: ${form.municipality}`,
    `Contacto: ${form.contactName} (${form.role})`,
    `Correo: ${form.email}`,
    `Teléfono: ${form.phone}`,
    `Intereses: ${form.interests}`,
  ].join('\n')

  return (
    <>
      <PageHeader
        eyebrow="[[Etiqueta de la página de afiliación]]"
        title="[[Título de la página de afiliación]]"
        description="[[Descripción introductoria del proceso de afiliación a ACOPI Boyacá]]"
        currentLabel="Afiliación"
      />

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-slate-600">[[Etiqueta de beneficios]]</span>
              <h2 className="display-section text-brand-900">[[Título de los beneficios de afiliarse]]</h2>
              <p className="text-base leading-relaxed text-slate-700">[[Párrafo introductorio de beneficios]]</p>
            </div>

            <ul className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <Icon name="check_circle" filled className="text-[20px] text-brand-500" />
                  <span className="text-sm text-brand-900">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 rounded-card bg-brand-800 p-6 text-white/80">
              <h3 className="font-display text-lg font-semibold text-white">[[Título del bloque de ayuda]]</h3>
              <p className="text-sm">[[Texto de ayuda para completar el formulario]]</p>
              <a
                href={whatsappLink('Hola, necesito ayuda con el proceso de afiliación a ACOPI Boyacá.')}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-white"
              >
                <Icon name="chat" className="text-[18px]" />
                {site.contact.whatsapp}
              </a>
              <a
                href={mailtoLink('Ayuda con la afiliación', 'Hola, necesito ayuda con el proceso de afiliación.')}
                className="inline-flex items-center gap-2 break-all text-sm font-medium text-white"
              >
                <Icon name="mail" className="text-[18px]" />
                {site.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-card border border-brand-900/10 bg-surface p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-6 text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-800 text-white">
                    <Icon name="check" className="text-[28px]" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-brand-900">
                    [[Título del mensaje de confirmación]]
                  </h2>
                  <p className="max-w-md text-sm leading-relaxed text-slate-700">
                    [[Mensaje que explica cómo continuar el proceso de afiliación]]
                  </p>
                  <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button href={whatsappLink(summary)} variant="dark" size="md" icon="chat">
                      Enviar por WhatsApp
                    </Button>
                    <Button
                      href={mailtoLink(`Solicitud de afiliación - ${form.companyName}`, summary)}
                      variant="outline"
                      size="md"
                      icon="mail"
                    >
                      Enviar por correo
                    </Button>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-medium text-slate-700 underline underline-offset-4"
                  >
                    Registrar otra empresa
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      {stepLabels.map((label, index) => (
                        <div key={label} className="flex flex-1 items-center gap-2">
                          <span
                            className={cn(
                              'inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                              index <= step ? 'bg-brand-800 text-white' : 'bg-brand-900/10 text-slate-600',
                            )}
                          >
                            {index + 1}
                          </span>
                          <span
                            className={cn(
                              'hidden text-xs sm:block',
                              index <= step ? 'text-brand-900' : 'text-slate-500',
                            )}
                          >
                            {label}
                          </span>
                          {index < stepLabels.length - 1 ? (
                            <span
                              className={cn(
                                'h-px flex-1',
                                index < step ? 'bg-brand-800/40' : 'bg-brand-900/10',
                              )}
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">
                      Paso {step + 1} de {stepLabels.length}
                    </p>
                  </div>

                  {step === 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="companyName"
                        label="Razón social"
                        value={form.companyName}
                        onChange={(value) => updateField('companyName', value)}
                        error={errors.companyName}
                        placeholder="[[Nombre de la empresa]]"
                        autoComplete="organization"
                        required
                      />
                      <FormField
                        id="nit"
                        label="NIT"
                        value={form.nit}
                        onChange={(value) => updateField('nit', value)}
                        error={errors.nit}
                        placeholder="[[NIT de la empresa]]"
                        inputMode="numeric"
                        required
                      />
                      <FormField
                        id="sector"
                        label="Sector económico"
                        field="select"
                        value={form.sector}
                        onChange={(value) => updateField('sector', value)}
                        error={errors.sector}
                        options={sectorOptions}
                        required
                      />
                      <FormField
                        id="companySize"
                        label="Tamaño de la empresa"
                        field="select"
                        value={form.companySize}
                        onChange={(value) => updateField('companySize', value)}
                        error={errors.companySize}
                        options={sizeOptions}
                        required
                      />
                      <FormField
                        id="municipality"
                        label="Municipio"
                        value={form.municipality}
                        onChange={(value) => updateField('municipality', value)}
                        error={errors.municipality}
                        placeholder="[[Municipio de Boyacá]]"
                        required
                      />
                    </div>
                  ) : null}

                  {step === 1 ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="contactName"
                        label="Nombre del contacto"
                        value={form.contactName}
                        onChange={(value) => updateField('contactName', value)}
                        error={errors.contactName}
                        placeholder="[[Nombre y apellido]]"
                        autoComplete="name"
                        required
                      />
                      <FormField
                        id="role"
                        label="Cargo"
                        value={form.role}
                        onChange={(value) => updateField('role', value)}
                        error={errors.role}
                        placeholder="[[Cargo en la empresa]]"
                        autoComplete="organization-title"
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
                    </div>
                  ) : null}

                  {step === 2 ? (
                    <div className="flex flex-col gap-5">
                      <FormField
                        id="interests"
                        label="¿Qué buscas con la afiliación?"
                        field="textarea"
                        value={form.interests}
                        onChange={(value) => updateField('interests', value)}
                        error={errors.interests}
                        placeholder="[[Describe brevemente las necesidades de tu empresa]]"
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
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-3 border-t border-brand-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={step === 0}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand-900 disabled:pointer-events-none disabled:opacity-40"
                    >
                      <Icon name="arrow_back" className="text-[18px]" />
                      Atrás
                    </button>

                    {step < stepLabels.length - 1 ? (
                      <Button type="button" onClick={goNext} variant="dark" size="md" icon="arrow_forward">
                        Continuar
                      </Button>
                    ) : (
                      <Button type="submit" variant="dark" size="md" icon="send">
                        Enviar solicitud
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
