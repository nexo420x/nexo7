"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypingText } from "./TypingText";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const words = ["world.", "rules.", "systems.", "future.", "game.", "noise."];

const terminalLines: {
  text: string;
  color: "cmd" | "out" | "dim" | "blank" | "accent";
}[] = [
  { text: "// nexo.sys — v2.6.0", color: "dim" },
  { text: "// ─────────────────────────────", color: "dim" },
  { text: "", color: "blank" },
  { text: "$ whoami", color: "cmd" },
  { text: "  developer.", color: "out" },
  { text: "  builder.", color: "out" },
  { text: "  architect.", color: "out" },
  { text: "", color: "blank" },
  { text: "$ ./stack --list", color: "cmd" },
  { text: "  [ts] [react] [node]", color: "accent" },
  { text: "  [rust] [go] [docker]", color: "accent" },
  { text: "  [postgres] [infra]", color: "accent" },
  { text: "", color: "blank" },
  { text: "$ status --check", color: "cmd" },
  { text: "  ● online", color: "out" },
  { text: "  ◈ open to new work", color: "out" },
  { text: "", color: "blank" },
  { text: "$ now", color: "cmd" },
  { text: "  building the next thing.", color: "out" },
  { text: "", color: "blank" },
  { text: "$", color: "cmd" },
];

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= terminalLines.length) clearInterval(interval);
    }, 90);

    const cursorInterval = setInterval(() => {
      setShowCursor((p) => !p);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const colorMap = {
    cmd: "text-green-400",
    out: "text-[#e5e7eb]/70",
    dim: "text-green-500/25",
    blank: "",
    accent: "text-green-500/80",
  };

  return (
    <div className="relative border border-green-500/15 bg-black/25 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-green-500/10 bg-black/20 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        <span className="ml-4 font-mono text-[9px] uppercase tracking-[0.3em] text-green-500/30">
          nexo.terminal
        </span>
        <span className="ml-auto font-mono text-[9px] text-green-500/20">
          ● connected
        </span>
      </div>

      <div className="relative min-h-[340px] overflow-hidden p-6 font-mono md:p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(transparent 50%, rgba(34,197,94,0.15) 50%)",
            backgroundSize: "100% 3px",
          }}
        />

        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="mb-0.5">
            {line.color === "blank" ? (
              <div className="h-3" />
            ) : (
              <span
                className={`font-['VT323'] text-[1.1rem] leading-snug ${colorMap[line.color]}`}
              >
                {line.text}
                {i === visibleLines - 1 && line.text === "$" && (
                  <span
                    className="ml-1 text-green-500"
                    style={{ opacity: showCursor ? 1 : 0 }}
                  >
                    █
                  </span>
                )}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 h-8 w-8 border-l border-t border-green-500/20" />
      <div className="absolute left-0 top-0 h-3 w-3 border-b border-r border-green-500/15" />
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d10] via-[#0f1115] to-[#0b0d10]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,197,94,0.06)_0%,transparent_60%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute inset-0 bg-repeat opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-16 pt-24 md:px-12"
      >
        <div className="grid min-h-[70vh] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-8 font-['VT323'] text-lg uppercase tracking-[0.35em] text-green-500/40"
            >
              // 001 — identity
            </motion.p>

            <div className="mb-2 overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-['VT323'] text-[clamp(3.8rem,9vw,7.5rem)] leading-[0.9] tracking-wide text-[#e5e7eb]"
              >
                nexo
              </motion.h1>
            </div>

            <div className="mb-2 overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-['VT323'] text-[clamp(3.8rem,9vw,7.5rem)] leading-[0.9] tracking-wide text-[#e5e7eb]/60"
              >
                hacks the
              </motion.div>
            </div>

            <div className="mb-10 overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-['VT323'] text-[clamp(3.8rem,9vw,7.5rem)] leading-[0.9] tracking-wide"
              >
                <TypingText words={words} />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-10 max-w-xs text-sm uppercase tracking-[0.2em] text-[#e5e7eb]/35"
            >
              no noise. pure execution. always building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex items-center gap-6"
            >
              <Link
                href="/projects"
                className="group relative overflow-hidden border border-green-500/30 px-7 py-3 font-['VT323'] text-xl tracking-[0.15em] text-green-500 transition-all duration-300 hover:border-green-500/70 hover:bg-green-500/5"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>→ view projects</span>
                </span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-green-500/5 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-['VT323'] text-lg tracking-widest text-[#e5e7eb]/30 transition-colors duration-300 hover:text-[#e5e7eb]/60"
              >
                scroll ↓
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:block"
          >
            <TerminalPanel />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0d10] to-transparent" />
    </section>
  );
}