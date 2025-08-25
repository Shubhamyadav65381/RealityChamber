import React from "react";
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
        { divider: true },
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
        { href: "payingguest.php", text: "PG" },
        { href: "exchange.php", text: "Property Exchange" },
        { href: "jointventure.php", text: "Joint Venture" },
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
      {/* Top Section */}
      <div className="py-8 border-b border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-center sm:justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <img src={images.logo} alt="Company Logo" width={70} height={55} />
            <p className="font-bold text-[0.9rem]">Your Trusted Realty Partner</p>
          </div>
          {/* Property Actions */}
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

      {/* Footer Widgets (no GroupSites now) */}
      <div className="py-8 border-b border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap gap-8 justify-between">
          {footerSections.map((section, i) => (
            <LinkSection key={i} title={section.title} links={section.links} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-3 border-t border-white/20">
        <div className="container mx-auto px-4 max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs text-white/80">
          {/* Social Icons */}
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
          {/* Copyright */}
          <p>
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

export default Footer;
