import React from "react";

const GlobalStyles = () => (
  <style>{`
    :root {
      -webkit-text-size-adjust: 100%;
      --light-bg: #f2f4f3;
      --primary-dark: #0a0e0e;
      --paragraph-gray: #3d4040;
      --link-color: #7d99a9;
      --light-peach: #ffc392;
      --primary: #7c9bab;
      --white: white;
      --dark-20: #0a0e0e33;
      --black: #0a0e0e;
      --light-gray-color: #d9d9d9;
      --transparent: #fff0;
      --white-10: #ffffff1a;
      --white-50: #ffffff80;
      --white-80: #fffc;
      --dark-gray-50: #afafaf80;
      --black-50: #0a0e0e80;
      --hover-black-70: #0a0e0eb3;
      --light-gray: #f9f9fa;
    }
    body {
      margin: 0;
      font-family: Instrument Sans, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1em;
      box-sizing: border-box;
      display: block;
      z-index: 20;
      position: relative;
      padding-top: 80px;
      padding-bottom: 80px;
      background-attachment: scroll !important;
      background-color: var(--light-bg);
      color: var(--primary-dark);
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    a {
      color: var(--link-color);
      text-decoration: none;
    }
    a:hover, a:focus {
      text-decoration: underline;
      outline: none;
    }
    .section {
      width: 100%;
      padding: 0;
    }
    .base-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;
      box-sizing: border-box;
    }
    .cta-content {
      display: flex;
      flex-wrap: wrap;
      gap: 60px;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 10;
      padding-bottom: 80px;
    }
    .cta-hero-content {
      flex: 1 1 450px;
      max-width: 550px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding: 80px 0 0 0;
    }
    .cta-intro-top h6.hero-subtitle {
      font-family: Instrument Sans, sans-serif;
      color: var(--primary);
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.57;
      margin: 0;
      text-transform: uppercase;
      user-select: none;
    }
    .cta-intro-top h2.large-white-title {
      font-family: Instrument Sans, sans-serif;
      font-weight: 700;
      font-size: clamp(2.8rem, 5vw, 3.9rem);
      line-height: 1.25;
      margin: 0;
      color: var(--primary-dark);
      user-select: text;
    }
    .cta-intro-top h2.large-white-title .light-color-span {
      color: var(--primary);
      font-weight: 600;
    }
    .intro-bottom-about .btn-wrapper {
      margin-top: 20px;
    }
    .button-link-white {
      background-color: var(--primary);
      color: var(--white);
      padding: 14px 40px;
      font-family: Instrument Sans, sans-serif;
      font-weight: 600;
      font-size: 1.125rem;
      border-radius: 40px;
      cursor: pointer;
      display: inline-block;
      user-select: none;
      transition: background-color 0.3s ease;
      text-decoration: none;
      position: relative;
      overflow: hidden;
    }
    .button-link-white:hover,
    .button-link-white:focus {
      background-color: #fca72f;
      text-decoration: none;
      outline: none;
    }
    .clip-btn-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .hover-clip-text {
      position: relative;
      overflow: hidden;
      user-select: none;
    }
    .clip-text {
      transition: transform 0.3s ease;
      white-space: nowrap;
    }
    .button-link-white:hover .clip-text {
      transform: translateY(-100%);
    }
    .clip-text.bottom {
      position: absolute;
      top: 100%;
      left: 0;
    }
    .btn-text-white {
      color: var(--white);
      font-weight: 600;
    }
    .btn-text-dark {
      color: var(--primary-dark);
      font-weight: 600;
    }
    .png-wrap-01 {
      position: absolute;
      right: 10px;
      top: 5px;
      pointer-events: none;
      user-select: none;
      z-index: 1;
    }
    .png-wrap-01 .logo-vector {
      width: 80px;
      height: auto;
      transform: rotate(127deg);
      will-change: transform;
      user-select: none;
    }
    /* Clip photo banner section - background image */
    .clip-photo-banner {
      position: relative;
      width: 100%;
      height: 420px;
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 12px 28px rgb(0 0 0 / 12%);
      margin-top: 40px;
      background-color: #f9f9f9;
    }
    .hero-photo {
      width: 100%;
      height: 100%;
      background-image: url('https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68400e80621c00908a9cd896_Vector.svg');
      background-position: center center;
      background-size: cover;
      will-change: transform;
      transition: transform 0.3s ease;
    }
    .cta-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.75) 100%);
      pointer-events: none;
      border-radius: 28px;
    }
    /* Lines BG */
    .lines-bg {
      position: absolute;
      inset: 0;
      user-select: none;
      pointer-events: none;
      z-index: 0;
      overflow: visible;
    }
    .lines-grid {
      display: grid;
      grid-template-columns: repeat(5, 1px);
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
      gap: 64px;
    }
    .vertical-line {
      background: var(--dark-20);
      width: 1px;
      height: 100%;
      position: relative;
    }
  `}</style>
);

const FourThird = () => {
  return (
    <>
      <GlobalStyles />
      <section className="section" style={{ position: "relative" }}>
        <div className="base-container">
          <div className="cta-content" style={{ position: "relative", zIndex: 10 }}>
            <div className="cta-hero-content">
              <div className="cta-intro-top">
                <h6 className="hero-subtitle">we are waiting for you</h6>
                <h2 className="large-white-title">
                  Come Find the Place Your Soul Already Knows —{" "}
                  <span className="light-color-span">a Sanctuary Shaped by the Sea and Silence</span>
                </h2>
              </div>
              <div className="intro-bottom-about">
                <div className="no-shrink-wrap">
                  <div className="btn-wrapper">
                    <a href="/contact-us" className="button-link-white white w-inline-block">
                      <div className="clip-btn-content">
                        <div className="hover-clip-text">
                          <div className="clip-text">
                            <div className="btn-text-dark">Book Your Stay</div>
                          </div>
                          <div className="clip-text bottom">
                            <div className="btn-text-white">Book Your Stay</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="png-wrap-01">
              <img
                src="https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68400e80621c00908a9cd896_Vector.svg"
                loading="lazy"
                alt="Project Photos"
                className="logo-vector"
                style={{ transform: "rotate(127deg)" }}
              />
            </div>
          </div>
        </div>

        <div className="clip-photo-banner">
          <div
            className="hero-photo"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/683d7e98e0d3f4e5915a5def/68400e80621c00908a9cd896_Vector.svg')",
              transform: "translate3d(0px, 0.0727%, 0px) scale3d(1.12536,1.12536,1)",
              willChange: "transform",
            }}
          />
          <div className="cta-overlay"></div>
        </div>

        <div className="lines-bg" aria-hidden="true">
          <div className="lines-grid">
            <div className="vertical-line"></div>
            <div className="vertical-line"></div>
            <div className="vertical-line"></div>
            <div className="vertical-line"></div>
            <div className="vertical-line"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourThird;
