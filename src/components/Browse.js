import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptMovieSearch from "./GptMovieSearch";
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
