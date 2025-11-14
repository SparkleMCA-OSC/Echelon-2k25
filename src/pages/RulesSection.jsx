import React from "react";
import { motion } from "framer-motion";

const sectionTitle = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4 }, // faster
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      delay: i * 0.08,
    },
  }),
};

const RulesSection = () => {
  const managementRules = [
    "Any number of participants from a college can participate for the event.",
    "The event is open to both UG and PG students.",
    "Registration fee: ₹180 per participant. (Register before Nov 30 to get Early Bird discount of ₹150!)",
    "Participants should carry laptops, calculators, net setters, pen drives etc.",
    "Organizers are not responsible for providing any items.",
    "Judges' & organizers' decision will be final and binding.",
    "Teams using unfair means will be disqualified.",
    "Participants must use the college code allotted by the Echelon team.",
  ];

  const culturalRules = [
    "Any number of participants from a college can participate.",
    "The event is open to both UG and PG students.",
    "Cultural Event Fees:",
    "1 event → ₹150 (Coral Access)",
    "2 events → ₹200 (Pearl Access)",
    "3 events → ₹250 (Aurora Access)",
    "4 events → ₹300 (Trident Access)",
    "Judges' & organizers' decision will be final and binding.",
    "Unfair practices lead to disqualification.",
    "Participants must use the college code allotted by the Echelon team.",
  ];

  return (
    <div
      id="rules"
      className="
        relative w-full min-h-screen py-20 md:py-28 
        bg-black/70 backdrop-blur-3xl border-t border-white/10
        flex flex-col items-center
      "
    >
      {/* BACKGROUND TEXT */}
      <h1
        className="
          absolute top-10 left-1/2 -translate-x-1/2
          text-[70px] md:text-[180px] font-extrabold uppercase
          text-white/5 tracking-widest pointer-events-none select-none
        "
      >
        RULES
      </h1>

      {/* Title */}
      <motion.h2
        variants={sectionTitle}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // 👈 replays every time
        className="text-3xl md:text-5xl font-bold text-center text-white mb-12 tracking-wide"
      >
        Rules & Regulations
      </motion.h2>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-[92%] md:w-[80%] max-w-6xl">
        {/* MANAGEMENT CARD */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // 👈 replays
          custom={0}
          className="
            flex-1 rounded-3xl p-6 md:p-8 
            bg-[rgba(20,20,35,0.55)] border border-white/20 
            shadow-[inset_0_0_25px_rgba(255,255,255,0.08),0_0_25px_rgba(108,99,255,0.25)]
            backdrop-blur-2xl
          "
        >
          <h3 className="text-xl md:text-3xl font-bold text-purple-300 mb-6">
            MANAGEMENT EVENT
          </h3>

          <ul className="space-y-3 text-white/90 leading-relaxed">
            {managementRules.map((rule, i) => (
              <motion.li
                key={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} // 👈 replays
                custom={i + 1}
                className="flex gap-2"
              >
                <span className="text-purple-400">•</span>
                <span>{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CULTURAL CARD */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // 👈 replays
          custom={0}
          className="
            flex-1 rounded-3xl p-6 md:p-8 
            bg-[rgba(20,20,35,0.55)] border border-white/20 
            shadow-[inset_0_0_25px_rgba(255,255,255,0.08),0_0_25px_rgba(255,99,170,0.25)]
            backdrop-blur-2xl
          "
        >
          <h3 className="text-xl md:text-3xl font-bold text-pink-300 mb-6">
            CULTURAL EVENTS
          </h3>

          <ul className="space-y-3 text-white/90 leading-relaxed">
            {culturalRules.map((rule, i) => (
              <motion.li
                key={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} // 👈 replays
                custom={i + 1}
                className="flex gap-2"
              >
                <span className="text-pink-400">•</span>
                <span>{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default RulesSection;
