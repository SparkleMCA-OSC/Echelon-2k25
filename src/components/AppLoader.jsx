import { useEffect } from "react";

export default function AppLoader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1500); // Prevent stuck loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-999999 bg-[#05010d] flex items-center justify-center">
      {/* SPINNING NEON RING */}
      <div className="relative">
        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full border-4 border-cyan-400/40 animate-spin-slow shadow-[0_0_30px_rgba(0,255,255,0.4)]" />

        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-300/20 animate-ping" />

        {/* ECHELON TEXT */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-yellow-400 
                         drop-shadow-[0_0_10px_rgba(255,200,0,0.9)] animate-pulse"
          >
            ECHELON’25
          </h1>

          <p className="text-xs md:text-sm text-white/60 tracking-widest mt-2 animate-fade-in">
            LOADING...
          </p>
        </div>
      </div>
    </div>
  );
}
