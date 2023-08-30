import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import VideoItems from './VideoItems';
import Spinner from './Spinner';
import Sidebar from './Sidebar';

const Home = () => {
    const { data, loading } = useContext(AppContext);
    return (
        <div className='flex md:justify-between md:mx-10'>
            <div className='overflow-y-auto h-screen scrollbar scrollbar-thin scrollbar-thumb-gray-300'>
                <Sidebar />
            </div>
            {loading && <Spinner />}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {!loading && (data.map((item, index) => (
                    <div key={index} className='mx-3 my-3'>
                        <VideoItems
                            src={item.thumbnail[0].url}
                            title={item.title}
                            channel={item.channelTitle}
                            date={item.publishedText}
                            id={item.videoId}
                        />
                    </div>
                )))}
            </div>

        </div>
    );
}

export default Home;
