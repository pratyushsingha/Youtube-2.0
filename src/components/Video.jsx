import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const Video = ({ title}) => {
    const { vId } = useParams();
    return (
        <>
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
                <h4>{title}</h4>
            </div >
        </>
    )
}

export default Video
