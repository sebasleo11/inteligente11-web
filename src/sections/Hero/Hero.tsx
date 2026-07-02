const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            IA aplicada a negocios reales
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            IA simple.
            <br />
            IA útil.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              IA para vos.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Aprendé, construí y aplicá inteligencia artificial con proyectos
            reales, herramientas prácticas y soluciones para emprendedores.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#baul"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-8 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-105"
            >
              Explorar el Baúl IA
            </a>

            <a
              href="https://wa.me/5491131772207"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 bg-white/5 px-8 py-4 text-center text-base font-bold text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Trabajar conmigo
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
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

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/30 to-violet-600/30 blur-2xl" />
          <div className="relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <img
              src="/src/assets/hero.png"
              alt="Sebastián Acuña - InteliGENTE11"
              className="h-[620px] w-full rounded-[1.5rem] object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
              <p className="text-sm text-cyan-300">InteliGENTE11</p>
              <p className="mt-1 text-xl font-bold">
                Aprender IA haciendo proyectos reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero