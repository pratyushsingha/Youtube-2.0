import { useState, useEffect, createContext } from 'react';

import axios from 'axios'
import { toast } from 'react-hot-toast';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState("");


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
            console.log(response.data.data);
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
            console.log(response.data.data);
            setData(response.data.data);
            console.log(response.data.data.map(video => (video.videoId)))
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false)
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
            console.log(response.data.data);
            setData(response.data.data);
            setLoading(false);

        } catch (error) {
            toast.error(error);
            setLoading(false);
            setData([]);
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
        changeHandler,
        submitHandler,
        suggestedVideo,
        tagsVideos

    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}