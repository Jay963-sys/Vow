"use client";

import { useActionState } from "react";
import { createVendorProfile } from "@/app/actions";
import { Loader2, ArrowRight } from "lucide-react";

export default function OnboardingForm() {
  const [state, formAction, isPending] = useActionState(
    createVendorProfile,
    null,
  );

  return (
    <form action={formAction} className="space-y-8">
      {/* Business Name */}
      <div>
        <label className="block text-xs text-neutral-500 tracking-widest mb-3">
          BUSINESS NAME
        </label>
        <input
          name="name"
          type="text"
          required
          className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300"
          placeholder="Dreamy Shots Photography"
        />
      </div>

      {/* Category & Price Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs text-neutral-500 tracking-widest mb-3">
            CATEGORY
          </label>
          <select
            name="category"
            className="w-full px-5 py-4 bg-neutral-950 border border-white/20 text-white focus:border-white/40 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.25rem center",
            }}
          >
            <option value="PHOTOGRAPHER">Photographer</option>
            <option value="VENUE">Venue</option>
            <option value="VIDEOGRAPHER">Videographer</option>
            <option value="PLANNER">Planner</option>
            <option value="MAKEUP_ARTIST">Makeup Artist</option>
            <option value="DJ">DJ / Music</option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-neutral-500 tracking-widest mb-3">
            PRICE RANGE
          </label>
          <select
            name="priceTier"
            className="w-full px-5 py-4 bg-neutral-950 border border-white/20 text-white focus:border-white/40 focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.25rem center",
            }}
          >
            <option value="1">$ (Budget Friendly)</option>
            <option value="2">$$ (Standard)</option>
            <option value="3">$$$ (Luxury)</option>
          </select>
        </div>
      </div>

      {/* City */}
      <div>
        <label className="block text-xs text-neutral-500 tracking-widest mb-3">
          CITY / LOCATION
        </label>
        <input
          name="city"
          type="text"
          required
          className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300"
          placeholder="Lagos, Nigeria"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs text-neutral-500 tracking-widest mb-3">
          BUSINESS PHONE / WHATSAPP
        </label>
        <input
          name="phone"
          type="tel"
          required
          className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300"
          placeholder="+234 XXX XXX XXXX"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs text-neutral-500 tracking-widest mb-3">
          ABOUT YOUR BUSINESS
        </label>
        <textarea
          name="description"
          rows={6}
          required
          className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Describe your style, experience, and what makes you unique. Share what sets you apart and why couples should choose you for their special day."
        />
        <p className="text-xs text-neutral-600 mt-2 tracking-wide">
          Minimum 100 characters
        </p>
      </div>

      {/* Error Message */}
      {state?.error && (
        <div className="px-5 py-4 border border-red-500/20 bg-red-500/10">
          <p className="text-red-400 text-sm font-light">{state.error}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="group w-full py-5 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <span>Create Profile</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </>
          )}
        </button>
      </div>

      {/* Helper Text */}
      <div className="text-center pt-4">
        <p className="text-sm text-neutral-500">
          By creating a profile, you agree to our{" "}
          <a
            href="/terms"
            className="text-white hover:underline underline-offset-4"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-white hover:underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </form>
  );
}
