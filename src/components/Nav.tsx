"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-border bg-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-mono text-sm uppercase tracking-[0.16em] text-text"
        >
          Ark Team
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-block bg-accent px-5 py-2.5 text-sm text-surface transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="font-mono text-xs uppercase tracking-[0.14em] text-text md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-border bg-bg px-6 pb-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-text-secondary hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-accent px-5 py-3 text-center text-sm text-surface"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
