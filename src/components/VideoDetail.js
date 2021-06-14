import React from 'react';

const VideoDetail = ({video}) => 
{
    if(!video)
    {
        return <div class="ui active centered inline loader"></div>;
    }

    const vidsrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div>
          <div className="ui embed">
            <iframe title="Video Player" src={vidsrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          </div>
        <div className="ui segment">
          <h4 className="header"> {video.snippet.title} </h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
}

export default VideoDetail;