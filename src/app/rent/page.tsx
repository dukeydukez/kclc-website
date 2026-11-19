import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SpaceGallery, { type GalleryPhoto } from "@/components/SpaceGallery";

export const metadata: Metadata = {
  title: "Rent Our Space | Kingsway Community Life Centre",
  description:
    "A 4,200 sq ft event hall in North York with 19 ft ceilings, a stage, a full sound system and free parking. Available for conferences, workshops, concerts and celebrations.",
};

const BOOKING_HREF = "/connect?service=space-rental#services";
const FACILITIES_EMAIL = "facilities@kclcministries.org";

const facts = [
  { value: "4,200", label: "sq ft of event space" },
  { value: "19 ft", label: "ceilings" },
  { value: "Free", label: "on-site parking" },
  { value: "Fully", label: "accessible" },
] as const;

const features = [
  {
    title: "Large event hall",
    body: "An open, flexible floor that sets up theatre-style, classroom-style or around tables.",
  },
  {
    title: "Professional sound",
    body: "A full sound system, a production booth, and acoustic treatment throughout the hall.",
  },
  {
    title: "Stage and platform",
    body: "A raised platform for speakers, performers, panels and ceremonies.",
  },
  {
    title: "Tables and chairs",
    body: "Seating and tables on site, so you don't need to bring in rentals.",
  },
  {
    title: "Climate controlled",
    body: "Comfortable year-round, whether it's a July concert or a January conference.",
  },
  {
    title: "Easy to reach",
    body: "73 Alness Street, Unit 3, in North York, with free parking right outside the door.",
  },
] as const;

const uses = [
  "Corporate events",
  "Conferences",
  "Workshops and training",
  "Concerts",
  "Community gatherings",
  "Receptions and celebrations",
] as const;

const photos: readonly GalleryPhoto[] = [
  { src: "/rent/hall-wide.jpg", alt: "Main hall, theatre-style seating" },
  { src: "/rent/stage.jpg", alt: "Stage and platform" },
  { src: "/rent/hall-seating.jpg", alt: "Main hall under the 19 ft ceilings" },
  { src: "/rent/stage-band.jpg", alt: "Stage set for live music" },
  { src: "/rent/view-from-stage.jpg", alt: "The hall from the stage" },
  { src: "/rent/sound-desk.jpg", alt: "Sound desk and production booth" },
  { src: "/rent/production-booth.jpg", alt: "Production booth with acoustic panels" },
  { src: "/rent/foyer.jpg", alt: "Front foyer" },
  { src: "/rent/lobby.jpg", alt: "Welcome area" },
  { src: "/rent/kitchenette.jpg", alt: "Kitchenette" },
  { src: "/rent/exterior.jpg", alt: "Entrance at 73 Alness Street, Unit 3" },
  { src: "/rent/aerial.jpg", alt: "Aerial view showing the free parking" },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">{children}</h2>
      <div className="mt-2 h-1 w-16 bg-gold" />
    </>
  );
}

export default function RentPage() {
  return (
    <>
      {/* Hero film */}
      <section className="bg-navy pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Kingsway Community Life Centre
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              Rent Our Space
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              A bright, flexible hall in North York for your next conference, concert, workshop
              or celebration.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl shadow-2xl">
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="metadata"
                poster="/rent/video-poster.jpg"
              >
                <source src="/rent/kclc-event-space.mp4" type="video/mp4" />
                Your browser can&rsquo;t play this video.{" "}
                <a href="/rent/kclc-event-space.mp4">Download it instead.</a>
              </video>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="border-l-2 border-gold pl-4">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="font-display text-3xl font-bold text-white">{fact.value}</dd>
                  <dd className="mt-1 text-sm text-white/60">{fact.label}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading>What&rsquo;s Included</SectionHeading>
          </FadeIn>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.05}>
                <h3 className="font-display text-xl font-bold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-subtext">{f.body}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-16 rounded-2xl bg-offwhite p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-navy">
                Built for
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {uses.map((use) => (
                  <li
                    key={use}
                    className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm text-navy"
                  >
                    {use}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading>Take a Look Around</SectionHeading>
            <p className="mt-6 text-lg text-subtext">Tap any photo to see it full size.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10">
              <SpaceGallery photos={photos} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Book a tour */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Book Your Tour
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-lg text-white/70">
              Tell us about your event and we&rsquo;ll set up a time for you to see the space.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={BOOKING_HREF}
                className="w-full rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-dark sm:w-auto"
              >
                Request a Tour
              </Link>
              <a
                href="tel:+14165100700"
                className="w-full rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:w-auto"
              >
                Call (416) 510-0700
              </a>
            </div>
            <p className="mt-8 text-sm text-white/60">
              Prefer email?{" "}
              <a
                href={`mailto:${FACILITIES_EMAIL}?subject=${encodeURIComponent("Event space enquiry")}`}
                className="text-gold hover:underline"
              >
                {FACILITIES_EMAIL}
              </a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
