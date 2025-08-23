import React, { useState } from "react";
import images from "../../assets/images/index";
import golden_dwn from "../../assets/svg/golden_dwn.svg"
import black_dwn from "../../assets/svg/black_dwn.svg"
import white_arr from "../../assets/svg/white_arr.svg"

// ----------------- Data -----------------
const dataTabs = [
  {
    id: "tab1",
    title: "Tab 1",
    cards: [
      {
        link: "#",
        image:
          `${images.card_img_two}`,
        title:
          "A candlelit culinary escape curated by a private chef beneath the stars.",
        location: "terrace, dining room",
        startTimes: "7.00 pm, 9.00 pm",
      },
    ],
  },
  {
    id: "tab2",
    title: "Tab 2",
    cards: [
      {
        link: "/services/spa-wellness",
        image:
          `${images.card_img_one}`,
        title:
          "Meditation held just for you in a secluded garden or over water at sunrise.",
        location: "lake, park, coast",
        startTimes: "8.00 am; 10.00 am",
      },
    ],
  },
  {
    id: "tab3",
    title: "Tab 3",
    cards: [
      {
        link: "/services/event-space",
        image:
          `${images.card_img_three}`,
        title:
          "Elegant venues for weddings, gatherings, or executive retreats.",
        location: "lawn, rooftop, beach",
        startTimes: "5.00 pm, 7.00 pm",
      },
    ],
  },
];


// ----------------- Constants -----------------
const buttonColor = "#ffc392";
const arrowIcons = [
  golden_dwn,
  black_dwn,
  white_arr,
];

// ----------------- Component -----------------
const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("tab3");

  return (
    <section
      className="section without-top-spacing"
      style={{ background: "#87a8b5", minHeight: "100vh" }}
    >
      <div
        className="base-container"
        style={{ maxWidth: 1440, margin: "0 auto", padding: 0 }}
      >
        <div
          className="tab-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
        >
          {/* ---------------- Left Info Panel ---------------- */}
          <div
            className="info-slider-left"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
              height: "100vh",              
              paddingLeft: 160,
            }}
          >
            <div className="slider-left-content" style={{ width: "70%" }}>
              <h6
                className="hero-subtitle"
                style={{
                  color: "#e67017",
                  fontWeight: 500,
                  fontSize: 18,
                  margin: "0 0 1.5rem 17rem",
                  letterSpacing: "1.5px",
                  textAlign:"right"
                }}
              >
                EXPERIENCE
              </h6>

              <h2
                className="white-slider-title"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: "1.1",
                  margin: 0,
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  textAlign:"right",
                }}
              >
                Where Time Becomes Memory
              </h2>

              <p
                style={{
                  color: "#f5f5f5",
                  fontSize: "1.15rem",
                  margin: "2rem 0",
                  maxWidth: 500,
                  textAlign:"right",
                }}
              >
                Step beyond the suite and indulge in unique experiences designed
                to elevate your stay — curated to surprise, soothe, and enchant.
              </p>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.8rem 2rem",
                  background: "none",
                  border: "2px solid #fff",
                  borderRadius: "2rem",
                  color: "#fff",
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                Discover All &nbsp;
                <img
                  src={white_arr}
                  alt="Arrow"
                  style={{ width: 24, verticalAlign: "middle" }}
                />
             </a>
            </div>
            </div>
          </div>

          {/* ---------------- Right Slider Section ---------------- */}
          <div
            className="info-slider-right"
            style={{
              position: "relative",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
            

            {/* Card Slider */}
            <div
              className="card-content w-tab-content"
              style={{ width: "78%", marginTop: 0 }}
            >
              {dataTabs.map((tab) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`panel-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                  hidden={activeTab !== tab.id}
                  style={{ display: activeTab === tab.id ? "block" : "none" }}
                >
                  <div
                    style={{
                      position: "relative",
                      minHeight: 420,
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    {/* Stacked Card Shadows */}
                    {[...Array(tab.cards.length + 2)].map((_, i) => (
                      <div
                        key={i}
                        style={{
                          position: "absolute",
                          top: `${12 * (tab.cards.length + 1 - i)}px`,
                          left: `${-5 * i}px`,
                          width: "100%",
                          height: 450,
                          borderRadius: 24,
                          background: "#fff",
                          boxShadow: "0 2px 12px rgba(0,0,0,.07)",
                          zIndex: i,
                          opacity: i < tab.cards.length ? 0.49 : 0.19,
                          transform:
                            i === 1
                              ? "rotate(-18deg)"
                              : i === 2
                              ? "rotate(-8deg)"
                              : "none",
                        }}
                      />
                    ))}

                    {/* Cards */}
                    {tab.cards.map((card, cid) => (
                      <a
                        key={cid}
                        href='#'
                        className="slider-white-card"
                        style={{
                          position: "relative",
                          zIndex: 19,
                          width: "100%",
                          display: "block",
                          background: "#fff",
                          borderRadius: 24,
                          boxShadow: "0 8px 32px rgba(12,30,58,.13)",
                          overflow: "hidden",
                          textDecoration: "none",
                        }}
                      >
                        {/* Card Image */}
                        <div
                          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                          style={{
                            width: "100%",
                            height: 250,
                            backgroundImage: `url(${card.image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderRadius: "24px 24px 0 0",
                            marginBottom: -6,
                            border: "12px solid #fff",
                            borderBottomRightRadius: "28px", 
                            borderBottomLeftRadius: "28px",
                            transition: "transform 0.4s ease-in-out", // smooth animation
                          }}
                        />

                        {/* Card Details */}
                        <div style={{ padding: "2rem 2.3rem 2.3rem" }}>
                          <h4
                            style={{
                              fontWeight: 700,
                              color: "#1d232c",
                              fontSize: "1.32rem",
                              marginBottom: "1.2rem",
                            }}
                          >
                            {card.title}
                          </h4>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-end",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  fontSize: "0.97rem",
                                  color: "#afbfcf",
                                  marginBottom: 2,
                                }}
                              >
                                Location:
                              </div>
                              <div
                                style={{
                                  fontSize: "1.08rem",
                                  color: "#708090",
                                }}
                              >
                                {card.location}
                              </div>

                              <div
                                style={{
                                  fontSize: "0.97rem",
                                  color: "#afbfcf",
                                  margin: "9px 0 4px",
                                }}
                              >
                                Start:
                              </div>
                              <div
                                style={{
                                  fontSize: "1.08rem",
                                  color: "#708090",
                                }}
                              >
                                {card.startTimes}
                              </div>
                            </div>

                            <div
                              className="card-circle-link"
                              style={{
                                width: 58,
                                height: 58,
                                background: buttonColor,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow:
                                  "0 2px 8px rgba(255,195,146,0.18)",
                                marginLeft: "1.8rem",
                              }}
                            >
                              <img
                                src={black_dwn}
                                alt="Arrow"
                                style={{ width: 35 }}
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tab Navigation Circles */}
            <div
              className="nav-tab w-tab-menu"
              role="tablist"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.2rem",
                marginBottom: "2rem",
                marginTop: "1rem",
                zIndex: 2,
              }}
            >
              {dataTabs.map((tab) => {
                const isActive = activeTab === tab.id;
            
            return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                outline: "none",
                background: "#dae6e6", // always transparent for outer circle
                width: 25,
                height: 25,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                 border: "2px solid rgba(255,255,255,0.6)", // circle border
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: isActive ? "#ffffff" : "transparent", // ✅ solid white dot only if active
                  transition: "background 0.25s ease",
                }}
             />
            </button>

    );
  })}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
