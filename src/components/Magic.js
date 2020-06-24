import React from "react";

const Magic = () => {
  return (
    <div className="container py-20">
      <div id="magic-1" className="flex justify-center items-center mb-10">
        <div id="magic-image-1">
          <img
            src="images/magic-1.png"
            alt="all-in-one-solution"
            className="flex-1"
          />
        </div>
        <div
          id="magic-content-1"
          className="flex flex-col items-center px-10 flex-1 text-center"
        >
          <img
            src="images/magic-stars.png"
            alt="magic stars"
            className="mb-2 h-10 w-10"
          />
          <h5 className="text-xs text-MainBlue mb-10 w-24">
            Superior Cleaning Power
          </h5>
          <h2 className="text-3xl mb-10"> All-In-One Sterilization Solution</h2>
          <h3 className="text-md mb-10">
            {" "}
            Acts as hand sanitizer, disinfectant and household cleaning project
            all in one. Removes grease, stains and dirts{" "}
            <strong> as effectove as store bought chemical </strong>alternatives
            - all while being safe for kids, pets, and the planet
          </h3>
          <button className="bg-MainBlue text-white py-4 px-8">
            {" "}
            GET MY KIT
          </button>
        </div>
      </div>

      <div
        id="magic-2"
        className="flex flex-row-reverse justify-center items-center mb-10"
      >
        <div id="magic-image-2">
          <img
            src="images/magic-2.png"
            alt="tested and proven kills germs "
            className="flex-1"
          />
        </div>
        <div
          id="magic-content-1"
          className="flex flex-col items-center px-10 flex-1 text-center"
        >
          <img
            src="images/magic-stars.png"
            alt="magic stars"
            className="mb-2 h-10 w-10"
          />
          <h5 className="text-xs text-MainBlue mb-10 w-24">
            Zero Harsh Chemical
          </h5>
          <h2 className="text-3xl mb-10">
            {" "}
            Tested & Proven To Kill Germs & Viruses
          </h2>
          <h3 className="text-md mb-10">
            PopGerms' hospital-grade disinfectant solution elimates 99.99% of
            Germs, Bacteria and Viruses - all{" "}
            <strong>without any harmful chemicals</strong> or toxins.
          </h3>
          <button className="bg-MainBlue text-white py-4 px-8">
            {" "}
            GET MY KIT
          </button>
        </div>
      </div>

      <div id="magic-3" className="flex justify-center items-center mb-10">
        <div id="magic-image-3">
          <img
            src="images/magic-3.png"
            alt="all-in-one-solution"
            className="flex-1"
          />
        </div>
        <div
          id="magic-content-1"
          className="flex flex-col items-center px-10 flex-1 text-center"
        >
          <img
            src="images/magic-stars.png"
            alt="magic stars"
            className="mb-2 h-10 w-10"
          />
          <h5 className="text-xs text-MainBlue mb-10 w-24">
            Superior Cleaning Power
          </h5>
          <h2 className="text-3xl mb-10"> All-In-One Sterilization Solution</h2>
          <h3 className="text-md mb-10">
            Acts as hand sanitizer, disinfectant and household cleaning project
            all in one. Removes grease, stains and dirts{" "}
            <strong> as effectove as store bought chemical </strong>alternatives
            - all while being safe for kids, pets, and the planet
          </h3>
          <button className="bg-MainBlue text-white py-4 px-8">
            {" "}
            GET MY KIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Magic;
