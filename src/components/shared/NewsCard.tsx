import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import Badge from '@/components/ui/Badge'
import { formatNewsDate } from '@/lib/news'
import type { NewsPost } from '@/lib/news'
import { assetPath } from '@/lib/utils'

type NewsCardProps = {
  post: NewsPost
}

export default function NewsCard({ post }: NewsCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-card border border-brand-900/10 bg-white transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-card">
      <Link to={`/noticias/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-16/10 overflow-hidden">
          <img
            src={assetPath(post.image)}
            alt={post.title}
            className="size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
            loading="lazy"
          />
          <Badge tone="white" className="absolute left-4 top-4">
            {post.category}
          </Badge>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <time dateTime={post.date} className="text-xs text-slate-500">
            {formatNewsDate(post.date)}
          </time>
          <h3 className="font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-brand-600">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-slate-700">{post.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-brand-800">
            Leer noticia
            <Icon name="arrow_forward" className="text-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  )
}
