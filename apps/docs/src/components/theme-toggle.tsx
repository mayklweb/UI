
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

const themes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-[108px]" />;
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/50 p-1"
      role="group"
      aria-label="Theme selection"
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-label={`${label} theme`}
            aria-pressed={active}
            title={label}
            onClick={() => setTheme(value)}
            className={`flex h-7 w-8 items-center justify-center rounded-md transition-colors ${
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon size={15} strokeWidth={1.8} />
          </button>
        );
      })}
    </div>
  );
}
