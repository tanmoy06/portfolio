import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillGroups } from '../data/skills';

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-widest uppercase">
            // skills
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Technical Skills
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              className={`reveal delay-${Math.min((gi + 1) * 100, 500)} glass border border-slate-700/50 rounded-2xl p-6 card-hover group`}
            >
              {/* Group header */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl" aria-hidden="true">{group.icon}</span>
                <h3 className="font-semibold text-white text-sm">{group.label}</h3>
              </div>

              {/* Skill list */}
              <ul className="flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                        bg-slate-800/60 text-slate-300 border border-slate-700/60
                        hover:bg-indigo-600/20 hover:border-indigo-500/40 hover:text-indigo-300
                        transition-all duration-200 cursor-default"
                    >
                      <span aria-hidden="true">{skill.icon}</span>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="reveal mt-8 text-center text-xs text-slate-500 delay-500">
          Skills are based on my resume and confirmed GitHub repositories.
        </p>
      </div>
    </section>
  );
}
