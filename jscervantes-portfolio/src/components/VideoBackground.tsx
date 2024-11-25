import React from 'react';
import '../styles/custom.css'; // Import your existing styles

type VideoBackgroundProps = {
  posterSrc: string; // Path to the poster image
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({ posterSrc }) => {
  return (
    <div className="video-bg">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
      >
        <source src="/background/100under100.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;

