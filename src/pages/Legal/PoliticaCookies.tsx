export default function PoliticaCookies() {
  return (
    <section className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-300/80">Política de Cookies</p>
          <h1 className="mt-3 text-2xl font-semibold">Política de Cookies</h1>
          <p className="mt-2 text-sm text-slate-400">Cómo y por qué usamos cookies en este sitio.</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-7">
          <p>
            Este sitio utiliza cookies y tecnologías similares para mejorar la experiencia del usuario. Las cookies son pequeños
            archivos que se almacenan en el dispositivo del visitante y permiten recordar preferencias, optimizar la navegación
            y obtener estadísticas anónimas sobre el uso del sitio.
          </p>

          <p>
            En determinadas ocasiones pueden emplearse cookies de terceros (por ejemplo, servicios de analítica) con fines
            estrictamente estadísticos para entender cómo interactúan los visitantes con el sitio y así mejorar su rendimiento
            y contenido. Estos datos se procesan de forma agregada y no identifican personalmente a los usuarios.
          </p>

          <p>
            El usuario puede configurar su navegador para bloquear o eliminar cookies en cualquier momento. No obstante, algunas
            funcionalidades del sitio podrían verse afectadas si se deshabilitan por completo las cookies.
          </p>

          <p>
            Si desea mayor control sobre las cookies, revise las opciones de su navegador o las herramientas de gestión de cookies
            que provean los servicios de terceros que se utilicen (por ejemplo, Google Analytics). El uso continuado del sitio
            implica la aceptación de esta política.
          </p>

          <div className="mt-6 text-center">
            <a href="/" className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-black">
              Volver al Inicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
