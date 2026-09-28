"use client";

import { createContext, useContext, useEffect, useState } from "react";

// if not wrapped up with theme provider this will be used
type Theme = "system" | "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "system",
  // does nothing
  setTheme: () => null,
  // i could've done it like this
  // setTheme: () => {} but both are same anyway since return type void means im telling typescript to ignore any return value
  // so i can even pass () => 'hello'
});

export default function ThemeProvider({
  children,
  defaultTheme = "system",
  key = "portfolio-theme",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  key?: string;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    return localStorage.getItem(key) as Theme ?? defaultTheme;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) html.classList.remove("dark");
    if (html.classList.contains("light")) html.classList.remove("light");

    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const systemTheme = prefersDark ? "dark" : "light";
      html.classList.add(systemTheme);
      html.style.colorScheme = systemTheme;
      return;
    }

    html.classList.add(theme);
    html.style.colorScheme = theme;
  }, [theme, key]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (value: Theme) => {
          setTheme(value)
          localStorage.setItem(key, value)
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
