"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#What", label: "WHAT" },
  { href: "#How", label: "HOW" },
  { href: "#Why", label: "WHY" },
  { href: "#Testimonials", label: "TESTIMONIALS" },
  { href: "#Samples", label: "SAMPLES" },
  { href: "#Pricing", label: "PRICING" },
  { href: "#FAQs", label: "FAQs" },
];

const BOOKING_URL = "https://cal.com/videorep/vloggle-discovery-call";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container-vloggle flex items-center justify-between py-3">
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/images/Logo-White--Text-WhiteTransparent.png"
            alt="Vloggle logo"
            width={160}
            height={40}
            className="max-w-[160px] h-auto hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-menu ml-4"
          >
            Book A Call
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--color-charcoal)] transition-transform mb-1.5 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-charcoal)] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-charcoal)] transition-transform mt-1.5 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold tracking-wide no-underline text-[var(--color-charcoal)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary w-full text-center mt-2"
          >
            Book A Call
          </a>
        </div>
      )}
    </header>
  );
}
