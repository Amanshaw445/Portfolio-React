import React, { useEffect, useState } from "react";

const GitHubStats = () => {
  const username = "amanshaw445";
  const [avatarUrl, setAvatarUrl] = useState("");

  // Detect theme from <html class="dark">
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setAvatarUrl(data.avatar_url))
      .catch((err) => console.error("Failed to fetch GitHub avatar:", err));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Pick theme for GitHub cards
  const cardTheme = isDark ? "radical" : "default";

  return (
    <aside className="w-full md:w-1/2 p-6 rounded-2xl bg-white bg-opacity-70 text-gray-900 dark:bg-[#2c2c3c] dark:bg-opacity-70 dark:text-white transition-colors">
      <h2 className="text-3xl font-bold text-left mb-8">🚀 GitHub Stats</h2>

      {/* Responsive 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Avatar + Profile Views */}
        <div className="bg-white dark:bg-[#2c2c3c] p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-4 transition-colors">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="GitHub Avatar"
              className="w-28 h-28 rounded-full border-4 border-pink-500"
            />
          )}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-medium text-pink-500 dark:text-pink-400">
              Profile Views 👀
            </h3>
            <img
              src="https://visitor-badge.laobi.icu/badge?page_id=amanshaw445"
              alt="visitor badge"
              className="mx-auto sm:mx-0"
            />
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 mt-2"
            >
              <p className="text-xl font-semibold text-pink-500 dark:text-pink-400 hover:underline">
                @{username}
              </p>
              <span className="text-green-500 dark:text-green-400 text-xl">
                ↗️
              </span>
            </a>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-white dark:bg-[#2c2c3c] p-4 rounded-xl shadow-md transition-colors">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${cardTheme}&hide_title=true&hide_border=true`}
            alt="GitHub Stats"
            className="w-full rounded-md"
          />
        </div>

        {/* GitHub Streak */}
        <div className="bg-white dark:bg-[#2c2c3c] p-4 rounded-xl shadow-md transition-colors">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=${cardTheme}&hide_border=true`}
            alt="GitHub Streak"
            className="w-full rounded-md"
          />
        </div>

        {/* Top Languages */}
        <div className="bg-white dark:bg-[#2c2c3c] p-4 rounded-xl shadow-md transition-colors">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${cardTheme}&hide_border=true`}
            alt="Top Languages"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </aside>
  );
};

export default GitHubStats;
