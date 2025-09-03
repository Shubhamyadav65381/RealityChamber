
/*import React from "react";
import images from "../../assets/images/index"
// Paste your background hero image URL and vector image below
const BG_full = images.bg_fourth_last;
const VECTOR = images.vector;

const FourThird = () => (
  <section className="relative min-h-[68vh] sm:min-h-[74vh] md:min-h-[105vh] flex items-center justify-center overflow-hidden bg-black">
    // Background image 
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('${BG_full}')`,
      }}
    />
    // Blue fade on top 
<div
  className="absolute inset-0 pointer-events-none z-10"
  style={{
    background:
      "linear-gradient(to bottom, #89A6B2 0px, #89A6B2cc 64px, #89A6B280 140px, #89A6B230 210px, transparent 280px)"
  }}
/>
    // Dark overlay for image legibility 
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 pointer-events-none z-20" />
    // Main Content 
    <div className="relative z-30 flex flex-col gap-6 px-4 md:px-0 max-w-5xl w-full mx-auto">
      <div className="flex flex-col justify-center min-h-[440px] md:min-h-[520px]">
        <span className="uppercase text-[#ffc392] tracking-wide mb-5 text-base md:text-lg">
          WE ARE WAITING FOR YOU
        </span>
        <h1 className="font-bold leading-tight text-white text-3xl sm:text-2xl md:text-4xl lg:text-6xl max-w-3xl mb-6">
          Come Find the Place Your <br />Soul Already Knows —
          <br className="hidden md:block"/>
          <span className="block text-[#ffc392] mt-2 lg:mt-0">
            a Sanctuary Shaped by the <br /> Sea and Silence
          </span>
        </h1>
        <a
          href="/contact-us"
          className="inline-block mt-2 bg-white text-black font-medium text-lg px-8 py-3 rounded-full shadow transition hover:bg-[#ffc392] hover:text-black focus:outline-none"
          style={{ width:"fit-content" }}
        >
          Book Your Stay
        </a>
      </div>
    </div>
  </section>
);

export default FourThird; */

//    new code here
import React from "react";
import images from "../../assets/images/index";
const BG_full = images.bg_fourth_last;

// Minimal representative country list with flags for reference
const countries = [
{ name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
{ name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
{ name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
{ name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
{ name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
{ name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
{ name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
{ name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦" },
{ name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼" },
{ name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
{ name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲" },
{ name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭" },
{ name: "Nepal", code: "NP", dialCode: "+977", flag: "🇳🇵" },
{ name: "Sri Lanka", code: "LK", dialCode: "+94", flag: "🇱🇰" },
{ name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩" },
{ name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
{ name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
{ name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
{ name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
{ name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" }
];

const FourThird = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(countries);

  return (
    <section className="relative min-h-[68vh] sm:min-h-[74vh] md:min-h-[105vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${BG_full}')`,
        }}
      />
      {/* Top gradient fade */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, #89A6B2 0px, #89A6B2cc 64px, #89A6B280 140px, #89A6B230 210px, transparent 280px)",
        }}
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/65 pointer-events-none z-20" />
      {/* Main Content (left text and right form) */}
      <div className="relative z-30 w-full px-4 md:px-0 max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-12  ">
        {/* Left: Headline and Description */}
        <div className="md:w-1/2 md:ml-[-150px] md:mt-[-100px] text-white">
          <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6x1 font-semibold uppercase tracking-wide mb-4 flex items-center">
            <span className="border-l-4 border-[#d18a91] mr-4 h-12 md:h-16"></span>
            REGISTER YOUR <br /> INTEREST
          </h2>
          <p className="text-base md:text-xl max-w-xl">
            Realty Chamber stands as a beacon of unparalleled craftsmanship and design ethos.<br />
            We build more than just structures; we curate experiences.<br />
            We invite all to join us in this journey of redefining landscapes.<br />
            Register your interest and become a part of the Realty Chamber’s legacy now.<br />
            By doing so, you are taking the first step towards experiencing our commitment to delivering beyond expectations.
          </p>
        </div>
        {/* Right: Improved Form */}
        <form className="md:w-6/12  w-72 bg-black/40 rounded-lg backdrop-blur flex flex-col gap-6 p-6 border border-white/30 mt-10 ">
          {/* FULL NAME */}
          <div>
            <label className="block text-white font-bold mb-2 tracking-wide text-sm">
              FULL NAME
            </label>
            <input
              type="text"
              required
              placeholder="ENTER YOUR NAME"
              className="w-11/12 bg-transparent border border-white/30 text-white placeholder-white/70 rounded-md px-4 py-3 outline-none focus:border-[#d18a91] transition"
            />
          </div>
          {/* EMAIL */}
          <div>
            <label className="block text-white font-bold mb-2 tracking-wide text-sm">
              EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="ENTER YOUR EMAIL"
              className="w-11/12 bg-transparent border border-white/30 text-white placeholder-white/70 rounded-md px-4 py-3 outline-none focus:border-[#d18a91] transition"
            />
          </div>
          {/* PHONE NUMBER */}
          <div>
            <label className="block text-white font-bold mb-2 tracking-wide text-sm">
              PHONE NUMBER
            </label>
            <div className="flex items-center">
              {/* Country select for flag */}
              <select
                value={selectedCountry.code}
                onChange={e =>
                  setSelectedCountry(
                    countries.find(c => c.code === e.target.value) || countries
                  )
                }
                className="bg-transparent border border-white/30 text-white pr-2 pl-2 py-3 rounded-l-md outline-none focus:border-[#d18a91] transition"
                style={{ minWidth: "58px" }}
              >
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.flag}
                  </option>
                ))}
              </select>
              <span className="bg-transparent border-y border-r border-white/30 text-white px-3 py-3 select-none whitespace-nowrap">
                {selectedCountry.dialCode}
              </span>
              <input
                type="tel"
                required
                placeholder="XX XXX XXXX"
                className="w-full bg-transparent border border-white/30 text-white placeholder-white/60 rounded-r-md px-4 py-3 outline-none focus:border-[#d18a91] transition"
                style={{ minWidth: "120px" }}
              />
            </div>
          </div>
          {/* COUNTRY SELECT */}
          <div>
            <label className="block text-white font-bold mb-2 tracking-wide text-sm">
              COUNTRY
            </label>
            <select
              required
              className="w-11/12 bg-transparent border border-white/30 text-white px-4 py-3 rounded-md outline-none focus:border-[#d18a91] transition"
              defaultValue=""
            >
              <option value="" disabled>
                -- select one --
              </option>
              {countries.map(country => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {/* MESSAGE */}
          <div>
            <label className="block text-white font-bold mb-2 tracking-wide text-sm">
              MESSAGE
            </label>
            <textarea
              rows={4}
              placeholder="TYPE YOUR MESSAGE"
              className="w-11/12 bg-transparent border border-white/30 text-white placeholder-white/70 rounded-md px-4 py-3 outline-none focus:border-[#d18a91] transition resize-none"
            />
          </div>
          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="flex items-center gap-2 bg-transparent text-white border border-white/30 rounded-full px-6 py-3 font-bold uppercase tracking-wide hover:bg-[#ffc392] hover:text-white hover:border-[#d18a91] transition justify-center"
          >
            <span className="fa fa-arrow-circle-right text-lg"></span>
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default FourThird;

