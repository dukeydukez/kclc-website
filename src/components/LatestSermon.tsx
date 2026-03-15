"use client";

import { useState, useEffect } from "react";

export default function LatestSermon() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [title, setTitle] = useState("Latest from Kingsway Community Life Centre");

  useEffect(() => {
    fetch("/api/youtube?channelId=UCdbja-jeoPwwSg2MGLTTVGA")
      .then((res) => res.text())
      .then((xml) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");
        const firstEntry = doc.querySelector("entry");
        if (firstEntry) {
          const id = firstEntry.querySelector("videoId")?.textContent;
          const videoTitle = firstEntry.querySelector("title")?.textContent;
          if (id) setVideoId(id);
          if (videoTitle) setTitle(videoTitle);
        }
      })
      .catch(() => {
        // Fallback to a known recent video
        setVideoId("fMBPt3GFaJY");
      });
  }, []);

  if (!videoId) {
    return (
      <div className="mt-10 overflow-hidden rounded-2xl bg-navy shadow-xl">
        <div className="relative aspect-video w-full animate-pulse bg-navy-light" />
        <div className="p-6 sm:p-8 space-y-3">
          <div className="h-4 w-24 rounded bg-gold/20" />
          <div className="h-6 w-3/4 rounded bg-white/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 overflow-hidden rounded-2xl bg-navy shadow-xl">
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          Most Recent
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/60">
          Auto-updates with the latest upload from our YouTube channel
        </p>
      </div>
    </div>
  );
}
