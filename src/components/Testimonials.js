import React, { useState } from "react";
import "react-animated-slider/build/horizontal.css";

const Testimonials = () => {
  const [curTestimonial, setCurTestimonial] = useState(0);

  const sliderHandler = (e) => {
    console.log(curTestimonial);
    if (e === "prev") {
      console.log("prv");
      if (curTestimonial === 0) {
        return;
      } else {
        setCurTestimonial(curTestimonial - 20);
      }
    } else if (e === "next") {
      console.log("next");
      if (curTestimonial === 100) {
        return;
      } else {
        setCurTestimonial(curTestimonial + 20);
      }
    }
  };

  return (
    <div id="testimonials-section" className="w-screen py-20">
      <div className="container flex justify-center items-center">
        <div className="w-20 h-20">
          <img
            src="images/prev-btn.png"
            alt="previous"
            onClick={() => sliderHandler("prev")}
          />
        </div>
        <div className="flex-1 h-64 overflow-hidden py-8 text-center">
          <div
            className="flex"
            style={{
              width: "500%",
              transition: "0.5s linear",
              transform: `translateX(-${curTestimonial}%)`,
            }}
          >
            <div
              id="slide-1"
              className="flex-1 h-full flex flex-col items-center justify-center px-20 text-center"
            >
              <div id="review" className="flex">
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <span> (2419 reviews) </span>
              </div>

              <h3 id="review-product" className="text-xl py-2 text-MainBlue">
                {" "}
                PopGerm +
              </h3>
              <p id="review-content" className="py-2">
                <p>WOW! Blown away by how well these cleaners work!</p>
                <p>
                  And that one small tablet makes a full bottle of cleaner! Love
                  these products!{" "}
                </p>
                <p>I will definitely order more.</p>
              </p>

              <p id="review-customer" className="py-2 font-bold">
                {" "}
                - Samantha Smith
              </p>

              <div id="current" className="flex">
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue  bg-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue  m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
              </div>
            </div>
            <div
              id="slide-3"
              className="flex-1 h-full flex flex-col items-center justify-center px-20 text-center"
            >
              <div id="review" className="flex">
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <span> (2419 reviews) </span>
              </div>

              <h3 id="review-product" className="text-xl py-2 text-MainBlue">
                {" "}
                PopGerm +
              </h3>
              <p id="review-content" className="py-2">
                <p>WOW! Blown away by how well these cleaners work!</p>
                <p>
                  And that one small tablet makes a full bottle of cleaner! Love
                  these products!{" "}
                </p>
                <p>I will definitely order more.</p>
              </p>

              <p id="review-customer" className="py-2 font-bold">
                {" "}
                - Samantha the second
              </p>

              <div id="current" className="flex">
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue bg-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue  m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
              </div>
            </div>

            <div
              id="slide-1"
              className="flex-1 h-full flex flex-col items-center justify-center px-20 text-center"
            >
              <div id="review" className="flex">
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <span> (2419 reviews) </span>
              </div>

              <h3 id="review-product" className="text-xl py-2 text-MainBlue">
                {" "}
                PopGerm +
              </h3>
              <p id="review-content" className="py-2">
                <p>WOW! Blown away by how well these cleaners work!</p>
                <p>
                  And that one small tablet makes a full bottle of cleaner! Love
                  these products!{" "}
                </p>
                <p>I will definitely order more.</p>
              </p>

              <p id="review-customer" className="py-2 font-bold">
                {" "}
                - Samantha the third
              </p>

              <div id="current" className="flex">
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue bg-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue  m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
              </div>
            </div>

            <div
              id="slide-4"
              className="flex-1 h-full flex flex-col items-center justify-center px-20 text-center"
            >
              <div id="review" className="flex">
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <span> (2419 reviews) </span>
              </div>

              <h3 id="review-product" className="text-xl py-2 text-MainBlue">
                {" "}
                PopGerm +
              </h3>
              <p id="review-content" className="py-2">
                <p>WOW! Blown away by how well these cleaners work!</p>
                <p>
                  And that one small tablet makes a full bottle of cleaner! Love
                  these products!{" "}
                </p>
                <p>I will definitely order more.</p>
              </p>

              <p id="review-customer" className="py-2 font-bold">
                {" "}
                - Samantha the forth
              </p>

              <div id="current" className="flex">
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue  m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue bg-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
              </div>
            </div>

            <div
              id="slide-5"
              className="flex-1 h-full flex flex-col items-center justify-center px-20 text-center"
            >
              <div id="review" className="flex">
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <img src="images/review-star.png" alt="star" />
                <span> (2419 reviews) </span>
              </div>

              <h3 id="review-product" className="text-xl py-2 text-MainBlue">
                {" "}
                PopGerm +
              </h3>
              <p id="review-content" className="py-2">
                <p>WOW! Blown away by how well these cleaners work!</p>
                <p>
                  And that one small tablet makes a full bottle of cleaner! Love
                  these products!{" "}
                </p>
                <p>I will definitely order more.</p>
              </p>

              <p id="review-customer" className="py-2 font-bold">
                {" "}
                - Samantha the fifth
              </p>

              <div id="current" className="flex">
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue m-2"></div>
                <div className="h-3 w-3 border-2 rounded-full border-MainBlue bg-MainBlue m-2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-20 h-20">
          <img
            src="images/next-btn.png"
            alt="next"
            onClick={() => sliderHandler("next")}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
