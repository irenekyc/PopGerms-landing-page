import React from "react";

const Intro = () => {
  return (
    <div className="relative w-screen h-screen py-10 overflow-hidden ">
      <div id="bg-overlay" className="absolute h-full w-1/2 right-0 top-0">
        {/* <img
          src="images/bg-2.png"
          alt="Clean cleaning solution"
          className="w-full"
        /> */}
      </div>
      <div
        id="content-overlay"
        className="absolute w-full h-full top-0 left-0 py-10"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl mb-10"> A Clean Cleaning Solution </h2>
          <p className="w-9/12 mb-10">
            {" "}
            Allergen-Free, No Chemical Residue, Cruelty-Free, Vegan,
            Fragrance-Free, Alcohol-Free, Ammonia-Free, Non-Toxic, Safety
            without Compromise
          </p>
          <div className="flex justify-between items-start w-8/12 py-10">
            <div className="flex-1 py-10 flex flex-col items-center text-center">
              <img
                src="images/footprint 1.png"
                alt="footprint"
                className="mb-5 w-16 h-16"
              />
              <p> Around Baby's </p>
            </div>

            <div className="flex-1 py-10 flex flex-col items-center text-center">
              <img
                src="images/rabbit 1.png"
                alt="Pet areas"
                className="mb-5 w-16 h-16"
              />
              <p> Pet Areas </p>
            </div>

            <div className="flex-1 py-10 flex flex-col items-center text-center">
              <img
                src="images/wipe 1.png"
                alt="Food contact surface"
                className="mb-5 w-16 h-16"
              />
              <p> Food Contact Surface</p>
            </div>

            <div className="flex-1 py-10 flex flex-col items-center text-center">
              <img
                src="images/apple 1.png"
                alt="wash fruits"
                className="mb-5 w-16 h-16"
              />
              <p> Wash Pesticedes off Fruit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
