import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle.js";
import VideoBackground from "./VideoBackground.js";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  return (
    <div>
      <div>
        <VideoTitle mainMovie={mainMovie} />
        <VideoBackground mainMovieId={mainMovie.id} />
      </div>
    </div>
  );
};

export default MainContainer;
