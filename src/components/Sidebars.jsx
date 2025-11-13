"use client";
import React from "react";
import {
  Home,
  CalendarDays,
  Phone,
  Users,
  Gem,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  MessageCircle,
  NotebookText,
  Globe,
  Dock,
  DockIcon,
} from "lucide-react";

// === Navigation Items (with IDs for scroll targets) ===
const navItems = [
  {
    icon: <Home size={22} color="#4ade80" />,
    label: "HOME",
    glow: "rgba(74,222,128,0.6)",
    target: "home",
  },
  {
    icon: <CalendarDays size={22} color="#60a5fa" />,
    label: "EVENTS",
    glow: "rgba(96,165,250,0.6)",
    target: "events",
  },
  {
    icon: <NotebookText size={22} color="#a78bfa" />,
    label: "RULES",
    glow: "rgba(167,139,250,0.6)",
    target: "rules",
  },
  {
    icon: <Users size={22} color="#facc15" />,
    label: "ABOUT US",
    glow: "rgba(250,204,21,0.6)",
    target: "about",
  },

  {
    icon: <Phone size={22} color="#f472b6" />,
    label: "CONTACT",
    glow: "rgba(244,114,182,0.6)",
    target: "contact",
  },
  {
    icon: <DockIcon size={22} color="#e1306c" />,
    glow: "rgba(225,48,108,0.6)",
    label: "BROCHURE",
    link: "brochure",
  },
];

// === Social Icons (with proper brand colors) ===
const socialItems = [
  {
    // Globe (use a neutral blue)
    icon: <Globe size={22} color="rgb(0, 249, 246)" />,
    glow: "rgba(0,149,246,0.6)",
    link: "#",
  },
  {
    // Instagram gradient base pink
    icon: <Instagram size={22} color="rgb(225,48,108)" />,
    glow: "rgba(225,48,108,0.6)",
    link: "#",
  },
  {
    // Facebook blue
    icon: <Facebook size={22} color="rgb(24,119,242)" />,
    glow: "rgba(24,119,242,0.6)",
    link: "#",
  },
  {
    // LinkedIn blue
    icon: <Linkedin size={22} color="rgb(10,202,194)" />,
    glow: "rgba(10,102,194,0.6)",
    link: "#",
  },
];

// === Smooth Scroll Function ===
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Sidebars = () => {
  return (
    <>
      {/* === Left Navigation Sidebar === */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-9999 hidden md:flex">
        <div
          className="w-[70px] h-[520px] rounded-3xl 
          bg-[rgba(15,15,25,0.7)] border border-[rgba(255,255,255,0.15)]
          backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_0_20px_rgba(255,0,255,0.1)]
          flex flex-col items-center justify-center space-y-6 text-white"
        >
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.target)}
              className="flex flex-col items-center transition-all duration-300 group focus:outline-none"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full
                bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
                transition-all duration-300 group-hover:scale-110"
                style={{
                  boxShadow: `0 0 8px ${item.glow}`,
                }}
              >
                {item.icon}
              </div>
              <span
                className="text-[10px] mt-1 tracking-wider font-medium group-hover:scale-105"
                style={{ color: item.icon.props.color }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* === Right Social Sidebar === */}
      {/* <div className="fixed right-6 top-1/2 -translate-y-1/2 z-9999 hidden md:flex">
        <div
          className="w-[70px] h-[280px] rounded-3xl 
          bg-[rgba(15,15,25,0.7)] border border-[rgba(255,255,255,0.15)]
          backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_0_20px_rgba(0,255,255,0.1)]
          flex flex-col items-center justify-center space-y-6 text-white"
        >
          {socialItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 group"
              style={{
                color: item.icon.props.color,
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full
                bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
                transition-all duration-300 group-hover:scale-110"
                style={{
                  boxShadow: `0 0 8px ${item.glow}`,
                }}
              >
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div> */}

      {/* === Bottom Navigation Bar (for Mobile) === */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[99999] md:hidden
        w-[92%] bg-[rgba(15,15,25,0.8)] backdrop-blur-2xl border border-[rgba(255,255,255,0.15)]
        flex items-center justify-around py-3 rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.15)]"
      >
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(item.target)}
            className="flex flex-col items-center transition-all duration-300 focus:outline-none"
            style={{
              color: item.icon.props.color,
            }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full
              bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]
              transition-all duration-300 group-hover:scale-110"
              style={{
                boxShadow: `0 0 8px ${item.glow}`,
              }}
            >
              {item.icon}
            </div>
            <span className="text-[9px] mt-1 font-semibold tracking-wide">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebars;
