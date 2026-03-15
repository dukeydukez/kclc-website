"use client";

import { useState, useEffect } from "react";

interface Video {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
}

interface SermonGridProps {
  channelId: string;
  perPage: number;
}

function parseRSS(xml: string): Video[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const entries = doc.querySelectorAll("entry");
  const videos: Video[] = [];

  entries.forEach((entry) => {
    const videoId = entry.querySelector("videoId")?.textContent ?? "";
    const title = entry.querySelector("title")?.textContent ?? "";
    const published = entry.querySelector("published")?.textContent ?? "";

    if (videoId) {
      videos.push({
        id: videoId,
        title,
        published,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      });
    }
  });

  return videos;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function SermonGrid({ channelId, perPage }: SermonGridProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/youtube?channelId=${channelId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Feed fetch failed");
        return res.text();
      })
      .then((xml) => {
        const parsed = parseRSS(xml);
        setVideos(parsed);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [channelId]);

  const totalPages = Math.ceil(videos.length / perPage);
  const pageVideos = videos.slice(page * perPage, (page + 1) * perPage);

  if (loading) {
    return (
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: perPage }).map((_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="aspect-video bg-silver/30" />
            <div className="p-5 space-y-3">
              <div className="h-5 w-3/4 rounded bg-silver/30" />
              <div className="h-3 w-1/2 rounded bg-silver/20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error || videos.length === 0) {
    return (
      <div className="mt-12 text-center">
        <p className="text-subtext">
          Visit our{" "}
          <a
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline hover:text-gold-dark"
          >
            YouTube channel
          </a>{" "}
          to watch all sermons.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pageVideos.map((video) => (
          <a
            key={video.id}
            href={`https://youtu.be/${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-6 w-6 text-navy"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold leading-snug text-navy line-clamp-2">
                {video.title}
              </h3>
              <p className="mt-2 text-xs text-subtext/60">
                {formatDate(video.published)}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="rounded-full border border-silver/50 px-5 py-2 text-sm font-semibold text-navy transition-all hover:border-gold hover:text-gold-dark disabled:opacity-30 disabled:hover:border-silver/50 disabled:hover:text-navy"
          >
            Previous
          </button>
          <span className="text-sm text-subtext">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="rounded-full border border-silver/50 px-5 py-2 text-sm font-semibold text-navy transition-all hover:border-gold hover:text-gold-dark disabled:opacity-30 disabled:hover:border-silver/50 disabled:hover:text-navy"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
