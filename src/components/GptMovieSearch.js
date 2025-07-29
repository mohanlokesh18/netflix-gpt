import React from "react";
import GptSearchBar from "./GptSearchBar.js";
import GptMovieSuggestion from "./GptMovieSuggestion.js";
import { BG_URL } from "../utils/constants.js";

const GptMovieSearch = () => {
  return (
    <div className="sm:pt-[9%] pt-[25%] bg-transparent text-white">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={BG_URL}
        alt="BG_IMG"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptMovieSearch;
