import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navigation } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Components",
  description: "Explore the UI React component library.",
};

export default function ComponentsPage() {
  const components = navigation
    .find((group) => group.title === "Components")
    ?.items ?? [];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-10">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">Documentation</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Components
        </h1>

        <p className="mt-4 text-muted-foreground">
          Explore our collection of accessible, customizable React
          components built for modern applications.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            className="group rounded-xl border border-border p-6 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{component.title}</h2>

              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              View documentation and usage examples.
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}