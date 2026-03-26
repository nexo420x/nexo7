"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
  { text: "building.", align: "left" },
  { text: "breaking.", align: "right" },
  { text: "iterating.", align: "center" },
] as const;

export function Atmosphere() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden py-40 md:py-56">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d10] via-[#0f1115] to-[#0b0d10]" />

      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(34,197,94,0.05)_0%,transparent_65%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-16 lg:px-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center font-['VT323'] text-lg uppercase tracking-[0.35em] text-green-500/30"
        >
          // 003 — process
        </motion.p>

        <div className="flex flex-col gap-4 md:gap-6">
          {words.map((word, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x:
                  word.align === "left"
                    ? -120
                    : word.align === "right"
                    ? 120
                    : 0,
                y: word.align === "center" ? 60 : 0,
              }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, y: 0 }
                  : {
                      opacity: 0,
                      x:
                        word.align === "left"
                          ? -120
                          : word.align === "right"
                          ? 120
                          : 0,
                      y: word.align === "center" ? 60 : 0,
                    }
              }
              transition={{
                duration: 1.3,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex ${
                word.align === "right"
                  ? "justify-end"
                  : word.align === "center"
                  ? "justify-center"
                  : "justify-start"
              }`}
            >
              <div className="relative inline-block">
                <h3 className="select-none font-['VT323'] text-[clamp(3.5rem,11vw,9rem)] leading-none tracking-wider text-green-500/75">
                  {word.text}
                </h3>

                <motion.div
                  className="pointer-events-none absolute inset-0 select-none font-['VT323'] text-[clamp(3.5rem,11vw,9rem)] leading-none text-green-400"
                  animate={{ opacity: [0, 0.5, 0], x: [-3, 3, -1], y: [0, 1, 0] }}
                  transition={{
                    duration: 0.12,
                    repeat: Infinity,
                    repeatDelay: 4 + index * 1.2,
                  }}
                >
                  {word.text}
                </motion.div>

                <motion.div
                  className="pointer-events-none absolute inset-0 select-none font-['VT323'] text-[clamp(3.5rem,11vw,9rem)] leading-none text-[#22c55e]/30"
                  animate={{ opacity: [0, 0.3, 0], x: [2, -2, 1], y: [1, 0, 0] }}
                  transition={{
                    duration: 0.08,
                    repeat: Infinity,
                    repeatDelay: 5 + index * 0.8,
                  }}
                >
                  {word.text}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="font-['VT323'] text-xl uppercase tracking-[0.4em] text-green-500/20">
            // repeat until done.
          </p>
        </motion.div>
      </div>
    </section>
  );
}