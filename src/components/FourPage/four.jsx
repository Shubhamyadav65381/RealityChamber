import React, { useState } from "react";
import FourSecond from "./fourSecond";

const faqs = [
  {
    q: "What services does Realty Chamber provide?",
    a: "We offer complete real estate solutions, including residential sales & leasing, commercial leasing (brands, offices, retail spaces), industrial & warehousing, agricultural land, luxury investments, and joint venture partnerships.",
  },
  {
    q: "Where does Realty Chamber operate?",
    a: "We are based in India and Dubai, with networks across major cities. In India, we cover Jaipur, Delhi NCR, and Mumbai, while in Dubai we operate in prime areas such as Downtown, Marina, Palm Jumeirah, and Business Bay.",
  },
  {
    q: "How do I start working with Realty Chamber?",
    a: "Simply reach out via our Contact Us page, WhatsApp, or email. Our team will schedule a consultation to understand your requirements and guide you through the process.",
  },
  {
    q: "How do I start working with Realty Chamber?",
    a: "Simply reach out via our Contact Us page, WhatsApp, or email. Our team will schedule a consultation to understand your requirements and guide you through the process.",
  },
  {
    q: "What makes Realty Chamber different from other agencies?",
    a: "We are not just brokers—we are deal closers. With over 25 years of expertise, we specialize in negotiation, conflict resolution, and cross-border transactions, ensuring smooth and profitable deals for our clients.",
  },
  {
    q: "Do you charge brokerage fees?",
    a: "Yes, our standard brokerage is 2% for sales and 2 months’ rent for leasing, in line with market practices. All fees are discussed transparently before the deal.",
  },
];

const Four = () => {
  return (
    <>
      <FourSecond />
      <div className="min-h-screen bg-[#89a6b2] flex flex-col md:flex-row items-start justify-center py-10 px-6 md:px-16">
        {/* Left side - Heading */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-10 md:mb-0">
          <h1 className="font-bold text-white text-[clamp(2.5rem,3vw,2.8rem)] select-none">
            FAQs
          </h1>
        </div>

        {/* Right side - FAQ List */}
        <div className="w-full md:w-2/3 max-w-3xl space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="group bg-[#ffc392] rounded-[18px] p-6 shadow-[0_10px_30px_0_rgba(55,54,54,0.09)] cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Question Row */}
              <div className="flex items-center justify-between text-lg font-semibold text-[#0a0e0e]">
                <span>
                  Q{index + 1}. {item.q}
                </span>
                <span className="text-2xl font-bold group-hover:rotate-45 transition-transform duration-300">
                  +
                </span>
              </div>

              {/* Answer (opens on hover) */}
              <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 ease-in-out">
                <p className="text-base leading-relaxed text-[#222]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Four;
