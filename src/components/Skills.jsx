import React from "react";
import { skillGroups } from "../data/skills";
import { Badge } from "./ui/Badge";
import { SpotlightCard } from "./ui/SpotlightCard";

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
            Technologies, programming languages, and frameworks applied across real projects, backend APIs, and mobile systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <SpotlightCard key={group.label} className="p-6 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                        {GroupIcon && <GroupIcon size={16} />}
                      </div>
                      <h3 className="font-semibold text-sm text-zinc-100 group-hover:text-white transition-colors">
                        {group.label}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">
                      {group.skills.length} techs
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-white transition-all duration-150 cursor-default select-none shadow-sm"
                        >
                          {SkillIcon && (
                            <SkillIcon
                              size={14}
                              style={{ color: skill.color || "#38BDF8" }}
                              className="shrink-0 transition-transform group-hover:scale-110"
                              aria-hidden="true"
                            />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
