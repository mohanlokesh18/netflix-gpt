import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { popularMovies } from "../utils/movieSlice.js";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const popularMoviesData = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await popularMoviesData.json();
    console.log(jsonData?.results);
    dispatch(popularMovies(jsonData.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
