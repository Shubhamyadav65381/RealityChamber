import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar.jsx";
import AboutSection from "./imgScroll.jsx";

const Second = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-[180vh] w-full bg-[#87a8b5] relative overflow-hidden">
        {/* Vertical lines overlay, whole page */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[40%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[60%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[80%] h-full w-px bg-white/30" />
        </div> */}

        {/* Fade-in section, above lines */}
        <div
          ref={sectionRef}
          className={`
            flex flex-col items-center justify-center w-full min-h-screen px-4
            transition-all duration-700 ease-out
            relative z-10
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <h1 className="text-[2rem] md:text-[1.8rem] font-semibold uppercase text-center tracking-[0.25em] mb-8 ml-3 text-[#e67017]">
            Introduction
          </h1>
          <h3 className="text-white text-center text-[1.1rem] font-bold md:text-[1.6rem] leading-tight mb-6 max-w-3xl">
            Realty Chamber, under the leadership of Mr. Ramlal Narwani,
            is a trusted name in real estate with a strong presence in India and Dubai.
            We deliver world-class property solutions with integrity, innovation, and unmatched expertise — turning opportunities into success for our clients.
          </h3>
        </div>
        <AboutSection />
      </div>
    </>
  );
};

export default Second;
