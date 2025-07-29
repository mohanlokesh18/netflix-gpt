import OpenAI from "openai";
import { OPEN_API_KEY } from "./constants.js";

const openai = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
