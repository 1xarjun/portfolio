import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/contexts/ThemeProvider";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arjun Banerjee",
    template: "%s | Arjun Banerjee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('portfolio-theme') || 'system';
              const html = document.documentElement;
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if((theme==='system' && prefersDark) || theme==='dark') {
                html.classList.add('dark');
                html.style.colorScheme='dark';
              }
            })()
            `,
          }}
        />
      </head>
      <ThemeProvider>
        <body className="w-full sm:max-w-[calc(var(--container-3xl)+var(--spacing)*8)] sm:mx-auto min-h-screen bg-background text-foreground relative text-base font-sans overflow-x-hidden flex flex-col">
          <div className="absolute top-0 inset-x-0 max-w-48 sm:max-w-lg mx-auto h-10 bg-linear-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl"></div>
          <div className="absolute bottom-0 inset-x-0 max-w-48 sm:max-w-lg mx-auto h-10 bg-linear-to-l from-purple-500 via-pink-500 to-red-500 blur-3xl"></div>
          <Header />
          <main className="flex-1 pt-15 my-30 px-8">{children}</main>
	  <Toaster style={{ 
		  fontFamily: "var(--font-sans)",
	 	  "--normal-bg": "var(--background)",
		  "--normal-text": "var(--foreground)",
		  "--normal-border": "var(--border)"
	  } as React.CSSProperties} />
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
