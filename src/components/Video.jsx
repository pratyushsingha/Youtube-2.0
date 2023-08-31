import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const Video = ({ title }) => {
    const { vDetails, setVDetails } = useContext(AppContext);
    const { vId } = useParams();

    const videoDetails = async (vId) => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
            params: { id: vId },
            headers: {
                'X-RapidAPI-Key': '9ec25d2accmsha2f4b9a8bf1feccp12fd72jsn7fa8b52e09eb',
                'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setVDetails(response.data.title);
        } catch (error) {
            console.error(error);
            setVDetails([]);
        }
    };

    useEffect(() => {
        videoDetails(vId);
    }, [vId]); 
    return (
        <div className='mx-3 my-4'>
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
            {/* {Array.isArray(vDetails) ? (
                vDetails.map(detail => (
                    <div key={detail.id}>{detail.title}</div>
                ))
            ) : (
                <div>No video details available.</div>
            )} */}
            <div>
                <p className='text-xl text-bold'>{vDetails}</p>
            </div>
        </div>
    );
};

export default Video;
