export default function TerminosYCondiciones() {
  return (
    <section className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-300/80">Términos y Condiciones</p>
          <h1 className="mt-3 text-2xl font-semibold">Términos y Condiciones</h1>
          <p className="mt-2 text-sm text-slate-400">Condiciones de uso del sitio y de los servicios ofrecidos.</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-7">
          <p>
            El acceso y la utilización de InteliGENTE11 implican la aceptación de estos Términos y Condiciones. El contenido
            del sitio tiene fines educativos, informativos y comerciales relacionados con soluciones de Inteligencia Artificial,
            automatización y desarrollo tecnológico.
          </p>

          <p>
            Los usuarios se comprometen a emplear el sitio de forma responsable y conforme a la legislación vigente. No se permite
            la utilización de los contenidos para actividades ilícitas, fraudulentas o que puedan dañar a terceros o el propio
            funcionamiento del sitio.
          </p>

          <p>
            Los servicios, productos, cursos, aplicaciones y recursos publicados podrán modificarse, actualizarse o discontinuarse
            en cualquier momento por InteliGENTE11 sin necesidad de preaviso. Las condiciones comerciales o de acceso a servicios
            concretos se regirán por la información publicada en cada caso y por los acuerdos contractuales que procedan.
          </p>

          <p>
            InteliGENTE11 no será responsable por daños directos o indirectos derivados del uso inadecuado de la información
            publicada, ni por contenidos o servicios de terceros a los que se enlace desde el sitio. En caso de discrepancias
            o reclamaciones relativas a un servicio concreto, se recomienda ponerse en contacto por los canales habilitados.
          </p>

          <p>
            Estos Términos pueden actualizarse periódicamente; las versiones más recientes estarán disponibles en esta misma sección.
            El uso continuado del sitio tras dichas actualizaciones implica aceptación de los cambios.
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
