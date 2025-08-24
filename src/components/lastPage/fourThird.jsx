import React from "react";
import images from "../../assets/images/index"
// Paste your background hero image URL and vector image below
const BG_full = images.bg_fourth_last;
const VECTOR = images.vector;

const FourThird = () => (
  <section className="relative min-h-[68vh] sm:min-h-[74vh] md:min-h-[105vh] flex items-center justify-center overflow-hidden bg-black">
    {/* Background image */}
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('${BG_full}')`,
      }}
    />
    {/* Blue fade on top */}
<div
  className="absolute inset-0 pointer-events-none z-10"
  style={{
    background:
      "linear-gradient(to bottom, #89A6B2 0px, #89A6B2cc 64px, #89A6B280 140px, #89A6B230 210px, transparent 280px)"
  }}
/>
    {/* Dark overlay for image legibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 pointer-events-none z-20" />
    {/* Main Content */}
    <div className="relative z-30 flex flex-col gap-6 px-4 md:px-0 max-w-5xl w-full mx-auto">
      <div className="flex flex-col justify-center min-h-[440px] md:min-h-[520px]">
        <span className="uppercase text-[#ffc392] tracking-wide mb-5 text-base md:text-lg">
          WE ARE WAITING FOR YOU
        </span>
        <h1 className="font-bold leading-tight text-white text-3xl sm:text-2xl md:text-4xl lg:text-6xl max-w-3xl mb-6">
          Come Find the Place Your <br />Soul Already Knows —
          <br className="hidden md:block"/>
          <span className="block text-[#ffc392] mt-2 lg:mt-0">
            a Sanctuary Shaped by the <br /> Sea and Silence
          </span>
        </h1>
        <a
          href="/contact-us"
          className="inline-block mt-2 bg-white text-black font-medium text-lg px-8 py-3 rounded-full shadow transition hover:bg-[#ffc392] hover:text-black focus:outline-none"
          style={{ width:"fit-content" }}
        >
          Book Your Stay
        </a>
      </div>
    </div>
  </section>
);

export default FourThird;
