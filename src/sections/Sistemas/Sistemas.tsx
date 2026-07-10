const mainSystem = {
  title: "Model SXL",
  description:
    "Sistema de conversación inteligente multicanal para responder clientes, calificar consultas y coordinar oportunidades.",
  badge: "SXL",
  benefits: [
    "WhatsApp, Instagram, Facebook y Webchat",
    "Respuestas automáticas con tono humano",
    "Clasificación de leads",
    "Derivación a humano cuando hace falta",
  ],
};

const secondarySystems = [
  {
    title: "AgentIA",
    description:
      "Asistente digital para negocios que necesitan responder más rápido y ordenar consultas.",
    badge: "AgentIA",
    benefits: ["Respuestas más ágiles", "Organización de conversaciones", "Menos tareas repetitivas"],
  },
  {
    title: "Baúl de Soluciones IA",
    description:
      "Biblioteca de herramientas prácticas para emprendedores, creadores y negocios.",
    badge: "Baúl IA",
    benefits: ["Ideas listas para usar", "Herramientas ordenadas", "Aplicación directa"],
  },
];

export default function Sistemas() {
  return (
    <section id="sistemas" className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl text-center mx-auto">
          <h2 className="text-2xl font-semibold sm:text-3xl">Sistemas que trabajan por vos</h2>
          <p className="mt-3 text-sm text-slate-300">
            Proyectos reales donde la inteligencia artificial se convierte en procesos, respuestas y resultados.
          </p>
        </div>

          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <article className="group cursor-pointer flex flex-col overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-slate-950/80 to-slate-900/90 p-0 shadow-[0_20px_80px_rgba(2,12,35,0.28)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_30px_100px_rgba(56,189,248,0.18)]">
            <div className="h-28 w-full flex-shrink-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/15 to-transparent p-4">
              <div className="h-full rounded-2xl bg-gradient-to-tr from-cyan-600/15 to-violet-600/10"></div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {mainSystem.badge}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">{mainSystem.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{mainSystem.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {mainSystem.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <a
                  href="https://modelsxl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-black transition duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/15"
                >
                  Ver sistema
                </a>
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2">
            {secondarySystems.map((system, index) => (
              <article
                key={index}
                className="group cursor-pointer flex flex-col overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-b from-slate-950/80 to-slate-900/90 p-0 shadow-[0_18px_60px_rgba(2,12,35,0.24)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_30px_100px_rgba(56,189,248,0.16)]"
              >
                <div className="h-24 w-full flex-shrink-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/15 to-transparent p-3">
                  <div className="h-full rounded-2xl bg-gradient-to-tr from-cyan-600/15 to-violet-600/10"></div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {system.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{system.title}</h3>
                    <p className="text-sm leading-6 text-slate-300">{system.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {system.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-1">
                    <button className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/15">
                      Ver sistema
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
