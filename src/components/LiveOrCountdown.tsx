"use client";

import { useState, useEffect, useCallback } from "react";

function isLiveNow(): boolean {
  const now = new Date();
  const est = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const day = est.getDay();
  const hours = est.getHours();
  const minutes = est.getMinutes();
  const totalMinutes = hours * 60 + minutes;
  return day === 0 && totalMinutes >= 585 && totalMinutes <= 750;
}

function getNextSunday10AM(): Date {
  const now = new Date();
  const est = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const day = est.getDay();
  let daysUntilSunday = (7 - day) % 7;
  if (day === 0 && est.getHours() >= 13) daysUntilSunday = 7;
  if (day === 0 && est.getHours() < 10) daysUntilSunday = 0;
  const target = new Date(est);
  target.setDate(est.getDate() + daysUntilSunday);
  target.setHours(10, 0, 0, 0);
  return target;
}

function getTimeLeft() {
  const now = new Date();
  const est = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const target = getNextSunday10AM();
  const diff = Math.max(0, target.getTime() - est.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function LiveOrCountdown() {
  const [live, setLive] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  const tick = useCallback(() => {
    setLive(isLiveNow());
    setTime(getTimeLeft());
  }, []);

  useEffect(() => {
    tick();
    setMounted(true);
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  if (!mounted) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy-light shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        </div>
      </div>
    );
  }

  if (live) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=UCdbja-jeoPwwSg2MGLTTVGA&autoplay=1"
          title="KCLC Live Service"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy-light shadow-2xl">
      {/* Background thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://i.ytimg.com/vi/fMBPt3GFaJY/maxresdefault.jpg"
        alt="Latest sermon"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Countdown overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          Next Service In
        </p>

        <div className="mt-4 flex items-center gap-3 sm:gap-5">
          {[
            { value: time.days, label: "Days" },
            { value: time.hours, label: "Hours" },
            { value: time.minutes, label: "Min" },
            { value: time.seconds, label: "Sec" },
          ].map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                {pad(unit.value)}
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-white/60">
          Sundays at 10:00 AM &middot; 73 Alness St, North York
        </p>

        <a
          href="https://www.youtube.com/@KingswayCommunityLifeCentre"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold/90 px-6 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Watch Past Sermons
        </a>
      </div>
    </div>
  );
}
