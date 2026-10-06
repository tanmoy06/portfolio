import React from "react";
import { cn } from "../../lib/utils";

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer active:scale-[0.98]";

    const variants = {
      default:
        "bg-zinc-900 text-zinc-100 hover:bg-zinc-800 border border-white/10 shadow-sm",
      primary:
        "bg-white text-black hover:bg-zinc-200 shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)] border border-white/30 font-semibold",
      secondary:
        "bg-white/[0.05] text-zinc-200 hover:bg-white/[0.1] border border-white/10 hover:border-white/20",
      outline:
        "border border-white/10 bg-transparent text-zinc-300 hover:bg-white/[0.05] hover:text-white hover:border-white/20",
      ghost:
        "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
      link:
        "text-cyan-400 underline-offset-4 hover:underline p-0 h-auto font-normal",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-xs",
      lg: "h-12 rounded-xl px-6 text-base font-semibold",
      icon: "h-9 w-9 p-0 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
