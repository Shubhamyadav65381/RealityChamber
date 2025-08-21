import React, { useState } from 'react';
import Button from '../Button/button';
import images from '../../assets/images/index'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop navigation (left group - screenshot style)
  const leftNav = [
    { label: 'Home', href: '#home', varient:'primary' },
    { label: 'Add', href: '#add' },
    { label: 'Services', href: '#services' },
  ];

  // Right group per screenshot ("Contact Us" — outline; "Book Now" — filled)
  const rightNav = [
    { label: 'Contact Us', href: '#contact', outlined: true },
    { label: 'Book Now', href: '#features', filled: true },
  ];

  return (
    <header className="w-full bg-[#88A0A8]  fixed top-0 z-50 ">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Left nav group */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {leftNav.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-2 bg-transparent border border-white/70 rounded-full text-white font-medium text-base flex items-center gap-1 hover:bg-white hover:text-black transition "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Center logo and tagline */}
<div className="flex items-center justify-center gap-3">
  {/* Logo */}
  <span className="flex items-center justify-center">
  <img
    src={images.logo}
    alt="logo image"
    className="w-16 h-16 object-contain drop-shadow-lg"
    style={{
      filter: 'brightness(1.5) contrast(1.2) drop-shadow(0 0 4px rgba(0,0,0,0.6))',
    }}
  />
</span>



  {/* Text container for REALTY and chamber stacked vertically */}
  <div className="flex flex-col items-start">
    {/* REALTY */}
    <span
      className="font-bold leading-none"
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "34px",
        color: "#fff",
        letterSpacing: "0.3px",
      }}
    >
      REALTY
    </span>

    {/* CHAMBER */}
    <span
      className="uppercase tracking-widest"
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 500,
        fontSize: "15px",
        color: "#fff",
        letterSpacing: "0.17em",
        lineHeight: "1",
        paddingLeft:"14px"
      }}
    >
      chamber
    </span>
  </div>
</div>


          {/* Right nav group */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* "Contact Us" - outlined */}
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-white text-white font-semibold text-base bg-transparent hover:bg-white/70 hover:text-black transition"
            >
              Contact Us
            </a>
            {/* "Book Now" - filled, arrow */}
            <a
              href="#features"
              className="px-6 py-2 rounded-full bg-[#FCC692] text-gray-900 font-semibold text-base flex items-center gap-1 transition hover:bg-[#ffddb0] shadow"
            >
              Book Now
              {/* Arrow icon */}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden p-2 text-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-[#89A4B1] rounded-lg mt-2 py-2 px-6`}>
          {[...leftNav, ...rightNav].map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={`block py-3 font-medium text-white border-b border-white/15 last:border-0 ${
                item.filled
                  ? 'bg-[#FCC692] text-gray-900 rounded-full px-4 mt-2 flex items-center justify-between font-semibold'
                  : item.outlined
                  ? 'border border-white rounded-full px-4 mt-2'
                  : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              {item.filled && (
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;