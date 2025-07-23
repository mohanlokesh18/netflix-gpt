import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    mainMovieTrailer: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    mainMoviesTrailer: (state, action) => {
      state.mainMovieTrailer = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { nowPlayingMovies, mainMoviesTrailer } = movieSlice.actions;
