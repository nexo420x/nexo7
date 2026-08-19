"use client";

import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdated = "19 August 2026";

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
      {/* Grid subtil pe fundal */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ── HERO HEADER ────────────────────────────── */}
        <section
          style={{
            padding: "8rem 2rem 3rem",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "13px",
              color: "#22c55e",
              opacity: 0.8,
              letterSpacing: "0.15em",
              marginBottom: "12px",
            }}
          >
            [ LEGAL / PRIVACY POLICY ]
          </div>

          <h1
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              color: "#e5e7eb",
              margin: "0 0 0.5rem 0",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            privacy policy
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.14em",
              color: "#6b7280",
              marginTop: "1rem",
            }}
          >
            // ultima actualizare: {lastUpdated}
          </p>
        </section>

        {/* ── CONTENT SECTION ────────────────────────── */}
        <section
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            padding: "1rem 2rem 6rem",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.06)",
              marginBottom: "3.5rem",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {/* 01. Colectarea Datelor */}
            <div className="privacy-card">
              <span className="privacy-number">// 01 — date colectate</span>
              <h2 className="privacy-heading">ce date cu caracter personal colectăm</h2>
              <p className="privacy-text">
                Atunci când folosești formularul nostru de contact, colectăm direct următoarele informații furnizate voluntar de tine:
              </p>
              <ul className="privacy-list">
                <li><strong>Numele:</strong> Pentru a ști cum să ne adresăm în răspuns.</li>
                <li><strong>Adresa de e-mail:</strong> Pentru a-ți putea transmite răspunsul la solicitare.</li>
                <li><strong>Subiectul & Mesajul:</strong> Conținutul transmis pentru a înțelege cererea ta de colaborare sau întrebarea.</li>
              </ul>
            </div>

            {/* 02. Scopul Prelucrării */}
            <div className="privacy-card">
              <span className="privacy-number">// 02 — utilizare</span>
              <h2 className="privacy-heading">scopul prelucrării datelor</h2>
              <p className="privacy-text">
                Datele colectate prin intermediul formularului de contact sunt utilizate <strong style={{ color: "#e5e7eb" }}>exclusiv</strong> în scopul comunicării directe cu tine (răspuns la e-mailuri, discuții despre proiecte, colaborări).
              </p>
              <p className="privacy-text" style={{ marginTop: "0.8rem" }}>
                Nu folosim datele tale pentru campanii de marketing nesolicitat (SPAM), nu trimitem newslettere automate și nu creăm profiluri comerciale pe baza mesajelor tale.
              </p>
            </div>

            {/* 03. Securitatea & Stocarea Datelor */}
            <div className="privacy-card">
              <span className="privacy-number">// 03 — securitate</span>
              <h2 className="privacy-heading">stocarea și protecția datelor</h2>
              <p className="privacy-text">
                Mesajele trimise sunt criptate în tranzit și sunt retransmise către adresa noastră oficială de contact (<em>tellnex.contact@gmail.com</em>). Depunem toate eforturile tehnice necesare pentru a preveni accesul neautorizat la datele tale.
              </p>
              <p className="privacy-text" style={{ marginTop: "0.8rem" }}>
                <strong style={{ color: "#22c55e" }}>Confidențialitate garantată:</strong> Nu vom vinde, închiria sau distribui niciodată datele tale personale către terțe părți.
              </p>
            </div>

            {/* 04. Cookie-uri & Analytics */}
            <div className="privacy-card">
              <span className="privacy-number">// 04 — module cookie</span>
              <h2 className="privacy-heading">cookie-uri și tehnologii de urmărire</h2>
              <p className="privacy-text">
                Acest site de portofoliu este conceput să fie cât mai curat și minimalist. Nu plasăm cookie-uri de urmărire invazive sau pixeli de reclame (ex. Facebook Pixel, Google Ads Tracking).
              </p>
            </div>

            {/* 05. Drepturile Tale GDPR */}
            <div className="privacy-card">
              <span className="privacy-number">// 05 — drepturile tale</span>
              <h2 className="privacy-heading">drepturile conform GDPR</h2>
              <p className="privacy-text">
                Conform Regulamentului General privind Protecția Datelor (GDPR), beneficiezi de următoarele drepturi referitoare la datele tale:
              </p>
              <ul className="privacy-list">
                <li><strong>Dreptul de acces:</strong> Poți solicita o confirmare a datelor pe care le deținem despre tine.</li>
                <li><strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Poți solicita oricând ștergerea definitivă a istoricului de mesaje trimise.</li>
                <li><strong>Dreptul la rectificare:</strong> Poți cere corectarea datelor inexacte.</li>
              </ul>
            </div>

            {/* 06. Contact GDPR */}
            <div className="privacy-card">
              <span className="privacy-number">// 06 — exercitarea drepturilor</span>
              <h2 className="privacy-heading">cum ne poți contacta</h2>
              <p className="privacy-text">
                Pentru orice întrebare privitoare la politica de confidențialitate sau pentru a solicita ștergerea datelor tale din istoricul nostru de mailuri, ne poți scrie direct la:
              </p>
              <p className="privacy-text" style={{ marginTop: "0.8rem", color: "#22c55e", fontFamily: "'VT323', monospace", fontSize: "1.2rem" }}>
                → tellnex.contact@gmail.com
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              gap: "1.2rem",
              alignItems: "center",
            }}
          >
            <Link href="/" className="btn-secondary">
              ← înapoi la acasă
            </Link>
            <Link href="/contact" className="btn-primary">
              → formular contact
            </Link>
          </div>
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
            nexo © 2026 // privacy
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              color: "#4b5563",
            }}
          >
            data protection compliant.
          </span>
        </footer>
      </div>

      <style>{`
        .privacy-card {
          background: #16181c;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 2rem 2.25rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.2);
          transition: border-color 0.25s ease;
        }

        .privacy-card:hover {
          border-color: rgba(34,197,94,0.2);
        }

        .privacy-number {
          font-family: 'VT323', monospace;
          font-size: 1.1rem;
          color: #22c55e;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.4rem;
        }

        .privacy-heading {
          font-family: 'VT323', monospace;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          color: #e5e7eb;
          margin: 0 0 1rem 0;
          letter-spacing: 0.03em;
          line-height: 1.1;
          font-weight: 400;
        }

        .privacy-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          line-height: 1.75;
          color: #9ca3af;
          margin: 0;
        }

        .privacy-list {
          margin: 0.8rem 0 0 0;
          padding-left: 1.2rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          line-height: 1.8;
          color: #9ca3af;
        }

        .privacy-list li strong {
          color: #e5e7eb;
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
      `}</style>
    </div>
  );
}