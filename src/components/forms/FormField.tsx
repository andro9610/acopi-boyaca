import { cn } from '@/lib/utils'

type FormFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  hint?: string
  type?: 'text' | 'email' | 'tel' | 'number' | 'date'
  field?: 'input' | 'textarea' | 'select'
  placeholder?: string
  autoComplete?: string
  inputMode?: 'text' | 'numeric' | 'tel' | 'email'
  required?: boolean
  options?: Array<{ value: string; label: string }>
  rows?: number
}

export default function FormField({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  type = 'text',
  field = 'input',
  placeholder,
  autoComplete,
  inputMode,
  required = false,
  options,
  rows = 4,
}: FormFieldProps) {
  const fieldClasses = cn(
    field === 'textarea' ? 'textarea' : field === 'select' ? 'select' : 'input',
    'w-full rounded-xl border border-brand-900/15 bg-white text-brand-900',
    field === 'select' ? 'min-h-11 px-3 py-2.5' : undefined,
    error ? 'is-invalid' : undefined,
  )

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="label-text">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>

      {field === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={rows}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={fieldClasses}
        />
      ) : field === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={fieldClasses}
        >
          <option value="">{placeholder ?? 'Selecciona una opción'}</option>
          {(options ?? []).map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={fieldClasses}
        />
      )}

      {hint && !error ? (
        <span id={`${id}-hint`} className="helper-text">
          {hint}
        </span>
      ) : null}

      {error ? (
        <span id={`${id}-error`} role="alert" className="text-xs font-medium text-error">
          {error}
        </span>
      ) : null}
    </div>
  )
}
