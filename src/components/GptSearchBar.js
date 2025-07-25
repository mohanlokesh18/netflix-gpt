import { useSelector } from "react-redux";
import { lang } from "../utils/langConstants";

const GptSearchBar = () => {
  const selectedLang = useSelector((state) => state.gpt?.lang || "en");
  return (
    <div className="flex justify-center items-center">
      <input
        className="w-5/12 m-2 p-2 bg-black  shadow-black shadow-xl border-gray-500 border-[1px] focus:outline-none focus:border-gray-500"
        type="text"
        placeholder={`${lang[selectedLang].gptSearchPlaceholder}🍿`}
      ></input>
      <button className="m-2 py-2 w-28 bg-red-700 shadow-black shadow-xlshadow-black shadow-xl">
        {lang[selectedLang]?.search}
      </button>
    </div>
  );
};

export default GptSearchBar;
