import React from "react";
import logo from "../../assets/images/Uber_Logo_Black_RGB.png";
import bg from "../../assets/images/bg.jpg";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
const Index: React.FC = () => {
  return (
    <div
      className="h-screen w-full flex justify-between flex-col bg-cover bg-bottom bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/20" />{" "}
      <img src={logo} alt="logo" className="w-24 ml-9 mt-8 relative z-10" />
      <div className="flex flex-col bg-white py-4 pb-7 px-4 justify-center items-center relative z-10">
        <h1 className="text-3xl font-bold">Get Started with Uber</h1>
        <Link to='/login'  className="w-full bg-black text-white py-3 rounded mt-6 flex justify-between items-center px-4"> 
          <div className=" text-xl">
            Continue
          </div>
          <MoveRight/>
        </Link>
      </div>
    </div>
  );
};

export default Index;
