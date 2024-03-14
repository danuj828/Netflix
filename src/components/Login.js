import React, { useState } from "react";
import Header from "./Header";
import NetflixBackground from "../Images/NetflixBackground.jpg";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="background" src={NetflixBackground} />
      </div>
      <form className="absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded-md"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full rounded-md"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full rounded-md"
        ></input>
        <button className="border border-black text-white p-2 my-4 bg-red-500 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button className="underline">
          {isSignInForm ? "Forgot Password?" : ""}
        </button>
        <p className="py-4 underline cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already a User. Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
