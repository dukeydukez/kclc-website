import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import StatsBar from "@/components/StatsBar";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import LiveOrCountdown from "@/components/LiveOrCountdown";
import FadeIn from "@/components/FadeIn";
import SubscribeForm from "@/components/SubscribeForm";

const ministryCards = [
  {
    title: "Prison Ministry",
    description:
      "Bringing the life-changing message of Jesus Christ to prison inmates, offering hope, healing, and redemption through the Gospel. No one is beyond the reach of Christ.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    href: "/connect",
  },
  {
    title: "Men\u2019s Ministry",
    description:
      "A brotherhood united in faith. We lift one another up through the Word, prayer, and love. With servant hearts, we feed the poor, clothe the homeless, and press forward together.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    href: "/connect",
  },
  {
    title: "Kingz Kids",
    subtitle: "Children\u2019s Ministry",
    description:
      "Loving our children to their fullest destiny in Christ through Bible stories, interactive activities, community outings, and age-appropriate gospel teaching.",
    scripture: "Proverbs 22:6",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    href: "/connect",
  },
  {
    title: "Sisters of Strength",
    subtitle: "Women\u2019s Ministry",
    description:
      "Empowered by faith, united in love, and anchored in purpose. We encourage, equip, and uplift women through sisterhood, service, and spiritual growth.",
    scripture: "Proverbs 31:25",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    href: "/connect",
  },
];

const galleryImages = [
  { src: "/worship-team.jpg", alt: "Worship team leading praise and worship" },
  { src: "/musician.jpg", alt: "Musician playing keyboard during service" },
  { src: "/community.jpg", alt: "KCLC community serving together" },
  { src: "/fellowship.jpg", alt: "Church family fellowship gathering" },
];

export default function HomePage() {
  return (
    <>
      {/* A. Hero Section */}
      <HeroSection />

      {/* Marquee Strip */}
      <Marquee />

      {/* B. Welcome Section */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl leading-tight text-navy sm:text-4xl lg:text-5xl">
              Welcome to Kingsway
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-subtext">
              <p>
                We&apos;re a church that believes in the power of restoration. No
                matter where you&apos;ve been or what you&apos;ve walked through, there&apos;s
                a place for you here.
              </p>
              <p>
                Under the leadership of Pastor Richard J. Brown, Kingsway
                Community Life Centre is a family rooted in faith, driven by
                purpose, and committed to seeing every person walk in the
                fullness of their God-given destiny.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-navy transition-colors hover:text-gold-dark"
              >
                Learn More About Us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* C. Latest Sermon Section */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold">
              This Week&apos;s Message
            </p>
            <h2 className="mt-3 text-center font-display text-3xl text-white sm:text-4xl lg:text-5xl">
              Watch the Latest Sermon
            </h2>
          </FadeIn>

          <div className="mx-auto mt-10 max-w-4xl">
            <LiveOrCountdown />
          </div>

          <div className="mt-8 text-center">
            <p className="font-display text-xl text-white">
              Sunday Worship Service
            </p>
            <p className="mt-1 text-white/60">
              Pastor Richard J. Brown
            </p>
            <Link
              href="/watch"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-dark"
            >
              Watch More Sermons
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* D. Ministry Cards Section */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-center font-display text-3xl text-navy sm:text-4xl lg:text-5xl">
              Our Ministries
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-subtext">
              There are many ways to grow, serve, and connect at Kingsway. Find
              your place in the family.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ministryCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl border border-silver/30 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  {card.icon}
                </div>
                <h3 className="mt-5 font-display text-xl text-navy">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {card.subtitle}
                  </p>
                )}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-subtext">
                  {card.description}
                </p>
                {card.scripture && (
                  <p className="mt-3 text-xs italic text-navy/50">
                    {card.scripture}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-navy transition-colors group-hover:text-gold-dark">
                  Learn More
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Banner */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl text-navy sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-subtext">
              Get updates on upcoming events, services, and everything
              happening at Kingsway straight to your inbox.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <SubscribeForm variant="dark" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* E. Plan Your Visit Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/plan-visit.jpg"
                  alt="KCLC congregation standing in worship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">
                Your First Visit
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-navy sm:text-4xl">
                Plan Your Visit to Kingsway
              </h2>
              <div className="mt-6 space-y-4 text-subtext">
                <p>
                  We know visiting a new church can feel like a big step.
                  That&apos;s why we want you to feel at home from the moment you
                  walk through our doors.
                </p>
                <div className="space-y-3">
                  {[
                    { bold: "Sundays at 10:00 AM", rest: " \u2014 Opening prayer starts at 9:45 AM" },
                    { bold: "73 Alness Street, Unit 3", rest: ", North York, ON" },
                    { bold: "Come as you are", rest: " \u2014 no dress code, no pressure, just come" },
                  ].map((item) => (
                    <div key={item.bold} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p>
                        <strong className="text-darktext">{item.bold}</strong>
                        {item.rest}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/visit"
                  className="inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg"
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* F. Community Gallery */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="mb-10 text-center font-display text-3xl text-white sm:text-4xl">
              Life at Kingsway
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="group relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-navy/20 transition-opacity group-hover:opacity-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. "New Here?" CTA Banner */}
      <section className="bg-gold py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <FadeIn>
            <h2 className="font-display text-3xl text-navy sm:text-4xl lg:text-5xl">
              New Here?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-navy/80">
              Your first visit is important to us. We&apos;d love to welcome you to
              the Kingsway family and help you feel right at home.
            </p>
            <div className="mt-8">
              <Link
                href="/visit"
                className="inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-light hover:shadow-lg"
              >
                Plan Your Visit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
