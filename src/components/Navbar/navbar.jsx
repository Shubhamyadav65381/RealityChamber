import React, { useState } from 'react';
import images from '../../assets/images/index';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ home: false, add: false, services: false });
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({ add: false, services: false });

  const leftNav = [
    { label: 'Home', href: '#home' },
    {
      label: 'Add',
      href: '#add',
      dropdownItems: [
        { label: 'Add Property', href: '/add-property' },
        { label: 'Add Agent', href: '/add-agent' },
      ],
    },
    {
      label: 'Services',
      href: '#services',
      dropdownItems: [
        { label: 'Residential', href: '#' },
        { label: 'Commercial', href: '#' },
        { label: 'Industrial', href: '#' },
        { label: 'Agricultural', href: '#' },
      ],
    },
  ];

  const rightNav = [
    { label: 'Contact Us', href: '#contact', outlined: true },
    { label: 'Book Now', href: '#features', filled: true },
  ];

  // Desktop dropdown toggle handlers
  const toggleDropdown = (key, open) => {
    setDropdownOpen(prev => ({ ...prev, [key]: open }));
  };

  // Mobile dropdown toggle handlers
  const toggleMobileDropdown = key => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header className="w-full bg-[#88A0A8] fixed top-0 z-50 ">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between py-3">
          {/* Left nav group - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {leftNav.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => toggleDropdown(item.label.toLowerCase(), true)}
                onMouseLeave={() => toggleDropdown(item.label.toLowerCase(), false)}
              >
                <a
                  href={item.href}
                  className="px-5 py-2 bg-transparent border border-white/70 rounded-full text-white font-medium text-base flex items-center gap-1 hover:bg-white hover:text-black transition"
                  onFocus={() => toggleDropdown(item.label.toLowerCase(), true)}
                  onBlur={() => toggleDropdown(item.label.toLowerCase(), false)}
                >
                  {item.label}
                </a>

                {/* Desktop Dropdown */}
                {dropdownOpen[item.label.toLowerCase()] && item.dropdownItems && (
                  <div
                    className="absolute left-0 mt-1 w-48 bg-[#88A0A8] rounded-md shadow-lg border border-gray-200 z-50"
                    onMouseEnter={() => toggleDropdown(item.label.toLowerCase(), true)}
                    onMouseLeave={() => toggleDropdown(item.label.toLowerCase(), false)}
                    style={{ top: '100%' }}
                  >
                    <nav className="flex flex-col py-1">
                      {item.dropdownItems.map(dropdownItem => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 text-sm whitespace-nowrap"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Center logo and tagline */}
          <div className="flex items-center justify-center gap-3">
            <span className="flex items-center justify-center">
              <img
                src={images.logo}
                alt="logo image"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-lg"
                style={{
                  filter: 'brightness(1.5) contrast(1.2) drop-shadow(0 0 4px rgba(0,0,0,0.6))',
                }}
              />
            </span>

            <div className="flex flex-col items-start leading-none">
              <span
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '28px',
                  color: '#fff',
                  letterSpacing: '4px',
                  marginLeft: '-4px',
                }}
              >
                REALTY
              </span>

              <span
                className="uppercase tracking-widest"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#fff',
                  letterSpacing: '0.17em',
                  lineHeight: '1',
                  paddingLeft: '12px',
                }}
              >
                chamber
              </span>
            </div>
          </div>

          {/* Right nav group - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-white text-white font-semibold text-base bg-transparent hover:bg-white/70 hover:text-black transition"
            >
              Contact Us
            </a>
            <a
              href="#features"
              className="px-6 py-2 rounded-full bg-[#FCC692] text-gray-900 font-semibold text-base flex items-center gap-1 transition hover:bg-[#ffddb0] shadow"
            >
              About us
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden p-2 text-white mr-8 "
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-[#89A4B1] rounded-lg mt-2 py-2 px-6 mx-auto max-w-xs w-full`}>
          {[...leftNav, ...rightNav].map(item => {
            const hasDropdown = !!item.dropdownItems;
            const isMobileDropdownOpen = mobileDropdownOpen[item.label.toLowerCase()];

            if (hasDropdown) {
              return (
                <div key={item.label} className="mb-1">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(item.label.toLowerCase())}
                    className="w-full flex justify-between items-center py-3 font-medium text-white border-b border-white/15 last:border-0"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileDropdownOpen && (
                    <div className="ml-4 border-l border-white/30">
                      {item.dropdownItems.map(dropdownItem => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block py-2 text-white hover:text-gray-300 text-sm"
                          onClick={() => setMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className={`block py-3 font-medium text-white border-b border-white/15 last:border-0 ${
                  item.filled
                    ? 'bg-[#FCC692] text-gray-900 rounded-full px-4 mt-2 flex items-center justify-center font-semibold'
                    : item.outlined
                    ? 'border border-white rounded-full px-4 mt-2'
                    : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                {item.filled && (
                  <svg
                    className="w-5 h-5 ml-2 inline-block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
