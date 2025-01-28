import React, { useEffect, useRef, useState } from "react";
import { v1, v2 } from "../../assets/Home/Videos/index";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const vedios = [v1, v2];

const HomeHeader = () => {
  const elementRef = useRef([]);
  const [currentVedio, setCurrentVideo] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentVideo = elementRef.current[currentVedio];
    const previousVideo =
      elementRef.current[currentVedio - 1] ||
      elementRef.current[currentVedio + 1];

    if (previousVideo) {
      previousVideo.pause();
      previousVideo.currentTime = 0;
    }

    if (currentVideo) {
      currentVideo.play().catch((err) => {
        console.error("Failed to play video:", err);
      });
    }
  }, [currentVedio]);

  const handleNext = () => {
    if (currentVedio < vedios.length - 1) {
      setCurrentVideo((prev) => prev + 1);
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (currentVedio > 0) {
      setCurrentVideo((prev) => prev - 1);
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-[80vh] overflow-hidden relative" dir="ltr">
      <div
        className="flex flex-nowrap w-screen h-full overflow-hidden overflow-x-hidden scroll-snap-x-mandatory scroll-smooth transition-transform"
        ref={containerRef}
      >
        {vedios.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-screen h-full">
            <video
              className="w-full h-full object-cover"
              ref={(ele) => (elementRef.current[index] = ele)}
              muted
              loop={currentVedio === index}
              playsInline
            >
              <source src={item} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute top-1/2 rounded-full bg-gray-50 p-2 right-10 z-50 text-black"
        disabled={currentVedio === vedios.length - 1}
      >
        <FaArrowRight className="w-fit text-3xl font-light text-gray-700" />
      </button>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-10 z-50 rounded-full bg-gray-50 p-2"
        disabled={currentVedio === 0}
      >
        <FaArrowLeft className="w-fit text-3xl font-light text-gray-700" />
      </button>
      <div className="overLay bg-gradient-to-tr from-indigo-400 to-emerald-500 to-90% absolute top-0 left-0 w-full h-full opacity-50" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {vedios.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentVedio === idx ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHeader;
