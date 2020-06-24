import React from "react";

const Ingredients = () => {
  return (
    <div className="linear py-20">
      <div className="container text-center">
        <h2 className="text-4xl mb-10">
          {" "}
          3 Ingredients - Zero Harsh Chemicals
        </h2>
        <p className="text-xl mb-10">
          {" "}
          Popgerms kills 99.9% of germs with only 3 simple ingredients: water,
          salt, and hypochlorous.
        </p>
        <div className="flex justify-between items-start">
          <div className="w-56 flex flex-col">
            <img src="images/features.png" alt="water" />
          </div>
          <div className="w-56 flex flex-col">
            <img src="images/features.png" alt="water" />
          </div>
          <div className="w-56 flex flex-col">
            <img src="images/features.png" alt="water" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
