import React from "react";
import { skillGroups } from "../data/skills";
import { Badge } from "./ui/Badge";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Layers } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="section-spacing relative" aria-labelledby="skills-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-3">
            03 // Technical Stack
          </Badge>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
          >
            Skills & Tooling
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Technologies and frameworks applied across real projects, backend APIs, and mobile systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <SpotlightCard key={group.label} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">
                      {group.icon}
                    </span>
                    <h3 className="font-semibold text-sm text-zinc-100">
                      {group.label}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {group.skills.length} techs
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/60 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-150 cursor-default"
                    >
                      <span aria-hidden="true" className="text-xs">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-zinc-500">
            * All technologies listed are verified from actual repository codebases and academic transcripts.
          </p>
        </div>
      </div>
    </section>
  );
}
