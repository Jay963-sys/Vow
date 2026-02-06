import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Users,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

export default function ForVendorsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Floating Images */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[8%] w-64 h-80 opacity-20 animate-float-slow">
            <div className="relative w-full h-full rotate-[-8deg]">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
          <div className="absolute bottom-[20%] right-[10%] w-56 h-72 opacity-15 animate-float-delayed">
            <div className="relative w-full h-full rotate-[10deg]">
              <Image
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800"
                alt=""
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            {/* Badge */}
            <div className="inline-block opacity-0 animate-fade-in-up">
              <div className="px-4 py-2 border border-white/20 text-xs tracking-widest inline-flex items-center gap-2">
                <Sparkles size={14} />
                FOR WEDDING PROFESSIONALS
              </div>
            </div>

            {/* Headline */}
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] opacity-0 animate-fade-in-up-delayed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                animationDelay: "0.2s",
              }}
            >
              Grow Your
              <br />
              <span className="italic">Wedding Business</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up-delayed"
              style={{ animationDelay: "0.4s" }}
            >
              Connect with couples who value exceptional work. Build your
              reputation.
              <br className="hidden md:block" />
              Zero upfront fees for founding partners.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up-delayed"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                href="/vendor/onboarding"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300"
              >
                List Your Business
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium tracking-wide hover:bg-white/5 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-16 border-t border-white/10 max-w-3xl mx-auto opacity-0 animate-fade-in-up-delayed"
              style={{ animationDelay: "0.8s" }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2 font-serif">
                  500+
                </div>
                <div className="text-sm text-neutral-500 tracking-wide">
                  Active Couples
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2 font-serif">
                  95%
                </div>
                <div className="text-sm text-neutral-500 tracking-wide">
                  Match Rate
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light mb-2 font-serif">
                  $0
                </div>
                <div className="text-sm text-neutral-500 tracking-wide">
                  Setup Cost
                </div>
              </div>
            </div>
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

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <p className="text-sm tracking-widest text-neutral-500 mb-6">
              WHAT YOU GET
            </p>
            <h2 className="text-5xl md:text-6xl font-light mb-6 font-serif">
              Everything You Need
              <br />
              <span className="italic text-neutral-400">to Succeed</span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
              <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-8 group-hover:border-white/40 transition-colors duration-300">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 font-serif">
                Targeted Reach
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Your work reaches couples actively searching for your specific
                style and price point. No wasted marketing spend.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <TrendingUp size={16} />
                  <span>Average 3x profile views vs competitors</span>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
              <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-8 group-hover:border-white/40 transition-colors duration-300">
                <BarChart3 size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 font-serif">
                Real Analytics
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Track profile views, contact clicks, and inquiry sources.
                Understand what's working with detailed insights.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <BarChart3 size={16} />
                  <span>Real-time dashboard updates</span>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group border border-white/10 p-8 hover:border-white/30 transition-all duration-500">
              <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-8 group-hover:border-white/40 transition-colors duration-300">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-light mb-4 font-serif">
                Verified Badge
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                Stand out with our verification badge. Build instant credibility
                and trust with discerning couples.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Award size={16} />
                  <span>Exclusive to curated partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative h-[600px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transform -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative h-full overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1523952883368-a846f3e5e1e3?q=80&w=1200"
                  alt="Wedding Professional"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Right - Features */}
            <div className="space-y-12">
              <div>
                <p className="text-sm tracking-widest text-neutral-500 mb-4">
                  PLATFORM FEATURES
                </p>
                <h2 className="text-4xl md:text-5xl font-light mb-6 font-serif">
                  Built for
                  <br />
                  <span className="italic">Professionals</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-2 font-serif">
                      Premium Portfolio
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Showcase your best work with unlimited high-resolution
                      images and a customizable profile.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-2 font-serif">
                      Direct Inquiries
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      No middleman. Couples contact you directly via phone,
                      email, or Instagram.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-2 font-serif">
                      SEO Optimized
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Your profile ranks on Google for relevant searches in your
                      city and category.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-white/20 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-light mb-2 font-serif">
                      Quality Over Quantity
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      We're selective. Only exceptional vendors join, ensuring
                      premium positioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light font-serif">
            Ready to <span className="italic">Elevate</span>
            <br />
            Your Business?
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Join our curated network of exceptional wedding professionals.
            Limited spots available.
          </p>
          <div className="pt-8">
            <Link
              href="/vendor/onboarding"
              className="group inline-flex items-center justify-center px-10 py-5 bg-white text-black text-lg font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300"
            >
              Start Your Application
              <ArrowUpRight className="ml-2 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-24" />
    </div>
  );
}
