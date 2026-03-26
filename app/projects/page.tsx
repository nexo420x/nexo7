

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import  Link  from "next/link";

const TYPING_WORDS = ["projects.", "systems.", "work.", "tellnex.", "ai.", "tools."];

export const metadata = {
  title: "nexo projects — tellnex & more",
  description:
    "explore nexo projects. including tellnex — conversational AI and system architecture. more soon.",
};

function useTypingAnimation(words: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // Typing logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 110;
    const pause = isDeleting ? 400 : 1600;

    if (!isDeleting && displayText === currentWord) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentWord.slice(0, displayText.length - 1)
          : currentWord.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, wordIndex, words]);

  return { displayText, cursorVisible };
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const terminalBlocks = [
  {
    cmd: "$ stack",
    lines: ["next.js", "typescript", "node.js", "api integrations"],
  },
  {
    cmd: "$ environment",
    lines: ["built in visual studio code", "modular architecture", "scalable structure"],
  },
  {
    cmd: "$ capabilities",
    lines: [
      "conversational ai",
      "automation flows",
      "real-time responses",
      "system integration ready",
    ],
  },
];

export default function ProjectsPage() {
  const { displayText, cursorVisible } = useTypingAnimation(TYPING_WORDS);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111315",
        color: "#e5e7eb",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── HERO ───────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 2rem 4rem",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "#22c55e",
              marginBottom: "2rem",
              opacity: 0.85,
            }}
          >
            // projects
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          style={{ lineHeight: 1.08 }}
        >
          <h1
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(4rem, 12vw, 9rem)",
              color: "#e5e7eb",
              margin: 0,
              letterSpacing: "0.02em",
              display: "block",
            }}
          >
            nexo
          </h1>
          <h2
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              color: "#9ca3af",
              margin: 0,
              letterSpacing: "0.02em",
              fontWeight: 400,
            }}
          >
            builds the
          </h2>
          <h2
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              color: "#22c55e",
              margin: 0,
              letterSpacing: "0.02em",
              fontWeight: 400,
              minHeight: "1.1em",
            }}
          >
            {displayText}
            <span
              style={{
                opacity: cursorVisible ? 1 : 0,
                transition: "opacity 0.1s",
                color: "#22c55e",
              }}
            >
              _
            </span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          style={{
            marginTop: "2.5rem",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            color: "#4b5563",
            textTransform: "lowercase",
          }}
        >
          aici nu stiu ce sa pun. imagineaza-ti tu ca e ceva aici, utilizatorule.
        </motion.p>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{ marginTop: "5rem" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ color: "#374151", fontSize: "1.1rem", letterSpacing: "0.05em" }}
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* ── PROJECT BLOCK ──────────────────────────── */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "6rem 2rem",
        }}
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            color: "#22c55e",
            opacity: 0.7,
            marginBottom: "1.5rem",
          }}
        >
          // 001 — project
        </motion.p>

        {/* Project title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            color: "#e5e7eb",
            margin: "0 0 0.5rem 0",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          tellnex
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.18}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.14em",
            color: "#22c55e",
            marginBottom: "2.5rem",
          }}
        >
          conversational ai system.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, #22c55e22, transparent)",
            marginBottom: "2.5rem",
          }}
        />

        {/* Description + Terminal grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="project-grid"
        >
          {/* Description */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.25}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                color: "#9ca3af",
                margin: 0,
              }}
            >
              tellnex is an ai-powered conversational system built for real-time interaction.
              it focuses on automation and scalable communication designed to integrate
              seamlessly into modern digital products and infrastructure. 
              mai pe scurt. un AI pe care il intrebi si iti raspunde
            </p>

            {/* Status lines */}
            <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
              {[
                "// status: active.",
                "// continuously evolving.",
                "// version: v1.0",
              ].map((line, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3 + i * 0.08}
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: "1rem",
                    color: "#22c55e",
                    opacity: 0.35,
                    margin: 0,
                    letterSpacing: "0.06em",
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Terminal block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            style={{
              background: "#0d0f10",
              border: "1px solid rgba(34,197,94,0.12)",
              borderRadius: "6px",
              padding: "1.75rem 2rem",
              fontFamily: "'VT323', monospace",
            }}
          >
            {terminalBlocks.map((block, bi) => (
              <div key={bi} style={{ marginBottom: bi < terminalBlocks.length - 1 ? "1.5rem" : 0 }}>
                <p
                  style={{
                    margin: "0 0 0.4rem 0",
                    color: "#22c55e",
                    fontSize: "1.1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {block.cmd}
                </p>
                {block.lines.map((line, li) => (
                  <p
                    key={li}
                    style={{
                      margin: "0 0 0.2rem 1.25rem",
                      color: "#6b7280",
                      fontSize: "1rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── ACTION SECTION ────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          style={{
            marginTop: "4rem",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://tellnex.site/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              color: "#111315",
              background: "#22c55e",
              padding: "0.8rem 2rem",
              textDecoration: "none",
              borderRadius: "3px",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            → view project
          </a>

          <Link
            href="/contact"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              color: "#9ca3af",
              background: "transparent",
              border: "1px solid rgba(156,163,175,0.25)",
              padding: "0.8rem 2rem",
              textDecoration: "none",
              borderRadius: "3px",
              transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#22c55e";
              (e.currentTarget as HTMLElement).style.color = "#22c55e";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(156,163,175,0.25)";
              (e.currentTarget as HTMLElement).style.color = "#9ca3af";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            → contact
          </Link>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(34,197,94,0.08)",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "1.1rem",
            color: "#374151",
            letterSpacing: "0.06em",
          }}
        >
          nexo © 2026
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            color: "#374151",
          }}
        >
          built with intent.
        </span>
      </footer>

      <style>{`
        @media (max-width: 680px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
