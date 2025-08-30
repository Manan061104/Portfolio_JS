// Navbar Component - Top navigation bar
"use client"; // Required for client-side rendering

// React and Next.js components import
import React from "react";
import Image from "next/image"; // Next.js optimized component for images
import { Socials } from "@/constants"; // Social media links data from constants file

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] md:h-[100px] bg-transparent flex justify-between items-center px-4 sm:px-6 md:px-20 md:-mt-2">
      {/* Logo + Name */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative">
          {/* Iron Man Mask Logo */}
          <div className="w-10 h-10 relative">
            {/* Mask Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-700 to-red-900 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0.5 bg-gradient-to-b from-yellow-500 via-red-600 to-red-800 rounded-lg transform rotate-45"></div>

            {/* Mask Face Shape */}
            <div className="absolute inset-1 bg-gradient-to-b from-red-500 to-red-800 rounded-lg"></div>

            {/* Eye Slits */}
            <div className="absolute top-2 left-1.5 w-1.5 h-1 bg-blue-400 rounded-sm animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
            <div className="absolute top-2 right-1.5 w-1.5 h-1 bg-blue-400 rounded-sm animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>

            {/* Mouth/Vent Area */}
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-blue-300 rounded-full animate-pulse opacity-80"></div>

            {/* Metallic Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg"></div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-red-500/30 rounded-lg blur-sm animate-pulse"></div>
          </div>
        </div>
        <h1 className="text-white text-[18px] sm:text-[22px] md:text-[25px] font-semibold">
          Manan Pathak
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"></span>
        </h1>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 items-center">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-200 sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
