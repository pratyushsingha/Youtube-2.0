import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
  } = useContext(AppContext);
  const { vId } = useParams();

  const videoDetails = async (vId) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/video",
      params: { id: vId },
      headers: {
        "X-RapidAPI-Key": "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setVDetails(response.data);
    } catch (error) {
      console.error(error);
      setVDetails([]);
    }
  };

  const relatedVideos = async (vId) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/related",
      params: {
        id: vId,
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": "9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setRVideos(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    videoDetails(vId);
    relatedVideos(vId);
  }, [vId]);

  return (
    <div className="mx-3 my-4">
      <iframe
        className="hidden md:block w-8/12 rounded-md"
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
        <p className="text-2xl font-bold md:w-8/12">{vDetails.title}</p>
        <div className="flex justify-between md:w-8/12 my-3">
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
          {/* <div className='hidden md:block flex justify-end space-x-3'>
                        <div className='bg-gray-400 px-6 py-3 rounded-3xl flex space-x-3'>
                            <button className='text-2xl'><AiFillLike /></button>
                            <div className='h-full border-l border-gray-500'></div>
                            <button className='text-2xl'><AiFillDislike /></button>
                        </div>
                        <div className='bg-gray-400 px-6 py-3 rounded-3xl flex space-x-3'>
                            <button className='text-2xl'><AiFillLike /></button>
                            <div className='h-full border-l border-gray-500'></div>
                            <button className='text-2xl'><AiFillDislike /></button>
                        </div>
                    </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        {rVideos.map((rvideo) => (
          <VideoContainer
            title={rvideo.title}
            id={rvideo.id}
            thumbnail={rvideo.thumbnail[0].url}
            channelTitle={rvideo.channelTitle}
            viewCount={rvideo.viewCount}
            videoId={rvideo.videoId}
            channelThumbnail={rvideo.authorThumbnail[0].url}
            publishedTimeText={rvideo.publishedTimeText}
          />
        ))}
      </div>
    </div>
  );
};

export default Video;
