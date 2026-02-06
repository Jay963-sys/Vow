"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import {
  Camera,
  Video,
  Home,
  ClipboardList,
  Palette,
  Music,
} from "lucide-react";

const categories = [
  { label: "All", value: null, icon: null },
  { label: "Photographers", value: "PHOTOGRAPHER", icon: Camera },
  { label: "Videographers", value: "VIDEOGRAPHER", icon: Video },
  { label: "Venues", value: "VENUE", icon: Home },
  { label: "Planners", value: "PLANNER", icon: ClipboardList },
  { label: "Makeup", value: "MAKEUP_ARTIST", icon: Palette },
  { label: "DJs", value: "DJ", icon: Music },
];

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const handleFilterClick = (value: string | null) => {
    router.push(pathname + "?" + createQueryString("category", value));
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((cat) => {
        const isActive = currentCategory === cat.value;
        const Icon = cat.icon;

        return (
          <button
            key={cat.label}
            onClick={() => handleFilterClick(cat.value)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border
              ${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              }
            `}
          >
            {Icon && <Icon size={16} />}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
