import React, { useEffect, useState } from "react";
import "./themeprovider.css";

const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");
  const [isThemeListVisible, setThemeListVisible] = useState(false);
  const themeNames = ["light", "dark", "orange", "purple", "blue"];
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#e1e7e0");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#2b4560"
      );
      document.documentElement.style.setProperty("--font-color", "#2b4560");
      document.documentElement.style.setProperty("--ten-pr-color", "#2f6d80");
    } else if (theme === "dark") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#000");
      document.documentElement.style.setProperty("--thirty-pr-color", "#fff");
      document.documentElement.style.setProperty("--font-color", "#fff");
      document.documentElement.style.setProperty("--ten-pr-color", "#8E05C2");
    } else if (theme === "orange") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#454545");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#FFA559"
      );
      document.documentElement.style.setProperty("--ten-pr-color", "#FF6000");
      document.documentElement.style.setProperty("--font-color", "#fff");
      // document.documentElement.style.setProperty("--danger-color", "#fff");
    } else if (theme === "purple") {
      document.documentElement.style.setProperty("--sixty-pr-color", "#810CA8");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#FFFFD0"
      );
      document.documentElement.style.setProperty("--font-color", "#FFFFD0");
      document.documentElement.style.setProperty("--ten-pr-color", "#000");
    } else {
      document.documentElement.style.setProperty("--sixty-pr-color", "#fff");
      document.documentElement.style.setProperty(
        "--thirty-pr-color",
        "#1976d2"
      );
      document.documentElement.style.setProperty("--font-color", "#000");
      document.documentElement.style.setProperty("--ten-pr-color", "#000");
    }
  }, [theme]);
  return (
    <>
      <main className="theme-container">
        <section
          className="themeIcon"
          onClick={() => {
            console.log(theme);
            setThemeListVisible(!isThemeListVisible);
          }}
        >
          <img
            width="34"
            height="34"
            src="https://img.icons8.com/arcade/64/color-palette.png"
            alt="color-palette"
          />
        </section>
        <div className={isThemeListVisible ? "themlist" : "try"}>
          {themeNames.map((themeName) => (
            <p
              key={themeName}
              onClick={() => {
                setTheme(themeName);
                console.log(themeName);
              }}
            >
              {themeName}
            </p>
          ))}
        </div>
      </main>
    </>
  );
};

export default ThemeProvider;
