import mensajeAlmaImage from "../../assets/images/mensaje-al-alma-hero.webp";
import modelsxlLogo from "../../assets/images/modelsxl-logo.png";
import impulsoDigitalLogo from "../../assets/images/impulso-digital-logo.jpeg";
import cordobaBulonesSystem from "../../assets/images/cordoba-bulones-system.png";

export default function Sistemas() {
  return (
    <section id="proyectos" className="bg-[#05060a] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Proyectos destacados</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ideas, productos y soluciones en movimiento.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Proyectos y soluciones que representan distintas formas de convertir la tecnología en algo útil y cercano.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="relative flex flex-col overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-slate-950/95 to-slate-950 shadow-[0_30px_100px_rgba(8,47,73,0.3)]">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative h-52 overflow-hidden sm:h-60">
              <img
                src={mensajeAlmaImage}
                alt="Paisaje cálido que representa Mensaje al Alma"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            </div>
            <div className="relative flex min-h-[300px] flex-1 flex-col justify-between gap-8 p-8 sm:p-10">
              <div>
                <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">Producto digital</span>
                <h3 className="mt-8 text-3xl font-semibold sm:text-4xl">Mensaje al Alma</h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">Un espacio para guardar y compartir palabras, recuerdos y sentimientos con las personas que querés.</p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-400">Proyecto en desarrollo</span>
                <a href="https://mensaje-al-alma.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 sm:w-fit">Conocé Mensaje al Alma</a>
              </div>
            </div>
          </article>
          <article className="relative flex flex-col overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-400/15 via-slate-950/95 to-slate-950 shadow-[0_30px_100px_rgba(76,29,149,0.25)]">
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-950/80 p-4 sm:h-60">
              <img
                src={modelsxlLogo}
                alt="Logo MODELSXL"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative flex min-h-[300px] flex-1 flex-col justify-between gap-8 p-8 sm:p-10">
              <div>
                <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-violet-200">Soluciones a medida</span>
                <h3 className="mt-8 text-3xl font-semibold sm:text-4xl">Model SXL</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">Desarrollo web y soluciones digitales a medida para emprendedores y empresas.</p>
              </div>
              <a href="https://modelsxl.com/" target="_blank" rel="noopener noreferrer" className="relative inline-flex w-fit whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">Conocé Model SXL</a>
            </div>
          </article>
          <article className="relative flex flex-col overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/15 via-slate-950/95 to-slate-950 shadow-[0_30px_100px_rgba(14,116,144,0.25)]">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-white/95 p-5 sm:h-60 sm:p-8">
              <img
                src={impulsoDigitalLogo}
                alt="Logo de Impulso Digital"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="relative flex min-h-[300px] flex-1 flex-col justify-between gap-8 p-8 sm:p-10">
              <div>
                <span className="rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-sky-200">Solución digital</span>
                <h3 className="mt-8 text-3xl font-semibold sm:text-4xl">Bot para WhatsApp</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">Una solución de bot para WhatsApp para empresas y emprendedores.</p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-sm text-slate-400">Impulso Digital</span>
                <a href="https://impulsodigital.de/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">Conocé la solución</a>
              </div>
            </div>
          </article>
          <article className="relative flex flex-col overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/15 via-slate-950/95 to-slate-950 shadow-[0_30px_100px_rgba(146,64,14,0.22)]">
            <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-900/90 p-3 sm:h-60 sm:p-4">
              <img
                src={cordobaBulonesSystem}
                alt="Captura de pantalla del sistema de Córdoba Bulones"
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="relative flex min-h-[300px] flex-1 flex-col justify-between gap-8 p-8 sm:p-10">
              <div>
                <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-200">ERP comercial</span>
                <h3 className="mt-8 text-3xl font-semibold sm:text-4xl">Córdoba Bulones</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">Plataforma comercial modular para centralizar clientes, catálogo, cotizaciones, pedidos, despacho y cuenta corriente.</p>
              </div>
              <span className="text-sm text-slate-400">Solución a medida</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
