
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 border-r border-border lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-5 py-8">
        <nav className="flex flex-col gap-8">
          {navigation.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>

              <div className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-md px-3 py-2 text-sm transition-colors ${
                        active
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
