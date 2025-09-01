//new footer start from here 


import React from "react";
import images from "../../assets/images/index"; // Realty Chamber logo should be here
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const quickLinks = [
  { href: "intro.htm", text: "About Realty Chamber" },
  { href: "faq.htm", text: "FAQs" },
  { href: "career.htm", text: "Careers" },
  { href: "privacy.htm", text: "Privacy Policy" },
  { href: "terms.htm", text: "Terms & Conditions" },
  { href: "cookie.htm", text: "Cookie Policy" },
];

const contactInfo = [
  { icon: <span className="fa fa-phone" />, text: "+91-9829066382" },
  { icon: <span className="fa fa-envelope" />, text: "info@realtychamber.com" },
  { icon: <span className="fa fa-map-marker" />, text: "10/615, Malviya Nagar,Jaipur - 302017, Rajasthan, INDIA." },];

const socialLinks = [
  { href: "https://www.instagram.com/", icon: <FaInstagram /> },
  { href: "https://www.facebook.com/realtychamber/", icon: <FaFacebook /> },
  { href: "https://www.linkedin.com/in/realty-chamber-425b10140/", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="bg-[#962c41] text-white pt-8 pb-2 font-['Roboto',sans-serif] text-base">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start md:w-1/4 space-y-4">
          <img src={images.logo} alt="Realty Chamber Logo" width={120} />
          <p className="font-bold text-lg w-full">Your Trusted Realty Partner</p>
          <p className="text-white/90">
            Realty Chamber delivers total solutions for all Real Estate projects, from initial concept through completion and handover to after-sale maintenance and support.
          </p>
          
        </div>
        {/* Quick Links */}
        <div className="flex flex-col md:w-1/5 space-y-2">
          <h2 className="font-bold mb-1">QUICK LINKS</h2>
          <ul className="space-y-1">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:underline text-white/90">{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col md:w-1/4 space-y-2">
          <h2 className="font-bold mb-1">CONTACT US</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="fa fa-phone" />
              <span>+91-9829066382</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="fa fa-envelope" />
              <span>info@realtychamber.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="fa fa-map-marker" />
              <span>10/615, Malviya Nagar, <br />Jaipur-302017, Rajasthan, India</span>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col md:w-1/4 space-y-4">
          <h2 className="font-bold">SUBSCRIBE TO NEWSLETTER</h2>
          <form className="flex border-b border-white/40 py-2 items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent outline-none flex-1 px-2 placeholder:text-white/70"
            />
            <button type="submit" className="text-white px-3 py-1 rounded-full hover:bg-white/20 transition">
              <HiOutlineMail className="text-xl" />
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex gap-4 mt-1">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-white/70 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
          
        </div>
      </div>
      {/* Copyright Section */}
      <div className="w-full mt-8 px-4 pt-4 border-t border-white/20 text-xs text-center text-white/80">
        THIS WEBSITE AND ITS CONTENT IS COPYRIGHT OF REALTY CHAMBER – © 2025. ALL RIGHTS RESERVED<br />
        FURTHER TO OUR TERMS YOU MAY NOT, EXCEPT WITH OUR EXPRESS WRITTEN PERMISSION, DISTRIBUTE OR COMMERCIALLY EXPLOIT THE CONTENT.<br />
        NOR MAY YOU TRANSMIT IT OR STORE IT IN ANY OTHER WEBSITE OR OTHER FORM OF ELECTRONIC RETRIEVAL SYSTEM.
      </div>
    </footer>
  );
};

export default Footer;

//old footer

/*import React from "react";
import images from "../../assets/images/index";

// Reusable Link List Component
const LinkSection = ({ title, links }) => (
  <div className="w-1/5 min-w-[200px] flex flex-col space-y-4">
    <h2 className="text-lg font-bold text-white">{title}</h2>
    <ul className="flex flex-col space-y-1 text-white/80">
      {links.map((item, idx) =>
        item.divider ? (
          <hr key={idx} className="border-t border-white/30 my-1" />
        ) : (
          <li key={idx}>
            <a href={item.href} className="hover:underline transition-colors">
              {item.text}
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);

const Footer = () => {
  const propertyActions = [
    { href: "sell.php", img: images.i1, text: "Sell A Property" },
    { href: "purchase.php", img: images.i2, text: "Purchase A Property" },
    { href: "rent.php", img: images.i3, text: "Rent A Property" },
    { href: "exchange.php", img: images.i4, text: "Property Exchange" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/realtychamber/", icon: "facebook" },
    { href: "https://twitter.com/realtychamber", icon: "twitter" },
    { href: "https://www.linkedin.com/in/realty-chamber-425b10140/", icon: "linkedin" },
    { href: "https://www.youtube.com/channel/UCWD-E8S4AJH08QNpKGaaZKA", icon: "youtube-play" },
    { href: "https://plus.google.com/u/0/116447987424116997903", icon: "google-plus" },
  ];

  const footerSections = [
    {
      title: "Introduction",
      links: [
        { href: "intro.htm", text: "About us" },
        { href: "leadership.htm", text: "Leadership" },
        { href: "team.htm", text: "Corporate Team" },
        { href: "vision.htm", text: "Vision & Mission" },
        { href: "message.htm", text: "Founder's Message" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "sell.php", text: "Sell A Property" },
        { href: "purchase.php", text: "Purchase A Property" },
        { href: "rent.php", text: "Rent A Property" },
        { href: "exchange.php", text: "Property Exchange" },
        { href: "jointventure.php", text: "Joint Venture" },
        { href: "payingguest.php", text: "Investor" },
      ],
    },
    {
      title: "Network",
      links: [
        { href: "network.htm", text: "Nation Wide Network" },
        { href: "agent.htm", text: "Agents" },
        { href: "profile.htm", text: "Company Profile" },
        { href: "career.htm", text: "Career @RC" },
        { href: "casestudy.htm", text: "Case Studies" },
        { href: "marketanalysis.htm", text: "Market Analysis" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "faq.htm", text: "FAQs" },
        { href: "sales.htm", text: "Sales Support" },
        { href: "investors.htm", text: "Investor Relations" },
        { href: "query.php", text: "Send A Query" },
        { href: "feedback.php", text: "Feedback" },
        { href: "contact.htm", text: "Contact" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white font-['Roboto',sans-serif] text-sm leading-[1.43]">
        //Top Section 
      <div className="py-8 border-b border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-center sm:justify-between gap-6 ml-[-18px]">
          // Logo 
          <div className="flex flex-col items-center sm:items-start">
            <img src={images.logo} alt="Company Logo" width={70} height={55} />
            <p className="font-bold text-[0.9rem]">Your Trusted Realty Partner</p>
          </div>
          // Property Actions 
          <div className="flex flex-wrap justify-center gap-4">
            {propertyActions.map(({ href, img, text }) => (
              <div key={href} className="w-[22%] min-w-[160px] text-center">
                <a href={href} className="block group relative">
                  <img
                    src={img}
                    alt={text}
                    className="w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <i className="fa fa-play-circle-o text-4xl text-white" />
                  </div>
                </a>
                <p className="mt-2 font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      // Footer Widgets (no GroupSites now) 
      <div className="py-8 border-b border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap gap-8 justify-between">
          {footerSections.map((section, i) => (
            <LinkSection key={i} title={section.title} links={section.links} />
          ))}
        </div>
      </div>

      //Bottom Section 
      <div className="py-3 border-t border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          //Social Icons 
          <div className="flex space-x-4">
            {socialLinks.map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-lg"
              >
                <i className={`fa fa-${icon}`} />
              </a>
            ))}
          </div>
          // Copyright 
          <p className="text-center sm:text-left w-full sm:w-auto">
            <a
              href="http://www.blissit.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              All rights reserved. <br />
              Realty Chamber © 2025
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; */

