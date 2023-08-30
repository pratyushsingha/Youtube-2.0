import React from 'react';
import { Link } from 'react-router-dom';

// import { AppContext } from '../context/AppContext';

const VideoItems = ({ src, title, channel, date }) => {

    return (
        <Link to="/video">
            <div className="flex justify-center">
                <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                    <img
                        className="w-full rounded-3xl"
                        src={src}
                        alt={title}
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title.slice(0, 57)}...</div>
                        <p className="text-gray-700 text-base">
                            {channel}
                        </p>
                        <p className='text-gray-700 text-base'>
                            {date}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoItems;
