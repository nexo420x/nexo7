"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TYPING_WORDS = ["projects.", "systems.", "work.", "tellnex.", "reznex.", "iot.", "tools."];

function useTypingAnimation(words: string[]) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

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

const tellnexTerminal = [
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

const reznexTerminal = [
  {
    cmd: "$ stack",
    lines: ["next.js 14", "supabase (db, auth, storage)", "tailwind css", "postgresql"],
  },
  {
    cmd: "$ electronics ai [NOU]",
    lines: [
      "asistent ai inteligent si dedicat electronicii",
      "depanare circuite, scheme si microcontrollere",
      "acces 100% gratuit",
    ],
  },
  {
    cmd: "$ hardware docs",
    lines: [
      "interactive bom tables",
      "schematics / diagram renderers",
      "gerber file dynamic download",
      "cloner-ready source code integration",
    ],
  },
];

function FloatingLeavesBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '3%',
          animation: 'rotateAndFloat1 32s linear infinite',
          filter: 'invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 15px rgba(34,197,94,0.3))',
          opacity: 0.18,
        }}
      >
        <Image src="/cannabis.svg" alt="" width={220} height={220} priority />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '45%',
          right: '4%',
          animation: 'rotateAndFloat2 40s linear infinite',
          filter: 'invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 15px rgba(34,197,94,0.25))',
          opacity: 0.15,
        }}
      >
        <Image src="/cannabis.svg" alt="" width={200} height={200} priority />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '6%',
          animation: 'rotateAndFloat1 48s linear infinite reverse',
          filter: 'invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 20px rgba(34,197,94,0.35))',
          opacity: 0.2,
        }}
      >
        <Image src="/cannabis.svg" alt="" width={260} height={260} />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const { displayText, cursorVisible } = useTypingAnimation(TYPING_WORDS);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111315",
        color: "#e5e7eb",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <FloatingLeavesBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
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
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
            <div
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "13px",
                color: "#22c55e",
                opacity: 0.6,
                letterSpacing: "0.15em",
                marginBottom: "16px",
              }}
            >
              [ 420 SYSTEM ]
            </div>
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
              color: "#6b7280",
              textTransform: "lowercase",
            }}
          >
            proiecte concepute si construite de la zero. de la inteligenta artificiala la hardware.
          </motion.p>

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

        {/* ── PROJECT 001: TELLNEX ───────────────────── */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "6rem 2rem 4rem",
          }}
        >
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

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: "1px",
              background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)",
              marginBottom: "2.5rem",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="project-grid"
          >
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
                tellnex este un asistent AI conversațional creat pentru interacțiuni rapide.
                axat pe automatizare și răspunsuri inteligente, gândit să fie ușor de integrat în orice flux de lucru.
              </p>

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
                      opacity: 0.4,
                      margin: 0,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              style={{
                background: "#16181c",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                padding: "1.75rem 2rem",
                fontFamily: "'VT323', monospace",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              {tellnexTerminal.map((block, bi) => (
                <div key={bi} style={{ marginBottom: bi < tellnexTerminal.length - 1 ? "1.5rem" : 0 }}>
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
                        color: "#9ca3af",
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            style={{
              marginTop: "4rem",
              display: "flex",
              gap: "1.2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://tellnex.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              → view project
            </a>
          </motion.div>
        </section>

        {/* ── PROJECT 002: REZNEX ───────────────────── */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "4rem 2rem 6rem",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}
        >
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
            // 002 — project
          </motion.p>

          {/* Project Header cu Badge "NOU" */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "clamp(3.5rem, 10vw, 7rem)",
                color: "#e5e7eb",
                margin: 0,
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              reznex
            </h2>

            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#111315",
                background: "#22c55e",
                padding: "4px 10px",
                borderRadius: "4px",
                textTransform: "uppercase",
                boxShadow: "0 0 16px rgba(34,197,94,0.45)",
              }}
            >
              NOU
            </span>
          </motion.div>

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
            hardware, iot hub & smart electronics ai.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: "1px",
              background: "linear-gradient(90deg, rgba(34,197,94,0.3), transparent)",
              marginBottom: "2.5rem",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className="project-grid"
          >
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
                hub și comunitate pentru pasionații de electronică și embedded. include acum și un <strong style={{ color: "#e5e7eb" }}>AI inteligent integrat</strong>, specializat pe electronică, depanare de scheme hardware și microcontrollere, complet <strong style={{ color: "#22c55e" }}>gratuit</strong>. oferă găzduire de proiecte IoT, liste de componente interactive și cod sursă direct accesibil.
              </p>

              <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                {[
                  "// status: fully operational.",
                  "// electronics ai integrated (100% free).",
                  "// version: v1.2.0",
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
                      opacity: 0.4,
                      margin: 0,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              style={{
                background: "#16181c",
                border: "1px solid rgba(34,197,94,0.18)",
                borderRadius: "8px",
                padding: "1.75rem 2rem",
                fontFamily: "'VT323', monospace",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              {reznexTerminal.map((block, bi) => (
                <div key={bi} style={{ marginBottom: bi < reznexTerminal.length - 1 ? "1.5rem" : 0 }}>
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
                        color: "#9ca3af",
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            style={{
              marginTop: "4rem",
              display: "flex",
              gap: "1.2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://reznex.ro/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              → view project
            </a>

            <Link href="/contact" className="btn-secondary">
              → contact
            </Link>
          </motion.div>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
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
              color: "#9ca3af",
              letterSpacing: "0.06em",
            }}
          >
            nexo © 2026 // 4:20
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              color: "#4b5563",
            }}
          >
            nexo label.
          </span>
        </footer>
      </div>

      <style>{`
        @keyframes rotateAndFloat1 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        @keyframes rotateAndFloat2 {
          0% { transform: translateY(0px) rotate(360deg); }
          50% { transform: translateY(30px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: #111315;
          background: #22c55e;
          border: 1px solid #22c55e;
          padding: 0.85rem 2rem;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          box-shadow: 0 0 20px rgba(34,197,94,0.2);
        }
        .btn-primary:hover {
          background: #1ea34d;
          border-color: #1ea34d;
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(34,197,94,0.4);
        }

        .btn-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: #e5e7eb;
          background: #16181c;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.85rem 2rem;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
        }
        .btn-secondary:hover {
          border-color: rgba(34,197,94,0.4);
          color: #22c55e;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(34,197,94,0.12);
        }

        @media (max-width: 680px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}