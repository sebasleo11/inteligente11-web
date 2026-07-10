const highlights = [
  "+30 años de experiencia laboral",
  "Creador de InteliGENTE11",
  "Estudiante de Desarrollo de Software",
  "Automatizaciones con IA, no-code y low-code",
];

const features = [
  "Tutoriales simples",
  "Herramientas prácticas",
  "Proyectos reales",
  "Automatizaciones aplicadas",
  "IA sin humo",
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-8 shadow-[0_25px_80px_rgba(2,12,35,0.3)]">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Sobre mí</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Soy Sebastián Acuña</h2>
              <p className="text-sm text-slate-300 sm:text-base">
                De la cocina a la inteligencia artificial.
              </p>
            </div>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              Después de más de 30 años trabajando en gastronomía, decidí reinventarme y construir mi camino en el mundo de la inteligencia artificial, el desarrollo de software y la automatización. Hoy creo contenido, enseño herramientas de IA y desarrollo soluciones prácticas para emprendedores y negocios reales.
            </p>
            <div className="rounded-3xl border border-cyan-500/10 bg-slate-900/90 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Hitos</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/5491131772207"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-black transition duration-150 hover:opacity-95 sm:w-auto"
            >
              Conocer mi trabajo
            </a>
          </div>

          <div className="space-y-6 rounded-3xl border border-cyan-500/10 bg-slate-950/80 p-8 shadow-[0_25px_80px_rgba(2,12,35,0.3)]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Qué vas a encontrar acá</h3>
              <p className="text-sm leading-6 text-slate-300">
                Un espacio creado para aprender con ejemplos claros, herramientas útiles y sistemas que puedas aplicar desde el primer día.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="rounded-3xl border border-cyan-500/10 bg-slate-900/90 p-4 text-sm text-slate-300 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-900">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
