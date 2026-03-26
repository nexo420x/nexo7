"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  { line: "i build things", sub: false },
  { line: "that actually work.", sub: false },
  { line: "no noise.", sub: true },
  { line: "just execution.", sub: true },
];

const log = [
  { year: "2019", note: "→ started building" },
  { year: "2020", note: "→ first systems shipped" },
  { year: "2021", note: "→ scaling complexity" },
  { year: "2022", note: "→ going deeper" },
  { year: "2023", note: "→ shipping faster" },
  { year: "2024", note: "→ architecturing bigger" },
  { year: "2025", note: "→ distilling ideas" },
  { year: "2026", note: "→ right now." },
];

export function Identity() {
  const ref = useRef(null);
  const rightRef = useRef(null);

  const isInView = useInView(ref, { amount: 0.2 });
  const isRightInView = useInView(rightRef, { amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] via-[#0f1115] to-[#0b0d10]" />

      <div className="absolute bottom-0 top-0 left-1/2 hidden w-[1px] bg-green-500/5 lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[900px] px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 font-['VT323'] text-lg uppercase tracking-[0.35em] text-green-500/40"
            >
              // about
            </motion.p>

            {statements.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -30 }
                }
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-1"
              >
                <h2
                  className={`font-['VT323'] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-wide ${
                    s.sub ? "text-green-500/70" : "text-[#e5e7eb]"
                  }`}
                >
                  {s.line}
                </h2>
              </motion.div>
            ))}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 h-[1px] w-full max-w-xs origin-left bg-gradient-to-r from-green-500/30 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 max-w-sm text-sm tracking-[0.2em] text-[#e5e7eb]/30"
            >
              focused on systems that scale and interfaces that feel right.
              if it ships, it matters.
            </motion.p>
          </div>

          {/* RIGHT */}
          <div ref={rightRef} className="lg:pt-14">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isRightInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 font-['VT323'] text-base uppercase tracking-[0.35em] text-green-500/25"
            >
              // activity.log
            </motion.p>

            <div className="space-y-0">
              {log.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isRightInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group flex items-baseline gap-5 border-b border-green-500/6 py-3 ${
                    i === log.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <span className="w-14 shrink-0 font-['VT323'] text-xl tabular-nums text-green-500/30 transition-colors duration-300 group-hover:text-green-500/60">
                    {entry.year}
                  </span>
                  <span className="font-['VT323'] text-xl tracking-wide text-[#e5e7eb]/45 transition-colors duration-300 group-hover:text-[#e5e7eb]/70">
                    {entry.note}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isRightInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-10 select-none font-['VT323'] text-sm tracking-[0.3em] text-green-500/10"
            >
              // still running. no end in sight.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}