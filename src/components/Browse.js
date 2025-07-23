import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
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
