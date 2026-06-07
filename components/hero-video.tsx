"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Muted inline autoplay can still be blocked by a user/browser setting.
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video-bg"
      poster="/media/number10-home-reel-poster.webp"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disableRemotePlayback
      aria-label="Autoplaying barbershop grooming reel"
    >
      <source src="/media/number10-home-reel-mobile.mp4" type="video/mp4" media="(max-width: 640px)" />
      <source src="/media/number10-home-reel-tablet.mp4" type="video/mp4" media="(max-width: 1024px)" />
      <source src="/media/number10-home-reel.mp4" type="video/mp4" />
    </video>
  );
}
