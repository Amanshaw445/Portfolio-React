import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed left-0 top-1/3 transform -translate-y-1/2
                 bg-gray-800 text-white dark:bg-gray-200 dark:text-black
                 p-3 rounded-r-2xl shadow-lg z-50 hover:scale-105 transition"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
