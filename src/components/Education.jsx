import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'M.Tech in Computer Science & Engineering',
    school: 'Kalyani Government Engineering College',
    location: 'Kalyani, West Bengal',
    period: '2024 – Present',
    status: 'Currently Pursuing',
    statusColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description:
      'Postgraduate studies focusing on advanced computing topics including AI/ML, distributed systems, and software engineering. Deepening expertise in research-oriented problem solving.',
    icon: '🎓',
    accent: 'from-indigo-500 to-purple-600',
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Maulana Abul Kalam Azad University of Technology',
    location: 'West Bengal',
    period: '2019 – 2023',
    status: 'Completed',
    statusColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    description:
      'Undergraduate program covering core computer science fundamentals including data structures, algorithms, operating systems, database management, and software development.',
    icon: '📚',
    accent: 'from-purple-500 to-cyan-600',
  },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section-padding" aria-labelledby="education-heading">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-widest uppercase">
            // education
          </p>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Academic Journey
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500/20 hidden sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-8" aria-label="Education timeline">
            {education.map((edu, i) => (
              <li
                key={i}
                className={`reveal delay-${(i + 1) * 100} relative sm:pl-16`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3.5 top-7 w-5 h-5 rounded-full bg-gradient-to-br ${edu.accent} shadow-lg hidden sm:flex items-center justify-center`}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-white/80" />
                </div>

                {/* Card */}
                <article className="glass border border-slate-700/50 rounded-2xl p-6 card-hover group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap
                          size={16}
                          className="text-indigo-400 shrink-0"
                          aria-hidden="true"
                        />
                        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-indigo-300 transition-colors">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-indigo-400 font-medium text-sm">{edu.school}</p>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${edu.statusColor} shrink-0`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} aria-hidden="true" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} aria-hidden="true" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">{edu.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
