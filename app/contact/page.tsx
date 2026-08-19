"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useTypingEffect } from "../contact/useTyping";
import { useFadeIn } from "../contact/useFadeIn";

const TYPED_WORDS = [
  "contact.",
  "email.",
  "collab.",
  "signal.",
  "message.",
  "reachout.",
  "connect.",
];

function FloatingLeavesBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "3%",
          animation: "rotateAndFloat1 32s linear infinite",
          filter:
            "invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 15px rgba(34,197,94,0.3))",
          opacity: 0.18,
        }}
      >
        <Image src="/cannabis.svg" alt="" width={220} height={220} priority />
      </div>

      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "4%",
          animation: "rotateAndFloat2 40s linear infinite",
          filter:
            "invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 15px rgba(34,197,94,0.25))",
          opacity: 0.15,
        }}
      >
        <Image src="/cannabis.svg" alt="" width={200} height={200} priority />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "6%",
          animation: "rotateAndFloat1 48s linear infinite reverse",
          filter:
            "invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 20px rgba(34,197,94,0.35))",
          opacity: 0.2,
        }}
      >
        <Image src="/cannabis.svg" alt="" width={260} height={260} />
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function ContactHero() {
  const typedWord = useTypingEffect(TYPED_WORDS, 80, 45, 1700);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 2rem 4rem",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, lineHeight: 1.08 }}>
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

        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(3rem, 9vw, 7rem)",
            color: "#22c55e",
            margin: 0,
            letterSpacing: "0.02em",
            fontWeight: 400,
            minHeight: "1.1em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {typedWord}
          <span
            style={{
              display: "inline-block",
              width: "0.35em",
              height: "0.08em",
              background: "#22c55e",
              marginLeft: "6px",
              transform: "translateY(0.2em)",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "2rem",
            fontFamily: "'Inter', sans-serif",
            color: "#9ca3af",
            fontSize: "0.8rem",
            letterSpacing: "0.18em",
            textTransform: "lowercase",
          }}
        >
          open line. open mind.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            "// channel open.",
            "// response time: fast.",
            "// available for collabs.",
          ].map((badge) => (
            <span
              key={badge}
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "1rem",
                color: "#22c55e",
                opacity: 0.5,
                letterSpacing: "0.06em",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Info ────────────────────────────────────────────────────────────
interface ChannelRowProps {
  label: string;
  handle: string;
  href: string;
  detail?: string;
}

function ChannelRow({ label, handle, href, detail }: ChannelRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.75rem 2rem",
        background: "#16181c",
        border: `1px solid ${hovered ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "8px",
        textDecoration: "none",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0 4px 24px rgba(34,197,94,0.1)" : "0 4px 24px rgba(0,0,0,0.2)",
        cursor: "pointer",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <span
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "1.1rem",
            color: "#22c55e",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: hovered ? "#e5e7eb" : "#9ca3af",
            transition: "color 0.3s ease",
            letterSpacing: "0.04em",
          }}
        >
          {handle}
        </span>
        {detail && (
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              color: "#6b7280",
              letterSpacing: "0.06em",
              marginTop: "2px",
            }}
          >
            {detail}
          </span>
        )}
      </div>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2rem",
          color: hovered ? "#22c55e" : "#4b5563",
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}
      >
        →
      </span>
    </a>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: "4rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "4rem" }} />

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          color: "#22c55e",
          opacity: 0.7,
          marginBottom: "0.5rem",
        }}
      >
        // channels
      </p>
      <h2
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          color: "#e5e7eb",
          lineHeight: 1,
          fontWeight: "normal",
          marginBottom: "2.5rem",
          letterSpacing: "0.02em",
        }}
      >
        reach out directly.
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <ChannelRow
          label="// instagram"
          handle="nexo.7x"
          href="https://instagram.com/nexo.7x"
          detail="dm open"
        />
        <ChannelRow
          label="// email"
          handle="tellnex.contact@gmail.com"
          href="mailto:tellnex.contact@gmail.com"
          detail="preferred for business"
        />
      </div>
    </section>
  );
}

// ─── Contact Form ────────────────────────────────────────────────────────────
interface FieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}

function Field({ label, id, type = "text", placeholder, value, onChange, multiline, rows = 5 }: FieldProps) {
  const [focused, setFocused] = useState(false);

  const baseStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    width: "100%",
    background: focused ? "rgba(34,197,94,0.02)" : "#16181c",
    border: `1px solid ${focused ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.06)"}`,
    borderRadius: "6px",
    padding: "14px 18px",
    color: "#e5e7eb",
    fontSize: "0.85rem",
    letterSpacing: "0.02em",
    outline: "none",
    transition: "all 0.25s ease",
    boxShadow: focused ? "0 0 16px rgba(34,197,94,0.1)" : "none",
    resize: multiline ? "vertical" : undefined,
    lineHeight: 1.6,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: "1.1rem",
          color: focused ? "#22c55e" : "#9ca3af",
          letterSpacing: "0.05em",
          transition: "color 0.25s ease",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...baseStyle, minHeight: "140px" }}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={baseStyle}
        />
      )}
    </div>
  );
}

function ContactForm() {
  const { ref, isVisible } = useFadeIn();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);

        setTimeout(() => {
          setSent(false);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, 3000);
      } else {
        alert("error sending message.");
      }
    } catch (err) {
      console.error(err);
      alert("server error.");
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: "4rem 2rem 6rem",
        maxWidth: "900px",
        margin: "0 auto",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "4rem" }} />

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          color: "#22c55e",
          opacity: 0.7,
          marginBottom: "0.5rem",
        }}
      >
        // compose
      </p>
      <h2
        style={{
          fontFamily: "'VT323', monospace",
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          color: "#e5e7eb",
          lineHeight: 1,
          fontWeight: "normal",
          marginBottom: "2.5rem",
          letterSpacing: "0.02em",
        }}
      >
        send a message.
      </h2>

      {sent ? (
        <div
          style={{
            padding: "3rem 2rem",
            background: "#16181c",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 0 24px rgba(34,197,94,0.15)",
          }}
        >
          <p style={{ fontFamily: "'VT323', monospace", fontSize: "2rem", color: "#22c55e", marginBottom: "0.5rem" }}>
            transmitted.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#9ca3af", fontSize: "0.85rem", letterSpacing: "0.06em" }}>
            message received — i'll be in touch.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            <Field label="// name" id="name" placeholder="your name" value={name} onChange={setName} />
            <Field label="// email" id="email" type="email" placeholder="your@email.com" value={email} onChange={setEmail} />
          </div>

          <Field label="// subject" id="subject" placeholder="what's this about?" value={subject} onChange={setSubject} />
          <Field label="// message" id="message" placeholder="write your message here..." value={message} onChange={setMessage} multiline rows={6} />

          <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "8px" }}>
            <button type="submit" className="btn-primary" style={{ border: "none", cursor: "pointer" }}>
              → transmit
            </button>

            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#6b7280",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
              }}
            >
              // encrypted in transit
            </span>
          </div>
        </form>
      )}
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: "2.5rem 2rem", maxWidth: "900px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontFamily: "'VT323', monospace", color: "#9ca3af", fontSize: "1.1rem", letterSpacing: "0.06em" }}>
          nexo © 2026 // 4:20
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", color: "#4b5563", fontSize: "0.72rem", letterSpacing: "0.16em" }}>
          nexo label.
        </span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
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
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <Footer />
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
        @keyframes blink {
          50% { opacity: 0; }
        }

        .btn-primary {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          color: #111315;
          background: #22c55e;
          padding: 0.85rem 2rem;
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
          transform: translateY(-2px);
          box-shadow: 0 0 28px rgba(34,197,94,0.4);
        }
      `}</style>
    </div>
  );
}