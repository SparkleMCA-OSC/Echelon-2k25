import React from "react";
import GlassTimer from "./GlassTimer";

const Navbar = () => {
  return (
    <div
      className="
        fixed top-0 left-0 w-full
        h-16 sm:h-20 lg:h-24
        px-4 sm:px-6 md:px-6
        py-2 md:py-3
        flex flex-col md:flex-row items-center justify-between
        transition-all duration-300
        z-9999
      "
    >
      <div
        className="
          flex items-center space-x-2 sm:space-x-3
          px-3 sm:px-4 py-2
          rounded-xl sm:rounded-2xl
          border border-[rgba(255,255,255,0.15)]
          bg-[rgba(15,15,25,0.5)]
          backdrop-blur-2xl
          shadow-[0_0_15px_rgba(255,255,255,0.05),inset_0_0_10px_rgba(255,255,255,0.05)]
          transition-all duration-300
  "
      >
        <img
          src={"/sditlogo.png"}
          alt="Logo"
          className="
      w-8 h-8
      sm:w-10 sm:h-10
      md:w-12 md:h-12
      lg:w-14 lg:h-14
      object-contain
      drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]
      transition-all duration-300
    "
        />
        <h1 className="text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide">
          SHREE DEVI INSTITUTE OF TECHNOLOGY
        </h1>
      </div>

      <div className="md:flex items-center hidden ">
        <GlassTimer targetDate="2025-11-30T23:59:59" />
      </div>
    </div>
  );
};

export default Navbar;
