import { IMG_CDN_URL } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchSecondaryMovieTrailer } from "../utils/secondaryMovieTrailer.js";
import { useState } from "react";

const MovieCard = ({ title, moviePoster }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const [imgError, setImgError] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (movie) => {
    dispatch(fetchSecondaryMovieTrailer(movie.id));
    setIsOpen(true);
    setMovie(movie);
  };
  const secondaryVideo = useSelector(
    (state) => state.movies?.secondaryMoviesTrailer
  );
  return (
    <div className="relative ">
      <h1 className="px-4 pt-6 pb-2 text-3xl text-white font-semibold">
        {title}
      </h1>
      <div className="overflow-x-auto overflow-y-hidden px-4 no-scrollbar cursor-pointer">
        <div className="flex gap-4">
          {moviePoster?.map((movie) => (
            <div
              className="w-40 flex-shrink-0"
              key={movie?.id}
              onClick={() => handleClick(movie)}
            >
              <img
                className="rounded-lg w-full h-full object-cover"
                src={IMG_CDN_URL + movie.poster_path}
                alt={movie.title}
                onError={(e) => {
                  setImgError(true);
                  e.target.onerror = null;
                  e.target.src = "/images/dummyPoster.png";
                }}
              />
              {imgError && (
                <h1 className="text-black drop-shadow-[0_1px_2px_rgba(255,255,255,1)] font-extrabold px-1 py-1 -mt-[50px]">
                  {movie.title}
                </h1>
              )}
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="">
          <div className="fixed inset-0 bg-black/70 flex items-top justify-center z-[9999] rounded-lg w-screen">
            <div className="aspect-video sm:w-[50%] w-screen sm:h-[50%]  rounded-lg sm:mt-[8%] bg-black">
              <div className="flex justify-end">
                <button
                  className="bg-red-700 w-10 h-10 rounded-full text-black text-3xl m-4 sm:-mb-10 sm:absolute"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
              <iframe
                className="aspect-video rounded-t-lg"
                key={secondaryVideo?.key} // ensures re-render
                src={`https://www.youtube.com/embed/${secondaryVideo?.key}?autoplay=1&mute=1&loop=1&controls=0&playlist=${secondaryVideo?.key}&modestbranding=1&rel=0&showinfo=0`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              <h1 className="bg-black text-gray-300 pl-4 py-4 text-3xl">
                {movie.title}
              </h1>
              <h1 className="bg-black  rounded-b-lg pl-4 py-2 text-sm text-gray-500">
                {movie.overview}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
