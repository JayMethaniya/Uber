import React, { useState } from "react";
import logo from "../../assets/images/Uber_Logo_Black_RGB.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface SignupData {
  fullName: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  vehicle: {
    color: string;
    plate: string;
    vehicleType: string;
    capacity: number;
  };
}

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [vehicleCapacity, setVehicleCapacity] = useState("4");

  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data: SignupData = {
        fullName: {
          firstName,
          lastName,
        },
        email,
        password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          vehicleType: vehicleType,
          capacity: parseInt(vehicleCapacity),
        },
      };

      const response = await axios.post(
        "http://localhost:4000/captains/register",
        data
      );

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.captain));
        navigate("/captain/home");
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleType("car");
        setVehicleCapacity("4");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Registration failed:', error.response?.data || error.message);
      } else {
        console.error('Registration failed:', error);
      }
    }
  };

  return (
    <div className="p-7 min-h-screen flex flex-col justify-between">
      <div>
        <img src={logo} alt="logo" className="w-24 mb-3" />
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <div className="flex justify-between gap-4">
              <input
                type="text"
                required
                placeholder="First Name"
                className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg placeholder:text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg placeholder:text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              type="email"
              required
              placeholder="Email"
              className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg placeholder:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg placeholder:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Vehicle Details</h2>
            <input
              type="text"
              required
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg placeholder:text-sm"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Vehicle Plate Number"
              className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg placeholder:text-sm"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
            
            <div className="flex justify-between gap-4">
              <select
                className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>

              <select
                className="bg-[#eeeeee] rounded border px-2 py-2 w-full text-lg"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              >
                <option value="2">2 Seats</option>
                <option value="4">4 Seats</option>
                <option value="7">7 Seats</option>
                
              </select>
            </div>
          </div>

          <button className="bg-black text-white py-3 rounded w-full">
            Sign Up as Captain
          </button>
          
          <p className="flex items-center mt-1">
            Already have an account?{" "}
            <Link
              to="/captain-login"
              className="block ml-2 text-blue-400 hover:text-blue-600"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      <p className="text-[12px] text-justify mb-4">
        By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </p>
    </div>
  );
};

export default Index;
