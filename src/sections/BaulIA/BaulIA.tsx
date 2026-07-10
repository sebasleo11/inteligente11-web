import { useRef } from "react";

type BaulApp = {
  id: string;
  title: string;
  category: string;
  state: string;
  description: string;
  primary: string;
  secondary: string;
  icon: string;
};

const apps: BaulApp[] = [
  {
    id: "ideas",
    title: "Generador de ideas",
    category: "Negocios",
    state: "Gratis",
    description: "Convertí una idea suelta en una oportunidad concreta.",
    primary: "Usar app",
    secondary: "Ver tutorial",
    icon: "💡",
  },
  {
    id: "validador",
    title: "Validador de negocios",
    category: "Negocios",
    state: "Nuevo",
    description: "Analizá si una idea tiene potencial antes de perder tiempo.",
    primary: "Usar app",
    secondary: "Ver tutorial",
    icon: "✅",
  },
  {
    id: "calendario",
    title: "Calendario de contenido",
    category: "Contenido",
    state: "Próximamente",
    description: "Organizá ideas de publicaciones para redes sin bloquearte.",
    primary: "Ver app",
    secondary: "Ver tutorial",
    icon: "📆",
  },
  {
    id: "prompts",
    title: "Generador de prompts",
    category: "Prompts",
    state: "Gratis",
    description: "Prompts claros para marketing, ventas, contenido y atención.",
    primary: "Usar app",
    secondary: "Ver tutorial",
    icon: "⚙️",
  },
];

const categories = ["Todos", "Negocios", "Contenido", "Prompts"];

function BaulIA() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (distance: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <section id="baul" className="bg-[#05060a] px-4 py-16 text-white sm:px-6 lg:px-8 animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl text-center mx-auto">
          <p className="text-sm uppercase tracking-widest text-cyan-300/80">Baúl de Soluciones IA</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Baúl de Soluciones IA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Apps simples para usar IA en ventas, contenido, automatización y negocios.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 transition duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/80 text-white shadow-lg shadow-cyan-500/10 sm:flex items-center justify-center cursor-pointer hover:bg-slate-900/90"
            onClick={() => scrollBy(-340)}
          >
            ‹
          </div>
          <div className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 rounded-full border border-white/10 bg-slate-950/80 text-white shadow-lg shadow-cyan-500/10 sm:flex items-center justify-center cursor-pointer hover:bg-slate-900/90"
            onClick={() => scrollBy(340)}
          >
            ›
          </div>

          <div
            ref={carouselRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex snap-x snap-mandatory justify-center gap-5 overflow-x-auto pb-4 pt-2 scroll-smooth"
          >
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: BaulApp }) {
  return (
    <article className="group relative min-w-[260px] max-w-[260px] snap-start cursor-pointer overflow-hidden rounded-3xl border border-white/6 bg-gradient-to-b from-slate-900/80 to-slate-950/95 p-0 shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:z-20 hover:-translate-y-3 hover:scale-[1.06] hover:shadow-[0_45px_140px_rgba(56,189,248,0.18)] hover:border-cyan-400/30">
      <div className="h-52 w-full flex-shrink-0 bg-gradient-to-r from-violet-700/20 via-cyan-500/18 to-transparent p-4">
        <div className="h-full rounded-[2rem] bg-gradient-to-tr from-cyan-600/16 to-violet-600/10 shadow-inner flex items-center justify-center text-4xl text-cyan-200">
          {app.icon}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{app.category}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">{app.state}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">{app.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{app.description}</p>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/12 transition duration-300 hover:-translate-y-0.5">
            {app.primary}
          </button>
          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:text-white hover:bg-white/10">
            {app.secondary}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BaulIA;
