"use client";

import Link from "next/link";
import Image from "next/image";
import HomeSearchBox from "@/components/HomeSearchBox";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              animation: "grid-flow 20s linear infinite",
            }}
          />
        </div>

        {/* Floating Images - Scattered Gallery */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left */}
          <div className="absolute top-[8%] left-[5%] w-64 h-80 opacity-40 animate-float-slow">
            <div className="relative w-full h-full rotate-[-8deg] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>

          {/* Top Right */}
          <div className="absolute top-[15%] right-[8%] w-56 h-72 opacity-30 animate-float-delayed">
            <div className="relative w-full h-full rotate-[12deg] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[12%] left-[10%] w-60 h-80 opacity-35 animate-float-slow-delayed">
            <div className="relative w-full h-full rotate-[6deg] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[18%] right-[6%] w-52 h-64 opacity-25 animate-float">
            <div className="relative w-full h-full rotate-[-10deg] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>

          {/* Center Small */}
          <div className="absolute top-[35%] left-[20%] w-48 h-60 opacity-20 animate-float-delayed">
            <div className="relative w-full h-full rotate-[15deg] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <div className="inline-block px-4 py-2 border border-white/20 rounded-full text-sm tracking-widest mb-8">
              CURATED WEDDING MARKETPLACE
            </div>
          </div>

          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-8 leading-[0.95] opacity-0 animate-fade-in-up-delayed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              animationDelay: "0.2s",
            }}
          >
            Every Detail,
            <br />
            <span className="italic font-normal">Perfected</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fade-in-up-delayed"
            style={{ animationDelay: "0.4s" }}
          >
            Discover exceptional wedding professionals.
            <br />
            Transparent. Vetted. Extraordinary.
          </p>

          <div
            className="max-w-2xl mx-auto opacity-0 animate-fade-in-up-delayed"
            style={{ animationDelay: "0.6s" }}
          >
            <HomeSearchBox />
          </div>

          <div
            className="flex items-center justify-center gap-12 text-sm text-neutral-500 pt-12 opacity-0 animate-fade-in-up-delayed tracking-wide"
            style={{ animationDelay: "0.8s" }}
          >
            <span>VERIFIED VENDORS</span>
            <span>—</span>
            <span>UPFRONT PRICING</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-delayed"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-px h-24 bg-gradient-to-b from-white/50 to-transparent animate-scroll-line" />
        </div>
      </section>

      {/* --- IMMERSIVE CATEGORY SECTION --- */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex items-end justify-between">
            <div>
              <h2
                className="text-6xl md:text-7xl font-light mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our Services
              </h2>
              <p className="text-neutral-500 text-lg">
                Excellence in every category
              </p>
            </div>
            <Link
              href="/search"
              className="hidden md:flex items-center gap-2 text-sm tracking-widest hover:gap-4 transition-all duration-300 group"
            >
              VIEW ALL
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Horizontal Scroll Gallery */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
              {/* Photographers */}
              <Link
                href="/search?category=PHOTOGRAPHER"
                className="group relative flex-none w-[85vw] md:w-[600px] h-[70vh] snap-start"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200"
                    alt="Photographers"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className="text-5xl font-light mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Photographers
                      </h3>
                      <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Capture every fleeting moment
                      </p>
                    </div>
                    <ArrowUpRight
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      size={32}
                    />
                  </div>
                </div>
              </Link>

              {/* Venues */}
              <Link
                href="/search?category=VENUE"
                className="group relative flex-none w-[85vw] md:w-[600px] h-[70vh] snap-start"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200"
                    alt="Venues"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className="text-5xl font-light mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Venues
                      </h3>
                      <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Spaces that inspire
                      </p>
                    </div>
                    <ArrowUpRight
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      size={32}
                    />
                  </div>
                </div>
              </Link>

              {/* Makeup & Hair */}
              <Link
                href="/search?category=MAKEUP_ARTIST"
                className="group relative flex-none w-[85vw] md:w-[600px] h-[70vh] snap-start"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200"
                    alt="Makeup"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className="text-5xl font-light mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Makeup & Hair
                      </h3>
                      <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Look your absolute best
                      </p>
                    </div>
                    <ArrowUpRight
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      size={32}
                    />
                  </div>
                </div>
              </Link>

              {/* Planners */}
              <Link
                href="/search?category=PLANNER"
                className="group relative flex-none w-[85vw] md:w-[600px] h-[70vh] snap-start"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200"
                    alt="Planners"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className="text-5xl font-light mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Planners
                      </h3>
                      <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Orchestrate perfection
                      </p>
                    </div>
                    <ArrowUpRight
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      size={32}
                    />
                  </div>
                </div>
              </Link>

              {/* Videographers */}
              <Link
                href="/search?category=VIDEOGRAPHER"
                className="group relative flex-none w-[85vw] md:w-[600px] h-[70vh] snap-start"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1738851952441-2a7d17487545?q=80&w=1200"
                    alt="Videography"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className="text-5xl font-light mb-2"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Videography
                      </h3>
                      <p className="text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Stories in motion
                      </p>
                    </div>
                    <ArrowUpRight
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                      size={32}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- VENDOR CTA SECTION --- */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <div className="text-sm tracking-widest text-neutral-500 mb-6">
                  FOR PROFESSIONALS
                </div>
                <h2
                  className="text-6xl md:text-7xl font-light leading-tight mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Join Our
                  <br />
                  <span className="italic">Curated Network</span>
                </h2>
                <p className="text-xl text-neutral-400 leading-relaxed font-light">
                  We connect you with couples who value exceptional
                  craftsmanship. No spam. No noise. Just meaningful connections.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-all duration-300 group">
                  <span className="flex items-center gap-2">
                    List Your Business
                    <ArrowUpRight
                      size={18}
                      className="group-hover:rotate-45 transition-transform duration-300"
                    />
                  </span>
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-medium tracking-wide hover:bg-white/5 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="order-1 md:order-2 relative h-[500px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-sm transform rotate-3 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative h-full overflow-hidden rounded-sm transform -rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1523952883368-a846f3e5e1e3?q=80&w=1200"
                  alt="Wedding Professional"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-32" />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap");

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotate, 0deg));
          }
        }

        @keyframes grid-flow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(80px);
          }
        }

        @keyframes scroll-line {
          0% {
            height: 0;
            opacity: 1;
          }
          50% {
            height: 96px;
            opacity: 1;
          }
          100% {
            height: 96px;
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }

        .animate-float-slow-delayed {
          animation: float 8s ease-in-out 1s infinite;
        }

        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
