export default function Contacto() {
  return (
    <section id="contacto" className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[1.5rem] border border-transparent bg-gradient-to-b from-slate-950/85 to-slate-900/95 p-8 shadow-[0_24px_80px_rgba(2,6,23,0.5)]">
          <div className="flex flex-col items-center">
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">CONTACTO</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">¿Hablamos?</h2>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                Si tenés una idea, un proyecto o querés aplicar inteligencia artificial en tu negocio, escribime y lo vemos juntos.
              </p>
              <a
                href="https://wa.me/5491131772207"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-base font-semibold text-black shadow-[0_18px_54px_rgba(56,189,248,0.22)] transition duration-300 hover:opacity-95 hover:scale-[1.02]"
              >
                Escribirme por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
