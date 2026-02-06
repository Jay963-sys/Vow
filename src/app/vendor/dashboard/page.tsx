import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  ArrowUpRight,
  Edit,
  Eye,
  MousePointerClick,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default async function VendorDashboard() {
  const session = await auth();
  if (!session?.user) return redirect("/");

  // Fetch the user's vendor profile
  const vendor = await prisma.vendor.findUnique({
    where: { userId: session.user.id },
  });

  // If they are logged in but don't have a vendor profile, send them to onboarding
  if (!vendor) return redirect("/vendor/onboarding");

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              VENDOR DASHBOARD
            </p>
            <h1 className="text-5xl md:text-6xl font-light mb-3 font-serif">
              Welcome Back
            </h1>
            <p className="text-xl text-neutral-400 font-light">{vendor.name}</p>
          </div>
          <Link
            href={`/vendor/${vendor.slug}`}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-sm tracking-wide">View Public Profile</span>
            <ArrowUpRight
              size={16}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Profile Views */}
          <div className="border border-white/10 p-8 hover:border-white/20 transition-colors duration-300">
            <div className="flex items-center gap-3 text-neutral-500 mb-6">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <Eye size={20} />
              </div>
              <span className="text-xs tracking-widest">PROFILE VIEWS</span>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-light font-serif">124</p>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <TrendingUp size={14} />
                <span>+12% this week</span>
              </div>
            </div>
          </div>

          {/* Leads */}
          <div className="border border-white/10 p-8 hover:border-white/20 transition-colors duration-300">
            <div className="flex items-center gap-3 text-neutral-500 mb-6">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <MousePointerClick size={20} />
              </div>
              <span className="text-xs tracking-widest">CONTACT CLICKS</span>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-light font-serif">18</p>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <TrendingUp size={14} />
                <span>+5 this week</span>
              </div>
            </div>
          </div>

          {/* Premium Upsell */}
          <div className="border border-white/20 p-8 bg-white/5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-white" />
              <h3 className="font-medium tracking-wide">Premium Features</h3>
            </div>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              Appear at the top of search results and unlock advanced analytics.
            </p>
            <button className="px-5 py-2.5 bg-white text-black text-xs tracking-widest hover:bg-neutral-100 transition-colors duration-300 disabled:opacity-50">
              COMING SOON
            </button>
          </div>
        </div>

        {/* Profile Details Section */}
        <div className="border border-white/10">
          <div className="p-8 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-3xl font-light font-serif">Profile Details</h2>
            <button className="group flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              <Edit size={16} />
              <span className="text-sm tracking-wide">Edit Profile</span>
            </button>
          </div>

          <div className="p-8 space-y-8">
            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs tracking-widest text-neutral-500 mb-2">
                  CATEGORY
                </p>
                <p className="text-lg font-light">
                  {vendor.category.replace(/_/g, " ")}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-neutral-500 mb-2">
                  LOCATION
                </p>
                <p className="text-lg font-light">{vendor.city}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-neutral-500 mb-2">
                  PRICE TIER
                </p>
                <p className="text-lg font-light">
                  {Array(vendor.priceTier).fill("$").join("")}
                  <span className="text-neutral-600 ml-2">
                    (
                    {vendor.priceTier === 1
                      ? "Budget Friendly"
                      : vendor.priceTier === 2
                        ? "Standard"
                        : "Luxury"}
                    )
                  </span>
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-neutral-500 mb-2">
                  PHONE
                </p>
                <p className="text-lg font-light">{vendor.phone}</p>
              </div>
            </div>

            {/* Description */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs tracking-widest text-neutral-500 mb-4">
                ABOUT
              </p>
              <p className="text-neutral-300 leading-relaxed font-light whitespace-pre-wrap">
                {vendor.description}
              </p>
            </div>

            {/* Email if exists */}
            {vendor.email && (
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs tracking-widest text-neutral-500 mb-2">
                  EMAIL
                </p>
                <p className="text-lg font-light">{vendor.email}</p>
              </div>
            )}

            {/* Instagram if exists */}
            {vendor.instagram && (
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs tracking-widest text-neutral-500 mb-2">
                  INSTAGRAM
                </p>
                <a
                  href={
                    vendor.instagram.startsWith("http")
                      ? vendor.instagram
                      : `https://instagram.com/${vendor.instagram.replace("@", "")}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light hover:text-neutral-400 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  {vendor.instagram}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 mb-4">
            Need help optimizing your profile?
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors duration-300"
          >
            <span className="text-sm tracking-wide">Contact Support</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
