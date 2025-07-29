import { useSelector } from "react-redux";
import useMainMoveTrailer from "../hooks/useMainMoveTrailer.js";
import { useState } from "react";

const VideoBackground = ({ mainMovieId }) => {
  useMainMoveTrailer(mainMovieId);
  const video = useSelector((store) => store.movie?.mainMoviesTrailer);
  return (
    <div className="w-full sm:pt-0 pt-24 sm:bg-none bg-black">
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/5lzoxHSn0C0?si=${video?.key}&autoplay=1&mute=1&loop=1&playlist=5lzoxHSn0C0&controls=0`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
