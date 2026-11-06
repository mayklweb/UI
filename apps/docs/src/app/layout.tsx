import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { DocsHeader } from "@/components/docs-header";
import { DocsSidebar } from "@/components/docs-sidebar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

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
    default: "UI - React Component Library",
    template: "%s - UI",
  },
  description:
    "A minimal, accessible and customizable React component library.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider>
          <DocsHeader />

          <div className="flex flex-1">
            <DocsSidebar />

            <div className="min-w-0 flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}