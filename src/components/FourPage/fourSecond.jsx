import React, { useState } from "react";

const GlobalStyles = () => (
  <style>{`
    :root {
      -webkit-text-size-adjust: 100%;
      --light-bg: #89a6b2;
      --primary-dark: #0a0e0e;
      --paragraph-gray: #3d4040;
      --link-color: #7d99a9;
      --light-peach: #ffc392;
      --primary: #7c9bab;
      --white: #fff;
      --card-radius: 28px;
    }
    body {
      margin: 0;
      font-family: "Instrument Sans",sans-serif;
      font-size: 16px;
      font-weight: 400;
      background: var(--light-bg);
      color: var(--primary-dark);
    }
    *, *:before, *:after { box-sizing: inherit; }
    .fs_sliderGrid {
      display: grid;
      grid-template-columns: 1.28fr 1fr;
      gap: 64px;
      align-items: flex-start;
      margin: 72px auto 0 auto;
      max-width: 1350px;
      padding: 0 2vw 90px 2vw;
    }
    .fs_card {
      background: var(--white);
      border-radius: 28px;
      box-shadow: 0 4px 28px rgba(16,40,59,0.08);
      padding: 0 0 22px 0;
      width: 100%;
      max-width: 640px;
      margin-bottom: 0;
      margin-left: 80px;
      display: flex;
      flex-direction: column;
      transition: box-shadow .23s;
      border: 10px solid #fff;
      
    }
    .fs_award_row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 18px;
      margin-top: -18px;
      margin-left: 80px;
    }
    .fs_award_icon {
      width: 54px;
      height: 54px;
      object-fit: contain;
      user-select: none;
    }
    .fs_award_text {
      font-size: 2.15rem;
      font-weight: 700;
      color: var(--white);
      text-shadow: 0 1px 4px #0002;
      letter-spacing: -1px;
      margin: 0;
    }
    .fs_tabs_row {
      display: flex;
      gap: 16px;
      margin-bottom: 34px;
      margin-top: 18px;
      margin-left: 80px;
      flex-wrap: wrap;
      z-index: 1;
    }
    .fs_tab_btn {
      border: none;
      background: none;
      outline: none;
      font-family: inherit;
      font-size: 1.28rem;
      color: var(--primary-dark);
      font-weight: 500;
      border-radius: 9999px;
      padding: 7px 26px;
      cursor: pointer;
      box-shadow: 0 0 0 1.5px var(--primary-dark) inset;
      background: #89A6B2;
      opacity: 0.9;
      margin-bottom: 2px;
      transition: background .21s,color .19s,box-shadow .27s,opacity .17s;
    }
    .fs_tab_btn.active {
      font-weight: 500;
      background: var(--primary-dark);
      color: var(--white);
      opacity: 1;
      box-shadow: 0 0 0 3px var(--primary-dark) inset;
    }
    .fs_tab_btn.active:hover {
        color: #ffc392;
    }

    .fs_card_img_wrap {
      width: 100%;
      aspect-ratio: 2.1/1;
      border-radius: 22px 22px 0 0;
      overflow: hidden;
      display: block;
      background: #ededed;
      border-radius: var(--card-radius);
    }
    .fs_card_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .fs_card_info {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 18px;
      justify-content: flex-start;
      padding: 20px 22px 10px 22px;
      font-family: inherit;
    }
    .fs_card_label {
      font-weight: 500;
      font-size: 0.97rem;
      line-height: 1.65;
      color: var(--primary);
      min-width: 100px;
      text-transform: capitalize;
      opacity: 0.97;
      margin-top: 3px;
    }
    .fs_card_title {
      font-weight: 700;
      color: var(--primary-dark);
      font-size: 1.23rem;
      line-height: 1.28;
      letter-spacing: -.03em;
    }
    .fs_card_footer{
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: center;
      margin-top: 10px;
      margin-bottom: -14px;
      padding-right: 24px;
    }
    .fs_circle_btn {
      width: 52px;
      height: 52px;
      min-width: 52px;
      min-height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--light-peach);
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
      transition: background .17s;
      box-shadow: 0 2px 10px #0001;
      font-size: 1.36rem;
      margin-left: 12px;
    }
    .fs_circle_btn svg { width: 26px; height: 26px; }
    .fs_circle_btn:hover { background: #ffd6ae; }
    /* RIGHT SIDE */
    .fs_right_box {
      border-radius: 28px;
      padding: 90px 40px 40px 54px;
      background: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 480px;
      margin-left: auto;
      max-width: 450px;
      width: 100%;
    }
    .fs_r_title {
      color: var(--white);
      font-size: clamp(2.2rem, 3.6vw, 3.1rem);
      font-weight: 700;
      letter-spacing: -2.2px;
      margin-bottom: 0.9em;
      line-height: 1.08;
      margin-top: 80px;
      text-shadow: 0 5px 22px #0001;
    }
    .fs_r_txt {
      color: var(--white);
      font-size: 1.21rem;
      line-height: 1.59;
      opacity: 0.92;
      max-width: 420px;
      margin-bottom: 2.1em;
      margin-top: 0;
      font-weight: 400;
    }
    .fs_r_btn {
      border-radius: 30px;
      border: 2px solid var(--white);
      background: transparent;
      color: var(--white);
      padding: 12px 24px ;
      font-size: 1.14rem;
      font-weight: 600;
      letter-spacing: 0.015em;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      transition: background .19s,border .22s;
      font-family: inherit;
      width: 35%;
    }
    .fs_r_btn:hover, .fs_r_btn:focus {
      background: var(--white);
      color: var(--primary-dark);
      border: 2px solid var(--white);
      text-decoration: none;
    }
    .fs_btn_icon {
      width: 18px;
      height: 18px;
    }
    @media (max-width: 1100px) {
      .fs_sliderGrid {
        grid-template-columns: 1fr;
        gap: 48px;
      }
      .fs_right_box {
        padding: 58px 4vw 34px 4vw;
        margin-left: 0;
      }
      .fs_card { margin: 0 auto; }
    }
    @media (max-width: 600px) {
      .fs_sliderGrid {
        padding: 0 4vw 34px 4vw;
      }
      .fs_card_info { flex-direction: column; gap: 5px; }
    }
  `}</style>
);

const tabData = [
  {
    key: "restaurant",
    title: "Restaurant",
    image: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684889db387f149c70148c88_4%20(1).webp",
    label: "Indoor Restaurant",
    desc: "Garden Open Kitchen Is Part Of The Hotel With Very Rich And Delicious Menu.",
    btnLink: "/contact-us",
  },
  {
    key: "bar",
    title: "Bar",
    image: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/6848029f1a7d52164eb0191f_1.webp",
    label: "Cozy Lounge",
    desc: "Relax with cocktails and a curated wine list in a stylish atmosphere.",
    btnLink: "/contact-us",
  },
  {
    key: "terrace",
    title: "Terrace",
    image: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684802a24d23ca2c25d27553_2.webp",
    label: "Outdoor Dining",
    desc: "Enjoy seasonal dishes and stunning views from the terrace.",
    btnLink: "/contact-us",
  },
  {
    key: "beachCafe",
    title: "Beach Cafe",
    image: "https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/6848027716f06b3a47507bf5_3.webp",
    label: "Seaside Spot",
    desc: "Casual bites and drinks served right on the shore with ocean breeze.",
    btnLink: "/contact-us",
  },
];

// Arrow SVG for the card and button
const ArrowIcon = ({ fill = "#0a0e0e" }) => (
  <svg fill="none" viewBox="0 0 28 28" width="45" height="45">
    <circle cx="14" cy="14" r="14" fill="none"/>
    <path d="M10 14h7m0 0-3-3m3 3-3 3" stroke={fill} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FourSecond = () => {
  const [activeTab, setActiveTab] = useState("restaurant");
  const active = tabData.find(t => t.key === activeTab);

  return (
    <>
      <GlobalStyles />
      <div style={{ minHeight: "100vh", background: "var(--light-bg)" }}>
        <div className="fs_sliderGrid">
          <div>
            {/* Award Row */}
            <div className="fs_award_row">
              <img
                src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/684037c8bae72fccbf5a33e0_Group%20300.svg"
                className="fs_award_icon"
                alt="Star"
                loading="lazy"
              />
              <span className="fs_award_text">Michelin<br/>2025</span>
            </div>
            {/* Tabs */}
            <div className="fs_tabs_row">
              {tabData.map(tab => (
                <button
                  key={tab.key}
                  type="button"
                  className={`fs_tab_btn${activeTab === tab.key ? " active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                  aria-selected={activeTab === tab.key}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {/* Card */}
            <div className="fs_card">
              <div className="fs_card_img_wrap">
                <img className="fs_card_img" src={active.image} alt={active.title} loading="lazy" />
              </div>
              <div className="fs_card_info">
                <span className="fs_card_label">{active.label}</span>
                <span className="fs_card_title">{active.desc}</span>
              </div>
              <div className="fs_card_footer">
                <a href={active.btnLink} className="fs_circle_btn" tabIndex={0}>
                  <ArrowIcon fill="#0a0e0e"/>
                </a>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="fs_right_box">
            <h2 className="fs_r_title">Arrive Freely<br/>We’ll Handle <wbr/>The Rest</h2>
            <p className="fs_r_txt">
              The Michelin-starred Mirall restaurant, created from the ancient lemon house of Villa Baracchi, has an elegant indoor dining room and a striking panoramic terrace that overlooks Cortona and its hills.
            </p>
            <a
              href="/about-us"
              className="fs_r_btn"
              tabIndex={0}
            >
              Read Here
              <ArrowIcon fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourSecond;
