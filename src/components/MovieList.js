import React from "react";
import MovieCard from "./MovieCard.js";
import { useSelector } from "react-redux";

const MovieList = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upComingMovies = useSelector((state) => state.movies.upComingMovies);
  const cardData = [
    { title: "Now Playing", movie: nowPlayingMovies },
    { title: "Popular Movies", movie: popularMovies },
    { title: "Top Rated Movies", movie: topRatedMovies },
    { title: "Upcoming Movies", movie: upComingMovies },
  ];
  return (
    <div>
      <div className="sm:-mt-56 pb-4 pt-2">
        {cardData.map((card) => (
          <div>
            <MovieCard
              key={card.title}
              title={card.title}
              moviePoster={card.movie}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
