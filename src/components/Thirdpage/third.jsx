import React from "react";

const villas = [
  {
    name: "Sell A Property",
    description: "Plots, flats, villas, or offices available for sale with ease.",
  },
  {
    name: "Purchase A Property",
    description: "Find your ideal residential or commercial property today.",
  },
  {
    name: "Rent A Property",
    description: "Choose from homes or spaces available for rent or lease.",
  },
  {
    name: "Joint Venture",
    description: "Partner with Realty Chamber for growth and collaboration.",
  },
  {
    name: "Property Exchange",
    description: "Hassle-free property swaps tailored to your needs.",
  },
  {
    name: "Investors",
    description: "Explore opportunities designed exclusively for investors.",
  },
];

const ThirdPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#171b19] text-white font-sans px-8 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-x-8 border border-[#243137] rounded-lg overflow-hidden">
        {/* Left column - big heading */}
        <div className="col-span-1 flex items-start justify-start">
          <h1 className="text-[4rem] font-bold leading-[1] p-8 tracking-tight">
            Realty Chamber
            <br />
            For Every <br /> Solution
          </h1>
        </div>

        {/* Middle/Right top - description & button */}
        <div className="col-span-2 px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#243137]">
          <div>
            <p
              className="text-lg text-[#ececec] mb-4 md:mb-0"
              style={{ maxWidth: "500px" }}
            >
              We’re thrilled to announce an exciting motion update for the Realty Chamber website!
               You’ve seen the design previews, and now we
               can’t wait to reveal the full experience coming your way
            </p>
          </div>
          <a
            href="#contact"
            className="border border-[#ececec] text-white px-8 py-2 rounded-full text-lg font-medium
              hover:bg-[#ececec] hover:text-black 
              transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>

        {/* Villas List - Grid */}
        <div className="col-span-3 divide-y divide-[#243137]">
          {villas.map((villa, i) => (
            <div
              key={i}
              className={`
                grid grid-cols-3 items-center py-8 
                group cursor-pointer
                transition-all duration-500 ease-in-out
                hover:bg-[#e3ae7b] hover:shadow-lg hover:scale-[1.01]
              `}
            >
              <div
                className="col-span-1 font-bold text-xl pl-8 
                  transition-colors duration-500 ease-in-out group-hover:text-black"
              >
                {villa.name}
              </div>
              <div
                className="col-span-1 text-[#ececec] 
                  transition-colors duration-500 ease-in-out group-hover:text-black"
              >
                {villa.description}
              </div>
              <div className="col-span-1 flex justify-end pr-8">
                <a
                  href="#"
                  className="text-[#e3ae7b] text-lg font-semibold flex items-center
                    transition-all duration-500 ease-in-out 
                    group-hover:text-black"
                >
                  See More
                  <span
                    className="ml-2 text-2xl 
                      transition-transform duration-500 ease-in-out 
                      group-hover:text-black group-hover:translate-x-2"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
