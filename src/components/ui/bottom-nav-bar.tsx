"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "#home" },
  { label: "About", icon: User, href: "#about" },
  { label: "Education", icon: GraduationCap, href: "#education" },
  { label: "Skills", icon: Code2, href: "#skills" },
  { label: "Projects", icon: FolderGit2, href: "#projects" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const MOBILE_LABEL_WIDTH = 76;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = true,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    const handleScrollSync = () => {
      const scrollPos = window.scrollY + 200;
      navItems.forEach((item, idx) => {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveIndex(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSync, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSync);
  }, []);

  const handleClick = (idx: number, href: string) => {
    setActiveIndex(idx);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 20, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Floating Portfolio Navigation"
      className={cn(
        "bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/80 rounded-full flex items-center p-1.5 shadow-2xl space-x-1 max-w-[95vw] h-[54px] select-none",
        stickyBottom && "fixed inset-x-0 bottom-5 mx-auto z-40 w-fit",
        className
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-[42px] cursor-pointer",
              isActive
                ? "bg-cyan-500/15 text-cyan-400 gap-2 border border-cyan-500/30"
                : "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
              "focus:outline-none focus-visible:ring-0"
            )}
            onClick={() => handleClick(idx, item.href)}
            aria-label={item.label}
            type="button"
          >
            <Icon
              size={18}
              strokeWidth={isActive ? 2.2 : 1.8}
              aria-hidden
              className="transition-colors duration-200 shrink-0"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.18 },
                marginLeft: { duration: 0.18 },
              }}
              className={cn("overflow-hidden flex items-center max-w-[76px]")}
            >
              <span
                className={cn(
                  "font-mono text-xs font-semibold whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis leading-none",
                  isActive
                    ? "text-cyan-400 opacity-100"
                    : "opacity-0"
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
  );
}

export default BottomNavBar;

