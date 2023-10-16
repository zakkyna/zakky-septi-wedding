import React, { useRef, useEffect } from "react";

export default function VideoScroll1() {
  const videoRef = useRef() as any;
  const scrollSectionRef = useRef() as any;
  const playbackConst = 300;

  useEffect(() => {
    const video = videoRef.current;

    video.addEventListener("loadedmetadata", () => {
      const { duration } = video;
      const scrollSection = scrollSectionRef.current;
      if (videoRef?.current) {
        if (scrollSectionRef?.current) {
          scrollSection.style.height =
            Math.floor(duration) * playbackConst + "px";
        }
      }
      // if touch device
      function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      }
      if (isTouchDevice()) {
        videoRef.current.play();
        videoRef.current.pause();
        window.addEventListener("touchmove", handleTouchMove);
      }
    });

    return () => {
      video.removeEventListener("loadedmetadata", () => { });
      window.removeEventListener("touchmove", handleTouchMove);
    };
  });

  const handleTouchMove = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const videoTop = video.getBoundingClientRect().top;
      const videoBottom = video.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      if (videoTop < windowHeight && videoBottom > 0) {
        video.play();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          video.pause();
        }, 100);
      } else {
        video.pause();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <video
        ref={videoRef}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
        preload="preload"
        loop
      >
        <source
          src="video/videobackground1.webm"
        ></source>
        <div ref={scrollSectionRef} id="scrollSection"></div>
      </video>
    </>
  );
}