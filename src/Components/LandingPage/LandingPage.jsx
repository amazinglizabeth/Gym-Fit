import React from "react";
import Menu from "./Menu/Menu";
import Hero from "./HeroSection/Hero";
import Menu from "./components/Menu";
import GymInfo from "./components/GymInfo";
import FitnessProgram from "./components/FitnessProgram";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <Menu />
      <Hero />
      <GymInfo />
      <FitnessProgram />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
