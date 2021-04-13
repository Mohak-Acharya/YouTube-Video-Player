import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ vids,selectedvid }) => {
  const list = vids.map((vid) => {
    return <VideoItem key={vid.id.videoId} selectedvid={selectedvid} video={vid} />;
  });
  // <VideoItem />
  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
