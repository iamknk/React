import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui medium bordered image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h3 className="ui header">{video.snippet.title}</h3>
      </div>
    </div>
  );
};

export default VideoItem;
