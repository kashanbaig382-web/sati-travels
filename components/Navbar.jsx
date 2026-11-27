
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Plane } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flights", href: "/flights" },
  { name: "Destinations", href: "/destinations" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <Image
            src="/images/sati-logo.png"
            alt="Sati Travels Ltd"
            width={110}
            height={65}
            priority
          />
        </Link>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/447460003094"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact"
          >
            Get in Touch <ArrowUpRight size={16} />
          </a>
        </nav>

        <a
          href="https://wa.me/447460003094"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Let's Talk <ArrowUpRight size={17} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}
