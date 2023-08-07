import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import VideoItems from './VideoItems';
import Spinner from './Spinner';

const Home = () => {
    const { data, loading } = useContext(AppContext);
    return (
        <>
            {loading && <Spinner />}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {!loading && (data.map((item, index) => (
                    <div key={index} className='mx-3 my-3'>
                        <VideoItems
                            src={item.snippet.thumbnails.high.url}
                            title={item.snippet.title}
                            description={item.snippet.description}
                            channel={item.snippet.channelTitle}
                            date={item.snippet.publishedAt}
                            id={item.id.videoId}
                        />
                    </div>
                )))}
            </div>
        </>
    );
}

export default Home;
