import React, { useEffect, useState } from "react";

const CodingStats = () => {
  // Separate usernames
  const githubUsername = "Amanshaw445";
  const leetcodeUsername = "amanshaw_445";

  const [avatarUrl, setAvatarUrl] = useState("");

  // Detect dark/light theme
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Fetch GitHub avatar
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub profile");
        }
        return res.json();
      })
      .then((data) => {
        setAvatarUrl(data.avatar_url);
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub avatar:", err);
      });

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(
        document.documentElement.classList.contains("dark")
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const githubTheme = isDark ? "radical" : "default";
  const leetcodeTheme = isDark ? "dark" : "light";

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-10">

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="text-pink-500">Coding</span> Statistics
      </h2>

      {/* =====================================================
          8 CARD GRID
          ===================================================== */}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* =================================================
            1. GITHUB PROFILE
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400 mb-4">
            GitHub Profile 👀
          </h3>

          <div className="flex flex-col items-center justify-center text-center">

            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="GitHub Avatar"
                className="
                  w-24
                  h-24
                  rounded-full
                  border-4
                  border-pink-500
                  mb-4
                "
              />
            )}

            <img
              src="https://visitor-badge.laobi.icu/badge?page_id=amanshaw445"
              alt="GitHub Profile Views"
              className="mb-3"
            />

            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg
                font-semibold
                text-pink-500
                dark:text-pink-400
                hover:underline
              "
            >
              @{githubUsername} ↗️
            </a>
          </div>
        </div>

        {/* =================================================
            2. GITHUB STATS
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
            overflow-hidden
          "
        >
          <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400 mb-4">
            GitHub Stats 📊
          </h3>

          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${githubTheme}&hide_title=true&hide_border=true`}
            alt="GitHub Stats"
            className="w-full rounded-md"
          />
        </div>

        {/* =================================================
            3. GITHUB STREAK
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
            overflow-hidden
          "
        >
          <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400 mb-4">
            GitHub Streak 🔥
          </h3>

          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=${githubTheme}&hide_border=true`}
            alt="GitHub Streak"
            className="w-full rounded-md"
          />
        </div>

        {/* =================================================
            4. TOP LANGUAGES
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
            overflow-hidden
          "
        >
          <h3 className="text-lg font-semibold text-pink-500 dark:text-pink-400 mb-4">
            Top Languages 💻
          </h3>

          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${githubTheme}&hide_border=true`}
            alt="Top Languages"
            className="w-full rounded-md"
          />
        </div>

        {/* =================================================
            5. LEETCODE PROFILE
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          <h3 className="text-lg font-semibold text-yellow-500 dark:text-yellow-400 mb-4">
            LeetCode Profile 🧩
          </h3>

          <div className="flex flex-col justify-center h-full">

            <p className="text-4xl mb-4">
              🧠
            </p>

            <a
              href={`https://leetcode.com/u/${leetcodeUsername}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg
                font-semibold
                text-yellow-500
                dark:text-yellow-400
                hover:underline
              "
            >
              @{leetcodeUsername} ↗️
            </a>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
              View my LeetCode profile and problem-solving progress.
            </p>

          </div>
        </div>

        {/* =================================================
            6. LEETCODE STATS
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
            overflow-hidden
          "
        >
          <h3 className="text-lg font-semibold text-yellow-500 dark:text-yellow-400 mb-4">
            LeetCode Stats 📊
          </h3>

          <img
            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=${leetcodeTheme}&border=0&radius=10`}
            alt="LeetCode Stats"
            className="w-full rounded-md"
          />
        </div>

        {/* =================================================
            7. LEETCODE HEATMAP
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
            overflow-hidden
          "
        >
          <h3 className="text-lg font-semibold text-yellow-500 dark:text-yellow-400 mb-4">
            LeetCode Activity 🔥
          </h3>

          <img
            src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=${leetcodeTheme}&border=0&radius=10&ext=heatmap`}
            alt="LeetCode Activity"
            className="w-full rounded-md"
          />
        </div>

        {/* =================================================
            8. PROBLEM SOLVING
            ================================================= */}

        <div
          className="
            w-full
            min-w-0
            p-5
            rounded-2xl
            bg-white
            bg-opacity-70
            text-gray-900
            dark:bg-[#2c2c3c]
            dark:bg-opacity-70
            dark:text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          <h3 className="text-lg font-semibold text-yellow-500 dark:text-yellow-400 mb-4">
            Problem Solving 🏆
          </h3>

          <div className="flex flex-col justify-center h-full">

            <p className="text-4xl mb-4">
              🏆
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-5">
              Check out my LeetCode profile to see my solved problems,
              submissions and contest progress.
            </p>

            <a
              href={`https://leetcode.com/u/${leetcodeUsername}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                w-fit
                px-5
                py-2
                rounded-lg
                bg-yellow-500
                text-black
                font-semibold
                hover:bg-yellow-400
                transition-colors
              "
            >
              View LeetCode →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingStats;