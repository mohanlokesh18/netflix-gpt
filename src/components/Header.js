import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute bg-gradient-to-b from-transparent to-black/50 w-full z-10">
      <img className="w-48" src={LOGO} alt="LOGO"></img>
    </div>
  );
};

export default Header;
