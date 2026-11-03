# ACOPI Boyacá

Sitio oficial de ACOPI Boyacá, construido sobre Vite + React + TypeScript con React Router, Tailwind CSS 4 y FlyonUI. El layout base reproduce el hero de referencia acordado: imagen a sangre completa con esquinas redondeadas, navegación flotante, métricas laterales, titular de gran formato, botón tipo pill y tarjeta destacada.

## Stack

| Capa | Tecnología |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 + TypeScript 7 |
| Rutas | React Router 7 en modo declarativo |
| Estilos | Tailwind CSS 4 |
| Componentes | FlyonUI 2 |
| Iconos | material-symbols (rounded) |
| Tipografías | Sora (display) e Inter (texto) vía Fontsource |

## Requisitos

- Node.js 20.19 o superior
- npm 10 o superior

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
```

`npm run build` ejecuta la verificación de tipos, compila el sitio y genera de forma automática `dist/404.html` y `dist/.nojekyll` mediante `scripts/generate-404.mjs`.

## Estructura

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── images/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/generate-404.mjs
├── src/
│   ├── components/
│   │   ├── forms/FormField.tsx
│   │   ├── home/
│   │   ├── layout/
│   │   ├── shared/
│   │   └── ui/
│   ├── hooks/usePageMeta.ts
│   ├── lib/
│   ├── pages/
│   ├── styles/theme.css
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
├── index.html
├── tsconfig.json
└── vite.config.ts
```

## Rutas

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/nosotros` | Nosotros |
| `/servicios` | Servicios |
| `/afiliacion` | Afiliación |
| `/noticias` | Noticias |
| `/noticias/:slug` | Detalle de noticia |
| `/contacto` | Contacto |
| `*` | Página no encontrada |

## Convención de contenido pendiente

Todo texto marcado entre dobles corchetes es un placeholder que debe reemplazarse antes de publicar:

```text
[[Titular principal del hero]]
```

Para localizar rápido todo el contenido pendiente:

```bash
npx rg -n "\[\[" src public index.html
```

### Dónde se edita cada contenido

| Contenido | Archivo |
| --- | --- |
| Nombre, lema, datos de contacto y redes | `src/lib/site.ts` |
| Elementos del menú | `src/lib/navigation.ts` |
| Catálogo de servicios | `src/lib/services.ts` |
| Noticias y fechas | `src/lib/news.ts` |
| Textos de secciones institucionales | archivos dentro de `src/pages/` |
| Metadatos base y Open Graph | `index.html` |
| Imágenes de referencia | `public/images/` |

Las secciones institucionales mantienen sus textos dentro de cada página, mientras que las colecciones (servicios y noticias) se centralizan en `src/lib` para que el pie de página y las vistas de inicio compartan una única fuente de verdad.

## Sistema de diseño

Los tokens viven en `src/styles/theme.css` dentro del bloque `@theme`, por lo que cualquier cambio de color, tipografía o radio se propaga a todo el sitio.

La identidad se construye con tres colores:

| Color | Hex | Rol |
| --- | --- | --- |
| Añil | `#2A2368` | Superficies principales, navbar, encabezados, textos |
| Blanco | `#FFFFFF` | Fondo general, tarjetas y texto sobre añil o rojo |
| Rojo | `#BD0C2C` | Acento: botones primarios, tarjeta destacada del hero, chips y llamados |

Escalas derivadas:

- `brand` contiene la escala del añil, con `brand-700` como valor base
- `accent` contiene la escala del rojo, con `accent-600` como valor base
- `slate` es la escala neutra derivada del añil para texto secundario y bordes
- `surface` es blanco y `surface-muted` es el gris muy claro para alternar secciones
- Utilidades propias: `container-page`, `glass-dark`, `glass-panel`, `hero-overlay`, `display-hero`, `display-section`, `eyebrow`, `animate-reveal`

## Formularios

Los formularios de Afiliación y Contacto validan en cliente y no dependen de un backend. Al enviar, la interfaz muestra un panel de confirmación con dos salidas reales:

- Enlace a WhatsApp con el resumen de la solicitud prellenado
- Enlace `mailto:` con asunto y cuerpo prellenados

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `VITE_BASE` | Base del sitio y del router, útil para GitHub Pages en subruta |
| `VITE_CONTACT_EMAIL` | Correo institucional |
| `VITE_CONTACT_PHONE` | Teléfono institucional |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp en formato internacional sin signos |

Si una variable no se define, se usa el valor de respaldo declarado en `src/lib/site.ts`.

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica en Pages en cada push a `main`.

1. En el repositorio, habilita `Settings > Pages > Build and deployment > Source: GitHub Actions`.
2. Define la variable `VITE_BASE` en `Settings > Secrets and variables > Actions > Variables`:
   - Repositorio servido como `usuario.github.io/acopi-boyaca/`: `/acopi-boyaca/`
   - Dominio propio `acopi-boyaca.org.co`: `/`
3. Si no defines la variable, el workflow usa `/<nombre-del-repositorio>/`.
4. Opcionalmente define `VITE_CONTACT_EMAIL`, `VITE_CONTACT_PHONE` y `VITE_WHATSAPP_NUMBER`.

### Dominio propio

1. Configura el dominio en `Settings > Pages > Custom domain`.
2. Crea los registros DNS indicados por GitHub: `A` para el dominio raíz y `CNAME` para `www`.
3. Marca `Enforce HTTPS`.
4. Define `VITE_BASE` con el valor `/`.

Las rutas profundas funcionan mediante `dist/404.html`, que guarda la ruta solicitada y la restaura al cargar la aplicación, por lo que no es necesario usar `HashRouter`.

## Rendimiento

- La hoja de estilos de `material-symbols` incluye la fuente completa, que ronda los 5,4 MB sin comprimir. Si el peso es crítico, genera una fuente con subconjunto de iconos usando los nombres efectivamente utilizados en `src` y reemplaza el import `material-symbols/rounded.css` de `src/main.tsx`.
- Las tipografías y los iconos se sirven de forma local mediante Fontsource y `material-symbols`, sin peticiones a dominios externos. Los imports viven en `src/main.tsx` para que Vite resuelva y emita los archivos `woff2` correctamente.
- Las imágenes de `public/images` son SVG de referencia; al sustituirlas por fotografías usa WebP o AVIF y conserva las dimensiones declaradas en los componentes.

## Verificación antes de publicar

```bash
npm run typecheck
npm run build
```

Revisa además:

- Reemplazo completo de los textos entre `[[ ]]`
- Sustitución de `public/images/*.svg` por fotografías definitivas en formato WebP o AVIF
- Metadatos y `og:image` definitivos
- Datos reales de contacto, redes sociales y mapa
