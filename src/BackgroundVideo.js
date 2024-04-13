import React from 'react';
import { HTML5Video } from 'react-html5video';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <HTML5Video autoPlay loop muted>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </HTML5Video>
    </div>
  );
}

export default BackgroundVideo;
