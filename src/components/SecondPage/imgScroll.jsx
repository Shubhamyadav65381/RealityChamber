import React, { useRef, useEffect, useState, useCallback } from "react";
import images from "../../assets/images/index.js";

const FADE_TRANSITION_DURATION = 3200;

const AboutSection = () => {
  const imgRefs = useRef([]);

  const [visibleStates, setVisibleStates] = useState([false, false, false, false]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observers = [];

    imgRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleStates((prev) => {
            if (prev[index] === entry.isIntersecting) return prev;
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Original image data (unchanged)
  const imagesData = [
    {
      src: images.sec_img_one,
      alt: "Project Photo 1",
      baseOffset: -70.7,
      overlayClass: "bg-black opacity-20 rounded-3xl",
      scrollFactor: 0.17,
      style: {
        width: "340px",
        height: "215px",
        marginLeft: "68%",
        position: "absolute",
      },
    },
    {
      src: images.sec_img_two,
      alt: "Project Photo 2",
      overlayClass: "rounded-3xl",
      customClass: "scroll-image-2",
      style: {
        width: "240px",
        borderRadius: "8px",
        marginLeft: "16%",
        position: "relative",
        transform: "translateY(-95px)",
        zIndex: 1,
      },
    },
    {
      src: images.sec_img_three,
      alt: "Project Photo 3",
      baseOffset: 100,
      overlayClass: "bg-black opacity-10 rounded-3xl",
      customClass: "scroll-image-3",
      scrollFactor: 0.13,
      style: {
        width: "300px",
        height: "350px",
        filter: "brightness(0.9)",
        marginLeft: "71%",
      },
    },
    {
      src: images.sec_img_four,
      alt: "Project Photo 4",
      baseOffset: -30,
      scrollFactor: 0.1,
      overlayClass: "opacity-10 rounded-3xl",
      customClass: "scroll-image-4",
      style: {
        width: "270px",
        marginLeft: "8%",
        marginTop: "-220px",
      },
    },
  ];

  const getTranslateY = (index) => {
    const { baseOffset, scrollFactor = 0.1 } = imagesData[index];
    return baseOffset - scrollY * scrollFactor;
  };

  return (
    <section className="section">
      <div className="base-container">
        {/* Desktop/Laptop: MARKUP */}
        <div className="hidden md:block">
          <div className="about-hotel-wrapper flex flex-wrap justify-between">
            <div
              className="photos-wrapper"
              style={{ position: "relative", width: "100%", height: "320px" }}
            >
              {imagesData.map(({ src, alt, overlayClass, customClass, style }, index) => (
                <div
                  key={index}
                  ref={(el) => (imgRefs.current[index] = el)}
                  className={`${customClass} relative ${
                    visibleStates[index] ? "translate-y-0" : "translate-y-12"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                    transform: `translate3d(0px, ${getTranslateY(index)}%, 0px) scale3d(1,1,1)`,
                    opacity: visibleStates[index] ? 1 : 0,
                    transition:
                      "opacity 1.6s cubic-bezier(0.23, 1, 0.32, 1), transform 1.6s cubic-bezier(0.23, 1, 0.32, 1)",
                    ...style,
                  }}
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="hotel-image w-full h-auto block rounded-3xl"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  <div
                    className={`dark-image-overlay absolute inset-0 pointer-events-none ${overlayClass}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: ONLY sec_img_one, scrolling upwards */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center px-4 py-6">
            <img
              src={images.sec_img_one}
              alt="Project Photo 1"
              className="w-full max-w-[420px] rounded-3xl shadow-md"
              style={{
                transform: `translateY(${180 - scrollY * 0.2}px)`, // << initial offset (50px lower)
                transition: "transform 0.1s linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
