"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const channels = [
  { label: "email", value: "hello@nexo.dev", href: "mailto:hello@nexo.dev" },
  { label: "github", value: "github.com/nexo", href: "#" },
  { label: "twitter", value: "@nexo_dev", href: "#" },
  { label: "linkedin", value: "in/nexo", href: "#" },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] to-[#0f1115]" />

      <div
        className="absolute inset-0 bg-repeat opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[900px] px-10">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-28">
          
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 font-['VT323'] text-lg uppercase tracking-[0.35em] text-green-500/40"
            >
              // 004 — contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 font-['VT323'] text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] tracking-wide text-[#e5e7eb]"
            >
              get in
              <br />
              <span className="text-green-500">touch.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 h-[1px] w-full max-w-xs origin-left bg-gradient-to-r from-green-500/40 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xs text-sm tracking-[0.18em] text-[#e5e7eb]/30"
            >
              have a project in mind?
              <br />
              building something big?
              <br />
              let's talk.
            </motion.p>
          </div>

          {/* RIGHT */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 font-['VT323'] text-base uppercase tracking-[0.35em] text-green-500/25"
            >
              // channels.open()
            </motion.p>

            <div className="space-y-0">
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between border-b border-green-500/8 py-4 transition-colors duration-300 hover:border-green-500/20"
                >
                  <span className="w-24 font-['VT323'] text-lg uppercase tracking-[0.25em] text-green-500/30 transition-colors group-hover:text-green-500/60">
                    {ch.label}
                  </span>
                  <span className="font-['VT323'] text-xl tracking-wide text-[#e5e7eb]/40 transition-colors duration-300 group-hover:text-green-400">
                    → {ch.value}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 select-none font-['VT323'] text-sm tracking-[0.3em] text-green-500/15"
            >
              // response time: fast.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}