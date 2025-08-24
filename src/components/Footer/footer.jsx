import React from "react";

const Footer = () => (
  <footer className="relative bg-[#0a0e0e] text-white pt-10 pb-16 overflow-hidden isolate">
    {/* Grid vertical lines (decoration, not interactive)
    // <div
    //   aria-hidden="true"
    //   className="absolute inset-0 pointer-events-none z-0 hidden md:grid grid-cols-5 max-w-6xl mx-auto w-full"
    // >
    //   {[...Array(5)].map((_, i) => (
    //     <div key={i} className="w-px h-full bg-white/10" />
    //   ))}
    // </div> */}

    {/* Main content grid */}
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-14">
        {/* Left: Site Links */}
        <nav className="flex flex-col gap-4 text-base md:text-lg font-normal">
          <a href="#" className="hover:underline focus:underline transition">About us</a>
          <a href="#" className="hover:underline focus:underline transition">Services</a>
          <a href="#" className="hover:underline focus:underline transition">Connect us</a>
        </nav>

        {/* Center: Contact Info */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <a
            href="tel:+919829066382"
            className="text-2xl md:text-3xl font-extrabold tracking-wider mb-2"
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            +91-9829066382 <br /> +91-9982011116
          </a>
          <a
            href="mailto:info@example.com"
            className="text-[#ffc392] font-bold text-2xl md:text-4xl leading-tight mb-2"
            style={{ fontFamily: "Instrument Sans, sans-serif" }}
          >
            narwani1975@gmail.com  <br />info@realtychamber.com
          </a>
          <div className="text-white/70 mt-3 text-[1rem] md:text-base">
            10/615, Malviya Nagar,<br />
            Jaipur - 302017, Rajasthan, India
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col items-end md:items-end gap-4 text-base md:text-lg font-normal">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline transition">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline transition">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline transition">Pinterest</a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-white/70 gap-2">
        <span>© Reality Chamber. All Rights Reserved. </span>
      </div>
    </div>

    {/* Large "Reality Chamber" text watermark */}
    <span
      aria-hidden="true"
      className="pointer-events-none select-none absolute left-1/2 bottom-6 -translate-x-1/2 text-[8rem] md:text-[12rem] lg:text-[10rem] font-black text-white/[.07] leading-none z-0 whitespace-nowrap"
      style={{
        fontFamily: "Instrument Sans, sans-serif",
      }}
    >
      Reality Chamber
    </span>
  </footer>
);

export default Footer;
