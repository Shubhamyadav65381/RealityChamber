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

      {/* address block */}
      <div className="flex justify-between items-start bg-[#88A0A8] w-full px-8 pt-16 mt-10">
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
