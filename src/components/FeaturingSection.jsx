"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FeaturingSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col items-center w-full pt-10 pb-20 relative">
      {/* TITLE */}
      {/* BACKGROUND TEXT */}
      <h1
        className="
            absolute 
            md:-top-20 
            top-5
            left-1/2 -translate-x-1/2
            text-[50px] md:text-[180px] 
            font-extrabold 
            tracking-widest
            text-white/5 
            select-none 
            pointer-events-none
  "
      >
        FEATURING
      </h1>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-cyan-200 to-blue-400 mb-12"
      >
        Featuring
      </motion.h2>

      {/* CARD WRAPPER */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full px-6">
        {/* ================= CARD 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: false }}
          className="
            relative w-[90%] md:w-[360px] 
            bg-[rgba(20,20,35,0.75)] 
            backdrop-blur-2xl border border-white/10 
            rounded-3xl p-5 
            shadow-[0_0_25px_rgba(0,200,255,0.15)]
            hover:shadow-[0_0_35px_rgba(0,200,255,0.35)]
            transition-all duration-300
          "
        >
          <motion.img
            src="/sonal.png"
            className="w-full h-84 object-cover rounded-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="mt-4">
            <p className="text-white/80 text-sm mb-2">
              📅 <span className="font-semibold">December 3rd, 2025</span>
            </p>

            <h3 className="text-xl font-bold text-cyan-300">
              Sonal – DJ Night
            </h3>

            <p className="text-white/80 text-sm mt-2 leading-relaxed">
              A spectacular DJ performance featuring immersive beats, stunning
              visuals and electrifying energy.
            </p>

            <Button
              asChild
              className="mt-4 w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              <a href="https://instagram.com" target="_blank">
                ▶ Watch on Instagram
              </a>
            </Button>
          </div>
        </motion.div>

        {/* ================= CARD 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: false }}
          className="
            relative w-[90%] md:w-[360px] 
            bg-[rgba(20,20,35,0.75)] 
            backdrop-blur-2xl border border-white/10 
            rounded-3xl p-5 
            shadow-[0_0_25px_rgba(255,80,160,0.18)]
            hover:shadow-[0_0_35px_rgba(255,80,160,0.35)]
            transition-all duration-300
          "
        >
          <motion.img
            src="/thai.jpg"
            className="w-full h-84 object-cover rounded-xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="mt-4">
            <p className="text-white/80 text-sm mb-2">
              📅 <span className="font-semibold">December 4th, 2025</span>
            </p>

            <h3 className="text-xl font-bold text-pink-300">
              Thaikkudamn Bridge
            </h3>

            <p className="text-white/80 text-sm mt-2 leading-relaxed">
              An explosive live band concert packed with roaring guitars,
              thunderous drums, and a crowd-shaking performance.
            </p>

            <Button
              asChild
              className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              <a href="https://instagram.com" target="_blank">
                ▶ Watch Clip
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
