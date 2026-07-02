const featured = {
  title: "Generador de Ideas IA",
  subtitle: "Convertí una idea en un negocio real utilizando inteligencia artificial.",
  badge: "⭐ Destacado",
  description:
    "Una experiencia premium para transformar ideas sueltas en oportunidades con IA aplicada a negocios reales.",
};

const cards = [
  {
    title: "Textos para WhatsApp",
    description: "Respuestas, seguimientos y mensajes listos para vender mejor.",
    tag: "Ventas",
    badge: "Popular",
  },
  {
    title: "Validador de negocios",
    description: "Analizá si una idea tiene potencial antes de perder tiempo.",
    tag: "Emprendedores",
    badge: "IA",
  },
  {
    title: "Prompts para emprendedores",
    description: "Prompts claros para marketing, ventas, contenido y atención.",
    tag: "Prompts",
    badge: "Nuevo",
  },
  {
    title: "Automatizaciones simples",
    description: "Flujos básicos con IA para ahorrar horas de trabajo.",
    tag: "Automatización",
    badge: "Gratis",
  },
  {
    title: "Calendario de contenido",
    description: "Ideas de publicaciones para redes sin quedarte bloqueado.",
    tag: "Contenido",
    badge: "Popular",
  },
];

function BaulIA() {
  return (
    <section id="baul" className="bg-[#030712] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Baúl de Soluciones IA</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Baúl de Soluciones IA
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Herramientas premium que combinan diseño, claridad y potencia para construir soluciones IA con impacto real.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] xl:gap-10">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-[#050915] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.4)] ring-1 ring-cyan-400/10">
            <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative z-10 flex flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  {featured.badge}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.18em] text-slate-300">
                  Featured
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {featured.title}
                </h3>
                <p className="max-w-xl text-base leading-8 text-slate-300">{featured.subtitle}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Plantillas listos para usar",
                  "Ejemplos de respuesta optimizados",
                  "Guías visuales de adopción",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
                <div className="mb-6 h-48 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-transparent shadow-[inset_0_0_80px_rgba(129,230,217,0.18)] transition duration-500 group-hover:scale-105" />
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Solución destacada</p>
                  <p className="text-sm leading-7 text-slate-300">Visual placeholder para la experiencia que será reemplazada por un diseño real.</p>
                </div>
              </div>

              <button className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_80px_rgba(56,189,248,0.25)]">
                Explorar herramienta
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {cards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)] transition duration-500 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_30px_120px_rgba(59,130,246,0.18)]"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%)]" />
                  <div className="relative z-10 h-32 overflow-hidden rounded-3xl bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-400/10 opacity-80" />
                    <div className="absolute -left-8 top-8 h-20 w-20 rounded-full bg-cyan-400/15 blur-2xl" />
                    <div className="absolute right-4 top-10 h-16 w-16 rounded-full bg-violet-500/10 blur-2xl" />
                    <div className="relative flex h-full items-center justify-center text-xs uppercase tracking-[0.4em] text-slate-500">
                      Imagen placeholder
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    {card.badge}
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">{card.tag}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                <button className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-white">
                  Explorar
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BaulIA;
