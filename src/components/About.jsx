import React from "react";
import {
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  Layers,
  Smartphone,
  Database,
  Cpu,
} from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";
import { Badge } from "./ui/Badge";
import { CopyButton } from "./ui/CopyButton";

export default function About() {
  return (
    <section id="about" className="section-spacing relative" aria-labelledby="about-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-12">
          <Badge variant="primary" className="mb-3">
            01 // About Me
          </Badge>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Engineering & Problem Solving
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            A systematic breakdown of my background, focus areas, and technical foundation.
          </p>
        </div>

        {/* 21st.dev Style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Card 1: Comprehensive Bio */}
          <SpotlightCard className="md:col-span-2 lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 mb-4">
                <Code2 size={20} />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Software Developer & Engineer
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Building scalable apps with clean architecture and modern tooling.
              </h3>

              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Tanmoy Sarkar</strong>,
                  a Computer Science Engineer from West Bengal, India. After completing my{" "}
                  <strong className="text-cyan-300">B.Tech in CSE</strong> from Maulana
                  Abul Kalam Azad University of Technology, I am currently pursuing an{" "}
                  <strong className="text-indigo-300">M.Tech in CSE</strong> at Kalyani
                  Government Engineering College.
                </p>
                <p>
                  My engineering philosophy centers on writing clean, modular, and maintainable code.
                  Whether structuring state management with Flutter & GetX, orchestrating backend services with
                  Node.js / Java, or designing schema structures on MongoDB and Firebase.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
              <Badge variant="cyan">Mobile Systems</Badge>
              <Badge variant="primary">Cloud Backend</Badge>
              <Badge variant="success">AI/ML Research</Badge>
            </div>
          </SpotlightCard>

          {/* Card 2: Core Focus Stack */}
          <SpotlightCard className="md:col-span-1 lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-400 mb-3">
                <Layers size={18} />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Core Technologies
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-4">
                Primary Development Stack
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-white/10 bg-zinc-900/50 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Smartphone size={16} />
                    <span className="text-xs font-semibold text-white">Mobile</span>
                  </div>
                  <p className="text-xs text-zinc-400">Flutter, Dart</p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-zinc-900/50 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <Database size={16} />
                    <span className="text-xs font-semibold text-white">Database</span>
                  </div>
                  <p className="text-xs text-zinc-400">MongoDB, Firebase</p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-zinc-900/50 hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-orange-400 mb-1">
                    <Code2 size={16} />
                    <span className="text-xs font-semibold text-white">Backend</span>
                  </div>
                  <p className="text-xs text-zinc-400">Java, Node.js</p>
                </div>

                <div className="p-3.5 rounded-xl border border-white/10 bg-zinc-900/50 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-purple-400 mb-1">
                    <Cpu size={16} />
                    <span className="text-xs font-semibold text-white">Research</span>
                  </div>
                  <p className="text-xs text-zinc-400">AI / ML Concepts</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-500 font-mono">
              * Verified against active GitHub repos & academic records.
            </p>
          </SpotlightCard>

          {/* Card 3: Academic Credentials */}
          <SpotlightCard className="md:col-span-1 lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <GraduationCap size={18} />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Academic Progress
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Postgraduate M.Tech Scholar
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Specializing in Computer Science & Engineering at{" "}
                <span className="text-white font-medium">
                  Kalyani Government Engineering College
                </span>
                . Conducting study in machine learning algorithms, advanced data architectures, and software systems.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
              <span className="text-zinc-500">Duration</span>
              <span className="text-cyan-400 font-semibold">2024 – Present</span>
            </div>
          </SpotlightCard>

          {/* Card 4: Location & Instant Contact */}
          <SpotlightCard className="md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 mb-3">
                <MapPin size={18} />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Availability & Base
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                West Bengal, India
              </h3>
              <p className="text-xs text-zinc-300 mb-4">
                Available for engineering roles, technical internships, and collaborative research initiatives.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-400 truncate">
                iamtanmoysarkar007@gmail.com
              </span>
              <CopyButton text="iamtanmoysarkar007@gmail.com" label="Copy Email" />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
