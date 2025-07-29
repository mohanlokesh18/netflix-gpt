// import React from 'react'

import { useRef, useState } from "react";
import { BG_URL } from "../utils/constants.js";
import Header from "./Header.js";
import { validateSignInUp } from "../utils/validateSignInUpForm.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const [isSingIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handelClick = () => {
    setIsSignIn(!isSingIn);
    setError(null);
  };
  const handelFormClick = () => {
    if (!isSingIn) {
      const isNameValid = /^[A-Za-z ]{3,}$/.test(name.current.value);
      setError(null);
      if (!isNameValid) {
        setError("Name is invalid");
        return;
      }
    }
    const message = validateSignInUp(
      email.current.value,
      password.current.value
    );

    if (message) {
      setError(message);
      return;
    }
    if (!isSingIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setError(error);
            });
          setError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setError(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
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
          className="bg-black bg-opacity-80 text-white sm:w-10/12 md:w-3/12 w-auto p-12 rounded-md"
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
