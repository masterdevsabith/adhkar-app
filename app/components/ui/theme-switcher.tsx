"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <button className="flex gap-6">
      <Moon onClick={() => setTheme("light")} />
      <Sun onClick={() => setTheme("dark")} />
    </button>
  );
};
