"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 20, suffix: "+", label: "Years of Ministry" },
  { target: 1000, suffix: "+", label: "Lives Touched" },
  { target: 7, suffix: "", label: "Days a Week" },
  { target: 1, suffix: "", label: "Community" },
];

function AnimatedNumber({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span className="font-display text-4xl font-bold text-gold sm:text-5xl lg:text-6xl">
      {started ? value : 0}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-navy py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <AnimatedNumber
              target={stat.target}
              suffix={stat.suffix}
              started={isInView}
            />
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
