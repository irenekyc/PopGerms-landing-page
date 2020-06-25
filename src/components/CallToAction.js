import React from "react";

const CallToAction = () => {
  return (
    <div
      className=" w-screen h-64 bg-cover"
      style={{ backgroundImage: "url('images/cta-bg.png')" }}
    >
      <div className="h-full w-full flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl lg:text-4xl text-white font-bold mb-2 lg:mb-4">
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
