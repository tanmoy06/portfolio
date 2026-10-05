import { useScrollReveal } from "../hooks/useScrollReveal";
import { Star, GitFork, ArrowRight } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";

export default function GitHubSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="github"
      className="section-padding"
      aria-labelledby="github-heading"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="reveal">
          <div className="glass border border-slate-700/50 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* GitHub icon */}
            <div className="relative inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-white">
              <GitHubIcon size={40} />
            </div>

            <h2
              id="github-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Explore My GitHub
            </h2>
            <div className="section-divider mx-auto mb-6" />

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Browse my repositories to see my development work, open-source
              contributions, and coding practice. All projects listed in this
              portfolio are publicly available on GitHub.
            </p>

            {/* Stats note */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Star
                  size={14}
                  className="text-yellow-400"
                  aria-hidden="true"
                />
                <span>Real repositories — no fabricated stats</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <GitFork
                  size={14}
                  className="text-indigo-400"
                  aria-hidden="true"
                />
                <span>Public profile</span>
              </div>
            </div>

            <a
              href="https://github.com/tanmoy06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-xl hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-[1.03]"
              aria-label="View Tanmoy Sarkar's GitHub profile"
            >
              <GitHubIcon size={18} />
              View GitHub Profile
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
