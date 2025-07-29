import React from "react";
import Header from "./Header.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpComingMovies from "../hooks/useUpComingMovies.js";
import GptMovieSearch from "./GptMovieSearch.js";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  const gptSearch = useSelector((state) => state.gpt.gptSearchToggle);
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="">
        {gptSearch ? (
          <div>
            <GptMovieSearch />
          </div>
        ) : (
          <>
            <div>
              <MainContainer />
            </div>
            <div>
              <SecondaryContainer />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
