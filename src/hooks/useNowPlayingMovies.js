import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../utils/movieSlice.js";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const latestMovies = await fetch(
      "https://thingproxy.freeboard.io/fetch/" +
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await latestMovies.json();
    console.log(jsonData?.results);
    dispatch(nowPlayingMovies(jsonData?.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
