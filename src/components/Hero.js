import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen relative">
      <div id="bg-overlay" className="absolute top-0 left-0 w-full h-full">
        <img src="images/bg.png" alt="PopGerms Background" />
      </div>
      <div
        id="content-overlay"
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
      >
        <h1 className="text-6xl text-center w-7/12 mb-10">
          A lifetime supply of hand sanitizer in your pocket
        </h1>
        <p className="text-xl w-1/3 text-center mb-10">
          Make your own hospital-grade disinfectant using only water, salt and a
          popgerm.
        </p>
        <button className="h-20 w-64 bg-MainBlue flex justify-center items-center text-white">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
