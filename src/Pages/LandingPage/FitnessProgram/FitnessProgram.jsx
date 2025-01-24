import React, { useRef } from "react";
import Aerobics from "../images/aerobics.png";
import Yoga from "../images/yoga.png";
import Hiit from "../images/hiit.png";
import Cycling from "../images/cycling.png";
import Abdominal from "../images/abdominal.png";
import Arrow from "../images/right-arrow.png";

const FitnessProgram = () => {
  const imagesContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (imagesContainerRef.current) {
      imagesContainerRef.current.scrollBy({
        left: 400, // Adjust this value to scroll more or less at a time
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="fitness-programs"
      className="bg-neutral-200 px-15 pt-5 pb-20 relative"
    >
      <h2 className="text-3xl font-bold text-center pt-8">
        Our Fitness Program
      </h2>

      <div
        className="flex overflow-x-auto whitespace-nowrap p-10 scrollbar-hide"
        ref={imagesContainerRef}
      >
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src="#"
            alt="aerobics training"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Aerobics</p>
        </div>
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Yoga}
            alt="Yoga training"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Yoga</p>
        </div>
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Hiit}
            alt="Hiit training"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">
            High-Intensity Interval Training
          </p>
        </div>
        <div className="min-w-[400px] text-center inline-block mr-6">
          <img
            src={Cycling}
            alt="cycling training"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">Cycling</p>
        </div>
        <div className="min-w-[400px] text-center inline-block">
          <img
            src={Abdominal}
            alt="abs training"
            className="w-[500px] h-[300px] object-cover rounded-lg"
          />
          <p className="pt-2 bg-[#2b2252] text-white">
            Abdominal Muscles Training
          </p>
        </div>
      </div>

      <div
        className="absolute right-10 bottom-20 flex items-center cursor-pointer z-10 -space-x-2 px-2 border-2 border-dotted border-gray-400 rounded-md shadow-lg"
        onClick={handleScrollRight}
      >
        <p className="font-bold text-lg text-[#2b2252] mr-3">View more</p>
        <img className="w-6 h-6" src={Arrow} alt="right arrow" />
      </div>
    </div>
  );
};

export default FitnessProgram;
