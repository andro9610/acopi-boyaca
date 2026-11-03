/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE: string | undefined
  readonly VITE_CONTACT_EMAIL: string | undefined
  readonly VITE_CONTACT_PHONE: string | undefined
  readonly VITE_WHATSAPP_NUMBER: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
