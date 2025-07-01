import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asif Mahmud - Creative Designer & Developer",
  description: "Product Designer, UI/UX Designer, and Creative Developer passionate about crafting beautiful digital experiences.",
  keywords: ["product design", "UI/UX", "branding", "video editing", "content writing", "creative designer"],
  authors: [{ name: "Asif Mahmud" }],
  openGraph: {
    title: "Asif Mahmud - Creative Designer & Developer",
    description: "Product Designer, UI/UX Designer, and Creative Developer passionate about crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
