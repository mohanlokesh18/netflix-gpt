import { useSelector } from "react-redux";
import { lang } from "../utils/langConstants.js";
import { useRef, useState } from "react";
import axios from "axios";
import GptMovieSuggestion from "./GptMovieSuggestion.js";

const GptSearchBar = () => {
  const selectedLang = useSelector((state) => state.gpt?.lang || "en");
  const searchText = useRef(null);
  const [suggestions, setSuggestions] = useState(null);

  const handleOnClickSearch = async () => {
    const query = searchText.current.value;
    if (!query) return;

    try {
      const res = await axios.post("http://localhost:5000/api/groq-search", {
        query,
      });
      setSuggestions(res.data.reply);
    } catch (err) {
      console.error("Groq search error:", err);
    }
  };

  return (
    <div className="sm:flex flex-col items-center text-center">
      <div className="w-screen">
        <input
          ref={searchText}
          className="sm:w-5/12 w-[95%] m-2 p-2 bg-black text-white border-gray-500 border-[1px]"
          type="text"
          placeholder={`${lang[selectedLang].gptSearchPlaceholder} 🍿`}
        />
        <button
          className="m-2 py-2 px-4 bg-red-700 text-white shadow-md"
          onClick={handleOnClickSearch}
        >
          {lang[selectedLang]?.search || "Search"}
        </button>
      </div>
      <div>
        {suggestions && <GptMovieSuggestion suggestions={suggestions} />}
      </div>
    </div>
  );
};

export default GptSearchBar;
