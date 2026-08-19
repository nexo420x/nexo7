'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTypingEffect } from '@/hooks/useTyping';
import { useFadeIn } from '@/hooks/useFadeIn';

// ─── color / font tokens ────────────────────────────────────────────────────
const BG = '#111315';
const TEXT_PRIMARY = '#e5e7eb';
const TEXT_SECONDARY = '#9ca3af';
const ACCENT = '#22c55e';
const CARD_BG = '#16181c';
const BORDER = 'rgba(255,255,255,0.06)';

const mono: React.CSSProperties = {
  fontFamily: "'VT323', monospace",
  letterSpacing: '0.02em',
};
const sans: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
};

// ─── data ────────────────────────────────────────────────────────────────────
const TYPED_WORDS = ['world.', 'systems.', 'future.', 'projects.', 'rules.'];

const PROJECTS = [
  {
    id: 1,
    name: 'Tellnex',
    description: 'asistent AI conversational. raspunsuri rapide, interfata simpla, experienta nativa.',
    tags: ['AI', 'conversational'],
    href: 'https://tellnex.site',
  },
  {
    id: 2,
    name: 'Reznex',
    description: 'hub si comunitate pentru pasionatii de electronica si embedded. gazduire de proiecte iot, scheme hardware detaliate, liste de componente interactive si cod sursa.',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'IoT', 'Hardware'],
    href: 'https://reznex.ro', 
  },
];

// ─── 420 Background Component ────────────────────────────────────────────────

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
      {/* Frunză 1 - Stânga sus */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '4%',
          animation: 'rotateAndFloat1 30s linear infinite',
          filter: 'invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 15px rgba(34,197,94,0.3))',
          opacity: 0.25,
        }}
      >
        <Image
          src="/cannabis.svg"
          alt="cannabis leaf"
          width={220}
          height={220}
          priority
        />
      </div>

      {/* Frunză 2 - Dreapta sus */}
      <div
        style={{
          position: 'absolute',
          top: '22%',
          right: '5%',
          animation: 'rotateAndFloat2 38s linear infinite',
          filter: 'invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 15px rgba(34,197,94,0.25))',
          opacity: 0.2,
        }}
      >
        <Image
          src="/cannabis.svg"
          alt="cannabis leaf"
          width={180}
          height={180}
          priority
        />
      </div>

      {/* Frunză 3 - Dreapta jos */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '8%',
          animation: 'rotateAndFloat1 45s linear infinite reverse',
          filter: 'invert(52%) sepia(87%) saturate(420%) hue-rotate(85deg) brightness(110%) drop-shadow(0 0 20px rgba(34,197,94,0.35))',
          opacity: 0.22,
        }}
      >
        <Image
          src="/cannabis.svg"
          alt="cannabis leaf"
          width={260}
          height={260}
        />
      </div>
    </div>
  );
}

// ─── components ──────────────────────────────────────────────────────────────

function Hero() {
  const typedWord = useTypingEffect(TYPED_WORDS, 85, 50, 1900);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle grid */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />
      {/* radial fade center */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, ${BG} 100%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Subtil 420 Indicator */}
        <div
          style={{
            ...mono,
            fontSize: '12px',
            color: ACCENT,
            opacity: 0.6,
            letterSpacing: '0.15em',
            marginBottom: '16px',
          }}
        >
          [ 420 SYSTEM ]
        </div>

        <div
          style={{
            ...mono,
            fontSize: 'clamp(72px, 14vw, 140px)',
            color: TEXT_PRIMARY,
            lineHeight: 1,
            marginBottom: '4px',
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease 0.1s forwards',
          }}
        >
          nexo
        </div>

        <div
          style={{
            ...mono,
            fontSize: 'clamp(38px, 7vw, 72px)',
            color: TEXT_SECONDARY,
            lineHeight: 1.1,
            marginBottom: '2px',
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease 0.35s forwards',
          }}
        >
          builds the
        </div>

        <div
          style={{
            ...mono,
            fontSize: 'clamp(38px, 7vw, 72px)',
            color: ACCENT,
            lineHeight: 1.1,
            marginBottom: '64px',
            minHeight: 'clamp(46px, 8.5vw, 86px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease 0.55s forwards',
          }}
        >
          {typedWord}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '0.85em',
              background: ACCENT,
              marginLeft: '3px',
              animation: 'blink 1s step-end infinite',
              borderRadius: '1px',
              verticalAlign: 'middle',
            }}
          />
        </div>

        <p
          style={{
            ...sans,
            color: TEXT_SECONDARY,
            fontSize: '13px',
            letterSpacing: '0.18em',
            textTransform: 'lowercase',
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease 0.8s forwards',
          }}
        >
          pagina mea de prezentare. finally here.
        </p>

        <div
          style={{
            marginTop: '80px',
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease 1.1s forwards',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '48px',
              background: `linear-gradient(to bottom, transparent, ${TEXT_SECONDARY})`,
              opacity: 0.3,
              animation: 'pulseY 2.4s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: { id: number; name: string; description: string; tags: string[]; href: string };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: CARD_BG,
        border: `1px solid ${hovered ? 'rgba(34,197,94,0.18)' : BORDER}`,
        borderRadius: '8px',
        padding: '36px 40px',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: hovered
          ? '0 0 32px rgba(34,197,94,0.07), 0 8px 32px rgba(0,0,0,0.3)'
          : '0 4px 24px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <span
          style={{
            ...mono,
            fontSize: '28px',
            color: hovered ? TEXT_PRIMARY : TEXT_SECONDARY,
            transition: 'color 0.3s ease',
            letterSpacing: '0.04em',
          }}
        >
          {project.name}
        </span>
        <span
          style={{
            ...sans,
            fontSize: '13px',
            color: hovered ? ACCENT : 'transparent',
            transition: 'color 0.3s ease',
            letterSpacing: '0.06em',
          }}
        >
          →
        </span>
      </div>

      <p
        style={{
          ...sans,
          color: TEXT_SECONDARY,
          fontSize: '14px',
          lineHeight: 1.7,
          marginBottom: '24px',
        }}
      >
        {project.description}
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              ...sans,
              fontSize: '11px',
              color: hovered ? ACCENT : TEXT_SECONDARY,
              letterSpacing: '0.12em',
              textTransform: 'lowercase',
              padding: '3px 10px',
              border: `1px solid ${hovered ? 'rgba(34,197,94,0.25)' : BORDER}`,
              borderRadius: '3px',
              transition: 'color 0.3s ease, border-color 0.3s ease',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function Projects() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '120px 24px',
        maxWidth: '860px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div style={{ marginBottom: '64px' }}>
        <p
          style={{
            ...mono,
            fontSize: '15px',
            color: ACCENT,
            letterSpacing: '0.1em',
            marginBottom: '12px',
          }}
        >
          // projects
        </p>
        <h2
          style={{
            ...mono,
            fontSize: 'clamp(36px, 5vw, 54px)',
            color: TEXT_PRIMARY,
            lineHeight: 1,
            fontWeight: 'normal',
          }}
        >
          my drops.
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p
        style={{
          ...mono,
          color: TEXT_SECONDARY,
          fontSize: '16px',
          letterSpacing: '0.08em',
          marginTop: '40px',
          opacity: 0.5,
        }}
      >
        more projects soon.
      </p>
    </section>
  );
}

function About() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '120px 24px',
        maxWidth: '860px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '1px',
          background: BORDER,
          marginBottom: '80px',
        }}
      />

      <p
        style={{
          ...mono,
          fontSize: '15px',
          color: ACCENT,
          letterSpacing: '0.1em',
          marginBottom: '12px',
        }}
      >
        // about
      </p>

      <h2
        style={{
          ...mono,
          fontSize: 'clamp(36px, 5vw, 54px)',
          color: TEXT_PRIMARY,
          lineHeight: 1,
          fontWeight: 'normal',
          marginBottom: '48px',
        }}
      >
        who is nexo?
      </h2>

      <div
        style={{
          maxWidth: '480px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        <p style={{ ...sans, color: TEXT_PRIMARY, fontSize: '17px', lineHeight: 1.75 }}>
          i build systems that work.
        </p>
        <p style={{ ...sans, color: TEXT_SECONDARY, fontSize: '15px', lineHeight: 1.75 }}>
          vreau sa construiesc cat mai multe lucruri utile. simple as that.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, isVisible } = useFadeIn();
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        padding: '120px 24px',
        maxWidth: '860px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '1px',
          background: BORDER,
          marginBottom: '80px',
        }}
      />

      <p
        style={{
          ...mono,
          fontSize: '15px',
          color: ACCENT,
          letterSpacing: '0.1em',
          marginBottom: '12px',
        }}
      >
        // get in touch
      </p>

      <h2
        style={{
          ...mono,
          fontSize: 'clamp(36px, 5vw, 54px)',
          color: TEXT_PRIMARY,
          lineHeight: 1,
          fontWeight: 'normal',
          marginBottom: '52px',
        }}
      >
        let&apos;s talk.
      </h2>

      <a
        href="https://instagram.com/nexo.7x"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setLinkHovered(true)}
        onMouseLeave={() => setLinkHovered(false)}
        style={{
          ...sans,
          color: linkHovered ? ACCENT : TEXT_PRIMARY,
          fontSize: '22px',
          textDecoration: 'none',
          transition: 'color 0.25s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          letterSpacing: '0.02em',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            transform: linkHovered ? 'translateX(6px)' : 'translateX(0)',
            transition: 'transform 0.25s ease',
          }}
        >
          →
        </span>
        @nexo.7x
      </a>

      <p
        style={{
          ...sans,
          color: TEXT_SECONDARY,
          fontSize: '13px',
          letterSpacing: '0.12em',
          marginTop: '28px',
        }}
      >
        open to new ideas.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: '40px 24px',
        maxWidth: '860px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '1px',
          background: BORDER,
          marginBottom: '32px',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ ...mono, color: TEXT_SECONDARY, fontSize: '14px', letterSpacing: '0.06em' }}>
          nexo © 2026 // 4:20
        </span>
        <span
          style={{
            ...sans,
            color: `${TEXT_SECONDARY}55`,
            fontSize: '11px',
            letterSpacing: '0.1em',
          }}
        >
          nexo label
        </span>
      </div>
    </footer>
  );
}

// ─── root ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Inter:wght@400;500&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes pulseY {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 0.6; transform: scaleY(1.15); }
        }

        /* Rotire continuă și plutire ușoară pentru SVG-ul tău */
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

        html { scroll-behavior: smooth; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(34,197,94,0.22); color: #e5e7eb; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111315; }
        ::-webkit-scrollbar-thumb { background: #2a2d30; border-radius: 2px; }
      `}</style>

      <div
        style={{
          background: BG,
          color: TEXT_PRIMARY,
          minHeight: '100vh',
          fontFamily: "'Inter', sans-serif",
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        {/* Fundalul fixat cu frunzele din public/cannabis.svg */}
        <FloatingLeavesBackground />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}