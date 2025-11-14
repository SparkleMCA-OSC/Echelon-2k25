import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import GradientText from "@/components/GradientText";
import GoldenButton from "@/components/GoldThinButton";

// EVENTS DATA
const events = [
  {
    title: "FINZO (FINANCE)",
    subtitle: "Quick trades, Big gains",
    participants: "Participants: 2 make a team.",
    img: "/Finance .JPG",
    bg: "/FinanceBG.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a laptop, calculator and a stable Wi-Fi connection.",
    ],
    coordinators: ["Sadhvi – 8296614411", "Gaurav Kotian – 8050798759"],
  },
  {
    title: "HIREKART (HR)",
    subtitle: "Enrich, Engage, Empower",
    participants: "Participants: 2 make a team.",
    img: "/Hrlogo.JPG",
    bg: "/HRBG.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a stable Wi-Fi connection.",
    ],
    coordinators: ["Bhimambika – 9606661682", "Prajna K P – 9611020196"],
  },
  {
    title: "MARK-IT (MARKETING EVENT)",
    subtitle: "Where speed meets success",
    participants: "Participants: 2 make a team.",
    img: "/Marketing.PNG",
    bg: "/MarketingBG.png",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: [
      "John Sebastian Miranda – 9380675622",
      "Shalmali – 9880364735",
    ],
  },
  {
    title: "RapidOPS (BMT)",
    subtitle: "Optimize, Organise, Outstand",
    participants: "Participants: 3 make a team.",
    img: "/BMT.JPG",
    bg: "/BMTBG.jpg",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Dhananjay – 8722802212", "Nishana – 9353264949"],
  },
  {
    title: "ZEPBOSS (BEST MANAGER)",
    subtitle: "One blink, One bold decision",
    participants: "Participant: Individual event",
    img: "/BM.JPG",
    bg: "/BMBG.png",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Shiny S Devadiga – 9901442039", "Deevika B R – 7019347069"],
  },
  {
    title: "BizzBasket (BUSINESS QUIZ)",
    subtitle: "Strategy in every pick",
    participants: "Participants: 2 make a team.",
    img: "/BQ.png",
    bg: "/BQBG.jpg",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Awab Shaikh – 7022173912", "Ananya G – 8310243369"],
  },
  {
    title: "InstaPitch (SPARK TANK)",
    subtitle: "Think. Pitch. Win.",
    participants: "Participants: 2 make a team.",
    img: "/Spark Tank.JPG",
    bg: "/SparkTankBG.jpg",
    guidelines: [
      "This event is open to both UG and PG students.",
      "₹180 per participant! Use code ECHELON25 and grab the early bird offer now.",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Shahil Shetty – 7619631140", "Navya Alva – 9740944317"],
  },
];

// ANIMATION VARIANTS
const leftVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};
const centerVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const rightVariants = {
  hidden: { opacity: 0, x: 150 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

const scooterVariants = {
  hidden: { opacity: 0, x: "-200%" },

  visible: {
    opacity: 1,

    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

// MAIN COMPONENT
export default function EventSection() {
  const [selected, setSelected] = useState(null);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-10%", once: false });

  const leftAnim = useAnimation();
  const centerAnim = useAnimation();
  const rightAnim = useAnimation();
  const scooterAnim = useAnimation();

  // Trigger animations manually when section enters view
  useEffect(() => {
    if (inView) {
      leftAnim.start("visible");
      centerAnim.start("visible");
      rightAnim.start("visible");
      scooterAnim.start("visible");
    } else {
      leftAnim.start("hidden");
      centerAnim.start("hidden");
      rightAnim.start("hidden");
      scooterAnim.start("hidden");
    }
  }, [inView]);

  return (
    <div
      ref={sectionRef}
      id="events"
      className="w-full pt-30 py-20 md:py-28 flex flex-col items-center relative overflow-hidden
      bg-transparent [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      {/* BACKGROUND FLOATING EVENTS TEXT */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-start pt-10 pointer-events-none select-none">
        {/* FIRST TEXT — LEFT SIDE ENTRY */}
        <motion.h1
          variants={leftVariants}
          initial="hidden"
          animate={leftAnim}
          className="text-white/5 font-extrabold 
      text-[110px] md:text-[220px] leading-none tracking-widest"
        >
          EVENTS
        </motion.h1>

        {/* SECOND TEXT — CENTER FADE-UP */}
        <motion.h1
          variants={centerVariants}
          initial="hidden"
          animate={centerAnim}
          className="text-white/4 font-extrabold 
      text-[110px] md:text-[220px] leading-none tracking-widest"
        >
          EVENTS
        </motion.h1>

        {/* THIRD TEXT — RIGHT SIDE ENTRY */}
        <motion.h1
          variants={rightVariants}
          initial="hidden"
          animate={rightAnim}
          className="text-white/5 font-extrabold 
      text-[110px] md:text-[220px] leading-none tracking-widest"
        >
          EVENTS
        </motion.h1>
        <motion.h1
          variants={centerVariants}
          initial="hidden"
          animate={centerAnim}
          className="text-white/4 font-extrabold 
      text-[110px] md:text-[220px] leading-none tracking-widest"
        >
          EVENTS
        </motion.h1>
        <motion.h1
          variants={rightVariants}
          initial="hidden"
          animate={rightAnim}
          className="text-white/5 font-extrabold 
      text-[110px] md:text-[220px] leading-none tracking-widest"
        >
          EVENTS
        </motion.h1>
      </div>

      {/* TITLE */}
      <div className="mb-12 md:mb-20 z-10">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          className="text-3xl md:text-5xl font-bold"
        >
          Management Events
        </GradientText>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-y-5 md:gap-y-20 w-full max-w-5xl z-10">
        {/* LEFT COLUMN */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={leftAnim}
          className="flex flex-col items-center gap-10 md:gap-20"
        >
          {events.slice(0, 3).map((ev, i) => (
            <EventCircle key={i} ev={ev} onClick={() => setSelected(ev)} />
          ))}
        </motion.div>

        {/* CENTER COLUMN */}
        <motion.div
          variants={centerVariants}
          initial="hidden"
          animate={centerAnim}
          className="flex flex-col items-center mt-6 md:mt-20"
        >
          <motion.img
            src="/scooter.png"
            variants={scooterVariants}
            initial="hidden"
            animate={scooterAnim}
            className="w-28 md:w-56 mb-12 drop-shadow-[0_0_20px_rgba(255,60,60,0.6)]"
          />

          <EventCircle ev={events[3]} onClick={() => setSelected(events[3])} />
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={rightAnim}
          className="flex flex-col items-center gap-10 md:gap-20"
        >
          {events.slice(4).map((ev, i) => (
            <EventCircle key={i} ev={ev} onClick={() => setSelected(ev)} />
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <EventModal event={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
      <GoldenButton />
    </div>
  );
}

// EVENT CIRCLE — GLOSSY GLASS STYLE
function EventCircle({ ev, onClick }) {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="
          relative group
          w-24 h-24 md:w-44 md:h-44
          rounded-full cursor-pointer
          transition-all duration-300
        "
      >
        {/* GLASS BORDER */}
        <div
          className="
            absolute inset-0 rounded-full 
            bg-white/10 backdrop-blur-xl
            border border-white/30
            shadow-[0_0_15px_rgba(255,255,255,0.15),inset_0_0_12px_rgba(255,255,255,0.25)]
          "
        ></div>

        {/* SHINY HIGHLIGHT */}
        <div
          className="
            absolute -top-1 -left-1 
            w-10 h-10 md:w-20 md:h-20 
            rounded-full 
            bg-white/40 blur-xl
            opacity-60 rotate-12
          "
        ></div>

        {/* INNER GLOW */}
        <div
          className="
            absolute inset-0 rounded-full 
            shadow-[0_0_25px_rgba(255,80,80,0.45)]
          "
        ></div>

        {/* IMAGE */}
        <img
          src={ev.img}
          alt={ev.title}
          className="w-full h-full object-cover rounded-full relative z-10"
        />
      </motion.div>

      {/* NAME UNDER CIRCLE */}
      <p
        className="
    text-white mt-2 md:mt-3 
    text-[10px] md:text-lg font-semibold 
    leading-tight 
    w-24 md:w-44 
    h-8 md:h-[50px] 
    flex items-center justify-center 
    text-center
  "
      >
        {ev.title}
      </p>
    </div>
  );
}

// EVENT MODAL
function EventModal({ event, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-999 bg-black/70 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* MODAL CARD */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="
    relative rounded-3xl p-8 max-w-xl w-full text-white shadow-2xl
    bg-cover bg-center bg-no-repeat
    border border-white/20
  "
        style={{
          backgroundImage: `url(${event.bg})`,
        }}
      >
        {/* BACK BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-4 left-4 
            px-3 py-1.5 
            text-sm font-semibold
            rounded-lg
            bg-white/20 hover:bg-white/30
            border border-white/30
            backdrop-blur-xl
            transition
            z-99999
          "
        >
          ❮ Back
        </button>

        {/* CONTENT WRAPPER */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-10"
        >
          <h2 className="text-3xl font-bold text-center">{event.title}</h2>
          <p className="text-purple-300 italic text-center text-lg mt-1">
            {event.subtitle}
          </p>

          <p className="mt-4 text-center text-white/90">{event.participants}</p>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              mt-6 
              max-h-50
              overflow-y-auto 
              pr-2
              custom-scrollbar
            "
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* GUIDELINES */}
            <h3 className="font-semibold text-xl mb-2">Guidelines:</h3>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {event.guidelines.map((g, i) => (
                <motion.p
                  key={i}
                  className="mb-1"
                  variants={{
                    hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
                    show: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                >
                  • {g}
                </motion.p>
              ))}
            </motion.div>

            {/* COORDINATORS */}
            <h3 className="font-semibold text-xl mt-5 mb-2">Coordinators:</h3>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {event.coordinators.map((c, i) => (
                <motion.p
                  key={i}
                  className="mb-1"
                  variants={{
                    hidden: { opacity: 0, x: -10, filter: "blur(4px)" },
                    show: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                >
                  {c}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* REGISTER BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="
              mt-8 px-6 py-3 w-full 
              rounded-lg bg-linear-to-r from-red-600 via-red-500 to-red-700
              shadow-[0_0_15px_rgba(255,60,60,0.7)] border border-red-300/40 backdrop-blur-xl
              transition-all duration-300 hover:scale-105
              font-bold tracking-wide text-center
            "
          >
            Register
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
