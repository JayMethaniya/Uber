import React, { useState } from "react";
import logo from "../../assets/images/uber_driver-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginResponse {
  captain: {
    email: string;
    fullName: {
      firstName: string;
      lastName: string;
    };
    vehicle: {
      color: string;
      plate: string;
      vehicleType: string;
      capacity: number;
    };
  };
  token: string;
}

interface LoginData {
  email: string;
  password: string;
}

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data: LoginData = { 
        email: email,
        password: password 
      };
      
      const response = await axios.post<LoginResponse>(
        "http://localhost:4000/captains/login", 
        data
      );
      
      if (response.status === 200) {
        const { captain, token } = response.data;
        localStorage.setItem('user', JSON.stringify(captain));
        localStorage.setItem('token', token);
        setEmail("");
        setPassword("");
        navigate("/captain/home");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Login failed:', error.response?.data || error.message);
      } else {
        console.error('Login failed:', error);
      }
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img src={logo} alt="logo" className="w-24 mb-3" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            required
            placeholder="example@gmail.com"
            className="bg-[#eeeeee] mb-5 rounded border px-2 py-2 w-full text-lg placeholder:text-sm "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded border px-2 py-2 w-full text-lg placeholder:text-sm "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black text-white py-3 rounded w-full">
            Login
          </button>
          <p className="flex items-center mt-1">
            Join a fleet?{" "}
            <Link
              to="/captain-signup"
              className=" block mt-1 text-blue-400 hover:text-blue-600"
            >
              Register as a Captain{" "}
            </Link>
          </p>
        </form>
      </div>
      <div className="w-full bg-[#b47510] text-white font-semibold  py-3 rounded mb-6 flex justify-center items-center px-4">
        <Link to="/login">SignIn as User</Link>
      </div>
    </div>
  );
};

export default Index;
