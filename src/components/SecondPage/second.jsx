import React, { useRef, useEffect, useState } from "react";
import Navbar from "../Navbar/navbar.jsx";
import AboutSection from "./imgScroll.jsx";
import ExperienceSection from "./cardScroll.jsx";

const Second = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefDesktop = useRef(null);

  useEffect(() => {
    // Keep original behavior for desktop hero fade-in
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRefDesktop.current) {
      observer.observe(sectionRefDesktop.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-[210vh] w-full bg-[#87a8b5] relative overflow-hidden">
        {/* ---------------- Desktop/Laptop HERO (ORIGINAL, unchanged) ---------------- */}
        <div
          ref={sectionRefDesktop}
          className={`
            hidden md:flex flex-col items-center justify-center w-full min-h-screen px-4
            transition-all duration-700 ease-out
            relative z-10
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <h1 className="text-[2rem] md:text-[1.8rem] font-semibold uppercase text-center tracking-[0.25em] mb-8 ml-3 text-[#e67017]">
            Introduction
          </h1>
          <h3 className="text-white text-center text-[1.1rem] font-bold md:text-[1.8rem] leading-tight mb-6 max-w-3xl">
            Realty Chamber, under the leadership of Mr. Ramlal Narwani,
            is a trusted name in real estate with a strong presence in India and Dubai.
            We deliver world-class property solutions with integrity, innovation, and unmatched expertise — turning opportunities into success for our clients.
          </h3>

          <span style={{ marginTop: "100px", width: "530px" }}>
            <p className="text-white text-center text-[1.3rem]  md:text-[1.5rem] leading-tight mb-6 max-w-3xl">
              Realty Chamber, guided by Mr. Ramlal Narwani, empowers clients in India and Dubai with reliable, innovative, and ethical real estate solutions that inspire success.
            </p>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold text-base flex items-center gap-1 transition hover:bg-[#87A8B5] hover:border 1px solid white shadow"
              style={{
                width: "200px",
                textAlign: "center",
                marginLeft: "130px",
                position: "absolute",
                top: "750px",
              }}
            >
              Find out more
              {/* Arrow icon */}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </span>
        </div>

        {/* ---------------- Mobile HERO (stacked, clean) ---------------- */}
        <div className="block md:hidden relative z-10 px-4 pt-10 pb-6">
          <h1 className="text-[1.6rem] font-semibold uppercase text-center tracking-[0.2em] mb-4 text-[#e67017]">
            Introduction
          </h1>

          <h3 className="text-white text-center text-[1.05rem] font-semibold leading-snug mb-4">
            Realty Chamber, under the leadership of Mr. Ramlal Narwani,
            is a trusted name in real estate with a strong presence in India and Dubai.
            We deliver world-class property solutions with integrity, innovation, and unmatched expertise — turning opportunities into success for our clients.
          </h3>

          <p className="text-white text-center text-[1rem] leading-snug mb-6">
            Realty Chamber, guided by Mr. Ramlal Narwani, empowers clients in India and Dubai with reliable, innovative, and ethical real estate solutions that inspire success.
          </p>

          <div className="flex justify-center">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm flex items-center gap-1 transition hover:bg-[#87A8B5] hover:border shadow"
            >
              Find out more
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* images scrolling in the background */}
        <AboutSection />
        {/* experience section and cards */}
        <ExperienceSection />
      </div>
    </>
  );
};

export default Second;
