import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlassTimerVertical = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = String(
        Math.floor(distance / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeData = [
    { label: "DAYS", value: timeLeft.days, glow: "rgba(167,139,250,0.6)" },
    { label: "HOURS", value: timeLeft.hours, glow: "rgba(96,165,250,0.6)" },
    { label: "MINUTES", value: timeLeft.minutes, glow: "rgba(74,222,128,0.6)" },
    {
      label: "SECONDS",
      value: timeLeft.seconds,
      glow: "rgba(244,114,182,0.6)",
    },
  ];

  return (
    <div
      className="
      flex flex-row items-center justify-center
      gap-2 px-2 py-2
      rounded-xl
      w-full
    "
    >
      {timeData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="
            flex flex-col items-center justify-center
            w-[50px] h-[55px]
            rounded-lg
            border border-[rgba(255,255,255,0.15)]
            bg-[rgba(15,15,25,0.7)]
            shadow-[inset_0_0_6px_rgba(255,255,255,0.07)]
          "
          style={{
            boxShadow: `0 0 10px ${item.glow}, inset 0 0 6px rgba(255,255,255,0.04)`,
          }}
        >
          <motion.span
            key={item.value}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg font-bold tracking-wide"
            style={{ color: item.glow }}
          >
            {item.value}
          </motion.span>

          <span className="text-[6px] tracking-widest text-gray-300 font-semibold uppercase">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default GlassTimerVertical;
