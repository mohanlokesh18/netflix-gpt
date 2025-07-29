import React from "react";

const GptMovieSuggestion = ({ suggestions }) => {
  return (
    <div>
      {suggestions && (
        <div className="mt-4 text-lg text-white bg-black w-5/12 m-auto">
          <p>🎬 Recommended Movies:</p>
          <p className="italic mt-4 p-4">{suggestions}</p>
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
