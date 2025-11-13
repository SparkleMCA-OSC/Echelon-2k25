import { useEffect, useState } from "react";
import AnimatedCityBg from "./components/AnimatedCityBg";
import Sidebars from "./components/Sidebars";
import Navbar from "./components/Navbar";
import EventsSection from "./pages/EventSection";
import GlimpseSection from "./pages/GlimpseSection";
import AboutSection from "./pages/AboutSection";
import AppLoader from "./components/AppLoader";

// import events from "./pages/eventData";

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
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
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
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
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
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Dhananjay – 8722802212", "Nishana – 9353264949"],
  },
  {
    title: "ZEPBOSS (BEST MANAGER)",
    subtitle: "One blink, One bold decision",
    participants: "Participants: Individual event",
    img: "/BM.JPG",
    bg: "/BMBG.JPG",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
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
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Awab Shaikh – 7022173912", "Fathima Nawal – 7022024815"],
  },
  {
    title: "InstaPitch (SPARK TANK)",
    subtitle: "Think. Pitch. Win.",
    participants: "Participants: 2 make a team.",
    img: "/Spark Tank.JPG",
    bg: "/SparkTankBG.jpg",
    guidelines: [
      "This event is open to both UG and PG students.",
      "Only ₹180 per person! Use code ECHELON25 and grab your Early Bird Offer now!",
      "Participants must have a laptop and a stable Wi-Fi connection.",
    ],
    coordinators: ["Shahil Shetty – 7619631140", "Navya Alva – 9740944317"],
  },
];

function App() {
  const [isReady, setIsReady] = useState(false);

  // Preload all images
  const preloadImages = (arr) => {
    return Promise.all(
      arr.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );
  };

  useEffect(() => {
    const imgs = [
      "/scooter.png",
      "/thicklogo.png",
      "/sditlogo.png",
      "/bg.mp4",
      
      ...events.map((e) => e.img),
      ...events.map((e) => e.bg),
    ];

    preloadImages(imgs).then(() => {
      console.log("All images loaded");
    });
  }, []);

  if (!isReady) {
    return <AppLoader onFinish={() => setIsReady(true)} />;
  }

  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <AnimatedCityBg />
        <Sidebars />

        {/* HERO SECTION */}
        <div className="fixed overflow-hidden inset-0 z-0 flex flex-col items-center justify-center text-white space-y-6">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src={"/thicklogo.png"}
              alt="Logo"
              className="w-[260px] md:w-[380px] rounded-full drop-shadow-2xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex md:flex-row flex-col items-center gap-3 md:gap-5 mt-4">
            {/* Register Button */}
            <button
              className="
              group relative overflow-hidden px-6 md:px-8 
              h-[60px] md:h-[70px]
              flex items-center justify-center rounded-xl 
              text-base md:text-xl font-extrabold uppercase text-white
              bg-linear-to-r from-red-600 via-red-500 to-red-700
              shadow-[0_0_15px_rgba(255,60,60,0.7),0_0_30px_rgba(255,40,40,0.6)]
              border border-red-300/40 backdrop-blur-xl
              transition-all duration-300 hover:scale-105
              hover:shadow-[0_0_25px_rgba(255,80,80,0.9)]
            "
            >
              <span className="absolute inset-0 opacity-20 bg-linear-to-br from-white/10 to-transparent"></span>

              <span
                className="
                absolute inset-0 bg-linear-to-r 
                from-transparent via-white/25 to-transparent 
                translate-x-[-100%] group-hover:translate-x-[100%]
                transition-all duration-700
              "
              />

              <span className="relative z-10 drop-shadow-[0_0_6px_rgba(255,80,80,0.9)]">
                ⚡ Register Now
              </span>
            </button>

            {/* Offer Box */}
            <div
              className="
              h-[60px] md:h-[70px] px-4 md:px-5 py-2
              flex flex-col justify-center rounded-xl 
              bg-linear-to-br from-[#d4af37] via-[#b88a2c] to-[#e1c16e]
              border border-yellow-300/40
              shadow-[0_0_15px_rgba(255,215,0,0.5)]
              relative overflow-hidden min-w-[180px] md:min-w-[200px]
              "
            >
              <span
                className="
                absolute inset-0 
                bg-linear-to-r from-transparent via-white/40 to-transparent
                translate-x-[-150%]
                animate-[shine_2.5s_linear_infinite]
              "
              />

              <style>
                {`
                @keyframes shine {
                  0% { transform: translateX(-150%); }
                  100% { transform: translateX(150%); }
                }
              `}
              </style>

              <span className="text-[13px] md:text-xl font-extrabold text-white">
                🎉 Early Bird Offer!
              </span>

              <span className="text-[11px] md:text-md text-white/90 font-medium">
                Use code:
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
