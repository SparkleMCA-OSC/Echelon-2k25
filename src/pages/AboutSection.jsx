import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="about"
      className="w-full min-h-screen border border-white/20 backdrop-blur-3xl shadow-2xl pt-30 rounded-2xl px-6 py-14 md:px-20 flex flex-col gap-20 z-100"
    >
      {/* ================================
          ⭐ FEATURING SECTION
      ================================= */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          text-3xl md:text-4xl font-bold text-center 
          text-transparent bg-clip-text bg-linear-to-r from-cyan-200 to-blue-400
        "
      >
        Featuring
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-20">
        {/* === Card 1 === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            w-full md:w-1/2 
            bg-[rgba(255,255,255,0.08)] backdrop-blur-xl 
            border border-white/20 rounded-2xl 
            p-5 flex flex-col items-center shadow-[0_0_25px_rgba(0,200,255,0.2)]
          "
        >
          <motion.img
            src="/placeholder1.png"
            alt="Feature 1"
            className="w-full h-64 object-cover rounded-xl"
            animate={{
              scale: [1, 1.03, 1],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span
            className="mt-3 px-4 py-1.5 rounded-full text-sm font-semibold
            bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/80"
          >
            📅 December 3, 2025
          </span>
        </motion.div>

        {/* === Card 2 === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            w-full md:w-1/2 
            bg-[rgba(255,255,255,0.08)] backdrop-blur-xl 
            border border-white/20 rounded-2xl 
            p-5 flex flex-col items-center shadow-[0_0_25px_rgba(255,100,200,0.2)]
          "
        >
          <motion.img
            src="/placeholder2.png"
            alt="Feature 2"
            className="w-full h-64 object-cover rounded-xl"
            animate={{
              scale: [1, 1.03, 1],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />

          <span
            className="mt-3 px-4 py-1.5 rounded-full text-sm font-semibold
            bg-[rgba(255,255,255,0.1)] border border-white/20 text-white/80"
          >
            📅 December 4, 2025
          </span>
        </motion.div>
      </div>
      {/* ================================
          ⭐ ABOUT SECTION (your original)
      ================================= */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-linear-to-r from-blue-200 to-blue-400"
      >
        {" "}
        About Echelon 25{" "}
      </motion.h1>{" "}
      {/* Content Wrapper */}{" "}
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {" "}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-blue-100"
        >
          {" "}
          Echelon 2K25 is the flagship management fest of the Department of
          Business Administration, bringing together aspiring managers,
          thinkers, and innovators from various institutions to showcase their
          managerial brilliance. The fest embodies creativity, competition, and
          collaboration — offering a dynamic platform where intellect meets
          innovation.{" "}
        </motion.p>{" "}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-blue-100"
        >
          {" "}
          Every edition of Echelon celebrates a new dimension of management.
          This year, we explore the rapidly evolving concept of Quick Commerce,
          a phenomenon that is redefining the global business landscape. As
          technology accelerates and customer expectations evolve, the future
          belongs to those who can speed, spark, and surge — faster than ever
          before. In an age where time is the new currency, this model has
          transformed logistics, marketing, finance, and human resource
          strategies — making "speed with precision" the new mantra of success.{" "}
        </motion.p>{" "}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-blue-200 mt-6"
        >
          {" "}
          Our Institute{" "}
        </motion.h2>{" "}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-blue-100"
        >
          {" "}
          Shree Devi Institute of Technology, Kenjar, Mangaluru affiliated with
          Visvesvaraya Technological University, Belagavi, recognized by the All
          India Technical Education Council (AICTE, New Delhi) was established
          by Shree Devi Education Trust Mangaluru in 2006. Our institution aims
          to provide students with a rich and prosperous learning environment so
          that they acquire the knowledge and skills needed for succeeding in
          their professional as well as personal lives.{" "}
        </motion.p>{" "}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-blue-100"
        >
          {" "}
          The institute offers students the opportunity to pursue engineering,
          management, and computer studies in an ambiance of natural beauty. A
          team of dedicated faculty, a brilliant student community, excellent
          technical and supporting staff, and an efficient administration have
          all contributed to the pre-eminent status of Shree Devi Institute of
          Technology.{" "}
        </motion.p>{" "}
      </div>
    </div>
  );
}
