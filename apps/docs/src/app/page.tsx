
import Link from "next/link";
import { Button, Input } from "@ui/react";

const linkButtonClass =
  "inline-flex h-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition-all duration-150 hover:opacity-80 active:scale-[0.98]";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 border-b border-border pb-16 pt-8">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          React Component Library
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Build better interfaces.
          <span className="text-primary"> One component at a time.</span>
        </h1>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          A minimal, accessible and customizable React component
          library designed to help you build consistent user interfaces.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/installation"
            className={`${linkButtonClass} bg-primary text-primary-foreground`}
          >
            Get started
          </Link>

          <Link
            href="/components/button"
            className={`${linkButtonClass} border border-border bg-background text-foreground hover:bg-muted`}
          >
            Explore components
          </Link>
        </div>
      </section>

      {/* Preview */}
      <section className="grid gap-10 border-b border-border py-16 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium text-primary">
            Live preview
          </span>

          <h2 className="text-2xl font-semibold tracking-tight">
            Designed for everyday development.
          </h2>

          <p className="text-sm leading-7 text-muted-foreground">
            Reusable components with consistent styling, flexible
            variants and carefully considered details.
          </p>

          <Link
            href="/components/button"
            className="text-sm font-medium text-primary hover:underline"
          >
            Explore components →
          </Link>
        </div>

        <div className="flex min-h-64 flex-col justify-center gap-6 rounded-xl border border-border bg-muted/20 p-6">
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="home-preview-input"
              className="text-sm font-medium"
            >
              Email address
            </label>
            <Input
              id="home-preview-input"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-8 border-b border-border py-16">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-primary">
            Why UI?
          </span>

          <h2 className="text-2xl font-semibold tracking-tight">
            Everything you need to get started.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Accessible</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Built with semantic HTML and accessibility in mind.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Customizable</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Flexible variants, CSS variables and custom class support.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">TypeScript</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Strongly typed component APIs and native HTML attributes.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">React compatible</h3>
            <p className="text-sm leading-6 text-muted-foreground">
              Designed for React applications, including Next.js.
            </p>
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="flex flex-col gap-5 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready to get started?
        </h2>

        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          Start building your next interface with UI components.
        </p>

        <div>
          <Link
            href="/installation"
            className={`${linkButtonClass} w-fit bg-primary text-primary-foreground`}
          >
            Read the documentation
          </Link>
        </div>
      </section>
    </main>
  );
}
