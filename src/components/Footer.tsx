"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <h3
              className="text-5xl font-light tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Vow
            </h3>
            <p className="text-neutral-400 leading-relaxed max-w-md font-light">
              The curated marketplace for exceptional weddings. We connect
              discerning couples with verified professionals who elevate every
              detail.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest text-neutral-500 mb-6">
              SERVICES
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/search?category=VENUE"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 group flex items-center gap-2"
                >
                  Venues
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=PHOTOGRAPHER"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 group flex items-center gap-2"
                >
                  Photographers
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=MAKEUP_ARTIST"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 group flex items-center gap-2"
                >
                  Makeup Artists
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=PLANNER"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 group flex items-center gap-2"
                >
                  Planners
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=VIDEOGRAPHER"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 group flex items-center gap-2"
                >
                  Videography
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest text-neutral-500 mb-6">
              COMPANY
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-widest text-neutral-500 mb-6">
              FOR VENDORS
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  List Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Vendor Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  Resources
                </Link>
              </li>
              <li className="pt-8">
                <h4 className="text-xs tracking-widest text-neutral-500 mb-4">
                  LEGAL
                </h4>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 block mb-3"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-neutral-300 hover:text-white transition-colors duration-300 block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 tracking-wide">
            © {new Date().getFullYear()} Vow. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600 tracking-widest">
            CRAFTED WITH CARE
          </p>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap");
      `}</style>
    </footer>
  );
}
