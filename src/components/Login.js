// import React from 'react'

import { useRef, useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";
import { validateSignInUp } from "../utils/validateSignInUpForm";

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handelClick = () => {
    setIsSignIn(!isSingIn);
    setError(null);
  };
  const handelFormClick = () => {
    const message = validateSignInUp(
      email.current.value,
      password.current.value
    );

    if (message) {
      setError(message);
      return;
    }

    if (!isSingIn) {
      const isNameValid = /^[A-Za-z ]{3,}$/.test(name.current.value);
      if (!isNameValid) {
        setError("Name is invalid");
        return;
      }
    }

    setError(null);

    //form submission logic here...
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={BG_URL}
        alt="BG_IMG"
      />

      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-80 text-white w-3/12 p-12 rounded-md"
        >
          <h2 className="text-2xl font-bold mb-6">
            {isSingIn ? "Sign In" : "Sign Up"}
          </h2>
          {!isSingIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 w-full mb-4 rounded bg-gray-800 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 w-full mb-4 rounded bg-gray-800 text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 w-full mb-4 rounded bg-gray-800 text-white"
          />
          <p className="mb-4 font-bold text-red-800 text-lg">{error}</p>
          <button
            className="p-2 mb-4 w-full bg-red-600 hover:bg-red-700 rounded"
            onClick={handelFormClick}
          >
            {isSingIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={handelClick} className="cursor-pointer">
            {isSingIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
