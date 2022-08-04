import React, { useState, useEffect, useRef } from 'react';

type VideoPlayerProps = {
  isAutoPlay: boolean;
  isMuted: boolean;
  id: number;
  src: string;
  posterImage: string;
  //name: string
}

const VideoPlayer = ({ isAutoPlay, isMuted, id, src, posterImage }: VideoPlayerProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const TIMEOUT_MS = 1000;

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    const currentRef = videoRef.current;
    currentRef.addEventListener('loadeddata', () => setIsLoading(false));
    const timer = setTimeout(() => {
      if (!isLoading) {
        videoRef.current?.play();
      }
    }, TIMEOUT_MS);
    return () => {
      clearTimeout(timer);
      currentRef.removeEventListener('loadeddata', () => setIsLoading(false));
    };
  }, [id, isLoading]);

  return (
    <video src={src} className="player__video" poster={posterImage} muted={isMuted} autoPlay={isAutoPlay} ref={videoRef}></video>
  );
};

export default VideoPlayer;
