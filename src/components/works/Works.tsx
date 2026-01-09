import { link } from "fs";
import React from "react";

const worksInfo = [
  {
    nameOfWorks: "Cornersteel Systems Corporation",
    description:
      "A leading provider of steel solutions and construction services. A leading provider of steel solutions and construction services. A leading provider of steel solutions and construction services.",
    image: "",
    href: "#",
    languages: ["HTML", "CSS", "WP"],
  },
  {
    nameOfWorks: "Comfac IT Solutions",
    description:
      "A leading provider of IT solutions and services. A leading provider of IT solutions and services. A leading provider of IT solutions and services.",
    image: "",
    href: "#",
    languages: ["HTML", "CSS", "WP"],
  },
  {
    nameOfWorks: "Steward Auto Air",
    description:
      "A leading provider of IT solutions and services. A leading provider of IT solutions and services. A leading provider of IT solutions and services.",
    image: "",
    href: "#",
    languages: ["HTML", "CSS", "TS", "REACT", "MUI"],
  },
  {
    nameOfWorks: "Facilities Management System",
    description:
      "A leading provider of IT solutions and services. A leading provider of IT solutions and services. A leading provider of IT solutions and services.",
    image: "",
    href: "#",
    languages: ["HTML", "CSS", "TS", "REACT", "MUI"],
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="relative mx-auto w-full h-full bg-linear-to-b from-[#022318] to-black py-24"
    >
      <div className="relative flex justify-center w-full h-40 mb-24">
        <h1 className="text-9xl absolute font-semibold uppercase pointer-events-none tracking-[0.50em] text-gray-300/10 top-2 left-50">
          Works
        </h1>
        <h1 className="text-4xl font-semibold uppercase tracking-[0.30em] text-[#0bb37a] z-10 self-center">Works</h1>
      </div>
      {/* container */}
      <div className="relative h-full max-w-6xl mx-auto">
        {/* wrapper */}
        <div className="flex flex-col gap-4">
          {worksInfo.map((work) => (
            <div
              key={work.nameOfWorks}
              className="flex flex-row items-start w-full h-40 gap-4"
            >
              <div className="relative h-40 bg-black border rounded-md border-gray-200/20 w-80">
                <p className="content-center w-full h-full text-center">image</p>
              </div>

              <div className="flex flex-col w-full h-full justify-evenly">
                <h1 className="text-2xl font-semibold text-gray-200 cursor-pointer w-fit">{work.nameOfWorks}</h1>
                <p className="font-light text-gray-200 text-md">{work.description}</p>
                <div className="flex flex-row flex-wrap w-full">
                  {work.languages.map((language) => (
                    <div
                      key={language}
                      className="p-1.5 mr-2 text-xs font-medium border shadow-xl border-[#0bb37a]/30 rounded-sm text-[#0bb37a] my-1.5"
                    >
                      {language}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
