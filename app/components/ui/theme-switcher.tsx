"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" flex gap-6">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <Sun onClick={() => setTheme("dark")} className="" />
        ) : (
          <Moon onClick={() => setTheme("light")} className="" />
        )}
      </button>
    </div>
  );
};
