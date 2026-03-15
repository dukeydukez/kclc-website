"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-pastor.jpg"
          alt="Pastor Brown preaching at Kingsway Community Life Centre"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          Kingsway Community Life Centre
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Loving You Back
          <br />
          to Life &amp; Destiny
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg text-white/80 sm:text-xl">
          Join us every Sunday at 10:00 AM
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/visit"
            className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg sm:w-auto"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/watch"
            className="w-full rounded-full border-2 border-white/40 px-8 py-3.5 text-center text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Watch Online
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-[2] -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
