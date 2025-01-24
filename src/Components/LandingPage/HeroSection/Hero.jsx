import React from "react";

const Hero = () => {
  return (
    <div className="landingPage grid md:grid-cols-2 gap-8 p-10">
      <div className="information">
        <h1 className="text-4xl font-bold leading-tight">
          Stay <span className="text-red-500">fit</span>,<br />
          <span className="border-b-4 border-red-500">Achieve</span> your
          <span className="text-red-500">goals</span>,<br />
          Get the <span className="text-red-500">perfect</span>
          <span className="border-b-4 border-red-500">body.</span>
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
          src="images/Group 1.png"
          alt="fitness picture"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
