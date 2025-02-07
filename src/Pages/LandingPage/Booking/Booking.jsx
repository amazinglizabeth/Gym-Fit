import React from "react";
import UpCurve from "../images/up-curve.png";
import DownCurve from "../images/down-curve.png";

const Booking = () => {
  return (
    <div className=" bg-[#2b2252] md:h-[450px] py-12 px-6 text-center text-white relative">
      <div className=" hidden md:block">
        <img
          className="up-curve absolute top-0 left-0"
          src={UpCurve}
          alt="curve design"
        />
        <img
          className="down-curve absolute bottom-0 right-0"
          src={DownCurve}
          alt="curve design"
        />
      </div>
      <div className="booking-text mt-10 pt-5 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold pt-12">
          Start Your Fitness Journey Today
        </h2>
        <p className="mt-5 px-8 text-xl">
          Ready to take the first step towards a healthier, happier you? Sign{" "}
          <br /> up for a free trial or book your first session today!
        </p>
        <button className="mt-6 bg-red-500 px-6 py-3 rounded-md text-white hover:bg-red-600">
          Book a session
        </button>
      </div>
    </div>
  );
};

export default Booking;
