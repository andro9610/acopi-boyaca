import { createBrowserRouter } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Membership from '@/pages/Membership'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import NotFound from '@/pages/NotFound'
import Services from '@/pages/Services'
import { normalizeBasePath } from '@/lib/utils'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SiteLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'nosotros', element: <About /> },
        { path: 'servicios', element: <Services /> },
        { path: 'afiliacion', element: <Membership /> },
        { path: 'noticias', element: <News /> },
        { path: 'noticias/:slug', element: <NewsDetail /> },
        { path: 'contacto', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: normalizeBasePath(import.meta.env.BASE_URL) },
)
