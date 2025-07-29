import React, { useState } from "react";

const VideoTitle = ({ mainMovie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, original_title, overview, release_date } = mainMovie;
  return (
    <div className="w-screen aspect-video pt-[20%] sm:pl-12 pl-4 absolute text-white from-black/80">
      <h1 className="sm:text-5xl font-bold mb-2 pt-40 md:pt-0">
        {original_title}
      </h1>
      <p className="hidden md:block w-3/6">{overview}</p>
      <div className="flex gap-1 my-2">
        <button
          className="hidden md:block border-black bg-black/80 py-1 px-3 rounded text-lg"
          onClick={() => setIsOpen(true)}
        >
          More Info
        </button>
        <button className="hidden sm:hidden border bg-gray-500 px-3 rounded text-lg">
          More Info
        </button>
      </div>
      {isOpen && (
        <div className="">
          <div className="fixed inset-0 bg-black/70 flex items-top justify-center z-[9999] rounded-lg w-screen">
            <div className="aspect-video sm:w-[50%] w-screen sm:h-[50%]  rounded-lg sm:mt-[8%] bg-black">
              <div className="flex justify-end">
                <button
                  className="bg-red-700 w-10 h-10 rounded-full text-black text-3xl m-4 sm:-mb-10 sm:absolute"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </button>
              </div>
              <h1 className="bg-black text-gray-300 pl-4 py-4 text-3xl">
                Release Date: {release_date}
              </h1>
              <h1 className="bg-black text-gray-300 pl-4 py-4 text-3xl">
                Title: {original_title}
              </h1>
              <h1 className="bg-black  rounded-b-lg pl-4 py-2 text-sm text-gray-500">
                {overview}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTitle;
