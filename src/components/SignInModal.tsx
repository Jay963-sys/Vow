"use client";

import { signIn } from "next-auth/react";
import { X, Loader2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { registerUser } from "@/app/actions";

export default function SignInModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  async function handleEmailAuth(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    if (mode === "signup") {
      const result = await registerUser(formData);
      if (result.error) {
        setError(result.error);
        setLoading(false);
        return;
      }
      setMode("signin");
      setError("Account created! Please log in.");
      setLoading(false);
    } else {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        setLoading(false);
      } else {
        onClose();
        window.location.reload();
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-neutral-950 border border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all duration-300 group"
        >
          <X
            size={18}
            className="text-white group-hover:rotate-90 transition-transform duration-300"
          />
        </button>

        {/* Header */}
        <div className="px-12 pt-16 pb-8 border-b border-white/10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-3 font-serif">
            {mode === "signin" ? "Welcome Back" : "Join Vow"}
          </h2>
          <p className="text-neutral-400 font-light">
            {mode === "signin"
              ? "Sign in to access your planner and saved vendors"
              : "Create an account to discover exceptional professionals"}
          </p>
        </div>

        {/* Content */}
        <div className="px-12 py-10 space-y-8">
          {/* Social Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => signIn("google")}
              className="group w-full flex items-center justify-between px-6 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-white"
            >
              <div className="flex items-center gap-3">
                {/* Google Logo */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.20454Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-light tracking-wide">
                  Continue with Google
                </span>
              </div>
              <ArrowRight
                size={18}
                className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              />
            </button>

            <button
              onClick={() => signIn("apple")}
              className="group w-full flex items-center justify-between px-6 py-4 bg-white text-black hover:bg-neutral-100 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {/* Apple Logo */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2043 18.4447C14.5093 19.6447 13.7393 20.8397 12.5193 20.8597C11.3193 20.8797 10.9193 20.1297 9.53931 20.1297C8.15931 20.1297 7.71931 20.8397 6.57931 20.8797C5.39931 20.9197 4.52931 19.5897 3.82931 18.3947C2.39931 15.9647 1.29931 11.4997 2.76931 8.42969C3.49931 6.90969 4.95931 5.91969 6.55931 5.89969C7.71931 5.87969 8.81931 6.71969 9.52931 6.71969C10.2393 6.71969 11.5793 5.69969 13.0093 5.84969C13.6293 5.87969 15.3993 6.10969 16.5793 7.75969C16.4793 7.81969 14.3193 9.08969 14.3393 11.6297C14.3593 14.6397 16.9393 15.6397 16.9793 15.6597C16.9393 15.7397 16.5993 16.9797 15.2043 18.4447ZM12.0993 3.87969C12.6793 3.18969 13.0693 2.21969 12.9493 1.23969C12.1093 1.27969 11.0893 1.80969 10.4893 2.49969C9.94931 3.11969 9.47931 4.10969 9.61931 5.05969C10.5593 5.12969 11.5193 4.57969 12.0993 3.87969Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="font-light tracking-wide">
                  Continue with Apple
                </span>
              </div>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-neutral-950 text-xs text-neutral-500 tracking-widest">
                OR
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailAuth} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="block text-xs text-neutral-500 tracking-widest mb-2">
                  FULL NAME
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300"
                />
              </div>
            )}

            <div>
              <label className="block text-xs text-neutral-500 tracking-widest mb-2">
                EMAIL
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label className="block text-xs text-neutral-500 tracking-widest mb-2">
                PASSWORD
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-5 py-4 bg-transparent border border-white/20 text-white placeholder-neutral-600 focus:border-white/40 focus:outline-none transition-colors duration-300"
              />
            </div>

            {error && (
              <div className="px-4 py-3 border border-red-500/20 bg-red-500/10">
                <p className="text-red-400 text-sm font-light">{error}</p>
              </div>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-white text-black font-medium py-4 hover:bg-neutral-100 transition-all duration-300 flex justify-center items-center tracking-wide disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span>
                    {mode === "signin" ? "Sign In" : "Create Account"}
                  </span>
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </>
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="text-center pt-4 border-t border-white/10">
            {mode === "signin" ? (
              <p className="text-sm text-neutral-400">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setMode("signup");
                    setError("");
                  }}
                  className="text-white font-medium hover:underline underline-offset-4 transition-all duration-300"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-sm text-neutral-400">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setMode("signin");
                    setError("");
                  }}
                  className="text-white font-medium hover:underline underline-offset-4 transition-all duration-300"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
