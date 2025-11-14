import { ArrowRightCircle } from "lucide-react";
import React from "react";

const GoldenButton = () => {
  return (
    <button
      className="
        relative group
        overflow-hidden 
        inline-flex 
        w-[90%]
        md:w-[500px]
        items-center 
        justify-center
        px-5 md:px-7 
        py-2.5 md:py-3
        text-xl sm:text-sm md:text-2xl
        font-bold
        text-neutral-900
        bg-linear-to-r 
        from-yellow-300 
        via-yellow-400 
        to-yellow-500 
        rounded-lg
        shadow-[0_0_18px_rgba(255,200,0,0.25)]
        transition-all 
        duration-300 
        hover:scale-[1.04]
        hover:shadow-[0_0_25px_rgba(255,200,0,0.35)]
        focus:outline-none 
        focus:ring-2 
        focus:ring-yellow-400/50
        mt-20
      "
    >
      {/* 🔆 Shine Layer */}
      <span
        className="
          absolute inset-0 
          bg-linear-to-r 
          from-transparent 
          via-white/40 
          to-transparent
          translate-x-[-150%]
          group-hover:translate-x-[150%]
          transition-transform 
          duration-900
          ease-out
        "
      ></span>

      <span className="relative flex items-center gap-5 z-10 tracking-wide">
        Cultural Events <ArrowRightCircle />
      </span>
    </button>
  );
};

export default GoldenButton;
