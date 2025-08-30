// app/page.tsx
// Main home page with Iron Man theme
"use client"; // Required for client-side rendering in Next.js

// React and Next.js important components import
import Image from "next/image"; // For optimizing images
import Link from "next/link";   // For navigation between pages
import React from "react";      // React library

// Home component - main function that renders the page
export default function Home() {

  return (
    // Main container with background image
    <main className="w-screen h-screen relative overflow-hidden">

      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/main bg.jpg')",
          opacity: 0.6 // Background opacity for better readability
        }}
      />

      {/* JARVIS Interface Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black/60 to-red-950/40"></div>

      {/* Circuit Pattern Overlay - Electronic circuits effect */}
      <div className="absolute inset-0 opacity-20">
        {/* Horizontal glowing line - moves from left to right */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
        {/* Vertical glowing line - moves from top to bottom with 1 second delay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* JARVIS Grid Lines - Iron Man interface style grid lines */}
      <div className="absolute inset-0 opacity-30">
        {/* Vertical Lines - Straight vertical lines (top to bottom) */}
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>
        <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"></div>

        {/* Horizontal Lines - Straight horizontal lines (left to right) */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
      </div>

      {/* JARVIS Corner Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-blue-400/60 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-blue-400/60 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-blue-400/60 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-blue-400/60 animate-pulse"></div>

      {/* Hero Section */}
      <div
        className="
          flex min-h-screen
          flex-col items-center justify-center
          md:flex-row md:items-center md:justify-start
          relative z-10
        "
      >
        {/* JARVIS Interface Panel - Moved to right bottom corner */}
        <div className="absolute bottom-8 right-8 hidden md:block z-30">
          <div className="bg-black/60 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 text-sm font-mono">JARVIS ONLINE</span>
            </div>
            <div className="text-xs text-blue-300/70 font-mono">
              <div>STATUS: OPERATIONAL</div>
              <div>POWER: 100%</div>
              <div>SYSTEMS: ALL GREEN</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pl-6 pr-6 pt-10 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[60px] md:text-[70px] text-white font-extrabold leading-tight text-center md:text-left spider-text-glow">
  अस्थ वृत्तः संस्था
</h1>

<h2 className="text-[20px] md:text-[28px] text-white font-medium leading-snug text-center md:text-left mt-4">
  A wanderer finds the path
</h2>


          <p className="text-cyan-100 text-center md:text-left">
            Greetings, I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 spider-text-glow">
              {" "}Manan Pathak
            </span> – your advanced AI-assisted full-stack developer and digital architect.
            Specializing in next-generation web technologies.
            A engineer turns impossible into reality!
            Let’s build something amazing together.
          </p>

          {/* JARVIS-style Header */}
          <div className="mb-4">
            <div className="text-blue-400 text-sm font-mono mb-2 animate-pulse">INITIALIZING PORTFOLIO INTERFACE...</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-4"></div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-row gap-5">
            <Link
              href="/my-skills"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 text-lg text-white max-w-[200px] rounded-lg border border-blue-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Learn more</span>
            </Link>
            <Link
              href="/my-projects"
              className="group relative bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-6 py-3 text-lg text-white max-w-[200px] rounded-lg border border-gray-600/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(107,114,128,0.5)] font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">My Projects</span>
            </Link>
            <Link
              href="/contact-me"
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-6 py-3 text-lg text-white max-w-[200px] rounded-lg border border-red-400/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Contact me</span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-5 md:hidden mt-5 items-center">
            <Link
              href="/my-skills"
              className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Iron Man Metallic Theme */}
      <div className="absolute bottom-0 right-0 hidden md:block lg:translate-y-6">
        {/* Metallic Background */}
        <div className="relative z-10 w-[500px] h-[500px] lg:translate-y-28">
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-black/50 to-transparent rounded-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-yellow-500/10 rounded-lg"></div>
        </div>
        {/* Iron Man Arc Reactor Effect */}
        <div className="absolute bottom-[265px] right-[160px] z-20 scale-110 lg:translate-y-4">
          <div className="relative w-[380px] h-[380px]">
            {/* Arc Reactor Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-300 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-200 rounded-full opacity-90 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full animate-pulse"></div>
            {/* Metallic Frame */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-red-600 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-2 border-yellow-500 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Static Stars */}
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-0 left-0 z-[1]"
        unoptimized
      />
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-10 right-10 z-[1] opacity-80"
        unoptimized
      />
      <Image
        src="/stars.png"
        alt="stars"
        width={250}
        height={250}
        className="absolute top-20 left-[40%] z-[1] opacity-60"
        unoptimized
      />
      <Image
        src="/stars.png"
        alt="stars"
        width={200}
        height={200}
        className="absolute top-[30%] left-[70%] z-[1] opacity-70"
        unoptimized
      />

      {/* Simple Shooting Stars with CSS Animation */}
      <div className="z-[15] absolute w-full h-full pointer-events-none">
        <div className="shooting-star"></div>
        <div className="shooting-star" style={{animationDelay: '2s', top: '20%', left: '30%'}}></div>
        <div className="shooting-star" style={{animationDelay: '4s', top: '60%', left: '70%'}}></div>
      </div>
    </main>
  );
}
