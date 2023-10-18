import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useEffect, useState } from "react";
import isMobile from 'is-mobile';
import { Stack } from "react-bootstrap";
import Image from 'next/image';

export default function VideoScroll1() {
  const videoRef = useRef() as any;
  const scrollSectionRef = useRef() as any;
  const playbackConst = 300;
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

  const isMobileDevice = isMobile();

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

      video.addEventListener("canplaythrough", () => {
        setIsVideoLoaded(true);
      });

      return () => {
        video.removeEventListener("loadedmetadata", () => { });
        video.removeEventListener("canplaythrough", () => { });
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
        <>
          <video
            ref={videoRef}
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              width: isVideoLoaded ? "100%" : 0,
              height: isVideoLoaded ? "100vh" : 0,
              objectFit: "cover",
              opacity: isVideoLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
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
              src={isMobileDevice ? "video/videobackground_mobile.webm" : "video/videobackground_web.webm"}
            ></source>
            <div ref={scrollSectionRef} id="scrollSection"></div>
            {/* {isSupportedBrowser() && isVideoLoaded && (
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
            )} */}
          </video>
        </>
      )}
    </>
  );
}