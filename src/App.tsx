import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import BaulIA from "./sections/BaulIA/BaulIA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <Hero />
        <BaulIA />
      </main>
      <Footer />
    </>
  );
}

export default App;