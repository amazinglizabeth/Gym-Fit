import React from "react";
import CyclingLady from "../images/cycling-lady.png";
import Logo from "../images/logo.png";
import Abs from "../images/abs.png";

const CustomerExpectation = () => {
  return (
    <div id="about" className="why-choose-gymfit px-14 py-10 bg-neutral-200  ">
      <h2 className=" text-3xl font-bold text-center mb-6">
        Why Choose GymFit?
      </h2>
      <div className="gym-expectation space-y-12">
        {/* First Row */}
        <div className="row flex flex-wrap items-center justify-between w-[100%]">
          <img
            src={CyclingLady}
            alt="Cycling lady"
            className=" md:w-1/3 mb-4 md:mb-0 w-[40%]"
          />
          <div className="write-up-1 md:w-2/3 space-y-8 w-[60%] px-10 ">
            <div className="approach flex flex-col md:flex-row items-start space-y-4 md:space-y-0 ">
              <img src={Logo} alt="logo" className="w-12 h-12 mr-3 ml-10" />
              <div>
                <h3 className="text-2xl font-bold ">Personalized Approach</h3>
                <p className="text-medium mt-1">
                  No two fitness journeys are alike, which is why we tailor our
                  programs to meet your unique needs and preferences. Whether
                  you're a beginner or a seasoned athlete, our expert trainers
                  will craft a personalized plan just for you.
                </p>
              </div>
            </div>
            <div className="facilities flex flex-col md:flex-row items-start space-y-4 md:space-y-0">
              <img src={Logo} alt="logo" className="w-12 h-12 mr-3 ml-10" />
              <div>
                <h3 className="text-2xl font-bold ">
                  State-of-the-Art Facilities
                </h3>
                <p className="text-medium mt-1">
                  Train like a champion in our cutting-edge facilities equipped
                  with top-of-the-line equipment and amenities. From our
                  spacious workout areas to our soothing recovery zones, we
                  provide everything you need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row flex flex-wrap items-center justify-between ">
          <div className="write-up-2 md:w-2/3 space-y-8 pr-10">
            <div className="approach flex flex-col md:flex-row items-start space-y-4 md:space-y-0 pr-5">
              <img src={Logo} alt="logo" className="w-12 h-12 mr-3" />
              <div>
                <h3 className="text-2xl font-bold">Variety of Workouts</h3>
                <p className="text-medium mt-1 mr-12 pr-15">
                  Say goodbye to boring routines. At GymFit, we offer a diverse
                  range of workouts including strength training, cardio, yoga,
                  Pilates, and more. With our constantly evolving classes,
                  you'll stay motivated and engaged every step of the way.
                </p>
              </div>
            </div>
            <div className="facilities flex flex-col md:flex-row items-start space-y-4 md:space-y-0 pr-5">
              <img src={Logo} alt="logo" className="w-12 h-12 mr-3" />
              <div>
                <h3 className="text-2xl font-bold">
                  Flexible Membership Options
                </h3>
                <p className="text-medium mt-1 mr-12 pr-15">
                  We offer flexible membership options to fit your schedule and
                  budget. Whether you prefer unlimited access or pay-as-you-go,
                  we have a plan that's right for you.
                </p>
              </div>
            </div>
          </div>
          <img
            src={Abs}
            alt="abs training"
            className="w-full md:w-1/3 mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerExpectation;
