"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function VideoScroll1() {
  // const videoRef = useRef() as any;
  // const scrollSectionRef = useRef() as any;
  // const [hasLoaded, setLoaded] = useState(false);
  // const playbackConst = 600; 
  // useEffect(() => {
  //   setLoaded(true);
  //   // Adjust the constant as needed
  //   // Use requestAnimationFrame for smooth playback
  //   function scrollPlay() {
  //     if (videoRef.current) {
  //       const frameNumber = window.scrollY / playbackConst;
  //       videoRef.current.currentTime = frameNumber;
  //     }
  //     window.requestAnimationFrame(scrollPlay);
  //   }

  //   window.requestAnimationFrame(scrollPlay);
  // }, []);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   video.addEventListener("loadedmetadata", () => {
  //     const { duration } = video;
  //     const scrollSection = scrollSectionRef.current;
  //     console.log("scrollSection", videoRef.current.duration);
  //     if (videoRef?.current) {
  //       if(scrollSectionRef?.current){
  //       scrollSection.style.height =
  //         Math.floor(duration) * playbackConst + "px";
  //       }
  //     }
  //     console.log(duration); // Output: video duration in seconds
  //   });

  //   return () => {
  //     video.removeEventListener("loadedmetadata", () => {});
  //   };
  // }, []);

  // return (
  //     <>
  //       <video ref={videoRef} style={{
  //           position: 'sticky',
  //           top: 0,
  //           left: 0,
  //           width: '100vw',
  //           height: '100vh',
  //           objectFit: 'cover',
  //       }}
  //        preload="preload">
  //         <source
  //           type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  //           src="video/videobackground.mp4"
  //         ></source>
  //         <div ref={scrollSectionRef} id="scrollSection"></div>
  //       </video>
        
  //     </>
  // );

  const containerRef = useRef(null);
  const videoRef = useRef<any>(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom+=700% bottom",
          scrub: true,
          markers: false,
          ontouchstart:  () => videoRef.current.play(),
          ontouchmove:  () => videoRef.current.play(),
          ontouchend(ev) {
            videoRef.current.pause();
            ev.preventDefault();
          },
          
        },
      });

      // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
      videoRef.current.onloadedmetadata = function () {
        tl.to(videoRef.current, { currentTime: videoRef.current.duration });
      };

      
      
    }, containerRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div ref={containerRef}
    style={{
      position: 'sticky',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
  }}
    >
      <video
        ref={videoRef}
        playsInline={true}
        webkit-playsinline="true"
        preload="auto"
        muted
        style={{
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    objectFit: 'cover',
                }}
      >
        {/* <source src="/agra-ffmpeg.mp4" type="video/mp4" /> */}
        <source
          src="video/videobackground.mp4"
          type="video/mp4"
        />
      </video>
      </div>
  );
}
