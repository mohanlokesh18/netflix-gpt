import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="">
        {/* 
        -Maincontainer
          -trailer
          -name
          -details
        -Secondary container
          -movie recomendation
          -movies card
        */}
        <div>
          <MainContainer />
        </div>
        <div>
          <SecondaryContainer />
        </div>
      </div>
    </div>
  );
};

export default Browse;
