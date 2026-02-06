import { auth } from "@/auth";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OnboardingForm from "./OnboardingForm";
import AuthTrigger from "@/components/AuthTrigger";

export default async function OnboardingPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white px-6">
        <div className="max-w-lg text-center space-y-8">
          {/* Icon or Badge */}
          <div className="w-20 h-20 mx-auto border border-white/20 flex items-center justify-center">
            <span className="text-4xl font-serif">V</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light font-serif">
              Sign In
              <br />
              <span className="italic text-neutral-400">to Continue</span>
            </h1>
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              You need an account to list your business on our curated
              marketplace.
            </p>
          </div>

          <div className="pt-4">
            <AuthTrigger />
          </div>
          {/* Helper Text */}
          <p className="text-sm text-neutral-600 pt-8">
            New to Vow? Creating an account takes less than a minute.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 space-y-6">
          <div className="inline-block px-4 py-2 border border-white/20 text-xs tracking-widest">
            VENDOR ONBOARDING
          </div>

          <h1 className="text-5xl md:text-6xl font-light leading-tight font-serif">
            Create Your
            <br />
            <span className="italic text-neutral-400">Business Profile</span>
          </h1>

          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
            Share your story, showcase your work, and connect with couples who
            value exceptional craftsmanship.
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3 pt-4">
            <div className="h-px bg-white flex-1" />
            <div className="h-px bg-white/20 flex-1" />
            <div className="h-px bg-white/20 flex-1" />
            <div className="h-px bg-white/20 flex-1" />
          </div>
          <p className="text-sm text-neutral-500 tracking-wide">Step 1 of 4</p>
        </div>

        {/* Form Component */}
        <OnboardingForm />

        {/* Help Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="text-center space-y-4">
            <p className="text-neutral-400 font-light">
              Need assistance? We're here to help.
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
    </div>
  );
}
