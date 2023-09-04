import { useState, useEffect, createContext } from 'react';

import axios from 'axios'
import { toast } from 'react-hot-toast';
const apiKey = process.env.REACT_APP_API_KEY;

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


    // videos search 
    const searchVideo = async () => {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
            params: {
                query: search,
                geo: 'US',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': '9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);

        } catch (error) {
            toast.error(error);
            setLoading(false);
            setData([]);
        }
    }

    function changeHandler(e) {
        setSearch(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        searchVideo();

    }

    const suggestedVideo = async () => {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
            params: {
                geo: 'US',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': '9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            // console.log(response.data.data.map(video => (video.videoId)))
            setLoading(false);
        } catch (error) {
            toast.error("unable to fetch the data");
            setLoading(false);
            setData([]);
        }
    }

    useEffect(() => {
        suggestedVideo();
    }, []);

    const tagsVideos = async (tags) => {

        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
            params: {
                query: tags,
                geo: 'US',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': '9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);

        } catch (error) {
            toast.error(error);
            setLoading(false);
            setData([]);
        }
    }

    const subscription = () => {
        if (subscribed === false) {
            setSubscribed(true);
        } else {
            setSubscribed(false);
        }
    }

    const videoLike = () => {
        if (liked === false) {
            setLiked(true);
            setDisLiked(false);
        }
        else {
            setLiked(false);
            setDisLiked(true);
        }
    }

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

    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}