import { useState, useEffect, createContext } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");
  const [vDetails, setVDetails] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [rVideos, setRVideos] = useState([]);
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [currentVideoChannel, setCurrentVideoChannel] = useState("");
  const [currentVideoViews, setCurrentVideoViews] = useState("");
  const [copied, setCopied] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [vComments, setVComments] = useState([]);

  // videos search
  const searchVideo = async () => {
    if (search.trim() === "") {
      toast.error("Search field can't be empty😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setLoading(true);
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/search",
      params: {
        query: search,
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to search the video😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      setData([]);
    }
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    searchVideo();
  };

  const suggestedVideo = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/trending",
      params: {
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to Fetch The Data😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    suggestedVideo();
  }, []);

  const tagsVideos = async (tags) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/search",
      params: {
        query: tags,
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      // toast.error(error);
      setLoading(false);
      setData([]);
    }
  };

  const subscription = () => {
    if (subscribed === false) {
      setSubscribed(true);
      toast.error("Subscription Removed😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setSubscribed(false);

      toast.success("Subscription Added😁", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const videoLike = () => {
    if (liked === false) {
      setLiked(true);
      toast.success("Added to Liked videos😁", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setLiked(false);
      console.log("like set false");
    }
  };

  const videoDetails = async (
    videoId,
    videoTitle,
    videoChannel,
    videoViews
  ) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/video",
      params: { id: videoId },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setVDetails(response.data);
      setCurrentVideoTitle(videoTitle);
      setCurrentVideoChannel(videoChannel);
      setCurrentVideoViews(videoViews);
    } catch (error) {
      console.error(error);
      setVDetails([]);
    }
  };

  const relatedVideos = async (videoId) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/related",
      params: {
        id: videoId,
        geo: "US",
        lang: "en",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
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

  const handleSubscribe = () => {
    // console.log("clicked");
    toast.error("Sign in to subscribe the channel", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleLiked = () => {
    // console.log("clicked");
    toast.error("Sign in to Like the video", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const share = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);

    toast.success("URL copied to clipboard😍", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const comments = async (videoId) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/comments",
      params: { id: videoId },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setVComments(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Unable to fetch comments 😢", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const value = {
    search,
    setSearch,
    data,
    setData,
    loading,
    setLoading,
    selected,
    setSelected,
    vDetails,
    setVDetails,
    subscribed,
    setSubscribed,
    liked,
    setLiked,
    disLiked,
    setDisLiked,
    rVideos,
    setRVideos,
    changeHandler,
    submitHandler,
    suggestedVideo,
    tagsVideos,
    subscription,
    videoLike,
    relatedVideos,
    videoDetails,
    currentVideoTitle,
    setCurrentVideoTitle,
    currentVideoChannel,
    currentVideoViews,
    handleSubscribe,
    share,
    modalIsOpen,
    setModalIsOpen,
    copied,
    comments,
    vComments,
    setVComments,
    handleLiked,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
