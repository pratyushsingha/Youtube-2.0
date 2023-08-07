import { useState, useEffect, createContext } from 'react';

import axios from 'axios'

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    

    // videos search 
    async function searchVideo() {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: search,
                part: 'snippet,id',
                regionCode: 'IN',
                maxResults: '50',
                order: 'date'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.items);
            setData(response.data.items);
            setLoading(false)
            
        } catch (error) {
            alert(error);
            setLoading(false)
        }
    }

    function changeHandler(e) {
        setSearch(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        searchVideo();
        
    }
    // time
    function getDaysAgo(publishedDate) {
        const publishedTime = new Date(publishedDate).getTime();
        const currentTime = new Date().getTime();
        const timeDiffInMilliseconds = currentTime - publishedTime;
        const daysAgo = Math.floor(timeDiffInMilliseconds / (1000 * 60 * 60 * 24));
        return daysAgo;
    }


    async function suggestedVideo() {
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                relatedToVideoId: 'O5cmLDVTgAs',
                part: 'id,snippet',
                type: 'video',
                maxResults: '50'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.items);
            setData(response.data.items);
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        suggestedVideo();
    }, []);

    const value = {
        search,
        setSearch,
        data,
        setData,
        loading,
        setLoading,
        changeHandler,
        submitHandler,
        getDaysAgo,
        suggestedVideo

    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}