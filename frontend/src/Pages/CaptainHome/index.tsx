import React, { useState } from "react";
import logo from "../../assets/images/Uber_Logo_Black_RGB.png"
import CaptainDetails from "../../Components/CaptainDetails/index"
import RideRequestCard from "./RideRequestCard";



const Index =() => {
  
  const [showRequest, setShowRequest] = useState<boolean>(true);

  return (
    <div className=" relative h-screen w-full">
      <img src={logo} alt="logo" className="w-16 absolute  left-5 top-5" />
      <div className="w-full h-[80%] bg-gray-100 flex items-center  justify-center">
      {showRequest && <RideRequestCard onClose={() => setShowRequest(false)} />}
        <p className="text-gray-500">Map Placeholder</p>
      </div>
     <CaptainDetails/>
     
    </div>
  );
}
export default Index
