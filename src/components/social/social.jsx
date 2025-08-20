import React from 'react';
import images from '../../assets/images/index';

const Social = () => {
  return (
    <div>
      <div className="absolute left-[7vw] bottom-[8vh] flex space-x-6 z-40">
        {/* Facebook */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 rounded-full border-2 border-white bg-transparent hover:bg-white cursor-pointer transition-colors duration-300 flex items-center justify-center"
        >
          <div
            className="relative w-7 h-7"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s',
            }}
          >
            <img
              src={images.facebook_wh}
              alt="Facebook"
              className="absolute inset-0 w-7 h-7"
              style={{
                backfaceVisibility: 'hidden',
              }}
            />
            <img
              src={images.facebook_bl}
              alt="Facebook"
              className="absolute inset-0 w-7 h-7"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateX(180deg)',
              }}
            />
          </div>
          <style jsx>{`
            a:hover > div {
              transform: rotateX(180deg);
            }
          `}</style>
        </a>

        {/* Instagram */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-white cursor-pointer transition-colors duration-300"
          style={{ boxSizing: 'border-box' }}
        >
          <div
            className="relative w-7 h-7"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s',
            }}
          >
            <img
              src={images.inst_wh}
              alt="Instagram"
              className="absolute inset-0 w-7 h-7"
              style={{
                backfaceVisibility: 'hidden',
              }}
            />
            <img
              src={images.insta_bl}
              alt="Instagram"
              className="absolute inset-0 w-7 h-7"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateX(180deg)',
              }}
            />
          </div>
          <style jsx>{`
            a:hover > div {
              transform: rotateX(180deg);
            }
          `}</style>
        </a>

        {/* X (Twitter) */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-white cursor-pointer transition-colors duration-300"
          style={{ boxSizing: 'border-box' }}
        >
          <div
            className="relative w-7 h-7"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s',
            }}
          >
            <img
              src={images.x_white}
              alt="X"
              className="absolute inset-0 w-7 h-7"
              style={{
                backfaceVisibility: 'hidden',
              }}
            />
            <img
              src={images.x_black}
              alt="X"
              className="absolute inset-0 w-7 h-7"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateX(180deg)',
              }}
            />
          </div>
          <style jsx>{`
            a:hover > div {
              transform: rotateX(180deg);
            }
          `}</style>
        </a>
      </div>
    </div>
  );
};

export default Social;
