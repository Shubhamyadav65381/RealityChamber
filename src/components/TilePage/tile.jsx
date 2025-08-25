import React, { useState } from "react";
import images from "../../assets/images/index";

const villas = [
  {
  name: "Residential",
  description: "Explore plots, flats, villas, and apartments designed for comfortable living.",
  img: images.tile_one,
},
{
  name: "Commercial",
  description: "Discover offices, shops, and business spaces ideal for your enterprise.",
  img: images.tile_two,
},
{
  name: "Industrial",
  description: "Choose from warehouses, factories, and industrial spaces for rent or purchase.",
  img: images.tile_three,
},
{
  name: "Agriculture",
  description: "Find farmlands and agricultural properties to support your growth and farming needs.",
  img: images.tile_four,
},

  {
  name: "Property Exchange",
  description: "Seamless property swapping solutions for buyers and sellers.",
  img: images.tile_five,
},
{
  name: "Investors",
  description: "Exclusive real estate opportunities crafted for smart investors.",
  img: images.tile_six,
},

];

// Color variables for custom styles not covered by Tailwind
const bgColor = "#171b19";
const borderColor = "#243137";
const highlightColor = "#e3ae7b";
const textColor = "#ececec";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const Tile = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardStyle, setCardStyle] = useState({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
    top: 0,
    left: 0,
  });

  const handleRowEnter = (index) => {
    setHoveredIndex(index);
    setCardStyle((prev) => ({
      ...prev,
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.08)",
      transition: "transform 0.3s cubic-bezier(.5,1.8,.6,.95)",
    }));
  };

  const handleRowLeave = () => {
    setHoveredIndex(null);
    setCardStyle((prev) => ({
      ...prev,
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s cubic-bezier(.5,.6,.46,.95)",
      top: 0,
      left: 0,
    }));
  };

  const handleMouseMove = (e) => {
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const rect = e.currentTarget.getBoundingClientRect();
    const relX = cursorX - rect.left;
    const relY = cursorY - rect.top;
    const centerX = rect.width / 5;
    const centerY = rect.height / 2;

    const rotateX = clamp(((centerY - relY) / centerY) * 10, -10, 10);
    const rotateY = clamp(((relX - centerX) / centerX) * 10, -10, 10);

    // Offset so card doesn't cover cursor exactly
    const offsetX = -50;
    const offsetY = -500;

    setCardStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
      transition: "transform 0.1s",
      left: cursorX + offsetX,
      top: cursorY + offsetY,
      position: "fixed",
      pointerEvents: "none",
      zIndex: 10,
    });
  };

  return (
    <div
      className="min-h-screen w-full px-4 py-20 font-sans relative"
      style={{ backgroundColor: bgColor, color: "white", fontFamily: "Inter, Arial, sans-serif" }}
    >
      <div
        className="grid max-w-[1200px] mx-auto rounded-[16px] border"
        style={{ gridTemplateColumns: "1fr 1fr", borderColor: borderColor }}
      >
        <div className="col-span-1 flex items-start justify-start p-8">
          <h1
            className="text-[4rem] font-bold leading-none -tracking-[1px] text-white"
            style={{ margin: 0 }}
          >
            Realty Chamber
            <br />
            For Every <br /> Solution
          </h1>
        </div>

        <div
          className="flex col-start-2 p-8 border-b items-center justify-between"
          style={{ borderColor: borderColor }}
        >
          <div className="max-w-[520px]">
            <p
              className="text-[1.09rem]"
              style={{ color: textColor, margin: 0 }}
            >
            We’re thrilled to announce an exciting update for the Realty Chamber website! From residential and commercial to industrial, agricultural, and investor opportunities — we can’t wait to reveal the full experience.
            </p>
          </div>
          <a
            href="#"
            className="ml-8 rounded-full border px-9 py-2.5 text-[1 rem] font-medium tracking-wider transition-colors duration-360 ease-in-out"
            style={{ borderColor: textColor, color: "white", backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = textColor;
              e.currentTarget.style.color = bgColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
          >
            Contact Us
          </a>
        </div>

        <div className="col-span-2 bg-transparent">
          {villas.map((villa, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className={`grid grid-cols-3 items-center py-8 cursor-pointer relative transition-all duration-400 ease-[cubic-bezier(0.88,0.15,0.2,0.84)] ${
                  isHovered ? "bg-[#e3ae7b] shadow-lg scale-[1.01]" : ""
                }`}
                style={{
                  borderBottom:
                    index === villas.length - 1 ? "none" : `1px solid ${borderColor}`,
                  zIndex: isHovered ? 3 : 1,
                }}
                onMouseEnter={() => handleRowEnter(index)}
                onMouseLeave={handleRowLeave}
                onMouseMove={isHovered ? handleMouseMove : undefined}
              >
                <div
                  className={`pl-8 font-bold text-[1.28rem] transition-colors duration-300 ${
                    isHovered ? "text-black" : "text-white"
                  }`}
                >
                  {villa.name}
                </div>
                <div
                  className={`text-[1rem] font-normal transition-colors duration-300 ${
                    isHovered ? "text-black" : "text-[#ececec]"
                  }`}
                >
                  {villa.description}
                </div>
                <div className="flex justify-end pr-5">
                  <a
                    href="#"
                    className={`flex items-center font-semibold text-[1.1rem] transition-colors duration-320 mr-8 ${
                      isHovered ? "text-black" : "text-[#e3ae7b]"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    See More
                    <span
                      className={`ml-2 text-[1.7rem] transition-transform duration-420`}
                      style={{
                        color: isHovered ? "black" : highlightColor,
                        transform: isHovered ? "translateX(8px)" : "translateX(0)",
                      }}
                    >
                      &rarr;
                    </span>
                  </a>
                </div>

                {isHovered && (
                  <div
                    className="w-[300px] h-[200px] rounded-[20px] border-[6px] border-white shadow-lg bg-white overflow-hidden select-none"
                    style={{
                      position: cardStyle.position,
                      top: cardStyle.top,
                      left: cardStyle.left,
                      transform: cardStyle.transform,
                      transition: cardStyle.transition,
                      pointerEvents: "none",
                      zIndex: 10,
                    }}
                  >
                    <img
                      src={villa.img}
                      alt={villa.name}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tile;
