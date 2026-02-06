"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SignInModal from "./SignInModal";

export default function AuthTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300"
      >
        Sign In / Sign Up
        <ArrowUpRight className="ml-2 w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      </button>

      <SignInModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
