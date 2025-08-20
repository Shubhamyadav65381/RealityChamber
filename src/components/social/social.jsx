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
          <img
            src={images.facebook_wh}
            alt="Facebook"
            className="absolute inset-0 w-7 h-7 mx-auto my-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={images.facebook_bl}
            alt="Facebook"
            className="absolute inset-0 w-7 h-7 mx-auto my-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>

        {/* Instagram */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-white cursor-pointer transition-colors duration-300"
          style={{ boxSizing: 'border-box' }}
        >
          <img
            src={images.inst_wh}
            alt="Instagram"
            className="absolute inset-0 w-7 h-7 mx-auto my-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={images.insta_bl}
            alt="Instagram"
            className="absolute inset-0 w-7 h-7 mx-auto my-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>

        {/* X (Twitter) */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border-2 hover:bg-white border-white bg-transparent transition-colors duration-300"
          style={{ boxSizing: 'border-box' }}
        >
          <img
            src={images.x_white}
            alt="X"
            className="absolute inset-0 w-7 h-7 mx-auto my-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={images.x_black}
            alt="X"
            className="absolute inset-0 w-7 h-7 mx-auto my-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
