# Portafolio Gonzalo

Portafolio full-stack con Next.js y un panel de contenido Sanity en `/studio`.

## Inicio local

1. Copia `.env.example` a `.env.local`.
2. Crea un proyecto en [Sanity](https://www.sanity.io/) y añade el identificador del proyecto y dataset a `.env.local`.
3. Ejecuta `npm run dev` y abre `http://localhost:3000`.
4. Abre `http://localhost:3000/studio` para iniciar sesión y crear los documentos `Datos del portafolio` y `Proyecto`.

Mientras no haya credenciales de Sanity, el sitio muestra tres proyectos de demostración desde `src/lib/projects.ts`. Sustitúyelos por el contenido real desde Studio antes de publicar.

## Contenido por completar

- Sustituye `tu-email@ejemplo.com` en `src/app/page.tsx` y `src/components/contact-form.tsx`.
- Carga la foto, biografía, enlaces y proyectos reales desde Studio.
- Configura `NEXT_PUBLIC_SITE_URL` con el dominio de producción.
