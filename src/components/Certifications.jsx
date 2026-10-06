import React from "react";
import { Award, ExternalLink, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/Badge";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Button } from "./ui/Button";

const certifications = [
  {
    id: 1,
    title: "Certificate of Achievement",
    organization: "Professional Program / Technical Course",
    note: "Official certification validating domain skills and technical coursework.",
    link: "https://drive.google.com/file/d/1UDnSH1i7I37SVHAMX8jEjYlpj7ABsvVc/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Certificate of Completion",
    organization: "Technical Training / Coursework",
    note: "Official certification validating curriculum completion and practical assessments.",
    link: "https://drive.google.com/file/d/1rFLb0ne0Tkb0TZbx1yRB-VHOOX4IzkjV/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-spacing relative" aria-labelledby="cert-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-3">
            05 // Verified Credentials
          </Badge>
          <h2
            id="cert-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
          >
            Certifications
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Verified certificates and formal credentials linked directly to cloud records.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <SpotlightCard
              key={cert.id}
              className="p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Award size={20} />
                  </div>
                  <Badge variant="success" className="text-[11px] gap-1">
                    <ShieldCheck size={12} />
                    Verified Document
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-1 group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {cert.organization}
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {cert.note}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto"
                >
                  <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2 font-mono text-xs">
                    <span>View Certificate</span>
                    <ArrowUpRight size={13} className="opacity-60" />
                  </Button>
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
