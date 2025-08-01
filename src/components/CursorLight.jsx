import React, { useEffect, useState } from "react";

const CursorLight = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-11 w-48 h-48 bg-green-400 rounded-full opacity-80 blur-[100px] transition-transform duration-100"
      style={{
        transform: `translate(${pos.x - 96}px, ${pos.y - 96}px)`,
      }}
    />
  );
};

export default CursorLight;
