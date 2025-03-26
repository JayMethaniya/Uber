import React, { useState, useContext } from "react";
import logo from "../../assets/images/Uber_Logo_Black_RGB.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../Context/UserContext";
interface UserContextType {
  user: {
    email: string;
    password: string;
    fullName: {
      firstName: string;
      lastName: string;
    };
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      fullName: {
        firstName: string;
        lastName: string;
      };
    }>
  >;
}

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext) as UserContextType;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    const response = await axios.post(
      "http://localhost:4000/users/register",
      data
    );
    console.log(response);
    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("token", response.data.token);

      setUser(data.user);
      navigate("/user/home");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <img src={logo} alt="logo" className="w-24 mb-3" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex justify-between gap-4">
            <input
              type="name"
              required
              placeholder="First Name"
              className="bg-[#eeeeee] mb-5 rounded border px-2 py-2 w-full text-lg placeholder:text-sm "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="name"
              required
              placeholder="Last Name"
              className="bg-[#eeeeee] mb-5 rounded border px-2 py-2 w-full text-lg placeholder:text-sm "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

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
            SingUp
          </button>
          <p className="flex items-center mt-1">
            AllReady have account?{" "}
            <Link
              to="/login"
              className=" block mt-1 text-blue-400 hover:text-blue-600"
            >
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
      <p className="text-[12px] text-justify mb-4">
        {" "}
        By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
        including by automated means, from Uber and its affiliates to the number
        provided.
      </p>
    </div>
  );
};

export default Index;
