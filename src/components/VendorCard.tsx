import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function VendorCard({ vendor }: { vendor: any }) {
  // Price tier indicator
  const renderPriceTier = () => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3].map((tier) => (
          <span
            key={tier}
            className={`text-xs ${
              tier <= vendor.priceTier ? "text-white" : "text-neutral-700"
            }`}
          >
            $
          </span>
        ))}
      </div>
    );
  };

  return (
    <Link href={`/vendor/${vendor.slug}`} className="group block">
      {/* Image Container */}
      <div className="relative h-80 w-full overflow-hidden mb-6 bg-neutral-900">
        <Image
          src={vendor.coverImage}
          alt={vendor.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest">
            {vendor.category.replace(/_/g, " ")}
          </span>
        </div>

        {/* Arrow Icon */}
        <div className="absolute bottom-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={18} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-2xl font-light group-hover:text-neutral-300 transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {vendor.name}
          </h3>
          {renderPriceTier()}
        </div>

        <div className="flex items-center text-neutral-500 text-sm">
          <MapPin size={14} className="mr-1.5" />
          <span className="tracking-wide">{vendor.city}</span>
        </div>
      </div>
    </Link>
  );
}
