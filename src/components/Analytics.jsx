import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold  text-3xl ">
            Lorem ipsum dolor sit amet.
          </p>
          <h1 className="md:text-4xl sm:text-3xl py-2 ">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aperiam soluta eos, atque pariatur expedita blanditiis et libero
            perferendis excepturi.
          </p>
          <button className="bg-black font-medium w-[200px] p-2 text-[#00df9a] m-8 mx-auto rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
