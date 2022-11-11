import React from "react";

import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[899px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 ">
          I am a Front-End Developer
        </p>
        <h1 className="md:text-7xl sm:text-6xl font-bold text-4xl md:py-4">
          Ahmed Nasr Okasha
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl py-4 font-bold">
            I am Skilled at
          </p>
          <Typed
            strings={[
              "HTML",
              "Css",
              "JavaScript",
              "Sass",
              "Bootstrap",
              "Tailwind",
              "Material UI",
              "React.Js",
              "Git",
            ]}
            typeSpeed={155}
            backSpeed={140}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
          />
        </div>
        <p className="pt-3 md:text-2xl text-xl font-bold text-gray-500">
          Frondend Developer with high level of experience in web designing and
          development producting the Quality work
        </p>
        <button className="bg-[#00df9a] font-medium w-[200px] p-2 text-black m-8 mx-auto rounded-full">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
