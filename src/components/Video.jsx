import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";

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
    currentVideoChannel,
    handleSubscribe,
    share,
    openModal,
    closeModal,
    modalIsOpen,
  } = useContext(AppContext);

  const { isAuthenticated } = useAuth0();

  const { vId } = useParams();

  useEffect(() => {
    videoDetails(
      vId,
      currentVideoTitle,
      currentVideoChannel,
      currentVideoViews
    );
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
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-between md:justify-start md:space-x-5 md:w-full my-3">
              <div className="flex flex-col">
                <p className="font-bold text-xl">{vDetails.channelTitle}</p>
                <p className="text-gray-400">{vDetails.viewCount} Viewers</p>
              </div>
              {isAuthenticated ? (
                <button
                  onClick={subscription}
                  className="font-bold text-sm md:text-base bg-gray-400 px-4 md:px-8 py-1 rounded-3xl"
                >
                  <ToastContainer />
                  {subscribed ? (
                    "Subscribe"
                  ) : (
                    <p className="text-red-800">Unsubscribe</p>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleSubscribe}
                  className="font-bold text-sm md:text-base bg-gray-400 px-4 md:px-8 py-1 rounded-3xl"
                >
                  Subscribe
                  <ToastContainer />
                </button>
              )}
            </div>
            <div className="flex flex-start md:justify-end self-center space-x-3">
              <div className=" flex text-sm md:text-base bg-gray-400 hover:bg-gray-500 px-8 py-3 space-x-3 rounded-3xl">
                <button className="text-xl">
                  <AiOutlineLike />
                </button>
                <div class="border border-gray-500 h-5"></div>
                <button className="text-xl">
                  <AiOutlineDislike />
                </button>
              </div>
              <div
                onClick={share}
                className="flex text-sm md:text-base bg-gray-400 hover:bg-gray-500 px-8 py-3 space-x-3 rounded-3xl"
              >
                <button className="text-xl flex space-x-2">
                  <PiShareFatLight />
                  <p className="self-center text-sm font-semibold">Share</p>
                </button>
              </div>
              <div className="flex text-sm md:text-base bg-gray-400 hover:bg-gray-500 px-8 py-3 space-x-3 rounded-3xl">
                <button onClick={openModal} className="text-xl flex space-x-2">
                  <LiaDownloadSolid />
                  <p className="self-center text-sm font-semibold">Download</p>
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Website Modal"
                >
                  <button className="my-3 text-xl" onClick={closeModal}>
                    <RxCross1/>
                  </button>
                  <iframe
                    title="External Website"
                    src="https://ssyoutube.com/en138JV/youtube-video-downloader"
                    width="100%"
                    height="100%"
                  ></iframe>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {rVideos.map((rvideo, index) => (
          <div
            key={index}
            onClick={() =>
              videoDetails(
                rvideo.videoId,
                rvideo.title,
                rvideo.channelTitle,
                rvideo.viewCount
              )
            }
            className="flex flex-col md:flex-col space-y-2 "
          >
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
