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
      className="
        pointer-events-none fixed top-0 left-0 
        w-48 h-48 rounded-full blur-[100px] transition-transform duration-100
        hidden dark:block    /* only show in dark mode */
        bg-gradient-to-r from-green-400 to-blue-500 opacity-70
      "
      style={{
        transform: `translate(${pos.x - 96}px, ${pos.y - 96}px)`,
      }}
    />
  );
};

export default CursorLight;
