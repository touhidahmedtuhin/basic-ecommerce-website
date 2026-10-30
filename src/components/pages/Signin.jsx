import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email === "tuhin@gmail.com" && user.password === "123") {
      const realUser = {
        name:"Touhid Ahmed Tuhin",
        email:user.email,
        phone:"123456789",
        city:"Dhaka , Bangladesh"
      }
      navigate("/profile",{state:realUser});
      console.log("navigate to the profile page");
    }
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div className="mt-10 mr-10 bg-gray-300 h-50 w-50">
      <form onSubmit={handleFormSubmit}>
        <h2 className="mb-3 text-center">Sign in Page</h2>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="border-2 "
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="border-2"
        />
        <br />
        <br />
        <div className="flex justify-center">
          <button className="bg-green-600 px-3 py-1 rounded text-white cursor-pointer">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
