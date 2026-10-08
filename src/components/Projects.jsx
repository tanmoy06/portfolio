import React, { useState } from "react";
import { FolderGit2, ExternalLink, ArrowUpRight } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import { projects } from "../data/projects";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { SpotlightCard } from "./ui/SpotlightCard";

const categories = ["All", "Mobile App", "Backend", "CS Fundamentals"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-spacing relative" aria-labelledby="projects-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Badge variant="cyan" className="mb-3">
              04 // Code & Repositories
            </Badge>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
            >
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl">
              A collection of mobile applications, backend systems, and engineering projects.
            </p>
          </div>

          {/* Minimalist Category Tabs */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-white/10"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-150 cursor-pointer select-none ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 text-cyan-300 shadow-sm border border-cyan-500/40"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="p-6 sm:p-7 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <FolderGit2 size={18} />
                  </div>
                  <Badge variant="outline" className="text-[11px]">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-cyan-500/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-cyan-300 transition-colors"
                  >
                    <GitHubIcon size={14} />
                    <span>View Repository</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Global GitHub CTA Footer */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/tanmoy06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button variant="outline" size="lg" className="gap-2 font-mono text-xs">
              <GitHubIcon size={16} />
              <span>Explore All Repositories on GitHub</span>
              <ArrowUpRight size={13} className="opacity-60" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
