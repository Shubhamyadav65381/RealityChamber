import React from "react";
import images from "../../assets/images/index";

const Social = () => {
  return (
    <div>
      <div className="absolute left-[7vw] bottom-[8vh] flex space-x-6 z-40 bg-base p-4 rounded">
        {[
          { href: "#", img: images.facebook_wh, alt: "Facebook" },
          { href: "#", img: images.inst_wh, alt: "Instagram" },
          { href: "#", img: images.x_white, alt: "X" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center rounded-full cursor-pointer bg-base"
          >
            {/* Static White Circular Border */}
            <span className="absolute inset-0 rounded-full border-2 border-white"></span>

            {/* Full Golden Ring with fading effect */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-spin-slow"
              style={{
                background:
                  "conic-gradient(#FFD700 0deg, rgba(255,215,0,0.6) 90deg, rgba(255,215,0,0.2) 180deg, rgba(255,215,0,0.6) 270deg, #FFD700 360deg)",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 3px))",
                mask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), black calc(100% - 3px))",
              }}
            ></span>

            {/* Inner Circle */}
            <span className="absolute inset-[3px] rounded-full bg-base"></span>

            {/* Social Icon */}
            <img src={item.img} alt={item.alt} className="relative w-7 h-7 z-10" />

            {/* Animation */}
            <style jsx>{`
              .animate-spin-slow {
                animation: spin 2.5s linear infinite;
              }
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}</style>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
