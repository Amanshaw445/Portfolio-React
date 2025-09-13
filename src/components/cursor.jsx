import React, { useEffect, useRef, useState } from "react";

export default function SnakeCursor() {
  const text = "✨ Welcome to my Portfolio ✨";
  const charsRef = useRef([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const positions = Array(text.length).fill({ x: 0, y: 0 });
    let mouse = { x: 0, y: 0 };
    let hasMoved = false;

    const handleMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (!hasMoved) {
        // initialize all chars at mouse position on first move
        positions.forEach((_, i) => (positions[i] = { ...mouse }));
        hasMoved = true;
      }
    };

    const animate = () => {
      if (hasMoved) {
        positions[0] = { ...mouse }; // head follows mouse
        for (let i = 1; i < text.length; i++) {
          positions[i] = {
            x: positions[i].x + (positions[i - 1].x - positions[i].x) * 0.2,
            y: positions[i].y + (positions[i - 1].y - positions[i].y) * 0.2,
          };
        }

        positions.forEach((pos, i) => {
          const el = charsRef.current[i];
          if (el) {
            el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            el.style.opacity = 1 - i / text.length; // tail fade
          }
        });
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [text.length, isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          ref={(el) => (charsRef.current[i] = el)}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            pointerEvents: "none",
            fontWeight: "bold",
            fontSize: "20px",
            color: "violet", // fixed vibrant color
            zIndex: 9999,
          }}
        >
          {ch}
        </span>
      ))}
    </>
  );
}
