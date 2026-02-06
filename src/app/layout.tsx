import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Vow | Premium Wedding Directory",
  description:
    "Find the best wedding photographers, venues, and planners in your city.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cormorant.variable}`}>
        <SessionProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
