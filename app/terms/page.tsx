"use client";

import Link from "next/link";

export default function TermsPage() {
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
      {/* Grid subtil pe fundal (fără elemente decorative grafice) */}
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
            [ LEGAL / TERMS OF SERVICE ]
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
            terms of service
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
            {/* 01. Scopul Site-ului */}
            <div className="terms-card">
              <span className="terms-number">// 01 — scopul platformei</span>
              <h2 className="terms-heading">portofoliu & hub de prezentare</h2>
              <p className="terms-text">
                Acest site funcționează drept portofoliu personal de prezentare, showcase tehnic și hub central pentru proiectele dezvoltate de <strong style={{ color: "#e5e7eb" }}>nexo</strong> (inclusiv platformele precum <em>Tellnex</em>, <em>Reznex</em> și uneltele sau asistenții AI conectați).
              </p>
              <p className="terms-text" style={{ marginTop: "0.8rem" }}>
                Conținutul furnizat pe această platformă are scop informativ, demonstrativ și de prezentare a capacităților tehnice, de programare, automatizare și inginerie hardware/software.
              </p>
            </div>

            {/* 02. Proprietate Intelectuală */}
            <div className="terms-card">
              <span className="terms-number">// 02 — drepturi de autor</span>
              <h2 className="terms-heading">proprietate intelectuală</h2>
              <p className="terms-text">
                Cu excepția cazurilor în care se specifică altfel (cum ar fi bibliotecile open-source marcate ca atare), toate elementele grafice, codul sursă, designul, denumirile proiectelor, conceptele arhitecturale și conținutul text aparțin exclusiv autorului platformei <strong style={{ color: "#e5e7eb" }}>nexo</strong>.
              </p>
              <p className="terms-text" style={{ marginTop: "0.8rem" }}>
                Este interzisă copierea, redistribuirea sau reproducerea neautorizată a elementelor de brand sau a interfeței fără un acord prealabil.
              </p>
            </div>

            {/* 03. Servicii & AI Gratuit */}
            <div className="terms-card">
              <span className="terms-number">// 03 — unelte & asistenți ai</span>
              <h2 className="terms-heading">utilizarea serviciilor gratuite</h2>
              <p className="terms-text">
                Proiectele prezentate pot oferi acces la unelte digitale sau asistenți AI (ex. asistentul specializat pe electronică oferit gratuit în cadrul Reznex). Aceste servicii sunt furnizate în regim <strong style={{ color: "#22c55e" }}>"as-is" (așa cum sunt)</strong>.
              </p>
              <p className="terms-text" style={{ marginTop: "0.8rem" }}>
                Deși se depun eforturi constante pentru a oferi răspunsuri precise și soluții de calitate (depanare hardware, scheme, cod sursă), răspunsurile generate de AI au rol consultativ. Utilizatorul este responsabil de verificarea schemelor și a circuitelor electrice înainte de implementarea lor fizică.
              </p>
            </div>

            {/* 04. Formular de Contact */}
            <div className="terms-card">
              <span className="terms-number">// 04 — comunicare</span>
              <h2 className="terms-heading">formulare & mesaje direct</h2>
              <p className="terms-text">
                Prin trimiterea de mesaje prin intermediul formularului de contact sau prin canalele directe (e-mail, social media), vă exprimați acordul de a fi contactat înapoi cu privire la solicitarea dumneavoastră. Mesajele transmise nu vor fi vândute sau utilizate în scopuri de marketing nesolicitat (SPAM).
              </p>
            </div>

            {/* 05. Link-uri Externe */}
            <div className="terms-card">
              <span className="terms-number">// 05 — redirecționări</span>
              <h2 className="terms-heading">link-uri către platforme externe</h2>
              <p className="terms-text">
                Site-ul conține link-uri către domenii și proiecte externe proprii (ex. <em>tellnex.site</em>, <em>reznex.ro</em>) sau platforme partenere. Fiecare dintre aceste platforme poate avea propriile reguli de utilizare sau politici specifice.
              </p>
            </div>

            {/* 06. Limiting Liability */}
            <div className="terms-card">
              <span className="terms-number">// 06 — declinarea responsabilității</span>
              <h2 className="terms-heading">limitarea răspunderii</h2>
              <p className="terms-text">
                Autorul nu poate fi tras la răspundere pentru eventuale erori tehnice, întreruperi temporare ale serviciului, defecțiuni de hardware provocate de manipularea greșită a schemelor de către utilizatori sau utilizarea necorespunzătoare a informațiilor tehnice publicate pe platformă.
              </p>
            </div>

            {/* 07. Modificări */}
            <div className="terms-card">
              <span className="terms-number">// 07 — actualizări</span>
              <h2 className="terms-heading">modificarea termenilor</h2>
              <p className="terms-text">
                Acești termeni pot fi actualizați periodic pentru a reflecta evoluția proiectelor sau modificările de funcționalitate. Utilizarea în continuare a site-ului reprezintă acceptarea termenilor actualizați.
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
              → contact
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
            nexo © 2026 // terms
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              color: "#4b5563",
            }}
          >
            legal specifications.
          </span>
        </footer>
      </div>

      <style>{`
        .terms-card {
          background: #16181c;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 2rem 2.25rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.2);
          transition: border-color 0.25s ease;
        }

        .terms-card:hover {
          border-color: rgba(34,197,94,0.2);
        }

        .terms-number {
          font-family: 'VT323', monospace;
          font-size: 1.1rem;
          color: #22c55e;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.4rem;
        }

        .terms-heading {
          font-family: 'VT323', monospace;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          color: #e5e7eb;
          margin: 0 0 1rem 0;
          letter-spacing: 0.03em;
          line-height: 1.1;
          font-weight: 400;
        }

        .terms-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          line-height: 1.75;
          color: #9ca3af;
          margin: 0;
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