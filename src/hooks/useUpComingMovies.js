import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { upComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const upComingMoviesdata = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await upComingMoviesdata.json();
    console.log(jsonData.results);
    dispatch(upComingMovies(jsonData.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
