import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(56, 189, 248, 0.14)",
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] bg-zinc-950/60 backdrop-blur-xl overflow-hidden text-zinc-100 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.2)]",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
