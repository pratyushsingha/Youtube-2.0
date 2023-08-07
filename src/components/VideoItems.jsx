import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

const VideoItems = ({ src, title, channel, date }) => {
    const { getDaysAgo } = useContext(AppContext);

    return (
        <Link to="/video">
            <div className="flex justify-center">
                <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
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
                            {getDaysAgo(date) === 0 ? "Today" : getDaysAgo(date) + " days ago"}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoItems;
