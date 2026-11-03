import Reveal from '@/components/ui/Reveal'
import StatItem from '@/components/ui/StatItem'

const stats = [
  { value: '[[000+]]', label: 'Empresas afiliadas en Boyacá' },
  { value: '[[00]]', label: 'Años acompañando al sector productivo' },
  { value: '[[00]]', label: 'Municipios con presencia gremial' },
  { value: '[[000]]', label: 'Eventos y capacitaciones al año' },
]

export default function StatsBand() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <Reveal className="rounded-hero bg-brand-800 px-6 py-10 md:px-12 md:py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} tone="light" />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
