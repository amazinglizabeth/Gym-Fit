import React from "react";
import Menu from "./Menu/Menu";
import Hero from "./HeroSection/Hero";
import GymInfo from "./GymInfo/GymInfo";
import FitnessProgram from "./FitnessProgram/FitnessProgram";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import FitnessCentres from "./FitnessCentres/FitnessCentres";
import Footer from "./Footer/Footer";
import CustomerExpectation from "./CustomerExpectation/CustomerExpectation";
import Booking from "./Booking/Booking";

const LandingPage = () => {
  return (
    <div className="font-sans bg-gray-100 scrollbar-hide">
      <Menu />
      <Hero />
      <GymInfo />
      <CustomerExpectation />
      <FitnessProgram />
      <Booking />
      <FitnessCentres />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
