import React from "react";
import { ArrowUpRight, Terminal, GitBranch, ShieldCheck } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { SpotlightCard } from "./ui/SpotlightCard";

export default function GitHubSection() {
  return (
    <section id="github" className="section-spacing relative" aria-labelledby="github-heading">
      <div className="section-container">
        <SpotlightCard className="p-8 sm:p-12 lg:p-14 border-cyan-500/25 bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-cyan-950/30 shadow-[0_0_50px_-15px_rgba(56,189,248,0.15)]">
          <div className="max-w-3xl mx-auto text-center">
            {/* Terminal Header Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-[0_0_20px_-3px_rgba(6,182,212,0.3)]">
              <GitHubIcon size={26} />
            </div>

            <Badge variant="cyan" className="mb-4">
              Open Source & Engineering
            </Badge>

            <h2
              id="github-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Explore My GitHub Activity
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl mx-auto">
              Dive into my open source commits, mobile applications, API architectures, and data structures. Every repository represents genuine code and authentic learning.
            </p>

            {/* Systematic Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>100% Genuine Code</span>
              </span>
              <span className="flex items-center gap-1.5">
                <GitBranch size={14} className="text-cyan-400" />
                <span>Public Repositories</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal size={14} className="text-purple-400" />
                <span>Flutter • Java • Node.js</span>
              </span>
            </div>

            {/* Action CTA */}
            <a
              href="https://github.com/tanmoy06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="primary" size="lg" className="gap-2 font-mono text-xs sm:text-sm">
                <GitHubIcon size={18} />
                <span>Visit @tanmoy06 on GitHub</span>
                <ArrowUpRight size={14} />
              </Button>
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
