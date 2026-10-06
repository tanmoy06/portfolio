import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../../lib/utils";

export function CopyButton({ text, label = "Copy", className }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border cursor-pointer select-none active:scale-95",
        copied
          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
          : "bg-zinc-800/60 text-zinc-300 border-zinc-700/60 hover:bg-zinc-700/60 hover:text-white",
        className
      )}
      aria-label={copied ? "Copied to clipboard" : `Copy ${label}`}
    >
      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
      <span>{copied ? "Copied!" : label}</span>
    </button>
  );
}

