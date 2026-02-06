"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

export default function HomeSearchBox() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("PHOTOGRAPHER");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/search?city=${encodeURIComponent(city)}&category=${category}`,
    );
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl w-full mx-auto"
    >
      {/* Category Dropdown */}
      <div className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-100">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full h-14 pl-4 pr-10 bg-transparent outline-none text-gray-900 font-medium appearance-none cursor-pointer"
        >
          <option value="PHOTOGRAPHER">Photographers</option>
          <option value="VENUE">Venues</option>
          <option value="MAKEUP_ARTIST">Makeup Artists</option>
          <option value="VIDEOGRAPHER">Videographers</option>
          <option value="PLANNER">Wedding Planners</option>
          <option value="DJ">DJs & Music</option>
        </select>
        {/* Custom Arrow Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      {/* City Input */}
      <div className="relative flex-[1.5] flex items-center px-4">
        <MapPin className="text-gray-400 mr-3" size={20} />
        <input
          type="text"
          placeholder="Which city? (e.g. Chicago)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full h-14 bg-transparent outline-none text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="h-14 px-8 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
      >
        <Search size={20} />
        <span className="md:hidden lg:inline">Search</span>
      </button>
    </form>
  );
}
