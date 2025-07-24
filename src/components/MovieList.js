import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upComingMovies = useSelector((state) => state.movies.upComingMovies);
  return (
    <div>
      <div className="-mt-56 ">
        {nowPlayingMovies && (
          <>
            <MovieCard title={"Now Playing"} moviePoster={nowPlayingMovies} />
            <MovieCard title={"Popular Movies"} moviePoster={popularMovies} />
            <MovieCard
              title={"Top Rated Movies"}
              moviePoster={topRatedMovies}
            />
            <MovieCard title={"Upcoming Movies"} moviePoster={upComingMovies} />
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
