import { useState } from "react";
import { ExternalLink, Folder } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";

const categories = ["All", "Mobile App", "Backend", "CS Fundamentals"];

const categoryColors = {
  "Mobile App": "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
  Backend: "bg-purple-500/15 text-purple-400 border-purple-500/25",
  "CS Fundamentals": "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useScrollReveal();

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="reveal mb-8 text-center">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-widest uppercase">
            // projects
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            My Work
          </h2>
          <div className="section-divider mx-auto mt-3" />
          <p className="mt-4 text-slate-400 text-sm max-w-xl mx-auto">
            Real projects from{" "}
            <a
              href="https://github.com/tanmoy06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
            >
              github.com/tanmoy06
            </a>
            . No fabricated descriptions.
          </p>
        </div>

        {/* Category filter */}
        <div
          className="reveal flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/20"
                  : "glass border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="reveal glass border border-slate-700/50 rounded-2xl p-6 flex flex-col card-hover group"
              style={{ transitionDelay: `${i * 80}ms` }}
              aria-labelledby={`project-title-${project.id}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  <Folder size={18} aria-hidden="true" />
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                    categoryColors[project.category] ||
                    "bg-slate-700 text-slate-300 border-slate-600"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3
                id={`project-title-${project.id}`}
                className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors"
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div
                className="flex flex-wrap gap-1.5 mb-5"
                aria-label="Technologies used"
              >
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GitHubIcon size={14} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                    aria-label={`View live demo of ${project.name}`}
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View all on GitHub */}
        <div className="reveal mt-10 text-center delay-400">
          <a
            href="https://github.com/tanmoy06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-slate-700 text-slate-300 font-medium text-sm hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-200 hover:scale-[1.02]"
          >
            <GitHubIcon size={16} />
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
