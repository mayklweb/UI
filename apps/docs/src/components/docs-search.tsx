
"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/lib/navigation";

const items = navigation.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    group: group.title,
  })),
);

export function DocsSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const results = items.filter((item) =>
    item.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="relative w-full max-w-xs">
      <div className="flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 transition-colors focus-within:border-primary">
        <Search size={16} className="shrink-0 text-muted-foreground" />

        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search documentation..."
          aria-label="Search documentation"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Clear search"
            className="text-muted-foreground hover:text-foreground"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-11 z-[60] overflow-hidden rounded-xl border border-border bg-background p-2 shadow-xl">
          {results.length > 0 ? (
            <div className="flex flex-col gap-1">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setQuery("");
                    setOpen(false);
                  }}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                >
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {item.group}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="px-3 py-4 text-center text-sm text-muted-foreground">
              No results found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
