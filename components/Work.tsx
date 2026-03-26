"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-48">
      <div className="absolute inset-0 bg-[#0f1115]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,197,94,0.04)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 md:px-12">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 font-['VT323'] text-lg uppercase tracking-[0.35em] text-green-500/40"
            >
              // 002 — work
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className="mb-2 font-['VT323'] text-[clamp(4rem,10vw,7.5rem)] leading-[0.9] tracking-wide text-[#e5e7eb]">
                projects.
              </h2>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-10 h-[1px] origin-left bg-gradient-to-r from-green-500/40 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-sm text-sm tracking-[0.2em] text-[#e5e7eb]/30"
            >
              where ideas become systems.
              handcrafted, shipped, and built to scale.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{
                duration: 0.9,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border border-green-500/10 bg-black/20 p-8"
            >
              <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-green-500/30" />
              <div className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-green-500/30" />

              <p className="mb-5 font-['VT323'] text-base uppercase tracking-[0.3em] text-green-500/30">
                // ready to see the work?
              </p>

              <p className="mb-8 font-['VT323'] text-2xl leading-relaxed tracking-wide text-[#e5e7eb]/50">
                selected projects.
                <br />
                built to last.
                <br />
                shipped on time.
              </p>

              <Link
                href="/projects"
                className="group/btn relative inline-flex overflow-hidden border border-green-500/30 px-8 py-4 font-['VT323'] text-xl tracking-[0.15em] text-green-500 transition-all duration-300 hover:border-green-500/60 hover:bg-green-500/5"
              >
                <span className="relative z-10">→ explore projects</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-green-500/5 transition-transform duration-300 group-hover/btn:scale-x-100" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-8 bg-green-500/20" />
              <span className="font-['VT323'] text-base uppercase tracking-[0.25em] text-green-500/25">
                each one built with intent
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}