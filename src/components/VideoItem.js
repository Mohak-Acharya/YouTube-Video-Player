import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video,selectedvid }) => {
  return (
    <div onClick={() => selectedvid(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.high.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
