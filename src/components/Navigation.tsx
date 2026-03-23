"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCountdown from "./ServiceCountdown";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
  { label: "Watch", href: "/watch" },
  { label: "Give", href: "/give" },
  { label: "Connect", href: "/connect" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? "rgba(19, 21, 55, 0.88)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo-shield.png"
              alt="Kingsway Community Life Centre"
              width={200}
              height={60}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://kclcministries.churchcenter.com/giving?open-in-church-center-modal=true"
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-dark hover:shadow-lg"
            >
              Give Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex w-6 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  isMobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Service Countdown Bar — reveals with glass nav */}
      <div
        className="transition-all duration-500 overflow-hidden"
        style={{
          maxHeight: isScrolled ? "60px" : "0px",
          opacity: isScrolled ? 1 : 0,
        }}
      >
        <ServiceCountdown />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center bg-navy lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-display text-2xl text-white transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <a
                  href="https://kclcministries.churchcenter.com/giving?open-in-church-center-modal=true"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-4 inline-block rounded-full bg-gold px-8 py-3 text-lg font-semibold text-navy transition-all hover:bg-gold-dark"
                >
                  Give Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
