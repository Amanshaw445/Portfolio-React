import React, { useEffect, useState } from "react";

const GitHubStats = () => {
  const username = "amanshaw445";
  const theme = "radical";
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setAvatarUrl(data.avatar_url))
      .catch((err) => console.error("Failed to fetch GitHub avatar:", err));
  }, []);

  return (
    <aside className="w-full md:w-1/2 p-6 text-white rounded-2xl">
      <h2 className="text-3xl font-bold text-left mb-8">🚀 GitHub Stats</h2>

      {/* Responsive 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Avatar + Profile Views */}
        <div className="bg-[#2c2c3c] p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-4">
  {avatarUrl && (
    <img
      src={avatarUrl}
      alt="GitHub Avatar"
      className="w-28 h-28 rounded-full border-4 border-pink-500"
    />
  )}
  <div className="text-center sm:text-left">
    <h3 className="text-lg font-medium text-pink-400">Profile Views👀 </h3>
    <img
      src="https://visitor-badge.laobi.icu/badge?page_id=amanshaw445"
      alt="visitor badge"
      className="mx-auto sm:mx-0"
    />
  <a href={`https://github.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1 mt-2">
    <p className="text-xl font-semibold text-pink-400 hover:underline">@{username}</p>
    <span className="text-green-400 text-xl">↗️</span>
  </a>

  </div>
</div>


        {/* GitHub Stats */}
        <div className="bg-[#2c2c3c] p-4 rounded-xl shadow-md">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_title=true&hide_border=true`}
            alt="GitHub Stats"
            className="w-full rounded-md"
          />
        </div>

        {/* GitHub Streak */}
        <div className="bg-[#2c2c3c] p-4 rounded-xl shadow-md">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=${theme}&hide_border=true`}
            alt="GitHub Streak"
            className="w-full rounded-md"
          />
        </div>

        {/* Top Languages */}
        <div className="bg-[#2c2c3c] p-4 rounded-xl shadow-md">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true`}
            alt="Top Languages"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </aside>
  );
};

export default GitHubStats;
