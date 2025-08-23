import React, { useState } from "react";
import images from "../../assets/images/index";

const villas = [
  {
    name: "Sell A Property",
    description: "Plots, flats, villas, or offices available for sale with ease.",
    img: images.tile_one,
  },
  {
    name: "Purchase A Property",
    description: "Find your ideal residential or commercial property today.",
    img: images.tile_two,
  },
  {
    name: "Rent A Property",
    description: "Choose from homes or spaces available for rent or lease.",
    img: images.tile_three,
  },
  {
    name: "Joint Venture",
    description: "Partner with Realty Chamber for growth and collaboration.",
    img: images.tile_four,
  },
  {
    name: "Property Exchange",
    description: "Hassle-free property swaps tailored to your needs.",
    img: images.tile_five,
  },
  {
    name: "Investors",
    description: "Explore opportunities designed exclusively for investors.",
    img: images.tile_six,
  },
];

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

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0",
    border: `1px solid ${borderColor}`,
    borderRadius: "16px",
    overflow: "hidden",
    maxWidth: "1200px",
    margin: "0 auto",
    background: "none",
  };

  const headingStyles = {
    fontSize: "4rem",
    fontWeight: 700,
    lineHeight: 1,
    padding: "2rem",
    letterSpacing: "-1px",
    color: "white",
    margin: "0",
    display: "block",
  };

  const topRowStyles = {
    gridColumn: "2 / span 1",
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${borderColor}`,
    background: "none",
  };

  const villasListStyles = {
    gridColumn: "1 / span 2",
    background: "none",
  };

  const villaRowBase = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    padding: "2rem 0",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(.88,.15,.2,.84)",
    background: "none",
    position: "relative",
  };

  const villaNameStyles = (isHovered) => ({
    fontWeight: 700,
    fontSize: "1.28rem",
    color: isHovered ? "black" : "white",
    paddingLeft: "2rem",
    transition: "color 0.3s",
  });

  const villaDescStyles = (isHovered) => ({
    color: isHovered ? "black" : textColor,
    transition: "color 0.3s",
    fontSize: "1rem",
    fontWeight: 400,
  });

  const seeMoreStyles = (isHovered) => ({
    color: isHovered ? "black" : highlightColor,
    fontSize: "1.1rem",
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "color 0.32s",
    marginRight: "2rem",
  });

  const arrowStyles = (isHovered) => ({
    marginLeft: "0.5rem",
    fontSize: "1.7rem",
    transition: "transform 0.42s, color 0.32s",
    color: isHovered ? "black" : highlightColor,
    transform: isHovered ? "translateX(8px)" : "translateX(0)",
  });

  const villaRowHover = {
    background: highlightColor,
    boxShadow: "0 4px 20px 0 rgba(227,174,123,0.13)",
    transform: "scale(1.01)",
    transition: "all 0.33s cubic-bezier(.77,.1,.18,.96)",
  };

  const imageCardBaseStyle = {
    width: "300px",
    height: "200px",
    borderRadius: "20px",
    border: "6px solid white",
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    backgroundColor: "white",
    overflow: "hidden",
    userSelect: "none",
  };

  const imgStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: bgColor,
        color: "white",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "5rem 1rem",
        position: "relative",
      }}
    >
      <div style={gridStyles}>
        <div
          style={{
            gridColumn: "1 / span 1",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <h1 style={headingStyles}>
            Realty Chamber
            <br />
            For Every <br /> Solution
          </h1>
        </div>

        <div style={topRowStyles}>
          <div style={{ maxWidth: "520px" }}>
            <p style={{ color: textColor, fontSize: "1.09rem", margin: "0" }}>
              We’re thrilled to announce an exciting motion update for the Realty
              Chamber website! You’ve seen the design previews, and now we can’t
              wait to reveal the full experience coming your way.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              border: `1.5px solid ${textColor}`,
              color: "white",
              background: "none",
              padding: "10px 36px",
              borderRadius: "999px",
              fontSize: "1.08rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              marginLeft: "2rem",
              transition: "background 0.36s, color 0.33s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = textColor;
              e.currentTarget.style.color = bgColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.color = "white";
            }}
          >
            Contact Us
          </a>
        </div>

        <div style={villasListStyles}>
          {villas.map((villa, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                style={{
                  ...villaRowBase,
                  ...(isHovered ? villaRowHover : {}),
                  borderBottom:
                    index === villas.length - 1 ? "none" : `1px solid ${borderColor}`,
                  zIndex: isHovered ? 3 : 1,
                }}
                onMouseEnter={() => handleRowEnter(index)}
                onMouseLeave={handleRowLeave}
                onMouseMove={isHovered ? handleMouseMove : undefined}
              >
                <div style={villaNameStyles(isHovered)}>{villa.name}</div>
                <div style={villaDescStyles(isHovered)}>{villa.description}</div>
                <div
                  style={{ display: "flex", justifyContent: "flex-end", paddingRight: "1.25rem" }}
                >
                  <a href="#" style={seeMoreStyles(isHovered)}>
                    See More
                    <span style={arrowStyles(isHovered)}>&rarr;</span>
                  </a>
                </div>

                {isHovered && (
                  <div
                    style={{
                      ...imageCardBaseStyle,
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
                      style={imgStyle}
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
