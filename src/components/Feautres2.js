import React from "react";

const Features2 = () => {
  return (
    <div className="bg-white py-20">
      <div className="container text-center">
        <h4 className="text-3xl mb-20 px-56">
          We reimagined cleaning products to be better for your home and our
          planet.
        </h4>
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center flex-1 mr-5">
            <img
              src="images/kill-virus.png"
              className="h-16 w-16 mb-5"
              alt="kill-virus"
            />
            <h5 className="text-xl">
              Kill 99.9% of Germs, Bacteria & Viruses.
            </h5>
          </div>
          <div className="flex flex-col items-center flex-1 mr-5">
            <img
              src="images/non-toxic.png"
              className="h-16 w-16 mb-5"
              alt="kill-virus"
            />
            <h5 className="text-xl">100% Non-toxic, Natural & Organic.</h5>
          </div>
          <div className="flex flex-col items-center flex-1 mr-5">
            <img
              src="images/Eco-Friendly.png"
              className="h-16 w-16 mb-5"
              alt="kill-virus"
            />
            <h5 className="text-xl">Eco-Friendly</h5>
          </div>
          <div className="flex flex-col items-center flex-1 mr-5">
            <img
              src="images/saving.png"
              className="h-16 w-16 mb-5"
              alt="kill-virus"
            />
            <h5 className="text-xl">Unlimited Refill and Savings</h5>
          </div>
          <div className="flex flex-col items-center flex-1">
            <img
              src="images/safe.png"
              className="h-16 w-16 mb-5"
              alt="kill-virus"
            />
            <h5 className="text-xl">Safe for Kids & Pets </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
