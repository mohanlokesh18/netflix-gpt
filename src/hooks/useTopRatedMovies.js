import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { topRatedMovies } from "../utils/movieSlice.js";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const topRatedMoviesData = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await topRatedMoviesData.json();
    console.log(jsonData.results);
    dispatch(topRatedMovies(jsonData.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  });
};

export default useTopRatedMovies;
