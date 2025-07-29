// utils/fetchSecondaryMovieTrailer.js
import { API_OPTIONS } from "./constants.js";
import { secondaryMoviesTrailer } from "./movieSlice.js";

export const fetchSecondaryMovieTrailer =
  (movieId) => async (dispatchThunk) => {
    const response = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await response.json();
    const trailerList = jsonData?.results?.filter(
      (item) => item.type === "Trailer"
    );
    const video =
      trailerList?.length > 0 ? trailerList[0] : jsonData.results?.[0];

    dispatchThunk(secondaryMoviesTrailer(video));
  };
