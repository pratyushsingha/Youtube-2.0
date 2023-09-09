import React from "react";
import { Link } from "react-router-dom";

const VideoItems = ({ src, title, channel, date, id, viewCount }) => {
  return (
    <Link to={`/video/${id}`}>
      <div className="flex justify-center">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full rounded-lg"
            src={src}
            width="100%"
            alt={title}
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-md mb-2">
              {title.slice(0, 57)}...
            </div>
            <div className="flex space-x-2 md:space-x-0 flex-row md:flex-col">
              <p className="text-gray-700 text-base">{channel}</p>
              <span className="block md:hidden">•</span>
              <p className="text-gray-700 text-base block md:hidden">{date}</p>
              <div className="hidden md:block md:flex md:flex-row">
                <p className="text-gray-700 text-base">{viewCount} Viewers</p>{" "}
                <span className="md:flex md:space-x-3">•</span> 
                <p className="text-gray-700 text-base">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoItems;
