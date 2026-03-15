"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  tenure: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Upon entering the building your first encounter is filled with a sense of peace, calm. Secondly you will be filled with love, warmth you would never be able to explain.",
    name: "Coleen C.",
    tenure: "Google Review",
  },
  {
    quote:
      "From the moment I walked through the doors of Kingsway in 2008, I felt the presence of God and the warmth of genuine community. This church is truly a blessing.",
    name: "Ronnie Robinson",
    tenure: "Google Review",
  },
  {
    quote:
      "This church is led by Pastor Richard Brown. He is truly walking with God. They treat you like family.",
    name: "Paranoia 929",
    tenure: "Google Review",
  },
  {
    quote:
      "I became a member after searching for a home church for over 5 years. Come join us in Praise, Worship and the Word.",
    name: "Carla Parker",
    tenure: "Google Review",
  },
  {
    quote:
      "Awesome Atmosphere, Lovely Friendly People, Praise And Worship Hits. Pastor Brown And First Lady P. Are Amazing.",
    name: "Grumpy",
    tenure: "Google Review",
  },
  {
    quote:
      "I love Pastor Richard. Looking for a good place to hear the word, this is it.",
    name: "Leisa Rouse",
    tenure: "Google Review",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  const t = testimonials[current];

  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* Decorative quotation mark */}
        <span
          className="font-display text-7xl leading-none text-gold/40 select-none sm:text-8xl"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <div className="relative min-h-[200px] sm:min-h-[180px]">
          <div
            key={current}
            className="transition-opacity duration-500"
          >
            <blockquote className="font-display text-xl leading-relaxed text-navy italic sm:text-2xl lg:text-3xl">
              {t.quote}
            </blockquote>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-subtext">
              {t.name}{" "}
              <span className="font-normal text-subtext/60">
                &mdash; {t.tenure}
              </span>
            </p>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gold"
                  : "w-2.5 bg-silver/50 hover:bg-silver"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
