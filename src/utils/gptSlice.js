import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchToggle: false,
    lang: "en",
  },
  reducers: {
    setGptSearchFlag: (state) => {
      state.gptSearchToggle = !state.gptSearchToggle;
    },
    userLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { setGptSearchFlag, userLang } = gptSlice.actions;
export default gptSlice.reducer;
