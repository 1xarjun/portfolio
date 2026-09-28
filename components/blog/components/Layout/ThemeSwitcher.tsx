'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Skeleton } from "@heroui/react";
import { Moon, Sun } from '../Icons';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
	  // eslint-disable-next-line react-hooks/set-state-in-effect
	  setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="h-7 w-7 rounded-md" />;

  return (
    <button
      type="button"
      className="fill-primary text-xl"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
