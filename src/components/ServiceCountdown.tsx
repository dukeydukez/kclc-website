"use client";

import { useState, useEffect, useCallback } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getNextSunday10AM(): Date {
  const now = new Date();
  // Work in EST/EDT
  const est = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const day = est.getDay(); // 0 = Sunday
  let daysUntilSunday = (7 - day) % 7;

  // If it's Sunday but past 12:00 PM, target next Sunday
  if (day === 0 && est.getHours() >= 13) {
    daysUntilSunday = 7;
  }
  // If it's Sunday before service time, target today
  if (day === 0 && est.getHours() < 10) {
    daysUntilSunday = 0;
  }

  const target = new Date(est);
  target.setDate(est.getDate() + daysUntilSunday);
  target.setHours(10, 0, 0, 0);

  return target;
}

function isLiveNow(): boolean {
  const now = new Date();
  const est = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" })
  );
  const day = est.getDay();
  const hours = est.getHours();
  const minutes = est.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  // Sunday between 9:45 AM (585 min) and 12:00 PM (750 min)
  return day === 0 && totalMinutes >= 585 && totalMinutes <= 750;
}

function getTimeLeft(): TimeLeft {
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

export default function ServiceCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [live, setLive] = useState(false);
  const [mounted, setMounted] = useState(false);

  const tick = useCallback(() => {
    setLive(isLiveNow());
    setTimeLeft(getTimeLeft());
  }, []);

  useEffect(() => {
    tick();
    setMounted(true);
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  if (!mounted) return null;

  if (live) {
    return (
      <div className="flex items-center justify-center gap-3 bg-navy-light px-4 py-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
        </span>
        <span className="text-sm font-bold uppercase tracking-widest text-white">
          We&apos;re Live
        </span>
        <button
          onClick={() => {
            const el = document.getElementById("live");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="ml-2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-navy transition-colors hover:bg-gold-dark"
        >
          Watch Now
        </button>
      </div>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 bg-navy-light/80 px-4 py-1.5 text-xs tracking-wide text-white/70">
      <span className="font-semibold uppercase">Next Service in</span>
      <span className="font-mono font-bold text-gold">
        {timeLeft.days}d {pad(timeLeft.hours)}h {pad(timeLeft.minutes)}m{" "}
        {pad(timeLeft.seconds)}s
      </span>
    </div>
  );
}
