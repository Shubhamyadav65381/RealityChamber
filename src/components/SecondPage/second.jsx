import React, { useRef, useEffect, useState } from 'react';
import Navbar  from '../Navbar/navbar'
import images from '../../assets/images/index';

const Second = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animation
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
    <div className="min-h-[310vh] w-full bg-[#87a8b5] relative">
      {/* Placeholder for top part */}
      <div className="h-1200px w-screen flex items-center justify-center"></div>

      {/* Fade-in Section */}
      <div
        ref={sectionRef}
        className={`
          flex flex-col items-center relative px-4 duration-700 transition-all paddingTop:'250px'
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}
      >
        <h1 className="text-lg text-bold text-[#f1b382] uppercase text-center mb-2 mt-18 tracking-widest">Introduction</h1>
        <h3 className="text-white text-center text-[1rem] font-bold md:text-[1.5rem] leading-tight mb-6 mt-16 max-w-4xl">
          Realty Chamber, under the leadership of Mr. Ramlal Narwani, is a trusted name in real estate with a strong presence in India and Dubai. We deliver world-class property solutions with integrity, innovation, and unmatched expertise — turning opportunities into success for our clients.
        </h3>
        
        
        
        
        
        {/* Card Style Image */}
        {/* <div
          className={`
            transition-all duration-700 rounded-xl overflow-hidden shadow-xl
            w-[350px] md:w-[420px] h-[200px] md:h-[240px] mt-2 bg-white
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
          `}
        >
          <img
            src={images.card_img.png}
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Second;
