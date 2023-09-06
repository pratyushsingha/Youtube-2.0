import React from "react";
import { Link } from "react-router-dom";

const VideoContainer = ({
  id,
  title,
  thumbnail,
  channelTitle,
  viewCount,
  channelThumbnail,
  publishedTimeText,
}) => {
  return (
    <>
      <Link to={`/video/${id}`}>
        {/* for small screen */}
        <div key={id} className="block md:hidden flex flex-col space-y-2">
          <img className="w-full" src={thumbnail} alt="" />
          <div className="flex space-x-2">
            <img
              className="w-10 h-10 rounded-full mt-2"
              src={channelThumbnail}
              alt=""
            />
            <p className="font-bold text-md">{title.slice(0,56)} ...</p>
          </div>
          <div className="flex gap-1 mx-10 -mt-3">
            <p className="text-sm text-gray-600 font-semibold">
              {channelTitle}
            </p>
            <span>•</span>
            <p>{viewCount}</p>
            <span>•</span>
            <p>{publishedTimeText}</p>
          </div>
        </div>
        {/* for large screen */}
        <div className="hidden md:block flex flex-col space-y-2">
          <div className="flex space-x-3">
            <img className="w-1/2 rounded-lg" src={thumbnail} width="200" alt="" />
            <div className="flex flex-col">
              <p className="font-bold text-base">{title.slice(0, 56)}...</p>
              <p className="text-sm text-gray-600">{channelTitle}</p>
              <div className="flex space-x-2">
                <span className="text-sm text-gray-600">{viewCount}</span>
                <span>•</span>
                <span className="text-sm text-gray-600">{publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoContainer;
