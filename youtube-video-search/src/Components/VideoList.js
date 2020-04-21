import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videoDetails, onVideoSelect }) => {
  const renderedItems = videoDetails.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui middle aligned divided list">{renderedItems}</div>;
};

export default VideoList;
