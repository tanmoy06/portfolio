import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "./ui/Badge";
import { SpotlightCard } from "./ui/SpotlightCard";

const educationHistory = [
  {
    degree: "M.Tech in Computer Science & Engineering",
    institution: "Kalyani Government Engineering College",
    location: "Kalyani, West Bengal",
    period: "2024 – Present",
    status: "Currently Pursuing",
    statusType: "success",
    description:
      "Advanced postgraduate studies focusing on Machine Learning algorithms, Distributed Systems, Software System Architecture, and Research Methodologies.",
    topics: ["AI / Machine Learning", "Advanced Algorithms", "Distributed Systems", "Cloud Architecture"],
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Maulana Abul Kalam Azad University of Technology",
    location: "West Bengal, India",
    period: "2019 – 2023",
    status: "Completed",
    statusType: "default",
    description:
      "Undergraduate curriculum covering foundational Computer Science principles including Data Structures & Algorithms, Object-Oriented Programming (Java), Operating Systems, DBMS, and Computer Networks.",
    topics: ["Data Structures & Algorithms", "Object-Oriented Programming (Java)", "Database Management Systems", "Software Engineering"],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-spacing relative" aria-labelledby="education-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-3">
            02 // Education
          </Badge>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
          >
            Academic Foundation
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Formal degrees and rigorous theoretical training in Computer Science & Engineering.
          </p>
        </div>

        {/* Minimalist Timeline Cards */}
        <div className="space-y-6">
          {educationHistory.map((edu, idx) => (
            <SpotlightCard key={edu.degree} className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                      {edu.degree}
                    </h3>
                    <Badge variant={edu.statusType === "success" ? "success" : "secondary"}>
                      {edu.statusType === "success" ? (
                        <Clock size={11} className="mr-1 inline" />
                      ) : (
                        <CheckCircle2 size={11} className="mr-1 inline" />
                      )}
                      {edu.status}
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-cyan-400">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {edu.description}
              </p>

              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Key Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
