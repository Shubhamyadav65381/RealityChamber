import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar.jsx';
import backgroundImg from '../../assets/images/background.png';
import cutout_building from '../../assets/images/cutout_building.png';

const Home = () => {
  const [scale, setScale] = useState(1.35);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Map scrollY (0 to 300px) to scale (1.35 to 2.15)
      const newScale = 1.35 + Math.min(scrollY / 3000, 0.8);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      {/* Vertical lines overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[40%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[60%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[80%] h-full w-px bg-white/30" />
        </div>
      {/* address block */}
      <div className="flex justify-between items-start bg-[#88A0A8] w-full px-46 pt-16 mt-10">
        {/* LEFT COLUMN: Address block */}
        <div className="flex flex-col items-start w-1/3">
          <a
            href="#"
            className="flex items-center bg-transparent px-20 py-18 rounded group hover:cursor-pointer w-[380px] h-[80px] overflow-hidden"
          >
            <svg
              className="w-12 h-19 mr-2 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22s7-7.58 7-12A7 7 0 1 0 5 10c0 4.42 7 12 7 12zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                fill="#FCC692"
              />
            </svg>
            <span className="text-white text-base font-medium group-hover:text-[#FCC692] transition-colors duration-300">
              10/615, Malviya Nagar,<br />
              Jaipur - 302017, Rajasthan,India
            </span>
          </a>
        </div>

        {/* CENTER COLUMN: Leave empty or use for logo, or use w-1/3 and center logo above */}
        <div className="flex flex-col items-center w-1/3">{/* Place logo here if needed */}</div>

        {/* RIGHT COLUMN: Tagline and sun */}
        <div className="flex flex-col items-start w-1/3">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 mr-3 flex-shrink-0 animate-spin-slow"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="7" fill="#FCC692" />
              {[...Array(16)].map((_, i) => (
                <rect
                  key={i}
                  x="23"
                  y="3"
                  width="2"
                  height="10"
                  rx="1"
                  fill="#FCC692"
                  transform={`rotate(${i * 22.5},24,24)`}
                />
              ))}
            </svg>
            <span className="text-white text-lg font-semibold leading-tight">
              Reality Chamber
              <br />
              Your Real Estate Partner
            </span>
          </div>
        </div>
      </div>

      <section
        className="w-[99vw] h-[139vh] bg-cover bg-center relative scroll-smooth overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Vertical lines overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[40%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[60%] h-full w-px bg-white/30" />
          <div className="absolute top-0 left-[80%] h-full w-px bg-white/30" />
        </div>


        {/* cutout building image which is zoomed on scroll */}
        <img
          src={cutout_building}
          alt="cuted image"
          className="absolute object-contain pointer-events-none z-10"
          style={{
            top: 155,
            left: -16,
            width: '100%',
            height: 'auto',
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease-out',
          }}
        />
          {/* Left Info Box: Local stone... */}
        <div
          className="absolute z-30 pointer-events-none"
          style={{ left: '14vw', top: '80vh' }}
          >
          <div className="relative ml-[90px]" style={{ width: 210 }}>
            <div
              className="p-3 rounded-xl text-white font-medium shadow-xl"
              style={{
               background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(1px)',
              }}
            >
              Realty Chamber <br /> Single Window Solution <br /> for All of Your Needs
            </div>
            {/* SVG line & dot */}
            <div className="absolute pointer-events-none" style={{ right: -85, top: 5 }}>
              <svg width="85" height="44" viewBox="0 0 85 44" fill="none">
                <polyline
                  points="-8,50 45,5 88,5"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />
                <circle cx="79" cy="6" r="6" fill="white" />
              </svg>
            </div>
          </div>
        </div>

      
      {/* VISION Info Box (bottom-right) */}
      <div
        className="absolute z-30 pointer-events-none"
        style={{
          left: '53vw',     // adjust as needed for your layout
          top: '100vh',      // adjust as needed for vertical position
       }}
      >
        <div className="relative" style={{ width: 345 }}>
          {/* Box content */}
          <div
            className="p-5 rounded-xl text-white font-normal shadow-xl"
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.5)',
              backdropFilter: 'blur(1px)',
            }}
          >
            <span className="font-bold tracking-wide pb-1 block uppercase text-sm">VISION</span>
            We are committed to aspire to be a world leader in Real Estate Industry with high values, honesty and utmost dedication.
          </div>
         {/* SVG connector line & dot (top-right of box, angled upwards) */}
          <div
  className="absolute pointer-events-none"
  style={{
    left: '55%',    // left edge of the SVG is at middle of the info box
    top: '-34px',   // adjust as needed to reach top border of box
    transform: 'translateX(-55%)', // center from left 50%
  }}
>
  <svg width="110" height="44" viewBox="0 0 110 44" fill="none">
    {/* Line: horizontal then up/right to dot */}
    <polyline
      points="0,32 66,2 103,2"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
    <circle cx="103" cy="2" r="6" fill="white" />
  </svg>
</div>

       </div>
      </div>




        {/* Rality chamber is on the main image */}
        <div className="relative w-full flex justify-center items-center h-[300px] md:h-[400px] lg:h-[500px]">
          {/* REALTY */}
          <h1
            className="text-[60px] md:text-[120px] lg:text-[280px] font-bold text-white tracking-tight font-serif select-none leading-none text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              marginTop: '40px',
              marginLeft: '70px',
            }}
          >
            REALTY
          </h1>
          {/* CHAMBER overlapping middle */}
          <span
            className="absolute left-1/2 top-1/2 text-[32px] md:text-[58px] lg:text-[90px] font-bold uppercase"
            style={{
              color: '#FFC445', // Or #FFC100 or any gold as in your image
              fontFamily: "'Playfair Display', serif", // Use same font as 'REALTY' for match
              transform: 'translate(-50%,-60%)',
              pointerEvents: 'none',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              marginTop: '50px',
              marginLeft: '0px',
            }}
          >
            CHAMBER
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
