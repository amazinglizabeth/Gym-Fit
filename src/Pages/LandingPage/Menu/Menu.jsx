import React from "react";
import Logo from "../images/logo-name.png";

const Menu = () => {
  return (
    <div className="menu flex justify-between items-center p-3 border-b-4 border-stone-300 shadow-lg bg-white sticky top-0 z-50">
      <img src={Logo} alt="logo" className="h-10 ml-4" />
      <div className="space-x-6">
        <a href="#home" className="hover:bg-gray-200 hover:p-3">
          Home
        </a>
        <a href="#fitness-programs" className="hover:bg-gray-200 hover:p-3">
          Fitness Programs
        </a>
        <a href="#centres" className="hover:bg-gray-200 hover:p-3">
          Centres
        </a>
        <a href="#about" className="hover:bg-gray-200 hover:p-3">
          About
        </a>
      </div>
      <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 text-white">
        Register now
      </button>
    </div>
  );
};

export default Menu;
