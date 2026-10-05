import { useEffect, useState } from "react";
import { Mail, ChevronDown, Download, ExternalLink } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const RESUME_LINK =
  "https://drive.google.com/file/d/1WRoq021AqnWl3o_eYW7B2meR5J9CxaCP/view?usp=drive_link";

const roles = [
  "Software Developer",
  "Flutter Developer",
  "Mobile App Developer",
  "M.Tech CS Student",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 80);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, 45);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setCharIdx(0);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border text-sm font-medium mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <span
            className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
            aria-hidden="true"
          />
          <span className="text-slate-300">
            Currently pursuing M.Tech @ Kalyani Government Engineering College
          </span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <span
            className="block text-white dark:text-white"
            style={{ color: "inherit" }}
          >
            Tanmoy
          </span>
          <span className="gradient-text">Sarkar</span>
        </h1>

        {/* Typewriter role */}
        <p
          className={`text-xl sm:text-2xl font-mono font-medium mb-6 text-slate-300 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.3s", minHeight: "2rem" }}
          aria-label={`Role: ${displayed}`}
        >
          <span aria-hidden="true">{displayed}</span>
          <span className="cursor" aria-hidden="true" />
        </p>

        {/* Subtitle */}
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          Computer Science Engineer passionate about building mobile
          applications with{" "}
          <span className="text-indigo-400 font-medium">Flutter</span>, scalable
          backends with{" "}
          <span className="text-orange-400 font-medium">Firebase</span> &{" "}
          <span className="text-emerald-400 font-medium">MongoDB</span>, and
          exploring <span className="text-purple-400 font-medium">AI/ML</span>{" "}
          solutions.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-[1.03]"
          >
            View Projects
          </button>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl glass border border-indigo-500/40 text-indigo-400 font-semibold text-sm hover:border-indigo-400 hover:text-indigo-300 transition-all duration-200 hover:scale-[1.03] flex items-center gap-2"
          >
            <Download size={14} />
            Download Resume
          </a>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 rounded-xl glass border border-slate-700 text-slate-300 font-semibold text-sm hover:border-slate-500 hover:text-white transition-all duration-200 hover:scale-[1.03]"
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href="https://github.com/tanmoy06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-3 rounded-xl glass border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-200 hover:scale-110"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tanmoy-s-96083525a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-3 rounded-xl glass border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200 hover:scale-110"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href="mailto:iamtanmoysarkar007@gmail.com"
            aria-label="Send email"
            className="p-3 rounded-xl glass border border-slate-700 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200 hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-16 flex flex-col items-center gap-1 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <span className="text-xs text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <button
            onClick={() => handleScroll("#about")}
            aria-label="Scroll to About section"
            className="text-slate-500 hover:text-indigo-400 transition-colors animate-float"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
