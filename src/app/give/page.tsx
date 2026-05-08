import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Give | Kingsway Community Life Centre",
  description:
    "Support the mission of KCLC. Give tithes and offerings in person, by e-Transfer, or online.",
};

const givingFunds = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Enhance Our Community Home",
    description: "Improve, upgrade, and furnish our space.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Benevolence Fund",
    description: "Support families in need within our community.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Global & Local Missions",
    description: "Extend our impact near and far.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: "Technology & Connection",
    description: "Strengthen live stream media and digital outreach.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Children & Youth",
    description: "Invest in the next generation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "General Offering",
    description: "Sustain our everyday ministry.",
  },
];

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
    scrollTo: "give-online",
  },
];

export default function GivePage() {
  return (
    <>
      <PageHero
        title="Give"
        subtitle="Every act of generosity moves the mission forward."
        image="/give-hero.jpg"
        imageAlt="KCLC congregation holding hands in prayer"
        imagePosition="center 40%"
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
                  {method.scrollTo && (
                    <a
                      href={`#${method.scrollTo}`}
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

      {/* Where Your Giving Goes */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
              Where Your Giving Goes
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold" />
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-subtext">
              Every gift supports a specific area of ministry. Direct your
              giving to the cause that moves you, or contribute to our general
              offering and let us put it where it&rsquo;s needed most.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {givingFunds.map((fund, i) => (
              <FadeIn key={fund.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-silver/40 bg-offwhite p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    {fund.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy">
                    {fund.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtext">
                    {fund.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Give Online CTA */}
      <section id="give-online" className="scroll-mt-24 bg-gold py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Ready to Give?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-navy/70">
              Give securely in seconds. No account required. Your donation stays on this page.
            </p>
            <div className="mt-10">
              <a
                href="https://kclcministries.churchcenter.com/giving?open-in-church-center-modal=true"
                className="inline-block rounded-full bg-navy px-12 py-4 text-lg font-semibold text-white transition-all hover:bg-navy-light hover:shadow-lg"
              >
                Give Now
              </a>
            </div>
            <p className="mt-6 text-sm text-navy/50">
              Secure giving powered by Church Center
            </p>
          </FadeIn>
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
