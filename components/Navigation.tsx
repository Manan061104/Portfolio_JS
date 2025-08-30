"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isClient, setIsClient] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [path, isRouting]);

  if (!isClient) {
    // Render static nav links without dynamic active styles before hydration
    return (
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[50] w-16 bg-gradient-to-b from-red-900/80 via-black/90 to-red-900/80 backdrop-blur-sm border border-red-500/50 rounded-2xl flex flex-col items-center py-4 gap-4 shadow-2xl shadow-red-500/20">
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-red-600/30"
            onClick={() => {
              // Navigation click handler for debugging
              console.log(`Navigating to: ${nav.link}`);
            }}
          >
            <nav.icon className="w-6 h-6 text-white group-hover:text-red-300 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Keep transition separate so it doesn't affect layout */}
      {isRouting && <Transition />}

      {/* Iron Man Themed Left Sidebar Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[50] w-16 bg-gradient-to-b from-red-900/80 via-black/90 to-red-900/80 backdrop-blur-sm border border-red-500/50 rounded-2xl flex flex-col items-center py-4 gap-4 shadow-2xl shadow-red-500/20">
        {/* Arc Reactor Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-b from-red-500/20 via-blue-500/10 to-red-500/20 rounded-2xl blur-sm animate-pulse"></div>

        {NavLinks.map((nav, index) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-red-600/30 hover:scale-110"
            onClick={() => {
              // Navigation click handler for debugging
              console.log(`Navigating to: ${nav.link}`);
            }}
          >
            {/* Active state glow */}
            {path === nav.link && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-blue-300/40 to-blue-400/30 rounded-xl animate-pulse"></div>
            )}

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <nav.icon
              className={`w-6 h-6 relative z-10 transition-all duration-300 ${
                path === nav.link
                  ? "text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.8)]"
                  : "text-white group-hover:text-red-300"
              }`}
            />

            {/* Metallic shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform skew-x-12"></div>
          </Link>
        ))}

        {/* Bottom accent line */}
        <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-2"></div>
      </div>
    </>
  );
};

export default Navigation;
