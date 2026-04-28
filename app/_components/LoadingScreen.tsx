"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("fading"), 1400);
    const t2 = setTimeout(() => setPhase("gone"), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-brand transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 loading-logo-in">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
          </svg>
        </div>
        <div className="text-center loading-wordmark-in">
          <p className="text-2xl font-semibold text-white tracking-tight">
            Abans<span className="text-white/60">IT</span>
          </p>
          <p className="text-[10px] tracking-[0.22em] text-white/50 uppercase mt-1">
            Corporate Solutions
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full loading-progress" />
      </div>
    </div>
  );
}
