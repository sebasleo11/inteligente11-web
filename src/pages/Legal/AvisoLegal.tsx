export default function AvisoLegal() {
  return (
    <section className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-300/80">Aviso Legal</p>
          <h1 className="mt-3 text-2xl font-semibold">Aviso Legal</h1>
          <p className="mt-2 text-sm text-slate-400">Información sobre la autoría, propiedad intelectual y uso del sitio.</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-7">
          <p>
            InteliGENTE11 es un proyecto creado por Sebastián Acuña con el objetivo de difundir conocimiento sobre
            Inteligencia Artificial, automatización, desarrollo de software y herramientas digitales. El material
            publicado en este sitio —incluyendo textos, imágenes, diseños, logotipos, videos, aplicaciones y
            recursos educativos— pertenece a InteliGENTE11 o se utiliza bajo las licencias y permisos correspondientes.
          </p>

          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública o cualquier forma de
            explotación con fines comerciales del contenido sin la autorización previa por escrito de InteliGENTE11.
            El uso personal y no comercial con mención de la fuente podrá estar permitido salvo que se indique lo
            contrario en el elemento concreto.
          </p>

          <p>
            La información incluida en este sitio tiene fines educativos e informativos y puede actualizarse o modificarse
            sin previo aviso. Aunque se emplean esfuerzos razonables para mantener los contenidos actualizados y libres de
            errores, InteliGENTE11 no ofrece garantías de forma absoluta respecto a la exactitud, integridad o actualidad
            de la información publicada.
          </p>

          <p>
            El acceso y la navegación por el sitio implica aceptar las condiciones previstas en este Aviso Legal. En caso de
            dudas o para solicitar permisos de uso, correcciones o aclaraciones, puede utilizarse el formulario de contacto
            disponible en el sitio o enviar un mensaje a través del canal de contacto indicado.
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
