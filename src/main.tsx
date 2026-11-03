import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/sora'
import '@fontsource-variable/inter'
import 'material-symbols/rounded.css'
import App from './App'
import './styles/theme.css'

const REDIRECT_KEY = 'spa:redirect'
const pendingPath = window.sessionStorage.getItem(REDIRECT_KEY)

if (pendingPath) {
  window.sessionStorage.removeItem(REDIRECT_KEY)
  const base = import.meta.env.BASE_URL
  window.history.replaceState(null, '', `${base}${pendingPath.replace(/^\/+/, '')}`)
}

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
