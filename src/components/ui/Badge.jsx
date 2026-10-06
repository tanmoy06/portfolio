import React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-zinc-900/80 text-zinc-300 border-white/10",
    primary:
      "bg-white/[0.06] text-white border-white/20 shadow-[0_0_15px_-3px_rgba(255,255,255,0.15)]",
    secondary: "bg-white/[0.03] text-zinc-400 border-white/10",
    outline: "bg-transparent text-zinc-300 border-white/10",
    success: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border transition-colors duration-150",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
