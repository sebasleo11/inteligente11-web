import { useState } from "react";
import logoImg from '../../assets/logos/inteligente11-logo.png';
import type { Theme } from "../../hooks/useTheme";

const navItems = [
  ["Qué hago", "/#areas"],
  ["Proyectos", "/#proyectos"],
  ["Sobre mí", "/#sobre-mi"],
  ["Contenido", "/#contenido"],
];

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === "dark" ? "claro" : "oscuro";

  return (
    <header className="theme-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/#inicio" aria-label="Ir al inicio de InteliGENTE11">
          <img src={logoImg} alt="InteliGENTE11 Logo" className="theme-logo h-[56px] w-auto object-contain transition-all duration-300" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="theme-nav-link text-sm font-medium transition-colors duration-300">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={`Cambiar a modo ${nextTheme}`}
            aria-pressed={theme === "light"}
            onClick={onToggleTheme}
            className="theme-control inline-flex h-11 items-center gap-2 rounded-full border px-3 text-sm transition hover:-translate-y-0.5"
          >
            <span aria-hidden="true" className="text-base">{theme === "dark" ? "☀" : "☾"}</span>
            <span className="hidden sm:inline">{theme === "dark" ? "Modo claro" : "Modo oscuro"}</span>
          </button>
          <button type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="theme-control inline-flex h-11 w-11 items-center justify-center rounded-full border transition hover:-translate-y-0.5 md:hidden">
            <span aria-hidden="true" className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>
          <a href="https://wa.me/5491131772207" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 sm:px-5">
            <span className="hidden sm:inline">Hablemos</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
      {menuOpen && (
        <nav className="theme-mobile-nav border-t px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="theme-mobile-link rounded-xl px-4 py-3 text-sm font-medium transition">{label}</a>
            ))}
            <a href="/#contacto" onClick={() => setMenuOpen(false)} className="theme-mobile-link rounded-xl px-4 py-3 text-sm font-medium transition">Contacto</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
