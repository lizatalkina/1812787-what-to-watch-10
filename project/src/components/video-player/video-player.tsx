import React, { useState, useEffect, useRef } from 'react';

type VideoPlayerProps = {
  autoPlay: boolean;
  isMuted: boolean;
  id: number;
  src: string;
  posterImage: string;
  name: string
}

const VideoPlayer = ({ autoPlay, isMuted, id, src, posterImage, name }: VideoPlayerProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const TIMEOUT_MS = 1000;

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));
    const timer = setTimeout(() => {
      if (!isLoading) {
        videoRef.current?.play();
      }
    }, TIMEOUT_MS);
    return () => clearTimeout(timer);
  });

  return (
    <video src={src} className="player__video" poster={posterImage} muted={isMuted} autoPlay={false} ref={videoRef}></video>
  );
};

export default VideoPlayer;
