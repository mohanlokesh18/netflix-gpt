import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    mainMovieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    secondaryMoviesTrailer: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    mainMoviesTrailer: (state, action) => {
      state.mainMovieTrailer = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    topRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    upComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    secondaryMoviesTrailer: (state, action) => {
      state.secondaryMoviesTrailer = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  nowPlayingMovies,
  mainMoviesTrailer,
  popularMovies,
  topRatedMovies,
  upComingMovies,
  secondaryMoviesTrailer,
} = movieSlice.actions;
