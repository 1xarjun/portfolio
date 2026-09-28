"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Theme from "./theme";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);

    // if the user has already scrolled
    handleScroll();

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-15 fixed inset-x-0 max-w-[calc(var(--container-3xl)+var(--spacing)*8)] mx-auto mt-5 rounded-2xl flex justify-between items-center backdrop-blur-md z-10 px-8 py-4 text-muted-foreground transition-colors text-sm ${scrolled ? "bg-background/80" : "bg-background/30"}`}
    >
      <Link
        data-selected={pathname === '/'}
        href="/"
        className="text-xl flex items-center justify-center size-10 hover:text-foreground data-[selected='true']:text-foreground font-semibold -tracking-widest"
      >/\</Link>
      <ul className="flex gap-6 items-center *:font-medium">
        <li>
          <Link
            data-selected={pathname === '/blog'}
            href="/blog"
            className="hover:text-foreground data-[selected='true']:text-foreground">Blog</Link>
        </li>
        <li>
          <Link data-selected={pathname === '/about'} href="/about" className="hover:text-foreground data-[selected='true']:text-foreground">About</Link>
        </li>
        <li>
          <Link data-selected={pathname === '/projects'} href="/projects" className="hover:text-foreground data-[selected='true']:text-foreground">Projects</Link>
        </li>
        <li>
          <Theme mounted={mounted} />
        </li>
      </ul>
    </header>
  );
}
