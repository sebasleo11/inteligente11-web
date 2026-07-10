import logoImg from '../../assets/logos/inteligente11-logo.png';

const navItems = ["Baúl IA", "Sistemas", "Sobre mí"];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="InteliGENTE11 Logo"
            className="h-[56px] w-auto object-contain transition-all duration-300"
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-200 transition-colors duration-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491131772207"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/35"
          >
            Trabajar conmigo
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
