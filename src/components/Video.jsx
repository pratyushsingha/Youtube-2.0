import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppContext } from "../context/AppContext";
import VideoContainer from "./VideoContainer";

const Video = ({ title }) => {
  const {
    vDetails,
    subscribed,
    subscription,
    rVideos,
    relatedVideos,
    videoDetails,
    currentVideoTitle,
    currentVideoViews,
    currentVideoChannel
  } = useContext(AppContext);

  const { vId } = useParams();

  useEffect(() => {
    videoDetails(vId, currentVideoTitle, currentVideoChannel, currentVideoViews);
    relatedVideos(vId);
  }, []);

  return (
    <div className="mx-3 md:mx-20 my-4 md:flex md:space-x-3">
      <div className="w-full">
        <iframe
          className="hidden md:block w-full rounded-md"
          src={`https://www.youtube.com/embed/${vId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          height={500}
        />
        <iframe
          className="block md:hidden w-full rounded-md"
          src={`https://www.youtube.com/embed/${vId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          height={250}
        />
        <div className="my-2">
          <p className="text-2xl font-bold md:w-full">{vDetails.title}</p>
          <div className="flex justify-between md:justify-start md:space-x-5 md:w-full my-3">
            <div className="flex flex-col">
              <p className="font-bold text-xl">{vDetails.channelTitle}</p>
              <p className="text-gray-400">{vDetails.viewCount} Viewers</p>
            </div>
            <button
              onClick={subscription}
              className="font-bold text-base bg-gray-400 px-8 py-1 rounded-3xl"
            >
              <ToastContainer />
              {subscribed ? (
                "Subscribe"
              ) : (
                <p className="text-red-800">Unsubscribe</p>
              )}
            </button>
          </div>
          {/* <div className="text-black text-md">
            {vDetails.description}
          </div> */}
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {rVideos.map((rvideo, index) => (
          <div key={index}  onClick={() => videoDetails(rvideo.videoId, rvideo.title, rvideo.channelTitle, rvideo.viewCount)} className="flex flex-col md:flex-col space-y-2 ">
            <VideoContainer
              key={index}
              title={rvideo.title}
              id={rvideo.videoId}
              thumbnail={rvideo.thumbnail[0].url}
              channelTitle={rvideo.channelTitle}
              viewCount={rvideo.viewCount}
              channelThumbnail={rvideo.authorThumbnail[0].url}
              publishedTimeText={rvideo.publishedTimeText}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
