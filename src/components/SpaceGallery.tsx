"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

interface SpaceGalleryProps {
  photos: readonly GalleryPhoto[];
}

export default function SpaceGallery({ photos }: SpaceGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-navy/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`View larger: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill className="object-contain" sizes="100vw" />
          </div>
          <p className="absolute bottom-6 left-0 right-0 px-16 text-center text-sm text-white/70">
            {current.alt} &middot; {(openIndex ?? 0) + 1} / {photos.length}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full p-2 text-3xl leading-none text-white/80 hover:text-gold"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-4xl text-white/80 hover:text-gold md:left-6"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-3 text-4xl text-white/80 hover:text-gold md:right-6"
          >
            &rsaquo;
          </button>
        </div>
      )}
    </>
  );
}
