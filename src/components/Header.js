import React, { useEffect, useState } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import GptMovieSearch from "./GptMovieSearch";
import { setGptSearchFlag, userLang } from "../utils/gptSlice";
import { lang } from "../utils/langConstants";

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
    <div className=" fixed bg-gradient-to-b from-transparent to-black/50 w-full z-20 flex justify-between items-center box-border over">
      <div>
        <img className="w-48" src={LOGO} alt="LOGO"></img>
      </div>
      {userData && (
        <div className="flex">
          {gptSearchFlag && (
            <div className="flex justify-center items-center text-white">
              <select
                onChange={handleLangSelected}
                className="bg-black border-gray-500 rounded-md border-[2px] focus:border-gray-500 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="ka">ಕನ್ನಡ</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          )}
          <div className=" flex justify-center items-center">
            <button
              className="bg-red-700 p-2 mx-4 rounded-full text-xl font-mono"
              onClick={handleGptSearchBtn}
            >
              {gptSearchFlag ? lang[langSelected]?.homeButtonTxt : "GPT Search"}
            </button>
          </div>
          <img
            className="w-12 h-12 mr-4 cursor-pointer"
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
