import React from 'react';

const VideoContainer = ({ id, title, thumbnail,channelTitle,viewCount,channelThumbnail,publishedTimeText }) => {
  return (
    <div key={id} className='flex space-x-3'>
      <img src={thumbnail} alt="" />
      <p>{title}</p>
      <div>
      <p>{channelTitle}</p>
      <p>{viewCount}</p>
      <img src={channelThumbnail} alt="" />
      <p>{publishedTimeText}</p>
      </div>
    </div>
  )
}

export default VideoContainer;
