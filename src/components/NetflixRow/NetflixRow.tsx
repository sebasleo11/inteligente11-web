type BaulCard = {
  title: string;
  description: string;
  tag: string;
  badge?: string;
};

export default function NetflixRow({
  title,
  items,
}: {
  title: string;
  items: BaulCard[];
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">{title}</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex gap-5 min-w-max">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative min-w-[260px] sm:min-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-[#050915] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-[1.04]"
            >
              <div className="absolute -right-6 top-6 h-24 w-24 rounded-full bg-cyan-500/8 blur-3xl" />
              <div className="absolute -left-6 bottom-6 h-20 w-20 rounded-full bg-violet-500/8 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {item.badge || item.tag}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.tag}</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-slate-300">{item.description}</p>
                </div>

                <div className="overflow-hidden rounded-lg border border-white/6 bg-gradient-to-br from-cyan-500/6 via-violet-500/4 to-transparent p-3 shadow-[inset_0_0_40px_rgba(56,189,248,0.04)]">
                  <div className="h-24 rounded-md bg-gradient-to-br from-cyan-500/10 via-violet-500/6 to-transparent flex items-center justify-center text-xs uppercase tracking-[0.35em] text-slate-500">
                    Preview
                  </div>
                </div>

                <button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:brightness-105">
                  Explorar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
