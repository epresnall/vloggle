"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/#what", label: "WHAT" },
  { href: "/#how", label: "HOW" },
  { href: "/#why", label: "WHY" },
  { href: "/#testimonials", label: "TESTIMONIALS" },
  { href: "/#samples", label: "SAMPLES" },
  { href: "/#pricing", label: "PRICING" },
  { href: "/#faq", label: "FAQs" },
];

const CALENDLY = "https://cal.com/videorep/vloggle-discovery-call";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Vloggle-Icon-p-500.png"
            alt="Vloggle"
            width={40}
            height={40}
            className="h-9 w-auto"
          />
          <span className="text-xl font-bold text-[var(--color-dark)]">
            Vloggle
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-[var(--color-dark)] transition-colors hover:text-[var(--color-purple)]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Book A Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform mb-1.5 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transition-transform mt-1.5 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm mt-2 w-full text-center"
          >
            Book A Call
          </a>
        </div>
      )}
    </header>
  );
}
