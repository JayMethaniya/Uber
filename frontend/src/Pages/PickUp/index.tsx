import React from "react";
import logo from "../../assets/images/Uber_Logo_Black_RGB.png";
const index = () => {
  return (
    <div className=" relative h-screen w-full">
      <img src={logo} alt="logo" className="w-16 absolute  left-5 top-5" />
      <div className="w-full h-[90%] bg-gray-100 flex items-center  justify-center">
        <p className="text-gray-500">Map Placeholder</p>
      </div>
      <div className="bg-white w-full h-[10%] rounded-t-xl">

      </div>
    </div>
  );
};

export default index;
