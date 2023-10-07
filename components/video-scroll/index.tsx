import React, { useEffect, useRef, useState } from "react";

export default function VideoScroll1() {
  const videoRef = useRef() as any;
  const scrollSectionRef = useRef() as any;
  const [hasLoaded, setLoaded] = useState(false);
  const playbackConst = 600; 
  useEffect(() => {
    setLoaded(true);
    // Adjust the constant as needed
    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      if (videoRef.current) {
        const frameNumber = window.scrollY / playbackConst;
        videoRef.current.currentTime = frameNumber;
      }
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      const { duration } = video;
      const scrollSection = scrollSectionRef.current;
      console.log("scrollSection", videoRef.current.duration);
      if (videoRef?.current) {
        if(scrollSectionRef?.current){
        scrollSection.style.height =
          Math.floor(duration) * playbackConst + "px";
        }
      }
      console.log(duration); // Output: video duration in seconds
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  return (
      <>
        
        <video ref={videoRef} style={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
        }}
         preload="preload">
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="video/videobackground.mp4"
          ></source>
          <div ref={scrollSectionRef} id="scrollSection"></div>
        </video>
        
      </>
  );
}
