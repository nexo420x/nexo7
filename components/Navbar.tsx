"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "home", to: "/" },
    { label: "projects", to: "/projects" },
    { label: "contact", to: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(17,19,21,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(34,197,94,0.12)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "1.75rem",
            color: "#22c55e",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          nexo
        </Link>

        {/* Links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.label}
                href={link.to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  color: isActive ? "#22c55e" : "#9ca3af",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "2px",
                  transition: "color 0.2s ease",
                }}
                className="nav-link"
                data-active={isActive}
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: isActive ? "100%" : "0%",
                    height: "1px",
                    background: "#22c55e",
                    transition: "width 0.25s ease",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .nav-link:hover {
          color: #e5e7eb !important;
        }
        .nav-link:hover span {
          width: 100% !important;
        }
      `}</style>
    </nav>
  );
}
