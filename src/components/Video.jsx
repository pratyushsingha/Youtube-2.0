import React, { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import VideoContainer from "./VideoContainer";

const Video = ({ title }) => {
  const {
    vDetails,
    setVDetails,
    subscribed,
    subscription,
    rVideos,
    setRVideos,
    relatedVideos,
    videoDetails,
  } = useContext(AppContext);

  const { vId } = useParams();

  useEffect(() => {
    videoDetails(vId);
    relatedVideos(vId);
  }, []);

  return (
    <div className="mx-3 my-4 md:flex md:space-x-3">
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
          <div className="flex justify-between md:w-full my-3">
            <div className="flex flex-col">
              <p className="font-bold text-xl">{vDetails.channelTitle}</p>
              <p className="text-gray-400">{vDetails.viewCount} Viewers</p>
            </div>
            <button className="bg-gray-400 px-6 py-3 rounded-3xl">
              <button onClick={() => subscription()} className="font-bold">
                {subscribed ? (
                  "Subscribe"
                ) : (
                  <p className="text-red-600">Unsubscribe</p>
                )}
              </button>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col space-y-2">
        {rVideos.map((rvideo, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Video;
