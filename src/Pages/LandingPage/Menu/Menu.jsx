import React, { useState } from "react";
import Logo from "../images/logo-name.png";
import { Menu as MenuIcon, X } from "lucide-react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu flex justify-between items-center p-3 border-b-4 border-stone-300 shadow-lg bg-white sticky top-0 z-50">
      <img src={Logo} alt="logo" className="h-10 ml-4" />

      {/* Desktop Menu (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-6">
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

      {/* Register Button (Hidden on Small Screens) */}
      <button className="hidden md:block bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 text-white">
        Register now
      </button>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Menu (Shown when toggled) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#home" className="w-full text-center py-2 hover:bg-gray-200">
            Home
          </a>
          <a
            href="#fitness-programs"
            className="w-full text-center py-2 hover:bg-gray-200"
          >
            Fitness Programs
          </a>
          <a
            href="#centres"
            className="w-full text-center py-2 hover:bg-gray-200"
          >
            Centres
          </a>
          <a
            href="#about"
            className="w-full text-center py-2 hover:bg-gray-200"
          >
            About
          </a>
          <button className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600 text-white w-4/5">
            Register now
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
