import Spline from "@splinetool/react-spline";

type SplineContactProps = {
  sceneUrl: string;
};

export default function SplineContact({ sceneUrl }: SplineContactProps) {
  return (
    <div className="relative w-full h-[320px] lg:h-[420px] rounded-3xl overflow-hidden bg-black/40 border border-cyan-500/10">
      <Spline scene={sceneUrl} />

      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#050816]/40 via-transparent to-transparent" />
    </div>
  );
}
