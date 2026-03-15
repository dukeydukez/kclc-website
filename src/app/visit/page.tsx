import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Plan Your Visit | Kingsway Community Life Centre",
  description:
    "Everything you need to know before your first visit to KCLC. Service times, location, parking, and what to expect.",
};

const infoCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Service Times",
    lines: [
      "Every Sunday",
      "Opening Prayer: 9:45 AM",
      "Worship Service: 10:00 AM \u2013 12:00 PM",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Location",
    lines: [
      "73 Alness Street, Unit 3",
      "North York, ON",
      "Located in the Dufferin & Steeles area",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "What to Wear",
    lines: [
      "Come as you are.",
      "There's no dress code here.",
      "Jeans, suits, Sunday best \u2014 all welcome.",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Parking",
    lines: [
      "Free parking available on-site.",
      "The Alness Street unit has a shared",
      "lot with plenty of space on Sundays.",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Kids & Families",
    lines: [
      "Families are absolutely welcome.",
      "Children stay in the main service",
      "with the whole congregation.",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "First-Time Visitors",
    lines: [
      "You won't be put on the spot.",
      "No awkward stand-up moments.",
      "Just a warm welcome and great worship.",
    ],
  },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        title="Plan Your Visit"
        subtitle="Everything you need to know before you walk through our doors."
        image="/worship-team.jpg"
        imageAlt="KCLC worship team leading praise and worship"
        imagePosition="top"
      />

      {/* What to Expect */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              What to Expect
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-subtext">
              When you walk through our doors, you'll be greeted with a warm
              welcome. No judgement, no pressure, no side-eye. Just genuine people
              who are glad you showed up.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-subtext">
              Our Sunday services begin with opening prayer at 9:45 AM, followed
              by worship, praise, and a message from Pastor Brown. The service
              runs until about 12:00 PM. After service, stick around for
              fellowship, conversation, and connection. That&rsquo;s where the
              real community happens.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-subtext">
              Whether it&rsquo;s your first time in a church or you&rsquo;ve been
              attending somewhere for decades, you&rsquo;ll feel at home here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
              Practical Info
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infoCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-silver/40 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="text-gold">{card.icon}</div>
                  <h3 className="mt-4 font-display text-xl font-bold text-navy">
                    {card.title}
                  </h3>
                  <div className="mt-3 space-y-1">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-subtext">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center font-display text-3xl font-bold text-navy md:text-4xl">
              Find Us
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.7!2d-79.4649!3d43.7577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e1e1e1e1e1e%3A0x0!2s73+Alness+St%2C+North+York%2C+ON!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KCLC Location - 73 Alness Street, Unit 3, North York, ON"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              We can&rsquo;t wait to meet you.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              If you have any questions before your visit, reach out. We&rsquo;d
              love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:4165100700"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg"
              >
                Call (416) 510-0700
              </a>
              <Link
                href="/connect"
                className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
              >
                Send a Message
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
