import React from "react";
import { motion } from "framer-motion";
import {
  Expandable,
  ExpandableTrigger,
  ExpandableCard,
  ExpandableCardHeader,
  ExpandableCardContent,
  ExpandableContent,
  ExpandableCardFooter,
} from "@/components/ui/expandable";
import { Button } from "@/components/ui/button";
import FeaturingSection from "@/components/FeaturingSection";

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
      className="w-full min-h-screen shadow-2xl pt-30 px-2 py-14 md:px-20 flex flex-col gap-20 z-100 relative"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
      }}
    >
      <FeaturingSection />
      {/* ================================
          ⭐ ABOUT SECTION (your original)
      ================================= */}
      {/* BACKGROUND TEXT */}
      <span
        className="
        absolute 
        md:top-1/2 md:-translate-y-1/3 
        top-1/2 -translate-y-35
        left-1/2 -translate-x-1/2
        text-[80px] md:text-[200px]
        font-extrabold 
        uppercase 
        tracking-widest
        text-white/5 
        select-none 
        pointer-events-none
  "
      >
        ABOUT
      </span>
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
      <div className="flex flex-col px-3 gap-10 max-w-4xl mx-auto">
        {" "}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-blue-100"
        >
          {" "}
          Echelon 25 is the flagship management fest of the Department of Master
          of Business Administration, bringing together aspiring managers,
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
