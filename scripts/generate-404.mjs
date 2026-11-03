import { writeFileSync } from 'node:fs'

const rawBase = process.env.VITE_BASE ?? '/'
const base = rawBase.replace(/\/+$/, '')

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>ACOPI Boyacá</title>
    <script>
      ;(function () {
        var base = ${JSON.stringify(base)}
        var path = window.location.pathname
        if (base && path.indexOf(base) === 0) {
          path = path.slice(base.length)
        }
        var pending = (path || '/') + window.location.search + window.location.hash
        window.sessionStorage.setItem('spa:redirect', pending)
        window.location.replace(base + '/index.html')
      })()
    </script>
  </head>
  <body></body>
</html>
`

writeFileSync('dist/404.html', html, 'utf8')
writeFileSync('dist/.nojekyll', '', 'utf8')
