export default function PoliticaPrivacidad() {
  return (
    <section className="bg-[#05060a] py-16 px-4 sm:px-6 lg:px-8 text-white animate-[fadeInUp_0.9s_ease-out_0.08s_both]">
      <div className="mx-auto max-w-[900px]">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-widest text-cyan-300/80">Política de Privacidad</p>
          <h1 className="mt-3 text-2xl font-semibold">Política de Privacidad</h1>
          <p className="mt-2 text-sm text-slate-400">Cómo recogemos, usamos y protegemos los datos personales.</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 leading-7">
          <p>
            En InteliGENTE11 respetamos la privacidad de nuestros visitantes y tratamos los datos personales con responsabilidad.
            Los datos que el usuario facilite mediante formularios de contacto, suscripciones o solicitudes serán utilizados
            exclusivamente para responder consultas, prestar los servicios solicitados y enviar novedades cuando el usuario
            lo haya autorizado.
          </p>

          <p>
            InteliGENTE11 no vende ni alquila datos personales a terceros. Los datos únicamente se comparten cuando existe una
            obligación legal o cuando resulte estrictamente necesario para la prestación de un servicio solicitado por el usuario
            (por ejemplo, integraciones con proveedores que el usuario autoriza expresamente).
          </p>

          <p>
            Con el fin de comprender y mejorar el uso del sitio, se podrán emplear herramientas de análisis que recogen datos
            anónimos sobre el comportamiento de navegación. Estos datos se usan para optimizar la experiencia y no permiten
            identificar personalmente al usuario.
          </p>

          <p>
            El usuario tiene derecho a solicitar en cualquier momento la rectificación, limitación, portabilidad o supresión de
            sus datos. Para ejercer estos derechos puede utilizar los canales de contacto disponibles en el sitio. Cuando se
            reciban solicitudes de eliminación, se evaluarán las obligaciones legales que puedan impedir la supresión inmediata.
          </p>

          <p>
            La utilización continuada del sitio supone la aceptación de esta Política de Privacidad. Para consultas específicas
            sobre tratamiento de datos o para solicitar copias o modificaciones, contactanos a través del formulario del sitio.
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
