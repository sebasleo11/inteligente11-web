import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import BaulIA from "./sections/BaulIA/BaulIA";
import Sistemas from "./sections/Sistemas/Sistemas";
import Contacto from "./sections/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import AvisoLegal from "./pages/Legal/AvisoLegal";
import PoliticaPrivacidad from "./pages/Legal/PoliticaPrivacidad";
import TerminosYCondiciones from "./pages/Legal/TerminosYCondiciones";
import PoliticaCookies from "./pages/Legal/PoliticaCookies";

function App() {
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
        <Navbar />
        <main className="pt-[88px]">
          {legalComponent ? (
            legalComponent
          ) : (
            <>
              <Hero />
              <BaulIA />
              <Sistemas />
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