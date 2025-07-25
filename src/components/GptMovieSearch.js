import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptMovieSearch = () => {
  return (
    <div className="pt-[9%] bg-transparent text-white">
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
