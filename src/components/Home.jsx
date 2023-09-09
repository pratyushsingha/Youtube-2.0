import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import VideoItems from './VideoItems';
import Spinner from './Spinner';
import Sidebar from './Sidebar';

const Home = () => {

    const { data, loading } = useContext(AppContext);

    return (
        <div className='flex flex-col md:flex-row md:justify-between md:mx-10'>
            <div className='overflow-x-auto md:overflow-y-auto md:h-screen md:scrollbar md:scrollbar-thin scrollbar-thumb-gray-300'>
                <Sidebar />
            {/* <div className='border border-gray-500 h-80'></div> */}
            </div>
            {loading && <Spinner />}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {!loading && (data.map(item => (
                    <div key={item.videoId} className='mx-3 my-3'>
                        <VideoItems
                            src={item.thumbnail[0].url}
                            title={item.title}
                            channel={item.channelTitle}
                            date={item.publishedText}
                            id={item.videoId}
                            desc={item.description}
                        />
                    </div>
                )))}
            </div>
        </div>
    );
}

export default Home;
