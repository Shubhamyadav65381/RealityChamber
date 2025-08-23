import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FourSecond from "./fourSecond";


/* Global variables and custom CSS injected inline */
const GlobalStyles = () => (
  <style>{`
    :root {
      --light-bg: #89a6b2;
      --peach-bg: #ffc392;
      --primary-dark: #0a0e0e;
      --peach-shadow: 0 10px 30px 0 rgba(55,54,54,0.09);
      --vector-opacity: 0.19;
      --client-inactive: rgba(10,14,14,0.26);
      --client-underline: #0a0e0e;
      --card-radius: 28px;
      --quote-size: 64px;
      --review-spacing: 40px;
    }
    body {
      background: var(--light-bg);
      font-family: "Instrument Sans", sans-serif;
      font-size: 16px;
      color: var(--primary-dark);
      margin: 0;
    }
    .slick-slider {
      position: static;
    }
    .slick-dots {
      bottom: -10px;
    }
    .slick-dots li button:before {
      font-size: 13px;
      color: var(--primary-dark);
      opacity: 0.27;
    }
    .slick-dots li.slick-active button:before {
      color: var(--primary-dark);
      opacity: 0.76;
    }
    @media (max-width: 900px) {
      .mirall-review-card {
        flex-direction: column !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .mirall-card-left {
        border-right: none !important;
        border-bottom: 1px solid rgba(10,14,14,0.07) !important;
        flex-direction: row !important;
        padding: 24px 14px 12px 32px !important;
        width: 100% !important;
        gap: 22px;
        min-width: 0 !important;
      }
      .mirall-card-right {
        padding: 32px 20px 28px 24px !important;
      }
      .mirall-arrows-row {
        margin-top: 34px !important;
      }
    }
    @media (max-width: 700px) {
      .mirall-slider-container {
        max-width: 99vw !important;
        min-width: 0 !important;
        width: 99vw !important;
      }
      .mirall-review-card {
        margin-right: 0 !important;
        margin-left: 0 !important;
        padding: 0 !important;
      }
      .mirall-card-left {
        padding-left: 18px !important;
      }
    }
  `}</style>
);

const reviews = [
  {
    id: 1,
    clientNames: [
      { name: "The Lee Family", active: true },
      { name: "Amelia & James Parker" },
      { name: "James Williams" },
      { name: "Nina Davis" },
    ],
    rating: "9.3/10",
    text: `Staying at Mirall was like stepping into another world. Each villa tells its own story, and the location by the sea is beyond breathtaking. It’s a perfect retreat for those looking for both adventure and serenity.`,
  },
  {
    id: 2,
    clientNames: [
      { name: "The Lee Family" },
      { name: "Amelia & James Parker", active: true },
      { name: "James Williams" },
      { name: "Nina Davis" },
    ],
    rating: "9.9/10",
    text: `From the moment we arrived, everything felt effortless. The villas are stunning, the atmosphere is serene, and the views stretch endlessly across the water. Every detail felt thoughtfully designed.`,
  },
  {
    id: 3,
    clientNames: [
      { name: "The Lee Family" },
      { name: "Amelia & James Parker" },
      { name: "James Williams", active: true },
      { name: "Nina Davis" },
    ],
    rating: "8.8/10",
    text: `A peaceful hideaway with world-class service and soul-soothing scenery. We explored nearby villages during the day and relaxed in total privacy by night. Mirall knows how to leave an impression.`,
  },
  {
    id: 4,
    clientNames: [
      { name: "The Lee Family" },
      { name: "Amelia & James Parker" },
      { name: "James Williams" },
      { name: "Nina Davis", active: true },
    ],
    rating: "9.7/10",
    text: `What impressed me most was the balance between luxury and soul. You feel cared for without being overwhelmed. The staff are kind, the views are unreal, and the energy is unforgettable.`,
  },
];

const CardBGVector = () => (
  <svg
    width="184"
    height="164"
    viewBox="0 0 184 164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      height: "140px",
      width: "140px",
      pointerEvents: "none",
      opacity: "var(--vector-opacity)",
      userSelect: "none",
      zIndex: 0,
    }}
  >
    <path
      d="M183.727 108.121L143.642 84.0255V41.8346L183.727 17.7392V108.121Z"
      stroke="#0a0e0e"
      strokeWidth="2"
      strokeOpacity="0.12"
    />
    <path
      d="M143.642 1.20837L104.447 24.8017L64.3622 1.20837L104.447 -22.385L143.642 1.20837Z"
      stroke="#0a0e0e"
      strokeWidth="2"
      strokeOpacity="0.12"
    />
    <path
      d="M143.642 126.271L104.447 149.864L64.3622 126.271L104.447 102.678L143.642 126.271Z"
      stroke="#0a0e0e"
      strokeWidth="2"
      strokeOpacity="0.12"
    />
    <path
      d="M65 41V85.5M143 41V85.5M104.5 103V150"
      stroke="#0a0e0e"
      strokeWidth="2"
      strokeOpacity="0.12"
    />
  </svg>
);

const QuoteSVG = () => (
  <svg width="48" height="44" viewBox="0 0 48 44" fill="none" style={{ display: "block" }}>
    <text x="0" y="36" fontFamily="inherit" fontWeight="bold" fontSize="64" fill="#0a0e0e">
      &ldquo;
    </text>
  </svg>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous"
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      marginRight: 22,
      width: 56,
      height: 56,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      backgroundColor: "var(--peach-bg)",
      border: "1.5px solid #0a0e0e",
      transition: "box-shadow 0.15s"
    }}>
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="15" fill="none" />
      <path d="M19.5 23L13.5 16L19.5 9" stroke="#0a0e0e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    style={{
      background: "#0a0e0e",
      border: "none",
      cursor: "pointer",
      padding: 0,
      marginLeft: 22,
      width: 56,
      height: 56,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      transition: "box-shadow 0.15s"
    }}>
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="16" fill="#0a0e0e" />
      <path d="M12.5 23L18.5 16L12.5 9" stroke="#FFC392" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

const Four = () => {
  const sliderRef = React.useRef();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: true,
  };

  // Slider controls for bottom arrows
  const goToPrev = () => sliderRef.current && sliderRef.current.slickPrev();
  const goToNext = () => sliderRef.current && sliderRef.current.slickNext();

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          minHeight: "100vh",
          background: "var(--light-bg)",
          padding: "80px 0 0 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            maxWidth: "900px",
            fontWeight: 700,
            fontSize: "clamp(3.3rem,3vw,3.3rem)",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            color: "#fff",
            marginBottom: 76,
            textAlign: "center",
            userSelect: "none",
          }}
        >
          Come As You Are And We Will <br />
          Take Care Of The Rest
        </h1>

        {/* Slider Card */}
        <div className="mirall-slider-container" style={{
          maxWidth: 1190,
          width: "80vw",
          minWidth: 320,
        }}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {reviews.map((review) => (
              <div key={review.id}>
                <section
                  className="mirall-review-card"
                  style={{
                    display: "flex",
                    boxShadow: "var(--peach-shadow)",
                    background: "var(--peach-bg)",
                    borderRadius: "var(--card-radius)",
                    minHeight: 468,
                    margin: "0 14px",
                    overflow: "hidden",
                    position: "relative",
                    padding: "0",
                  }}
                >
                  <CardBGVector />

                  {/* LEFT: Client list */}
                  <aside
                    className="mirall-card-left"
                    style={{
                      minWidth: 264,
                      maxWidth: 275,
                      borderRight: "1px solid rgba(10,14,14,0.07)",
                      padding: "48px 34px 32px 46px",
                      boxSizing: "border-box",
                      display: "flex",
                      flexDirection: "column",
                      background: "none",
                      zIndex: 2,
                    }}
                  >
                    {review.clientNames.map(({ name, active }, i) => (
                      <div
                        key={name}
                        style={{
                          margin: "0 0 10px 0",
                          fontWeight: active ? 600 : 400,
                          fontSize: "1.1rem",
                          color: active ? "var(--primary-dark)" : "var(--client-inactive)",
                          borderBottom: active ? "2px solid var(--client-underline)" : "2px solid transparent",
                          paddingBottom: 7,
                          transition: "all .22s",
                          fontFamily: "inherit",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
                          cursor: active ? "default" : "pointer"
                        }}
                      >
                        {name}
                      </div>
                    ))}
                  </aside>

                  {/* RIGHT: Review content */}
                  <main
                    className="mirall-card-right"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: "56px 54px 32px 58px",
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                      {/* Large Quote Mark */}
                      <span
                        aria-hidden="true"
                        style={{
                          display: "block",
                          fontSize: "var(--quote-size)",
                          fontWeight: 900,
                          color: "var(--primary-dark)",
                          marginTop: "-4px",
                          fontFamily: "serif",
                          lineHeight: 1,
                        }}
                      >
                        &ldquo;
                      </span>
                      <p
                        style={{
                          fontSize: 32,
                          fontStyle: "italic",
                          color: "var(--primary-dark)",
                          marginTop: 15,
                          fontWeight: 400,
                          lineHeight: 1.37,
                          letterSpacing: "-0.01em"
                        }}
                      >
                        {review.text}
                      </p>
                    </div>

                    {/* Bottom Row: Rating */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                        height: 56,
                        marginTop: "auto",
                        position: "relative"
                      }}
                    >
                      <span
                        style={{
                          fontSize: 18,
                          color: "var(--primary-dark)",
                          fontWeight: 400,
                          userSelect: "none"
                        }}
                      >
                        Reviews : {review.rating}
                      </span>
                    </div>
                  </main>
                </section>
              </div>
            ))}
          </Slider>

          {/* ARROW ROW OUTSIDE CARD */}
          <div
            className="mirall-arrows-row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              width: "100%",
              margin: "38px 0 0 0",
              position: "relative",
              zIndex: 11,
            }}
          >
            <PrevArrow onClick={goToPrev} />
            <NextArrow onClick={goToNext} />
          </div>
        </div>
      </div>
      <FourSecond />
    </>
  );
};

export default Four;
