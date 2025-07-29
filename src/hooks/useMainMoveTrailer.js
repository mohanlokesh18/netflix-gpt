import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { mainMoviesTrailer } from "../utils/movieSlice.js";

const useMainMoveTrailer = (mainMovieId) => {
  const dispatch = useDispatch();
  const getMainMovieVideo = async () => {
    const movieVideo = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://api.themoviedb.org/3/movie/" +
        mainMovieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await movieVideo.json();
    console.log(jsonData);
    const trailerList = jsonData?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const video =
      trailerList?.length > 0 ? trailerList[0] : jsonData.results?.[0];
    console.log(video);
    dispatch(mainMoviesTrailer(video));
  };
  useEffect(() => {
    getMainMovieVideo();
  }, []);
};

export default useMainMoveTrailer;
