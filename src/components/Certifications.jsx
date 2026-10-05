import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink, Award, Calendar, Building2 } from 'lucide-react';

// Certificate data from the provided Google Drive links.
// Names/orgs are inferred from the resume context; adjust once certificates are viewed.
const certifications = [
  {
    id: 1,
    title: 'Certificate of Achievement',
    organization: 'Issuing Organization',
    note: 'View the certificate for exact details.',
    year: null,
    link: 'https://drive.google.com/file/d/1UDnSH1i7I37SVHAMX8jEjYlpj7ABsvVc/view?usp=drive_link',
    color: 'from-indigo-500/20 to-purple-500/20',
    border: 'border-indigo-500/30',
    accent: 'text-indigo-400',
  },
  {
    id: 2,
    title: 'Certificate of Completion',
    organization: 'Issuing Organization',
    note: 'View the certificate for exact details.',
    year: null,
    link: 'https://drive.google.com/file/d/1rFLb0ne0Tkb0TZbx1yRB-VHOOX4IzkjV/view?usp=drive_link',
    color: 'from-purple-500/20 to-cyan-500/20',
    border: 'border-purple-500/30',
    accent: 'text-purple-400',
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section
      id="certifications"
      className="section-padding"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-mono text-indigo-400 mb-2 tracking-widest uppercase">
            // certifications
          </p>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Certifications
          </h2>
          <div className="section-divider mx-auto mt-3" />
        </div>

        {/* Certificate cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <article
              key={cert.id}
              className={`reveal delay-${(i + 1) * 100} glass rounded-2xl p-6 border ${cert.border} card-hover group bg-gradient-to-br ${cert.color}`}
              aria-labelledby={`cert-title-${cert.id}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-2.5 rounded-xl bg-white/5 ${cert.accent} shrink-0`}>
                  <Award size={22} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    id={`cert-title-${cert.id}`}
                    className="font-bold text-white text-base leading-tight group-hover:text-indigo-200 transition-colors mb-1"
                  >
                    {cert.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-slate-400">
                    <Building2 size={12} aria-hidden="true" />
                    {cert.organization}
                  </p>
                  {cert.year && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Calendar size={11} aria-hidden="true" />
                      {cert.year}
                    </p>
                  )}
                </div>
              </div>

              {cert.note && (
                <p className="text-xs text-slate-500 italic mb-4">{cert.note}</p>
              )}

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  bg-white/5 ${cert.accent} border border-white/10
                  hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]`}
                aria-label={`View certificate: ${cert.title}`}
              >
                <ExternalLink size={14} aria-hidden="true" />
                View Certificate
              </a>
            </article>
          ))}
        </div>

        <p className="reveal mt-6 text-center text-xs text-slate-500 delay-300">
          Certificate names and organizations are displayed as provided. Click &quot;View Certificate&quot; for full details.
        </p>
      </div>
    </section>
  );
}
