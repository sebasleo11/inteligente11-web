function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">InteliGENTE11</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">La IA desmitificada.</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Aprendé, construí y aplicá inteligencia artificial con proyectos reales, herramientas prácticas y contenido simple.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">Ecosistema</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#baul" className="transition hover:text-cyan-300">Baúl IA</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">Contenido</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">Servicios</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">Sistemas</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">Comunidad</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#" className="transition hover:text-cyan-300">YouTube</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">Instagram</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">TikTok</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-slate-400">Contacto</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="https://wa.me/5491131772207" className="transition hover:text-cyan-300">WhatsApp</a>
              </li>
              <li>
                <a href="https://wa.me/5491131772207" className="transition hover:text-cyan-300">Trabajar conmigo</a>
              </li>
              <li>
                <a href="#" className="transition hover:text-cyan-300">Argentina</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-sm text-slate-500">
          © 2026 Sebastián Acuña — InteliGENTE11. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
