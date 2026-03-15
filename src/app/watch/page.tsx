import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SermonGrid from "@/components/SermonGrid";
import LatestSermon from "@/components/LatestSermon";

export const metadata: Metadata = {
  title: "Watch | Kingsway Community Life Centre",
  description:
    "Watch the latest sermons from KCLC. Teaching from Pastor Richard J. Brown and guest speakers.",
};

export default function WatchPage() {
  return (
    <>
      <PageHero
        title="Watch"
        subtitle="Missed a Sunday? Catch up on the latest messages."
        image="/watch-hero.jpg"
        imageAlt="KCLC worship service congregation"
        imagePosition="center 30%"
      />

      {/* Latest Sermon — auto-updates from channel */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Latest Message
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <LatestSermon />
          </FadeIn>
        </div>
      </section>

      {/* Recent Sermons — auto-fetched from YouTube RSS, 6 per page */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            Recent Messages
          </h2>
          <div className="mt-2 h-1 w-16 bg-gold" />
          <SermonGrid channelId="UCdbja-jeoPwwSg2MGLTTVGA" perPage={6} />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Never Miss a Message
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Subscribe on YouTube so you&rsquo;re always connected, even when
              you can&rsquo;t be there in person.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.youtube.com/@KingswayCommunityLifeCentre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </a>
              <a
                href="https://www.instagram.com/kclcministries"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-sm text-white/40">
              Podcast coming soon on Apple Podcasts &amp; Spotify.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
