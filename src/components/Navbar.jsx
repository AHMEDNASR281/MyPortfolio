import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between h-24 mx-auto max-w-[1290px] px-4 items-center text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df90]">Ahmed.Dev</h1>
      <ul className="  hidden font-bold md:flex ">
        <li className="p-4 hover:text-[#00df90] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#00df90] cursor-pointer"> Projects</li>
        <li className="p-4 hover:text-[#00df90] cursor-pointer">Resources</li>
        <li className="p-4 hover:text-[#00df90] cursor-pointer">About </li>
        <li className="p-4 hover:text-[#00df90] cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[30%] h-full bg-[#000300] border-r border-r-gray-700 ease-in-out duration-500"
            : "fixed left-[-150%]"
        }
      >
        <h1 className="w-full m-4 text-3xl font-bold text-[#00df90]">React.</h1>

        <ul className=" uppercase font-bold p-4 ">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df90] cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df90] cursor-pointer">
            {" "}
            Projects
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df90] cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df90] cursor-pointer">
            About
          </li>
          <li className="p-4 hover:text-[#00df90] cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
