import React from "react";

const Menu = () => {
  return (
    <div className="menu flex justify-between items-center p-6 bg-gray-800 text-white">
      <img src="images/logo name.png" alt="logo" className="h-10" />
      <div className="space-x-6">
        <a href="#" className="hover:text-red-500">
          Home
        </a>
        <a href="#" className="hover:text-red-500">
          Fitness Programs
        </a>
        <a href="#" className="hover:text-red-500">
          Centres
        </a>
        <a href="#" className="hover:text-red-500">
          About
        </a>
      </div>
      <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
        Register now
      </button>
    </div>
  );
};

export default Menu;
