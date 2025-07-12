import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Company Profile Generator",
  description: "Generate comprehensive company profiles with AI-powered analysis",
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
        {/* Geometric Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Large squares */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 transform -translate-x-32 -translate-y-32 rotate-12"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-400 to-blue-500 opacity-10 transform translate-x-48 -translate-y-48 -rotate-12"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-400 to-red-500 opacity-10 transform -translate-x-40 translate-y-40 rotate-45"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-yellow-400 to-orange-500 opacity-10 transform translate-x-36 translate-y-36 -rotate-30"></div>
          
          {/* Medium squares */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-15 transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-bl from-teal-400 to-cyan-500 opacity-15 transform -rotate-30"></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-tr from-rose-400 to-pink-600 opacity-15 transform rotate-60"></div>
          <div className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-gradient-to-tl from-amber-400 to-yellow-500 opacity-15 transform -rotate-45"></div>
          
          {/* Small squares */}
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 opacity-20 transform translate-x-8 translate-y-8 rotate-15"></div>
          <div className="absolute top-2/3 right-1/2 w-20 h-20 bg-gradient-to-bl from-emerald-400 to-green-500 opacity-20 transform -translate-x-10 translate-y-10 -rotate-20"></div>
          <div className="absolute bottom-1/2 left-2/3 w-24 h-24 bg-gradient-to-tr from-red-400 to-pink-500 opacity-20 transform translate-x-12 -translate-y-12 rotate-25"></div>
          <div className="absolute bottom-2/3 right-2/3 w-28 h-28 bg-gradient-to-tl from-orange-400 to-red-500 opacity-20 transform -translate-x-14 -translate-y-14 -rotate-35"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
