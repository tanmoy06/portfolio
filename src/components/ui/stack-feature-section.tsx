"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
  FaApple,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiFacebook,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";

const fallbackUrls = [
  "https://cdn.21st.dev/assets/mirror/f2/f2cadfd0d3f726df66f2fbbb0e0c8ae9bbb83e9a4d3c740e2a676e5be2e4edea.svg",
  "https://cdn.21st.dev/assets/localized/efc638778fc594db7cb6c8bf3d98c7672d71dda5e3f4bfb19096581efc367135.svg",
];

export const iconConfigs = [
  { Icon: SiFlutter, color: "#02569B", name: "Flutter" },
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: FaNodeJs, color: "#339933", name: "Node.js" },
  { Icon: FaJava, color: "#EA2D2E", name: "Java" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { Icon: FaDocker, color: "#2496ED", name: "Docker" },
  { Icon: FaGithub, color: "#FFFFFF", name: "GitHub" },
  { Icon: FaLinkedin, color: "#0077B5", name: "LinkedIn" },
  { Icon: SiPython, color: "#3776AB", name: "Python" },
  { Icon: FaAws, color: "#FF9900", name: "AWS" },
  { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { Icon: SiVercel, color: "#FFFFFF", name: "Vercel" },
  { Icon: null, img: fallbackUrls[0], name: "Code" },
  { Icon: null, img: fallbackUrls[1], name: "Cloud" },
];

export interface FeatureSectionProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function FeatureSection({
  badge,
  title = "Build your idea",
  description = "RUIXEN is a modern and responsive UI kit for React, Next.js, and Tailwind CSS.",
  children,
  className = "",
}: FeatureSectionProps) {
  const orbits = [
    { sizeRem: 9, duration: 20 },
    { sizeRem: 16, duration: 28 },
    { sizeRem: 23, duration: 36 },
  ];

  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbits.length);

  return (
    <div className={`relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 py-4 sm:py-6 touch-pan-y ${className}`}>
      {/* Left side: Heading and Text */}
      <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center">
        {badge && <div className="mb-4">{badge}</div>}

        {typeof title === "string" ? (
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight text-zinc-100 leading-[1.08]">
            {title}
          </h1>
        ) : (
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-[1.08]">
            {title}
          </h1>
        )}

        <p className="text-zinc-400 text-sm sm:text-base mb-6 max-w-lg leading-relaxed">
          {description}
        </p>

        {children ? (
          <div>{children}</div>
        ) : (
          <div className="flex items-center gap-3">
            <Button variant="primary">
              <a href="https://ruixen.com" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        )}
      </div>

      {/* Right side: 100% Fully Visible Rotating Orbit System — Non-blocking touch scroll */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-2 sm:p-4 touch-pan-y">
        {/* Ambient Subtle Radial Glow */}
        <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Orbit Wheel Container — touch-pan-y allows seamless mobile scrolling */}
        <div className="relative w-[23rem] h-[23rem] sm:w-[25rem] sm:h-[25rem] lg:w-[27rem] lg:h-[27rem] flex items-center justify-center shrink-0 pointer-events-none select-none touch-pan-y">
          {/* Central Core Engine */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-950/90 border border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.35)] flex items-center justify-center z-20 backdrop-blur-md pointer-events-auto">
            <SiFlutter className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 animate-pulse" />
          </div>

          {/* Concentric Full Orbit Rings */}
          {orbits.map((orbit, orbitIdx) => {
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border border-dashed border-zinc-700/50 pointer-events-none"
                style={{
                  width: `${orbit.sizeRem}rem`,
                  height: `${orbit.sizeRem}rem`,
                  animation: `spinOrbit ${orbit.duration}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(
                    orbitIdx * iconsPerOrbit,
                    orbitIdx * iconsPerOrbit + iconsPerOrbit
                  )
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-zinc-900/95 border border-white/15 rounded-full p-2 sm:p-2.5 shadow-xl backdrop-blur-sm transition-transform hover:scale-125 hover:border-cyan-400 cursor-pointer pointer-events-auto select-none touch-pan-y"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        title={cfg.name || "Technology"}
                      >
                        {/* Counter-rotate inner icon so it stays upright as orbit revolves */}
                        <div
                          style={{
                            animation: `spinOrbit ${orbit.duration}s linear infinite reverse`,
                          }}
                        >
                          {cfg.Icon ? (
                            <cfg.Icon
                              className="w-4 h-4 sm:w-5 sm:h-5 pointer-events-none"
                              style={{ color: cfg.color }}
                            />
                          ) : (
                            <img
                              src={cfg.img}
                              alt="icon"
                              className="w-4 h-4 sm:w-5 sm:h-5 object-contain pointer-events-none"
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
