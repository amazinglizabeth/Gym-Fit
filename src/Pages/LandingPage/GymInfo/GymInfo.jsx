import React from "react";

const GymInfo = () => {
  return (
    <div className=" grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-8 bg-[#0b032d] py-4 md:h-screen md:max-h-[140px]">
      <div className="flex flex-row text-white justify-center md:items-center pt-2">
        <h2 className="text-3xl font-semibold px-3">12</h2>
        <p className="leading-tight">
          Experienced Trainers
          <br /> per gym Centres
        </p>
      </div>
      <div className="flex flex-row text-white justify-center md:items-center pt-2 md:border-l-2 border-white h-full">
        <h2 className="text-3xl font-semibold px-3">20</h2>
        <p className="leading-tight">
          Centres across <br />
          the country
        </p>
      </div>
      <div className="flex flex-row text-white justify-center items-center pt-2 md:border-l-2 border-white h-full">
        <h2 className="text-3xl font-semibold px-3">20K</h2>
        <p className="leading-tight">
          Dedicated <br />
          Clients
        </p>
      </div>
    </div>
  );
};

export default GymInfo;
