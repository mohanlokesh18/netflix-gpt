import React from "react";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  return (
    <div className="bg-black">
      <div className="bg-black">
        <MovieList title={"Now Playing"} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
