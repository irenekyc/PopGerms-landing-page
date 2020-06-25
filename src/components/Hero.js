import React from "react";
import Annoncement from "./Announcement";
import Header from "./Header";

const Hero = () => {
  return (
    <div
      className="w-screen h-screen flex-col bg-no-repeat bg-bottom bg-cover"
      style={{ backgroundImage: "url(images/bg.png)" }}
    >
      <Annoncement />
      <Header />
      <div className="flex-1 relative pt-10 w-full h-full" id="hero">
        <div
          id="content-overlay"
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl lg:text-6xl text-center lg:w-7/12 md:w-8/12 sm:w-9/12 mb-10">
            A lifetime supply of hand sanitizer in your pocket
          </h1>
          <p className="text-xl lg:w-1/3 md:w-1/2 text-center mb-10">
            Make your own hospital-grade disinfectant using only water, salt and
            a popgerm.
          </p>
          <button className="h-20 w-64 bg-MainBlue flex justify-center items-center text-white">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
