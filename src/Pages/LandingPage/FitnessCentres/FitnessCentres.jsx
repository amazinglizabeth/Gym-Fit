import React, { useRef } from "react";
import Magodo from "../images/magodo-centre.png";
import Festac from "../images/festac-centre.png";
import Lekki from "../images/Lekki-centre.png";
import Ikoyi from "../images/ikoyi-centre.png";
import Abuja from "../images/abuja-centre.png";
import Arrow from "../images/right-arrow.png";

const FitnessCentres = () => {
  const centresContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (centresContainerRef.current) {
      centresContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="centres" className="bg-neutral-200 pb-20 pt-3 relative ">
      <h2 className="text-3xl font-bold text-center pt-4">
        Our Fitness Centres
      </h2>

      <div
        className="flex overflow-x-auto whitespace-nowrap p-10 scrollbar-hide"
        ref={centresContainerRef}
      >
        {/* Magodo Centre */}
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Magodo}
            alt="Magodo Centre"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Magodo Centre</p>
        </div>

        {/* Festac Centre */}
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Festac}
            alt="Festac Centre"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Festac Centre</p>
        </div>

        {/* Lekki Centre */}
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Lekki}
            alt="Lekki Centre"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Lekki Centre</p>
        </div>

        {/* Ikoyi Centre */}
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Ikoyi}
            alt="Ikoyi Centre"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Ikoyi Centre</p>
        </div>

        {/* Abuja Centre */}
        <div className="min-w-[400px] text-center inline-block">
          <img
            src={Abuja}
            alt="Abuja Centre"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Abuja Centre</p>
        </div>
      </div>

      <div
        className="absolute right-10 bottom-20 flex items-center cursor-pointer z-10 -space-x-2 px-2 border-2 border-dotted border-gray-400 rounded-md shadow-lg"
        onClick={handleScrollRight}
      >
        <p className="font-bold text-lg text-[#2b2252] mr-3">View more</p>
        <img className="w-6 h-6 mt-1" src={Arrow} alt="right arrow" />
      </div>
    </div>
  );
};

export default FitnessCentres;
