"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { DocsSearch } from "@/components/docs-search";
import { navigation } from "@/lib/navigation";

export function DocsHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            ui<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            <Link
              href="/components"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Components
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <DocsSearch />
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted sm:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-6 py-5 sm:hidden"
        >
          <div className="flex flex-col gap-6">
            {navigation.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </p>

                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md py-2 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}