"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import ServiceRequestForm from "@/components/ServiceRequestForm";

const involvementCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Join a Group",
    description:
      "Bible study, fellowship, and prayer groups where you can grow in faith and build real relationships with other believers.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Serve",
    description:
      "There's a place for your gifts. Whether it's hospitality, worship, media, or outreach, we'd love to have you on the team.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Prayer Request",
    description:
      "Carrying something heavy? Let us stand with you. Submit a prayer request and our team will lift you up in prayer.",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kclcministries",
    handle: "@kclcministries",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/kclcministries",
    handle: "/kclcministries",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@KingswayCommunityLifeCentre",
    handle: "@KingswayCommunityLifeCentre",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ConnectPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Form submission would be handled by a backend/API route
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Connect"
        subtitle="Get involved. Get in touch. We'd love to hear from you."
        image="/connect-hero.jpg"
        imageAlt="Father holding daughter at KCLC community gathering"
      />

      {/* Get Involved */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              Get Involved
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-lg text-subtext">
              There are real ways to be part of this community beyond Sunday mornings.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {involvementCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-silver/40 bg-offwhite p-8 transition-shadow hover:shadow-md">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    {card.icon}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Serve You */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
              How Can We Serve You?
            </h2>
            <div className="mt-2 h-1 w-16 bg-gold" />
            <p className="mt-6 text-lg text-subtext">
              Beyond Sunday service, we&rsquo;re here for you. Let us know what you need and
              we&rsquo;ll connect you with the right person.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ServiceRequestForm />
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-offwhite py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <FadeIn>
              <div>
                <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
                  Send Us a Message
                </h2>
                <div className="mt-2 h-1 w-16 bg-gold" />

                {submitted ? (
                  <div className="mt-8 rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-navy">
                      Message Sent
                    </h3>
                    <p className="mt-2 text-sm text-subtext">
                      Thank you for reaching out. We&rsquo;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-navy"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-silver/60 bg-white px-4 py-3 text-sm text-darktext outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-silver/60 bg-white px-4 py-3 text-sm text-darktext outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="mt-1.5 w-full resize-none rounded-lg border border-silver/60 bg-white px-4 py-3 text-sm text-darktext outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="How can we help?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg sm:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
                  Contact Info
                </h2>
                <div className="mt-2 h-1 w-16 bg-gold" />

                <div className="mt-8 space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">Address</h4>
                      <p className="mt-1 text-sm text-subtext">
                        73 Alness Street, Unit 3<br />
                        North York, ON
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">Phone</h4>
                      <a
                        href="tel:4165100700"
                        className="mt-1 block text-sm text-subtext hover:text-gold transition-colors"
                      >
                        (416) 510-0700
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy">Email</h4>
                      <a
                        href="mailto:info@kclcministries.org"
                        className="mt-1 block text-sm text-subtext hover:text-gold transition-colors"
                      >
                        info@kclcministries.org
                      </a>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h4 className="text-sm font-semibold text-navy">Follow Us</h4>
                    <div className="mt-3 space-y-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-sm text-subtext transition-colors hover:text-gold"
                        >
                          <span className="text-navy/60">{social.icon}</span>
                          <span>{social.handle}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
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
    </>
  );
}
