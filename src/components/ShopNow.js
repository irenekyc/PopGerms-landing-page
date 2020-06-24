import React from "react";

const ShopNow = () => {
  return (
    <div className="linear py-20">
      <div className="container text-center">
        <h2 className="text-3xl mb-10">
          {" "}
          <p>Never Run Out.</p> <p> Buy Once, Use Forever</p>
        </h2>
        <div className="flex justify-between items-start">
          <div className="flex flex-col px-10">
            <div className="h-56 w-56 bg-white rounded-full flex justify-center items-center mb-5 text-center">
              <img src="images/product.png" alt="product" />
            </div>
            <h4 className="text-xl mb-5"> PopGerm</h4>
            <button className="bg-MainBlue flex py-2 justify-center items-center text-white">
              <img
                src="images/shopping-cart 1.png"
                className="mr-3"
                alt="shopping cart"
              />{" "}
              <span className="mr-2">Shop Now</span>{" "}
              <span className="border-l-2 border-solid border-white pl-2">
                {" "}
                $16{" "}
              </span>{" "}
            </button>
          </div>

          <div className="flex flex-col px-10">
            <div className="h-56 w-56 bg-white rounded-full flex justify-center items-center mb-5 text-center">
              <img src="images/product.png" alt="product" />
            </div>
            <h4 className="text-xl mb-5"> PopGerm +</h4>
            <button className="bg-MainBlue flex py-2 justify-center items-center text-white">
              <img
                src="images/shopping-cart 1.png"
                className="mr-3"
                alt="shopping cart"
              />{" "}
              <span className="mr-2">Shop Now</span>{" "}
              <span className="border-l-2 border-solid border-white pl-2">
                {" "}
                $16{" "}
              </span>{" "}
            </button>
          </div>

          <div className="flex flex-col px-10">
            <div className="h-56 w-56 bg-white rounded-full flex justify-center items-center mb-5 text-center">
              <img src="images/product.png" alt="product" />
            </div>
            <h4 className="text-xl mb-5"> PopGerm Pro</h4>
            <button className="bg-MainBlue flex py-2 justify-center items-center text-white">
              <img
                src="images/shopping-cart 1.png"
                className="mr-3"
                alt="shopping cart"
              />{" "}
              <span className="mr-2">Shop Now</span>{" "}
              <span className="border-l-2 border-solid border-white pl-2">
                {" "}
                $16{" "}
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
