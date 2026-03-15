import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Give | Kingsway Community Life Centre",
  description:
    "Support the mission of KCLC. Give tithes and offerings in person, by e-Transfer, or online.",
};

const givingMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "In Person",
    description:
      "Tithes and offerings are collected during our Sunday worship service. Envelopes are available at the entrance.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "E-Transfer",
    description: "Send your offering via Interac e-Transfer to:",
    highlight: "finance@kclcministries.org",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-10 w-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Online Giving",
    description:
      "Give securely from anywhere, anytime through our online giving platform.",
    link: "https://kclcministries.churchcenter.com/giving",
  },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        title="Give"
        subtitle="Every act of generosity moves the mission forward."
        image="/community.jpg"
        imageAlt="KCLC community gathered together"
      />

      {/* Why We Give */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Why We Give
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-subtext">
              Generosity is a core part of who we are. Your tithes and offerings
              aren&rsquo;t just financial transactions. They keep the lights on, the
              doors open, and the ministry reaching people who need it most.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-subtext">
              Every dollar goes toward maintaining our worship space, supporting
              families in need, running outreach programmes, and building the
              infrastructure that keeps this community strong. When you give to
              KCLC, you&rsquo;re investing in restoration, in purpose, and in
              lives being changed.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <blockquote className="mt-8 border-l-4 border-gold pl-6">
              <p className="text-lg italic text-navy">
                &ldquo;Each of you should give what you have decided in your
                heart to give, not reluctantly or under compulsion, for God loves
                a cheerful giver.&rdquo;
              </p>
              <cite className="mt-2 block text-sm text-subtext">
                2 Corinthians 9:7
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
              Ways to Give
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {givingMethods.map((method, i) => (
              <FadeIn key={method.title} delay={i * 0.08}>
                <div className="relative h-full rounded-xl border border-silver/40 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                    {method.icon}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">
                    {method.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">
                    {method.description}
                  </p>
                  {method.highlight && (
                    <p className="mt-3 text-sm font-semibold text-navy">
                      {method.highlight}
                    </p>
                  )}
                  {method.link && (
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
                    >
                      Give Now
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold text-white md:text-4xl">
              Transparency &amp; Accountability
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Kingsway Community Life Centre is a registered charity. All
              donations of $20 or more are eligible for a charitable tax receipt,
              issued at year-end.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              We take stewardship seriously. Your generosity is handled with
              integrity and applied where it matters most.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
