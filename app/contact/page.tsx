"use client"

import { useState, FormEvent } from 'react';
import { useTypingEffect } from '../contact/useTyping';
import { useFadeIn } from '../contact/useFadeIn';
import {
  BG,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
  ACCENT,
  CARD_BG,
  BORDER,
  mono,
  sans,
} from '../contact/tokens';

export const metadata = {
  title: "nexo contact — get in touch",
  description:
    "contact nexo for collaborations, projects or ideas. direct, simple, fast.",
};

const TYPED_WORDS = [
  'contact.',
  'email.',
  'collab.',
  'signal.',
  'message.',
  'reachout.',
  'connect.',
];


// ─── Hero ────────────────────────────────────────────────────────────────────
function ContactHero() {
  const typedWord = useTypingEffect(TYPED_WORDS, 80, 45, 1700);

  return (
    <section
      style={{
        minHeight: '72vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '140px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* faint grid */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.022) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      {/* gradient overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 80% 70% at 50% 50%, transparent 35%, ${BG} 100%)`,
          pointerEvents: 'none',
        }}
      />

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        
        {/* nexo */}
        <div
          style={{
            ...mono,
            fontSize: 'clamp(56px, 11vw, 110px)',
            color: TEXT_PRIMARY,
            lineHeight: 1,
            marginBottom: '2px',
            opacity: 1, // 🔥 FIX
          }}
        >
          nexo
        </div>

        {/* typed */}
        <div
          style={{
            ...mono,
            fontSize: 'clamp(38px, 7.5vw, 78px)',
            color: ACCENT,
            lineHeight: 1.1,
            marginBottom: '52px',
            minHeight: 'clamp(46px, 9vw, 94px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1, // 🔥 FIX
          }}
        >
          {typedWord}

          <span
  style={{
    display: 'inline-block',
    width: '0.4em',
    height: '0.1em',
    background: ACCENT,
    marginLeft: '4px',
    transform: 'translateY(0.2em)', 
    animation: 'blink 1s step-end infinite',
  }}
/>
        </div>

        {/* subtitle */}
        <p
          style={{
            ...sans,
            color: TEXT_SECONDARY,
            fontSize: '13px',
            letterSpacing: '0.18em',
            opacity: 1, // 🔥 FIX
          }}
        >
          open line. open mind.
        </p>

        {/* badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '40px',
            flexWrap: 'wrap',
            opacity: 1, // 🔥 FIX
          }}
        >
          {[
            '// channel open',
            '// response time: fast.',
            '// available for collabs.',
          ].map((badge) => (
            <span
              key={badge}
              style={{
                ...mono,
                fontSize: '13px',
                color: `${TEXT_SECONDARY}99`,
                letterSpacing: '0.06em',
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '28px 36px',
        background: hovered ? 'rgba(34,197,94,0.03)' : CARD_BG,
        border: `1px solid ${hovered ? 'rgba(34,197,94,0.2)' : BORDER}`,
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 0 28px rgba(34,197,94,0.06)' : 'none',
        cursor: 'pointer',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span
          style={{
            ...mono,
            fontSize: '13px',
            color: ACCENT,
            letterSpacing: '0.1em',
          }}
        >
          {label}
        </span>
        <span
          style={{
            ...mono,
            fontSize: 'clamp(22px, 3vw, 30px)',
            color: hovered ? TEXT_PRIMARY : TEXT_SECONDARY,
            transition: 'color 0.3s ease',
            letterSpacing: '0.04em',
          }}
        >
          {handle}
        </span>
        {detail && (
          <span
            style={{
              ...sans,
              fontSize: '12px',
              color: `${TEXT_SECONDARY}70`,
              letterSpacing: '0.06em',
              marginTop: '2px',
            }}
          >
            {detail}
          </span>
        )}
      </div>

      <span
        style={{
          ...sans,
          fontSize: '20px',
          color: hovered ? ACCENT : `${TEXT_SECONDARY}40`,
          transform: hovered ? 'translateX(6px)' : 'translateX(0)',
          transition: 'color 0.3s ease, transform 0.3s ease',
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
        padding: '80px 24px 60px',
        maxWidth: '860px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ width: '100%', height: '1px', background: BORDER, marginBottom: '72px' }} />

      <p
        style={{
          ...mono,
          fontSize: '15px',
          color: ACCENT,
          letterSpacing: '0.1em',
          marginBottom: '12px',
        }}
      >
        // channels
      </p>
      <h2
        style={{
          ...mono,
          fontSize: 'clamp(32px, 4.5vw, 50px)',
          color: TEXT_PRIMARY,
          lineHeight: 1,
          fontWeight: 'normal',
          marginBottom: '48px',
        }}
      >
        reach out directly.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

function Field({ label, id, type = 'text', placeholder, value, onChange, multiline, rows = 5 }: FieldProps) {
  const [focused, setFocused] = useState(false);

  const baseStyle: React.CSSProperties = {
    ...sans,
    width: '100%',
    background: focused ? 'rgba(34,197,94,0.02)' : 'rgba(255,255,255,0.025)',
    border: `1px solid ${focused ? 'rgba(34,197,94,0.35)' : BORDER}`,
    borderRadius: '5px',
    padding: '14px 18px',
    color: TEXT_PRIMARY,
    fontSize: '14px',
    letterSpacing: '0.02em',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
    boxShadow: focused ? '0 0 0 3px rgba(34,197,94,0.07), inset 0 0 0 1px rgba(34,197,94,0.1)' : 'none',
    resize: multiline ? 'vertical' : undefined,
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.6,
  } as React.CSSProperties;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label
        htmlFor={id}
        style={{
          ...mono,
          fontSize: '13px',
          color: focused ? ACCENT : TEXT_SECONDARY,
          letterSpacing: '0.1em',
          transition: 'color 0.25s ease',
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
          style={{ ...baseStyle, minHeight: '140px' }}
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

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
        padding: '60px 24px 80px',
        maxWidth: '860px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ width: '100%', height: '1px', background: BORDER, marginBottom: '72px' }} />

      <p
        style={{
          ...mono,
          fontSize: '15px',
          color: ACCENT,
          letterSpacing: '0.1em',
          marginBottom: '12px',
        }}
      >
        // compose
      </p>
      <h2
        style={{
          ...mono,
          fontSize: 'clamp(32px, 4.5vw, 50px)',
          color: TEXT_PRIMARY,
          lineHeight: 1,
          fontWeight: 'normal',
          marginBottom: '48px',
        }}
      >
        send a message.
      </h2>

      {sent ? (
        <div
          style={{
            padding: '48px 36px',
            background: 'rgba(34,197,94,0.04)',
            border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: '8px',
            textAlign: 'center',
            animation: 'fadeSlideUp 0.5s ease forwards',
          }}
        >
          <p style={{ ...mono, fontSize: '28px', color: ACCENT, marginBottom: '12px' }}>
            transmitted.
          </p>
          <p style={{ ...sans, color: TEXT_SECONDARY, fontSize: '14px', letterSpacing: '0.06em' }}>
            message received — i'll be in touch.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* two-col row: name + email */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            <Field label="// name" id="name" placeholder="your name" value={name} onChange={setName} />
            <Field label="// email" id="email" type="email" placeholder="your@email.com" value={email} onChange={setEmail} />
          </div>

          <Field label="// subject" id="subject" placeholder="what's this about?" value={subject} onChange={setSubject} />
          <Field label="// message" id="message" placeholder="write your message here..." value={message} onChange={setMessage} multiline rows={6} />

          {/* submit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '8px' }}>
            <button
              type="submit"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                ...mono,
                fontSize: '17px',
                color: btnHovered ? '#111315' : ACCENT,
                background: btnHovered ? ACCENT : 'transparent',
                border: `1px solid ${ACCENT}`,
                borderRadius: '5px',
                padding: '12px 32px',
                cursor: 'pointer',
                letterSpacing: '0.08em',
                transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
                boxShadow: btnHovered ? '0 0 24px rgba(34,197,94,0.2)' : 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  transform: btnHovered ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.2s ease',
                }}
              >
                →
              </span>
              transmit
            </button>

            <span
              style={{
                ...sans,
                color: `${TEXT_SECONDARY}60`,
                fontSize: '12px',
                letterSpacing: '0.08em',
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
    <footer style={{ padding: '40px 24px', maxWidth: '860px', margin: '0 auto' }}>
      <div style={{ width: '100%', height: '1px', background: BORDER, marginBottom: '32px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ ...mono, color: TEXT_SECONDARY, fontSize: '14px', letterSpacing: '0.06em' }}>
          nexo © 2026
        </span>
        <span style={{ ...sans, color: `${TEXT_SECONDARY}45`, fontSize: '11px', letterSpacing: '0.1em' }}>
          built with intent.
        </span>
      </div>
    </footer>
  );
}

// ─── Page ──────────────���──────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </>
  );
}