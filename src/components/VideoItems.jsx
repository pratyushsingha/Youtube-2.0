import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Video from './Video';

const VideoItems = ({ src, title, channel, date, id }) => {

    return (
        <Link to={`/video/${id}`}>
            <div className="flex justify-center">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <img
                        className="w-full rounded-lg"
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
