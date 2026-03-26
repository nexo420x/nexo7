"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
        mass: 0.4,
      }}
      style={{ translateX: "-2px", translateY: "-2px" }}
    >
      {/* Cursor SVG */}
      <svg
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_6px_rgba(34,197,94,0.35)]"
      >
        {/* Outline */}
        <path
          d="M2 2L2 26L7 20L11 26L14 24L10 18L18 18L2 2Z"
          fill="#d9ffe7"
          stroke="#22c55e"
          strokeWidth="1.2"
        />
      </svg>
    </motion.div>
  );
}