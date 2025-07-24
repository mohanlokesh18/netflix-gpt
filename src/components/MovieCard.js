import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, moviePoster }) => {
  return (
    <div className="relative z-10">
      <h1 className="px-4 pt-6 pb-2 text-3xl text-white font-semibold">
        {title}
      </h1>

      <div className="overflow-x-auto overflow-y-hidden px-4 no-scrollbar cursor-pointer">
        <div className="flex gap-4">
          {moviePoster?.map((movie) => (
            <div className="w-40 flex-shrink-0" key={movie?.id}>
              <img
                className="rounded-lg w-full h-full object-cover"
                alt="Movie_Poster"
                src={IMG_CDN_URL + movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
