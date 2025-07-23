import React from "react";

const VideoTitle = ({ mainMovie }) => {
  const { id, original_title, overview } = mainMovie;
  return (
    <div className="w-screen aspect-video pt-[30%] pl-16 absolute text-white from-black/80">
      <h1 className="text-6xl font-bold mb-2">{original_title}</h1>
      <p className="w-3/6">{overview}</p>
      <div className="flex gap-1 my-2">
        <button className="border bg-gray-500 px-3 rounded text-lg">
          ▶️Play
        </button>
        <button className="border bg-gray-500 px-3 rounded text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
