import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Sistemas from "./sections/Sistemas/Sistemas";
import SobreMi from "./sections/SobreMi/SobreMi";
import Contenido from "./sections/Contenido/Contenido";
import Contacto from "./sections/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import AvisoLegal from "./pages/Legal/AvisoLegal";
import PoliticaPrivacidad from "./pages/Legal/PoliticaPrivacidad";
import TerminosYCondiciones from "./pages/Legal/TerminosYCondiciones";
import PoliticaCookies from "./pages/Legal/PoliticaCookies";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const path = window.location.pathname.replace(/\/+$/g, "");

  const renderLegal = () => {
    if (path === "/aviso-legal") return <AvisoLegal />;
    if (path === "/privacidad") return <PoliticaPrivacidad />;
    if (path === "/terminos") return <TerminosYCondiciones />;
    if (path === "/cookies") return <PoliticaCookies />;
    return null;
  };

  const legalComponent = renderLegal();

  return (
    <div className="app-root">
      <div className="app-content">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="pt-[88px]">
          {legalComponent ? (
            legalComponent
          ) : (
            <>
              <Hero />
              <section id="areas" className="bg-[#05060a] px-4 py-20 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                  <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Qué hago</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tres formas de llevar una idea más lejos.</h2>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-3">
                    <article className="rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 via-slate-950/90 to-slate-950/90 p-7 shadow-[0_24px_80px_rgba(8,47,73,0.24)]">
                      <span className="text-4xl text-cyan-300">✦</span>
                      <p className="mt-8 text-sm uppercase tracking-[0.22em] text-cyan-200/80">01 · Productos digitales</p>
                      <h3 className="mt-3 text-2xl font-semibold">Ideas que se convierten en herramientas.</h3>
                      <p className="mt-4 leading-7 text-slate-300">Ideas propias que se convierten en herramientas para resolver necesidades concretas.</p>
                    </article>
                    <article className="rounded-[2rem] border border-violet-400/15 bg-gradient-to-br from-violet-400/10 via-slate-950/90 to-slate-950/90 p-7 shadow-[0_24px_80px_rgba(76,29,149,0.22)]">
                      <span className="text-4xl text-violet-300">◈</span>
                      <p className="mt-8 text-sm uppercase tracking-[0.22em] text-violet-200/80">02 · Soluciones a medida</p>
                      <h3 className="mt-3 text-2xl font-semibold">Desarrollo pensado para cada proyecto.</h3>
                      <p className="mt-4 leading-7 text-slate-300">Sitios web, aplicaciones, automatizaciones y asistentes digitales. Estos desarrollos se realizan a través de Model SXL.</p>
                    </article>
                    <article className="rounded-[2rem] border border-sky-400/15 bg-gradient-to-br from-sky-400/10 via-slate-950/90 to-slate-950/90 p-7 shadow-[0_24px_80px_rgba(14,116,144,0.2)]">
                      <span className="text-4xl text-sky-300">◎</span>
                      <p className="mt-8 text-sm uppercase tracking-[0.22em] text-sky-200/80">03 · Consultoría y capacitación</p>
                      <h3 className="mt-3 text-2xl font-semibold">Aprender para aplicar.</h3>
                      <p className="mt-4 leading-7 text-slate-300">Espacios para conocer herramientas de inteligencia artificial, explorar sus posibilidades y aprender a aplicarlas en proyectos y negocios.</p>
                    </article>
                  </div>
                </div>
              </section>
              <Sistemas />
              <SobreMi />
              <Contenido />
              <Contacto />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
