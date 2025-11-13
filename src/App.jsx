import { useEffect, useState } from "react";
import AnimatedCityBg from "./components/AnimatedCityBg";
import Sidebars from "./components/Sidebars";
import Navbar from "./components/Navbar";
import EventsSection from "./pages/EventSection";
import GlimpseSection from "./pages/GlimpseSection";
import AboutSection from "./pages/AboutSection";
import AppLoader from "./components/AppLoader";

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

  // === PRELOAD VIDEO STRONG MODE (60 → 100%) ===
  const preloadVideo = (src) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.style.display = "none";
      document.body.appendChild(video);

      let canPlay = false;
      let dataLoaded = false;

      const tryFinish = () => {
        if (canPlay && dataLoaded) {
          document.body.removeChild(video);
          setProgress(100);
          resolve();
        }
      };

      // Fired when browser determines enough can be played
      video.addEventListener("canplaythrough", () => {
        canPlay = true;
        setProgress(80);
        tryFinish();
      });

      // Fired when first frames are decoded
      video.onloadeddata = () => {
        dataLoaded = true;
        setProgress(90);
        tryFinish();
      };

      // Start loading
      video.load();

      // EXTREMELY IMPORTANT: fallback timeout
      setTimeout(() => {
        if (!canPlay || !dataLoaded) {
          console.warn("Video preload timed out → Forcing ready state");
          document.body.removeChild(video);
          setProgress(100);
          resolve();
        }
      }, 6000);
    });
  };

  useEffect(() => {
    const loadAll = async () => {
      const imageList = [
        "/scooter.png",
        "/thicklogo.png",
        "/sditlogo.png",
        ...events.map((e) => e.img),
        ...events.map((e) => e.bg),
      ];

      await preloadImages(imageList); // 0 → 60%
      await preloadVideo("/bg.mp4"); // 60 → 100%

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
          <div className="flex items-center justify-center">
            <img
              src={"/thicklogo.png"}
              alt="Logo"
              className="w-[260px] md:w-[380px] rounded-full drop-shadow-2xl"
            />
          </div>

          <div className="flex md:flex-row flex-col items-center gap-3 md:gap-5 mt-4">
            <button
              className="group relative overflow-hidden px-6 md:px-8 h-[60px] md:h-[70px]
              flex items-center justify-center rounded-xl text-base md:text-xl font-extrabold
              uppercase text-white bg-linear-to-r from-red-600 via-red-500 to-red-700
              shadow-[0_0_15px_rgba(255,60,60,0.7)] border border-red-300/40 backdrop-blur-xl
              transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">⚡ Register Now</span>
            </button>

            <div
              className="h-[60px] md:h-[70px] px-4 md:px-5 py-2 flex flex-col justify-center rounded-xl
              bg-linear-to-br from-[#d4af37] via-[#b88a2c] to-[#e1c16e] border border-yellow-300/40
              shadow-[0_0_15px_rgba(255,215,0,0.5)] relative overflow-hidden min-w-[180px] md:min-w-[200px]"
            >
              <span className="text-[13px] md:text-xl font-extrabold text-white">
                🎉 Early Bird Offer!
              </span>
              <span className="text-[11px] md:text-md text-white/90 font-medium">
                Use code:{" "}
                <span className="font-bold text-white ml-1">ECHELON25</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="relative z-50">
        <EventsSection />
        <AboutSection />
        <GlimpseSection />
      </div>
    </>
  );
}

export default App;
