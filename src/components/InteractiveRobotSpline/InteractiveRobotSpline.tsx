import { lazy, Suspense } from "react";

type Props = {
  scene: string;
  className?: string;
};

// Carga perezosa del componente Spline para Vite + React
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function InteractiveRobotSpline({ scene, className = "" }: Props) {
  if (!scene) {
    return (
      <div className={`flex h-[320px] lg:h-[420px] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-900/30 to-violet-900/30 p-6 text-sm text-slate-300 ${className}`}>
        <div className="text-center">
          <p className="font-semibold">Escena 3D pendiente</p>
          <p className="mt-2 text-xs text-slate-400">Pegá la URL de la escena en <span className="font-mono">ROBOT_SCENE_URL</span></p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={`flex h-[320px] lg:h-[420px] w-full items-center justify-center rounded-3xl bg-black/40 border border-cyan-500/8 p-6 ${className}`}>
          <div className="animate-pulse text-slate-400">Cargando escena 3D...</div>
        </div>
      }
    >
      <div className={`relative ${className} rounded-3xl overflow-hidden bg-black/40 border border-cyan-500/10`}>
        <Spline scene={scene} />
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#050816]/40 via-transparent to-transparent" />
      </div>
    </Suspense>
  );
}
