import { useScrollReveal } from '../hooks/useScrollReveal';
import { Code2, Smartphone, Database, Brain } from 'lucide-react';

const highlights = [
  { icon: <Smartphone size={20} />, label: 'Mobile Development', color: 'text-indigo-400' },
  { icon: <Code2 size={20} />, label: 'Java & Dart', color: 'text-purple-400' },
  { icon: <Database size={20} />, label: 'Firebase & MongoDB', color: 'text-orange-400' },
  { icon: <Brain size={20} />, label: 'AI / ML Interests', color: 'text-cyan-400' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-widest uppercase">
            // about me
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Who I Am
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-5">
            <p className="reveal text-slate-300 leading-relaxed text-base sm:text-lg delay-100">
              I&apos;m <strong className="text-white font-semibold">Tanmoy Sarkar</strong>, a Computer
              Science engineer from West Bengal, India. I completed my{' '}
              <strong className="text-indigo-400">B.Tech in Computer Science & Engineering</strong>{' '}
              from Maulana Abul Kalam Azad University of Technology and I&apos;m currently pursuing my{' '}
              <strong className="text-indigo-400">M.Tech in CSE</strong> at Kalyani Government
              Engineering College.
            </p>
            <p className="reveal text-slate-300 leading-relaxed text-base sm:text-lg delay-200">
              My primary focus is <strong className="text-white font-medium">mobile development</strong>{' '}
              — I enjoy building cross-platform applications using{' '}
              <strong className="text-cyan-400">Flutter</strong> and Dart, backed by cloud services
              like <strong className="text-orange-400">Firebase</strong> and databases like{' '}
              <strong className="text-emerald-400">MongoDB</strong>. I also work with Java and Node.js
              for backend solutions.
            </p>
            <p className="reveal text-slate-300 leading-relaxed text-base sm:text-lg delay-300">
              Beyond development, I&apos;m actively exploring{' '}
              <strong className="text-purple-400">Artificial Intelligence and Machine Learning</strong>{' '}
              as part of my postgraduate studies. I enjoy solving problems with clean, maintainable
              code and building software that is practical and user-friendly.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="reveal delay-200">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="glass p-5 rounded-xl border border-slate-700/50 card-hover group"
                >
                  <div className={`${h.color} mb-3 group-hover:scale-110 transition-transform duration-200`}>
                    {h.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-200">{h.label}</p>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="mt-4 glass p-5 rounded-xl border border-slate-700/50">
              <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <ul className="space-y-2">
                {[
                  ['📍', 'West Bengal, India'],
                  ['🎓', 'M.Tech CSE — Currently Pursuing'],
                  ['💼', 'Open to opportunities'],
                  ['📧', 'iamtanmoysarkar007@gmail.com'],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-slate-300">
                    <span aria-hidden="true">{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
