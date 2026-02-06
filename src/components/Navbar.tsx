"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import SignInModal from "./SignInModal";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-3xl font-light tracking-wider hover:opacity-70 transition-opacity duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Vow
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12 text-sm tracking-widest">
            <Link
              href="/search"
              className="text-neutral-300 hover:text-white transition-colors duration-300 relative group"
            >
              VENDORS
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/search?category=VENUE"
              className="text-neutral-300 hover:text-white transition-colors duration-300 relative group"
            >
              VENUES
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/search?category=PHOTOGRAPHER"
              className="text-neutral-300 hover:text-white transition-colors duration-300 relative group"
            >
              PHOTOGRAPHY
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Desktop CTA (Auth Logic) */}
          <div className="hidden md:flex items-center space-x-8">
            {session ? (
              <div className="flex items-center space-x-6">
                <span className="text-sm tracking-widest text-white">
                  HI, {session.user?.name?.split(" ")[0].toUpperCase()}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-sm tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  SIGN OUT
                </button>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="text-sm tracking-widest text-neutral-300 hover:text-white transition-colors duration-300"
              >
                SIGN IN
              </button>
            )}

            <Link
              href="/for-vendors"
              className="px-6 py-3 border border-white/20 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              FOR VENDORS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-neutral-950 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <Link
            href="/search"
            className="text-3xl font-light text-white hover:text-neutral-400 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Find Vendors
          </Link>
          <Link
            href="/search?category=VENUE"
            className="text-3xl font-light text-white hover:text-neutral-400 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Venues
          </Link>
          <Link
            href="/search?category=PHOTOGRAPHER"
            className="text-3xl font-light text-white hover:text-neutral-400 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Photographers
          </Link>
          <Link
            href="/search?category=PLANNER"
            className="text-3xl font-light text-white hover:text-neutral-400 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Planners
          </Link>

          <div className="w-32 h-px bg-white/20 my-4" />

          {/* Mobile Auth Logic */}
          {session ? (
            <>
              <span className="text-sm tracking-widest text-white">
                HI, {session.user?.name?.toUpperCase()}
              </span>
              <button
                onClick={() => signOut()}
                className="text-sm tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
              >
                SIGN OUT
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false); // Close menu
                setAuthModalOpen(true); // Open modal
              }}
              className="text-sm tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
            >
              SIGN IN
            </button>
          )}

          <Link
            href="#"
            className="px-8 py-3 border border-white/20 text-white text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            FOR VENDORS
          </Link>
        </div>
      </div>

      <SignInModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap");
      `}</style>
    </>
  );
}
