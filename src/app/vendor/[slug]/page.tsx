import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MapPin,
  Instagram,
  Mail,
  Phone,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default async function VendorDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const vendor = await prisma.vendor.findUnique({
    where: { slug },
  });

  if (!vendor) {
    return notFound();
  }

  const galleryImages = Array.isArray(vendor.gallery)
    ? (vendor.gallery as string[])
    : [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section - Full Height Immersive */}
      <div className="relative h-screen w-full">
        <Image
          src={vendor.coverImage}
          alt={vendor.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950" />

        {/* Navigation Back */}
        <div className="absolute top-8 left-6 md:left-12 z-20">
          <Link
            href="/search"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="text-sm tracking-widest">BACK</span>
          </Link>
        </div>

        {/* Hero Content - Bottom Aligned */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl space-y-6">
              {/* Category Badge */}
              <div className="inline-block px-4 py-2 border border-white/20 text-xs tracking-widest">
                {vendor.category.replace(/_/g, " ")}
              </div>

              {/* Vendor Name */}
              <h1 className="text-6xl md:text-8xl font-light leading-tight font-serif">
                {vendor.name}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-neutral-300">
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span className="tracking-wide">{vendor.city}</span>
                </div>
                <span className="text-neutral-600">•</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((tier) => (
                    <span
                      key={tier}
                      className={
                        tier <= vendor.priceTier
                          ? "text-white"
                          : "text-neutral-700"
                      }
                    >
                      $
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-20">
            {/* About Section */}
            <section>
              <h2 className="text-sm tracking-widest text-neutral-500 mb-8">
                ABOUT
              </h2>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-300 whitespace-pre-wrap font-serif">
                {vendor.description}
              </p>
            </section>

            {/* Portfolio Gallery */}
            {galleryImages.length > 0 && (
              <section>
                <h2 className="text-sm tracking-widest text-neutral-500 mb-12">
                  PORTFOLIO
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-[4/5] overflow-hidden bg-neutral-900"
                    >
                      <Image
                        src={img}
                        alt={`Portfolio ${idx + 1}`}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Contact Sidebar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="border border-white/10 p-8 space-y-8">
                <h3 className="text-3xl font-light mb-8 font-serif">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  {vendor.phone && (
                    <a
                      href={`tel:${vendor.phone}`}
                      className="group flex items-center justify-between p-5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 tracking-wide mb-1">
                            PHONE
                          </p>
                          <p className="font-light">{vendor.phone}</p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                      />
                    </a>
                  )}

                  {/* Email */}
                  {vendor.email && (
                    <a
                      href={`mailto:${vendor.email}`}
                      className="group flex items-center justify-between p-5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 tracking-wide mb-1">
                            EMAIL
                          </p>
                          <p className="font-light break-all">{vendor.email}</p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                      />
                    </a>
                  )}

                  {/* Instagram */}
                  {vendor.instagram && (
                    <a
                      href={
                        vendor.instagram.startsWith("http")
                          ? vendor.instagram
                          : `https://instagram.com/${vendor.instagram.replace("@", "")}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                          <Instagram size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 tracking-wide mb-1">
                            INSTAGRAM
                          </p>
                          <p className="font-light">View Profile</p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                      />
                    </a>
                  )}
                </div>

                {/* CTA Note */}
                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-neutral-500 text-center leading-relaxed">
                    Mention <span className="text-white italic">Vow</span> for
                    exclusive rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-24" />
    </div>
  );
}
