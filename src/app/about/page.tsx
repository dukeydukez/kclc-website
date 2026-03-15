import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About | Kingsway Community Life Centre",
  description:
    "Our story, our mission, and the heart behind KCLC. Led by Pastor Richard J. Brown for nearly 20 years.",
};

const values = [
  {
    title: "Authentic Community",
    description:
      "No masks. No performance. We're a family that shows up for each other in the real, messy, beautiful parts of life.",
  },
  {
    title: "Whole-Person Restoration",
    description:
      "We don't just address the spiritual. We care about your mind, your relationships, your purpose, and your future.",
  },
  {
    title: "Clear Biblical Teaching",
    description:
      "The Word of God, taught plainly and practically. Not watered down, not overcomplicated. Rooted in Scripture, relevant to today.",
  },
  {
    title: "Open Doors",
    description:
      "Everyone is welcome here. No matter where you've been, what you've done, or how long it's been since you stepped into a church.",
  },
];

const beliefs = [
  {
    title: "The Authority of Scripture",
    text: "We believe the Bible is the inspired, authoritative Word of God and the foundation for all we do.",
  },
  {
    title: "Salvation Through Christ",
    text: "We believe that Jesus Christ is the Son of God, that He died for our sins, and that salvation comes through faith in Him alone.",
  },
  {
    title: "The Holy Spirit",
    text: "We believe in the present-day work of the Holy Spirit, who convicts, guides, comforts, and empowers believers for life and service.",
  },
  {
    title: "The Power of Community",
    text: "We believe the church is the body of Christ, called to love, serve, and walk alongside one another through every season.",
  },
  {
    title: "Restoration and Purpose",
    text: "We believe God is in the business of restoring broken lives and revealing purpose. No one is beyond His reach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Built to fill the gap between traditional church and real-life struggles."
        image="/pastor-teaching.jpg"
        imageAlt="Pastor Richard J. Brown teaching at Kingsway Community Life Centre"
      />

      {/* Mission Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Our Mission
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-subtext">
              Kingsway Community Life Centre exists for one reason: whole-person
              restoration. Not just Sunday services. Not just sermons. We're here
              for the person who's been through the fire and needs a place to
              rebuild. The single parent who needs community. The young
              professional searching for purpose. The family that's been hurt by
              church but still hungry for God.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-subtext">
              We were built to fill the gap between traditional church and
              real-life struggles. That means practical teaching, genuine
              relationships, and a community that actually walks with you through
              the hard seasons, not just the highlight reel.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg font-semibold text-navy">
              &ldquo;Loving You Back to Life &amp; Destiny&rdquo; isn&rsquo;t a
              tagline. It&rsquo;s our mandate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/pastor-pulpit.jpg"
                  alt="Pastor Richard J. Brown at the pulpit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.1}>
                <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
                  Our Pastor
                </h2>
                <div className="mt-2 h-1 w-16 bg-gold" />
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-8 text-lg leading-relaxed text-subtext">
                  Pastor Richard J. Brown has led Kingsway Community Life Centre
                  for nearly 20 years with a simple conviction: the Word of God
                  should change how you live, not just what you believe.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-subtext">
                  His teaching is clear, story-driven, and practical. He doesn&rsquo;t
                  preach at people. He walks with them. Whether it&rsquo;s a Sunday
                  morning message or a midweek conversation, Pastor Brown brings the
                  same warmth, directness, and pastoral care that has anchored this
                  community through every season.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-6 text-lg leading-relaxed text-subtext">
                  Under his leadership, KCLC has grown into a place where broken
                  people find healing, where questions are welcome, and where
                  faith meets real life.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              What We Believe
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-lg text-subtext">
              We hold these convictions at the centre of everything we do.
            </p>
          </FadeIn>
          <div className="mt-12 space-y-8">
            {beliefs.map((belief, i) => (
              <FadeIn key={belief.title} delay={i * 0.05}>
                <div className="rounded-xl border border-silver/50 bg-offwhite p-6 sm:p-8">
                  <h3 className="font-display text-xl font-bold text-navy">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-subtext">
                    {belief.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Our Values
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="rounded-xl border border-white/10 bg-navy-light p-8 transition-colors hover:border-gold/30">
                  <h3 className="font-display text-xl font-bold text-gold">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
