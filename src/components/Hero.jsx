import React from "react";
import { ArrowDown, Download, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import FeatureSection from "./ui/stack-feature-section";

const RESUME_LINK = "/resume.pdf";

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
      aria-label="Hero section"
    >
      <div className="section-container w-full flex flex-col items-center relative z-10">
        {/* Main Stack Feature Orbit Hero Section */}
        <FeatureSection
          badge={
            <Badge variant="outline" className="gap-2 py-1 px-3.5 bg-white/[0.03] border-white/10 text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-mono text-xs">
                M.Tech Scholar @ KGEC
              </span>
            </Badge>
          }
          title={
            <>
              <span className="text-zinc-50 drop-shadow-sm">Tanmoy</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-700 drop-shadow-md">
                Sarkar.
              </span>
            </>
          }
          description="Computer Science Engineer building cross-platform mobile systems with Flutter, scalable cloud backends with Firebase & MongoDB, and exploring AI/ML algorithms."
        >
          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <Button
              variant="primary"
              size="default"
              onClick={() => handleScrollTo("#projects")}
              className="gap-2 font-mono text-xs sm:text-sm"
            >
              <span>View Projects</span>
              <ArrowDown size={14} />
            </Button>

            <a
              href={RESUME_LINK}
              download="Tanmoy_Sarkar_Resume.pdf"
              aria-label="Download Tanmoy Sarkar's Resume"
            >
              <Button variant="secondary" size="default" className="gap-2 font-mono text-xs sm:text-sm">
                <Download size={14} className="text-zinc-300" />
                <span>Download Resume</span>
              </Button>
            </a>

            <Button
              variant="outline"
              size="default"
              onClick={() => handleScrollTo("#contact")}
              className="gap-2 font-mono text-xs sm:text-sm"
            >
              <Mail size={14} className="text-zinc-300" />
              <span>Contact</span>
            </Button>
          </div>
        </FeatureSection>

        {/* Micro Metric & Status Strip — Seamlessly Blended */}
        <div className="w-full max-w-6xl mt-8 sm:mt-12 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/tanmoy06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-150"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/tanmoy-s-96083525a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-150"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={16} />
            </a>

            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              West Bengal, India
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Open for Software & Research Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
