import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-MainBlue">
      <div
        className="container flex flex-col justify-center items-center py-10"
        id="footer-top"
      >
        <img src="images/logo.png" alt="logo" className="py-5" />
        <img src="images/instagram.png" alt="instagram" className="mb-3" />
        <p className="mb-2"> @popgerms</p>
        <p className="mb-10 text-xl font-semi-bold">
          {" "}
          Stay disinfect anything, anywhere, anytime.
        </p>
      </div>
      <div className="py-10 text-center text-black" id="footer-middle">
        <div className="container flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="max-w-xs mx-auto">
            <p className="font-medium text-lg mb-3 uppercase"> Shop </p>
            <ul>
              <li className="mb-3">All</li>
              <li className="mb-3">The Cleaning Essentials</li>
              <li className="mb-3">Kits</li>
              <li className="mb-3">Starter Sets</li>
              <li className="mb-3">Refill Packs</li>
            </ul>
          </div>
          <div className="flex-1 p-5 flex-col">
            <h3 className="text-3xl mb-5 italic text-MainBlue">
              {" "}
              Our Emails are Non-Toxic Too
            </h3>
            <p className="mb-5">
              {" "}
              Be the first to know the new products launches and offers.
            </p>
            <div className="max-w-xs flex h-12 mx-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                className="py-1 px-2 flex-1 h-full border-MainBlue border-solid border"
              />
              <button className="bg-MainBlue px-5 h-full text-white tracking-wide uppercase">
                {" "}
                Send
              </button>
            </div>
          </div>
          <div className="max-w-xs mx-auto">
            <p className="font-medium text-lg mb-3 uppercase"> About </p>
            <ul>
              <li className="mb-3">How It Works</li>
              <li className="mb-3">Our Mission</li>
              <li className="mb-3">Blog</li>
              <li className="mb-3">FAQ</li>
              <li className="mb-3">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-bottom" className="bg-MainBlue text-white py-5">
        <div className="container flex flex-col md:flex-row justify-around items-center">
          <p>hello@popgerm.com</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>CopyRight 2020 PopGerm</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
