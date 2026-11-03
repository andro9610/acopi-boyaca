import AboutPreview from '@/components/home/AboutPreview'
import CtaBanner from '@/components/home/CtaBanner'
import Hero from '@/components/home/Hero'
import NewsSection from '@/components/home/NewsSection'
import ServicesSection from '@/components/home/ServicesSection'
import StatsBand from '@/components/home/StatsBand'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    description: '[[Descripción de la página de inicio de ACOPI Boyacá]]',
    path: '/',
  })

  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesSection />
      <AboutPreview />
      <NewsSection />
      <CtaBanner />
    </>
  )
}
