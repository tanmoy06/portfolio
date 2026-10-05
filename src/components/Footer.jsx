import { Mail, Heart } from "lucide-react";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const RESUME_LINK =
  "https://drive.google.com/file/d/1WRoq021AqnWl3o_eYW7B2meR5J9CxaCP/view?usp=drive_link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t border-slate-800 py-10 px-4 sm:px-6"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                TS
              </div>
              <span className="font-bold text-white">Tanmoy Sarkar</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Computer Science Engineer & M.Tech Student.
              <br />
              Building mobile apps with Flutter & Firebase.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:iamtanmoysarkar007@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail size={14} aria-hidden="true" />
                iamtanmoysarkar007@gmail.com
              </a>
              <a
                href="https://github.com/tanmoy06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <GitHubIcon size={14} />
                github.com/tanmoy06
              </a>
              <a
                href="https://www.linkedin.com/in/tanmoy-s-96083525a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon size={14} />
                LinkedIn Profile
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-1"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} Tanmoy Sarkar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React + Vite + Tailwind CSS
            <Heart
              size={12}
              className="text-rose-500 fill-rose-500 mx-0.5"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
