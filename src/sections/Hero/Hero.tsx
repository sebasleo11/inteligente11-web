import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900/90 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-8">
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            IA aplicada a negocios reales
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
            IA simple.
            <br />
            IA útil.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              IA para vos.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Aprendé, construí y aplicá inteligencia artificial con proyectos reales, herramientas prácticas y soluciones para emprendedores.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#baul"
              className="rounded-[1.2rem] bg-gradient-to-r from-cyan-400 to-violet-600 px-8 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_80px_rgba(34,211,238,0.24)]"
            >
              Explorar el Baúl IA
            </a>
            <a
              href="https://wa.me/5491131772207"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.2rem] border border-slate-700 bg-white/5 px-8 py-4 text-center text-base font-bold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-300"
            >
              Trabajar conmigo
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-white">127K+</p>
              <p className="mt-1 text-sm text-slate-400">visualizaciones</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">400+</p>
              <p className="mt-1 text-sm text-slate-400">videos</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">IA</p>
              <p className="mt-1 text-sm text-slate-400">sin humo</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-slate-950/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/95">
              <img
                src={heroImg}
                alt="Sebastián Acuña - InteliGENTE11"
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_40%)]" />
            </div>

            <div className="absolute -bottom-8 left-6 right-6 rounded-[1.75rem] border border-white/10 bg-black/70 p-5 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/90">InteliGENTE11</p>
              <p className="mt-2 text-xl font-semibold text-white">Aprender IA haciendo proyectos reales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
