import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar.jsx";
import AboutSection from "./imgScroll.jsx";
import ExperienceSection from "./cardScroll.jsx";


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

      <div className="min-h-[210vh] w-full bg-[#87a8b5] relative overflow-hidden">
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

          <span style={{marginTop:"100px", width:"430px"}} >
            <p className="text-white text-center text-[1.3rem]  md:text-[1.2rem] leading-tight mb-6 max-w-3xl">
              We have a holistic philosophy which translates into creating a harmonious environment, complemented by wellness services that aim to detoxify and rejuvenate your mind, body.
            </p>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold text-base flex items-center gap-1 transition hover:bg-[#87A8B5] hover:border 1px solid white shadow"
              style={{ width:"200px", textAlign:"center", marginLeft:"130px", position:"absolute", top:"640px" }}
            >Find out more
              {/* Arrow icon */}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </span>
        </div>
        {/* images scrolling in the background */}
        <AboutSection />
        {/* experience section  and cards*/}
        <ExperienceSection />
      </div>
    </>
  );
};

export default Second;
