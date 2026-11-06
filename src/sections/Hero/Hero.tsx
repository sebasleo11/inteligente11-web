import heroImg from "../../assets/images/seba-hero.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden text-white">
      {/* Large cinematic gradients and top light */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(800px_600px_at_10%_12%,rgba(14,165,233,0.08),transparent_18%),radial-gradient(1000px_700px_at_90%_88%,rgba(168,85,247,0.09),transparent_18%)]" />
      <div className="theme-hero-top absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900/95 to-transparent -z-10" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-8 relative z-10">
          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Productos digitales · Soluciones a medida · Consultoría y capacitación
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
            De la idea
            <br />
            a la realidad
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              digital.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Soy Sebastián Acuña. Desarrollo productos, impulso soluciones a medida y comparto conocimientos para acercar la inteligencia artificial a personas y negocios.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#areas"
              className="rounded-[1.2rem] bg-gradient-to-r from-cyan-400 to-violet-600 px-8 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_25px_90px_rgba(34,211,238,0.32)]"
            >
              Conocé lo que hago
            </a>
            <a
              href="https://wa.me/5491131772207"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.2rem] border border-slate-700 bg-white/6 px-8 py-4 text-center text-base font-bold text-white transition duration-300 hover:scale-[1.03] hover:border-cyan-400 hover:text-cyan-300 hover:bg-white/10"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -inset-10 rounded-[2.5rem] bg-[radial-gradient(600px_400px_at_50%_30%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(800px_500px_at_50%_70%,rgba(168,85,247,0.08),transparent_40%)] blur-3xl animate-[glowPulse_5s_ease-in-out_infinite]" />
          <div className="theme-hero-frame relative overflow-hidden rounded-[2.5rem] border border-cyan-400/16 bg-gradient-to-br from-slate-900/70 to-slate-950/95 p-4 shadow-[0_40px_120px_rgba(2,6,23,0.6)] backdrop-blur-2xl transition duration-500 hover:translate-y-[-6px] hover:shadow-[0_45px_110px_rgba(56,189,248,0.22)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/95">
              <img
                src={heroImg}
                alt="Sebastián Acuña - InteliGENTE11"
                className="h-[560px] sm:h-[600px] md:h-[680px] w-full object-cover object-center transition duration-700 ease-out transform hover:scale-[1.03]"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(400px_300px_at_20%_10%,rgba(14,165,233,0.12),transparent_30%),radial-gradient(500px_350px_at_80%_90%,rgba(168,85,247,0.12),transparent_30%)] mix-blend-screen opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
