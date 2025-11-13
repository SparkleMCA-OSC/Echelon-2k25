import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedCityBg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div
      id="home"
      className="relative w-full h-screen overflow-hidden select-none"
    >
      <video
        ref={videoRef}
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload noremoteplayback nofullscreen"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    </div>
  );
};

export default AnimatedCityBg;
