import React from "react";

const Header = () => {
  return (
    <div className="w-screen bg-white">
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center">
        <ul className="text-sm flex-1 flex">
          <li className="mr-5"> SHOP </li>
          <li className="mr-5 hidden md:block"> HOW IT WORK</li>
          <li className="hidden md:block"> OUR MISSION </li>
        </ul>

        <img
          src="images/PopGerms.png"
          alt="Pop Germs Logo"
          className="sm:mb-5 md:mb-0"
        />

        <ul className="text-sm flex-1 flex items-center justify-end">
          <li className="mr-5 hidden md:block">B2B</li>
          <div className="h-12 w-20 rounded-b-full bg-MainBlue text-white flex justify-center text-center items-center p-4 md:mr-5">
            <li>Get My Kit</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
