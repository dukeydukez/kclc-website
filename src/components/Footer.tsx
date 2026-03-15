import Image from "next/image";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Watch", href: "/watch" },
  { label: "Give", href: "/give" },
  { label: "Connect", href: "/connect" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/kclcministries",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/kclcministries",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@KingswayCommunityLifeCentre",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Stay Connected */}
        <div className="mb-12 border-b border-white/10 pb-12">
          <div className="mx-auto max-w-md text-center">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">
              Stay Connected
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Get updates on events, services, and everything happening at Kingsway.
            </p>
            <div className="mt-4">
              <SubscribeForm />
            </div>
          </div>
        </div>

        {/* Logo + Tagline */}
        <div className="mb-12">
          <Image
            src="/logo-shield.png"
            alt="Kingsway Community Life Centre"
            width={200}
            height={60}
            className="mb-4 h-14 w-auto"
          />
          <p className="font-display text-lg italic text-gold">
            &ldquo;Loving You Back to Life &amp; Destiny&rdquo;
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              About KCLC
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              Kingsway Community Life Centre is a vibrant, Spirit-filled church
              in North York. Under the leadership of Pastor Richard J. Brown, we
              are a community committed to restoration, purpose, and the love of
              God.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Service Times
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <p className="font-semibold text-white">Sunday Worship</p>
                <p>Opening Prayer: 9:45 AM</p>
                <p>Worship Service: 10:00 AM &ndash; 12:30 PM</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-white">Location</p>
                <p>73 Alness Street, Unit 3</p>
                <p>North York, ON</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
              Connect
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                <a
                  href="tel:+14165100700"
                  className="transition-colors hover:text-gold"
                >
                  (416) 510-0700
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@kclcministries.org"
                  className="transition-colors hover:text-gold"
                >
                  info@kclcministries.org
                </a>
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 transition-colors hover:text-gold"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Kingsway Community Life Centre.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
