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
  const [currentVideoChannel, setCurrentVideoChannel]=useState("");
  const [currentVideoViews, setCurrentVideoViews]=useState("");

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
        theme: "dark",
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

  function changeHandler(e) {
    setSearch(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    searchVideo();
  }

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
      setDisLiked(false);
    } else {
      setLiked(false);
      setDisLiked(true);
    }
  };

  const videoDetails = async (videoId, videoTitle, videoChannel, videoViews) => {
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
    currentVideoViews
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
