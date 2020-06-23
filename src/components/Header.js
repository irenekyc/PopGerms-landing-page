import React from "react";

const Header = () => {
  return (
    <div className="w-screen bg-white">
      <div className="container flex justify-center items-center h-12">
        <ul className="text-sm flex-1 flex">
          <li className="mr-5"> SHOP </li>
          <li className="mr-5"> HOW IT WORK</li>
          <li> OUR MISSION </li>
        </ul>

        <img src="images/PopGerms.png" alt="Pop Germs Logo" />

        <ul className="text-sm flex-1 flex items-center justify-end">
          <li className="mr-5">B2B</li>
          <div className="h-12 w-20 rounded-b-full bg-MainBlue text-white flex justify-center items-center">
            <li>Get My Kit</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
