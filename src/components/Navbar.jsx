import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Award,
  Mail,
  FileDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Education", icon: GraduationCap, href: "#education" },
  { label: "Skills", icon: Code2, href: "#skills" },
  { label: "Projects", icon: FolderGit2, href: "#projects" },
  { label: "Certifications", icon: Award, href: "#certifications" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const RESUME_LINK =
  "https://drive.google.com/file/d/1WRoq021AqnWl3o_eYW7B2meR5J9CxaCP/view?usp=drive_link";

const MOBILE_LABEL_WIDTH = 74;

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScrollSync = () => {
      const scrollPos = window.scrollY + 220;
      navItems.forEach((item, idx) => {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveIndex((prev) => (prev !== idx ? idx : prev));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSync, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSync);
  }, []);

  const handleNavClick = (idx, href) => {
    setActiveIndex(idx);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(0, "#home");
          }}
          className={cn(
            "flex items-center gap-2.5 px-3 py-2 rounded-full border transition-all duration-300 backdrop-blur-xl select-none group shrink-0",
            scrolled
              ? "bg-black/80 border-white/10 shadow-lg"
              : "bg-black/50 border-white/[0.08]"
          )}
          aria-label="Tanmoy Sarkar — Home"
        >
          <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center font-mono font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
            TS
          </div>
          <span className="font-semibold text-xs sm:text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors hidden sm:inline">
            Tanmoy Sarkar
          </span>
        </a>

        {/* 21st.dev Style Expanding Floating Pill Navigation */}
        <motion.nav
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          role="navigation"
          aria-label="Main Navigation"
          className={cn(
            "hidden md:flex items-center p-1 rounded-full border backdrop-blur-xl shadow-2xl space-x-1 transition-all duration-300",
            scrolled
              ? "bg-black/80 border-white/10"
              : "bg-black/50 border-white/[0.08]"
          )}
        >
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;

            return (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  "flex items-center gap-0 px-2.5 py-1.5 rounded-full transition-colors duration-200 relative h-9 cursor-pointer select-none",
                  isActive
                    ? "bg-white/[0.12] text-white border border-white/20 gap-1.5 shadow-sm"
                    : "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
                  "focus:outline-none focus-visible:ring-0"
                )}
                onClick={() => handleNavClick(idx, item.href)}
                aria-label={item.label}
                type="button"
              >
                <Icon
                  size={16}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  aria-hidden="true"
                  className={cn("transition-colors duration-200 shrink-0", isActive ? "text-white" : "")}
                />

                <motion.div
                  initial={false}
                  animate={{
                    width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                    opacity: isActive ? 1 : 0,
                    marginLeft: isActive ? "5px" : "0px",
                  }}
                  transition={{
                    width: { type: "spring", stiffness: 350, damping: 32 },
                    opacity: { duration: 0.18 },
                    marginLeft: { duration: 0.18 },
                  }}
                  className="overflow-hidden flex items-center max-w-[76px]"
                >
                  <span
                    className={cn(
                      "font-mono text-xs font-semibold whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis leading-none",
                      isActive ? "text-white opacity-100" : "opacity-0"
                    )}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.nav>

        {/* Right Actions */}
        <div
          className={cn(
            "flex items-center gap-1.5 p-1 rounded-full border backdrop-blur-xl transition-all duration-300 shrink-0",
            scrolled
              ? "bg-black/80 border-white/10 shadow-lg"
              : "bg-black/50 border-white/[0.08]"
          )}
        >
          {/* Resume Download Action */}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-full h-8 px-3.5 gap-1.5 font-mono text-xs border-white/10 hover:border-white/25"
            >
              <FileDown size={13} className="text-zinc-300" />
              <span>Resume</span>
              <ArrowUpRight size={11} className="opacity-50" />
            </Button>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-2 p-3 rounded-2xl bg-black/95 border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <ul className="space-y-1" role="list">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeIndex === idx;

              return (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(idx, item.href)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-colors text-left cursor-pointer",
                      isActive
                        ? "bg-white/[0.1] text-white font-semibold border border-white/15"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon size={16} className="shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-3 pt-3 border-t border-white/10">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono text-xs font-semibold shadow-md transition-all"
            >
              <FileDown size={14} />
              <span>Download Resume</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
