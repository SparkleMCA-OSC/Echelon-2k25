import { useEffect, useState } from "react";
import AnimatedCityBg from "./components/AnimatedCityBg";
import Sidebars from "./components/Sidebars";
import Navbar from "./components/Navbar";
import EventsSection from "./pages/EventSection";
import GlimpseSection from "./pages/GlimpseSection";
import AboutSection from "./pages/AboutSection";
import AppLoader from "./components/AppLoader";
import GlassTimer from "./components/GlassTimer";
import GlassTimerVertical from "./components/GlassTimerVertical";
import Footer from "./components/Footer";
import RulesSection from "./pages/RulesSection";
import Lenis from "@studio-freight/lenis";

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
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
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
      "Only ₹180 per person! Use code ECHELON25 and grab your Late Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Bhimambika – 9606661682", "Prajna K P – 9611020196"],
  },
  // (Your other events...)
];

function App() {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  // === PRELOAD IMAGES (0 → 60%) ===
  const preloadImages = (arr) => {
    let loaded = 0;

    return Promise.all(
      arr.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => {
              loaded++;
              setProgress(Math.floor((loaded / arr.length) * 60)); // 60%
              resolve();
            };
          })
      )
    );
  };

  const preloadVideo = (src) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");

      video.src = src;
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.crossOrigin = "anonymous";
      video.style.position = "absolute";
      video.style.opacity = "0";
      video.style.pointerEvents = "none";

      document.body.appendChild(video);

      let frameRendered = false;

      // Called only when the FIRST REAL FRAME is decoded + painted
      const onFrame = () => {
        frameRendered = true;
        setProgress(100);
        document.body.removeChild(video);
        resolve();
      };

      // If browser supports requestVideoFrameCallback
      if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
        video.requestVideoFrameCallback(onFrame);
      }

      // Trigger video load
      video.load();

      // Start playback (required for some devices)
      video.play().catch(() => {});

      // TRUE fallback — keep loader until frame is painted
      const fallback = setInterval(() => {
        if (video.readyState >= 2 && !frameRendered) {
          // readyState >= 2 means enough data to play first frame
          onFrame();
          clearInterval(fallback);
        }
      }, 200);

      // Hard fallback after long wait but WITHOUT skipping the frame
      setTimeout(() => {
        if (!frameRendered) {
          console.warn("Video slow → waiting for first frame...");
        }
      }, 8000);
    });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: true,
      wheelMultiplier: 0.9,
      lerp: 0.08, // buttery smooth
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const loadAll = async () => {
      const imageList = [
        "/thicklogo.png",
        "/sditlogo.png",
        ...events.map((e) => e.img),
        ...events.map((e) => e.bg),
      ];

      await preloadImages(imageList); // 0 → 60%
      await preloadVideo("/output.webm"); // 60 → 100%

      setIsReady(true);
    };

    loadAll();
  }, []);

  if (!isReady) return <AppLoader progress={progress} />;

  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <AnimatedCityBg />
        <Sidebars />

        {/* HERO SECTION */}
        <div className="fixed overflow-hidden inset-0 z-0 flex flex-col items-center justify-center text-white space-y-6">
          <div className="md:hidden relative -mt-7 -mb-3">
            <GlassTimerVertical targetDate="2025-12-03T09:00:00" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={"/thicklogo.png"}
              alt="Logo"
              className="w-[260px] md:w-[380px] rounded-full drop-shadow-2xl"
            />
          </div>
          {/* Event Date */}
          <span
            className="
            text-sm md:text-lg 
            font-semibold tracking-wide
            text-white/90
            bg-[rgba(255,255,255,0.1)]
            border border-white/20
            px-4 py-1.5
            rounded-full 
            backdrop-blur-md
            shadow-[0_0_10px_rgba(255,255,255,0.15)]
          "
          >
            📅 DECEMBER 3rd - 4th 2025
          </span>

          <div className="flex md:flex-row flex-col items-center justify-center gap-3 md:gap-5 mt-4">
            <a
              href="https://konfhub.com/echelon-2k25"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="group relative overflow-hidden -mt-7 px-6 md:px-8 h-[60px] md:h-[70px]
              flex items-center justify-center rounded-xl text-base md:text-xl font-extrabold
              uppercase text-white bg-linear-to-r from-red-600 via-red-500 to-red-700
              shadow-[0_0_15px_rgba(255,60,60,0.7)] border border-red-300/40 backdrop-blur-xl
              transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">⚡ Register Now</span>
              </button>
            </a>

            <div
              className="
              h-[45px] items-center gap-2 
               px-4 py-2 
              flex md:hidden flex-row justify-center 
              rounded-xl
              bg-linear-to-br from-[#d4af37] via-[#b88a2c] to-[#e1c16e] 
              border border-yellow-300/40
              shadow-[0_0_15px_rgba(255,215,0,0.5)] 
              relative overflow-hidden 
              min-w-[180px] md:min-w-[200px]
  "
            >
              {/* MAIN CONTENT (your original) */}
              <div className="flex flex-row items-center gap-2">
                <span className="text-[13px] font-extrabold text-white">
                  🎉 Early Bird Offer!
                </span>

                <span className="text-[11px] text-white/90 font-medium">
                  Use code:{" "}
                  <span className="font-bold text-white">ECHELON25</span>
                </span>
              </div>

              {/* VALID TILL — centered below */}
              <span
                className="
                absolute bottom-0.5 left-1/2 -translate-x-1/2 
                text-[9px] font-semibold text-red-800
              "
              >
                ⏳ valid till 30 Nov
              </span>
            </div>

            <div
              className="
              hidden md:flex
              h-[60px] md:h-[70px] px-4 md:px-5 py-2 flex-col justify-center rounded-xl
              bg-linear-to-br from-[#d4af37] via-[#b88a2c] to-[#e1c16e]
              border border-yellow-300/40 shadow-[0_0_15px_rgba(255,215,0,0.5)]
              relative overflow-hidden min-w-[180px] md:min-w-[200px]
              md:-mt-7
              "
            >
              <span className="text-[13px] md:text-xl font-extrabold text-white">
                🎉 Early Bird Offer!
              </span>
              <span className="text-[11px] md:text-md text-white/90 font-medium">
                Use code:{" "}
                <span className="font-bold text-white ml-1">ECHELON25</span>
                <span className="font-light text-red-700 ml-1">
                  [valid till 30th Nov]
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="relative z-50">
        <EventsSection />
        <RulesSection />
        <AboutSection />
        <GlimpseSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
