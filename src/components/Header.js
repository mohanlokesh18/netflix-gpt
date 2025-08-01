import React, { useEffect, useState } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants.js";
import { auth } from "../utils/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { setGptSearchFlag, userLang } from "../utils/gptSlice.js";
import { lang } from "../utils/langConstants.js";

const Header = () => {
  let userData = useSelector((state) => state?.user || null);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearchFlag = useSelector((state) => state.gpt.gptSearchToggle);
  const langSelected = useSelector((state) => state.gpt?.lang);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  const handleGptSearchBtn = () => {
    dispatch(setGptSearchFlag());
  };
  const handleLangSelected = (e) => {
    dispatch(userLang(e.target.value));
  };
  return (
    <div
      onClick={() => {
        flag && setFlag(false);
      }}
      className=" fixed bg-gradient-to-b from-transparent to-black/50 w-full z-20 flex sm:justify-between justify-center items-center box-border over"
    >
      <div className="">
        <img className="w-48" src={LOGO} alt="LOGO"></img>
        <h1 className="text-red-600 text-2xl -mt-7 font-semibold flex justify-center ">
          GPT
        </h1>
      </div>
      {userData && (
        <div className="flex">
          {gptSearchFlag && (
            <div className="flex justify-center items-center text-white">
              <select
                onChange={handleLangSelected}
                className="bg-black border-gray-500 text-sm sm:text-lg rounded-md border-[2px] focus:border-gray-500 focus:outline-none"
              >
                <option className="text-xs sm:text-lg" value="en">
                  English
                </option>
                <option className="text-xs sm:text-lg" value="ka">
                  ಕನ್ನಡ
                </option>
                <option className="text-xs sm:text-lg" value="hi">
                  हिंदी
                </option>
              </select>
            </div>
          )}
          <div className=" flex justify-center items-center">
            <button
              className="bg-red-700 sm:p-2 mx-4 sm:rounded-full sm:text-xl text-sm font-mono"
              onClick={handleGptSearchBtn}
            >
              {gptSearchFlag ? lang[langSelected]?.homeButtonTxt : "GPT Search"}
            </button>
          </div>
          <img
            className="sm:w-12 w-8 sm:h-12 h-8 mr-4 cursor-pointer z-30"
            onClick={() => {
              setFlag(!flag);
            }}
            src={USER_AVATAR}
            alt="User-avatar"
          ></img>
          {flag && (
            <div className="bg-black w-[200px] m-2 p-2 rounded-md absolute top-14 right-4 text-white z-50">
              <p>Hey {userData.displayName}, </p>
              <p>You're leaving so soon?</p>
              <button
                onClick={handelSignOut}
                className="border-2 border-white rounded-md  bg-black text-white px-1 mt-1 mr-1"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
