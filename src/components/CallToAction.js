import React from "react";

const CallToAction = () => {
  return (
    <div className="relative w-screen h-64 py-4 overflow-hidden">
      <div className="absolute h-full w-full top-0 left-0">
        <img src="images/cta-bg.png" alt="background" />
      </div>
      <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold mb-10">
          {" "}
          Healthier, Safer and Eco-Friendlier{" "}
        </h2>
        <button className="bg-MainBlue py-2 px-4 text-white tracking-wider">
          {" "}
          OUR MISSION
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
