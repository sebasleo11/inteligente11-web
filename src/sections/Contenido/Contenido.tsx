import { useState } from "react";

export default function Contenido() {
  const [thumbnailFailed, setThumbnailFailed] = useState(false);

  return (
    <section id="contenido" className="relative overflow-hidden bg-[#05060a] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_58%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contenido y comunidad</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">La inteligencia artificial se entiende mejor cuando se pone en práctica.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">Tutoriales, herramientas y proyectos explicados de manera clara para que puedas descubrir, aprender y crear.</p>
          <a href="https://www.youtube.com/@InteliGENTE11" target="_blank" rel="noopener noreferrer" className="theme-youtube-button mt-8 inline-flex w-fit items-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">Conocé el canal de YouTube <span aria-hidden="true" className="ml-2">↗</span></a>
        </div>
        <article className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950/95 to-slate-950 shadow-[0_30px_100px_rgba(8,47,73,0.28)]">
          <a
            href="https://www.youtube.com/watch?v=6qjGbuFB0fI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver video en YouTube: Crea una landing page profesional solo con IA"
            className="group relative block aspect-video overflow-hidden bg-slate-950/90"
          >
            {thumbnailFailed ? (
              <div className="flex h-full items-center justify-center px-6 text-center text-sm text-slate-300">Miniatura no disponible</div>
            ) : (
              <>
                <img
                  src="https://i.ytimg.com/vi/6qjGbuFB0fI/hqdefault.jpg"
                  alt="Miniatura del video Crea una LANDING PAGE PROFESIONAL SOLO con IA"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  onError={() => setThumbnailFailed(true)}
                />
                <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-slate-950/20 transition group-hover:bg-slate-950/35">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 pl-1 text-xl text-slate-950 shadow-lg">▶</span>
                </span>
              </>
            )}
          </a>
          <div className="p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80">Video destacado</p>
            <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">🚀 Crea una LANDING PAGE PROFESIONAL SOLO con IA | ChatGPT + Lovable + GitHub + Vercel + Supabase 🔥</h3>
            <p className="mt-4 text-sm text-slate-300">Más de 5.900 visualizaciones</p>
            <a href="https://www.youtube.com/watch?v=6qjGbuFB0fI" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">Ver video <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
        </article>
      </div>
    </section>
  );
}
