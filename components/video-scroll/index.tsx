import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect } from "react";

export default function VideoScroll1() {
  const videoRef = useRef() as any;
  const scrollSectionRef = useRef() as any;
  const playbackConst = 300;

  const isSupportedBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return (
      (userAgent.indexOf("chrome") > -1 ||
        userAgent.indexOf("edge") > -1 ||
        userAgent.indexOf("safari") > -1 ||
        userAgent.indexOf("firefox") > -1) &&
      !RegExp(/(iPod|iPhone|iPad)/).exec(navigator.userAgent) &&
      userAgent.indexOf("miuibrowser") === -1
    );
  };

  useEffect(() => {
    if (isSupportedBrowser()) {
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
    }
  });

  const handleTouchMove = () => {
    if (isSupportedBrowser()) {
      const video = videoRef.current;
      if (video) {
        video.play();
      }
    }
  };

  useEffect(() => {
    if (isSupportedBrowser()) {
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
    }
  });

  return (
    <>
      {isSupportedBrowser() && (
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
          muted
          disableRemotePlayback
          playsInline
          controls={false}
          disablePictureInPicture={true}
          draggable={false}
        >
          <source
            src="video/video_background.webm"
          ></source>
          <div ref={scrollSectionRef} id="scrollSection"></div>
        </video>
      )}
      {isSupportedBrowser() && (
        <div className="keep-scroll" >
          <p className="text-center text-black scroll-text mb-1">
            Keep Scroll
          </p>
          <div className="text-center icon-down">
            <FontAwesomeIcon
              icon={faChevronDown}
              color={'#000000'}
              size={'lg'}
            />
          </div>
        </div>
      )}
    </>
  );
}