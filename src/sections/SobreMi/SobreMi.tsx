import sebastianProfile from "../../assets/images/sebastian-profile.webp";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-[#05060a] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-400/15">
          <img
            src={sebastianProfile}
            alt="Sebastián Acuña con traje negro"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-[center_18%]"
          />
          <p className="px-6 py-5 text-center text-sm leading-6 text-slate-300">Explorar. Compartir. Construir.</p>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col justify-center text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">La tecnología tiene sentido cuando se convierte en algo útil.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>Soy Sebastián Acuña. Estudio Desarrollo de Software y trabajo en proyectos que combinan desarrollo, inteligencia artificial y automatización.</p>
            <p>Creé InteliGENTE11 para compartir conocimientos, explorar nuevas herramientas y transformar ideas en soluciones digitales para personas y negocios.</p>
            <p>Creo en una tecnología cercana y comprensible, que ayude a resolver problemas reales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
