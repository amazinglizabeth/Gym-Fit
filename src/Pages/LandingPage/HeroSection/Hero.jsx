import React from "react";
import HeroSide from "../images/Group-1.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="landingPage grid md:grid-cols-2 gap-8 p-10 pt-10 bg-neutral-200"
    >
      <div className="mt-12">
        <h1 className="text-4xl font-bold leading-tight">
          Stay <span className="text-red-500">fit</span>,<br />
          <span
            className="border-2 border-purple-800  px-[3%] inline-block h-[60px] -ml-[5%] mt-2"
            style={{ borderRadius: "160px / 60px" }}
          >
            Achieve
          </span>{" "}
          your
          <span className="text-red-500"> goals</span>,<br />
          Get the <span className="text-red-500">perfect</span>
          <span className="border-b-2 border-purple-800 rounded-[20px]">
            {" "}
            body.
          </span>
        </h1>
        <p className="mt-4 text-lg">
          Join the community of people who are ready to achieve their fitness
          goals and unlock their full potential.
        </p>
        <button className="mt-6 bg-red-500 px-6 py-3 rounded-md text-white hover:bg-red-600">
          Register now
        </button>
      </div>
      <div className="diagram">
        <img
          src={HeroSide}
          alt="fitness picture"
          className="w-full rounded-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
