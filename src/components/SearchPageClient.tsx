"use client";

import VendorCard from "@/components/VendorCard";
import FilterBar from "@/components/FilterBar";

interface SearchPageClientProps {
  vendors: any[];
  city?: string;
  category?: string;
  q?: string;
}

export default function SearchPageClient({
  vendors,
  city,
  category,
  q,
}: SearchPageClientProps) {
  // Format category for display
  const categoryDisplay = category
    ? category
        .replace(/_/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (l) => l.toUpperCase())
    : null;

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-sm tracking-widest text-neutral-500 mb-4">
              {categoryDisplay ? categoryDisplay.toUpperCase() : "ALL SERVICES"}
            </p>
            <h1
              className="text-6xl md:text-7xl font-light leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {categoryDisplay ? (
                <>
                  Discover
                  <br />
                  <span className="italic">Exceptional {categoryDisplay}s</span>
                </>
              ) : (
                <>
                  Find Your
                  <br />
                  <span className="italic">Perfect Match</span>
                </>
              )}
            </h1>
            {city && (
              <p className="text-xl text-neutral-400 font-light">
                Showing results in <span className="text-white">{city}</span>
              </p>
            )}
          </div>

          {/* Filter Bar */}
          <FilterBar />
        </div>

        {/* Results Count */}
        {vendors.length > 0 && (
          <div className="mb-8 pb-6 border-b border-white/10">
            <p className="text-sm text-neutral-500 tracking-wide">
              {vendors.length} {vendors.length === 1 ? "vendor" : "vendors"}{" "}
              found
            </p>
          </div>
        )}

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {vendors.length === 0 && (
          <div className="text-center py-32">
            <div className="max-w-lg mx-auto space-y-6">
              <div className="w-24 h-24 mx-auto border border-white/10 rounded-full flex items-center justify-center">
                <span
                  className="text-4xl"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  ∅
                </span>
              </div>
              <h3
                className="text-4xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                No Results Found
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {city && categoryDisplay
                  ? `We couldn't find any ${categoryDisplay.toLowerCase()}s in ${city}.`
                  : city
                    ? `We couldn't find any vendors in ${city}.`
                    : categoryDisplay
                      ? `We couldn't find any ${categoryDisplay.toLowerCase()}s matching your criteria.`
                      : "Try adjusting your filters to discover more vendors."}
              </p>
              <p className="text-sm text-neutral-600 pt-4">
                Refine your search or explore other categories
              </p>
            </div>
          </div>
        )}
      </div>

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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
