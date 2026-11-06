
import type { Metadata } from "next";
import { CodePreview } from "@/components/code-preview";

export const metadata: Metadata = {
  title: "Installation",
  description: "Install and configure the UI React component library.",
};

export default function InstallationPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <span className="text-sm font-medium text-primary">
          Getting Started
        </span>

        <h1 className="text-3xl font-semibold tracking-tight">
          Installation
        </h1>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Get started with UI in your React or Next.js project.
          Follow these steps to configure the library.
        </p>
      </div>

      {/* Requirements */}
      <section className="flex flex-col gap-4 border-b border-border py-8">
        <h2 className="text-xl font-semibold">Requirements</h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
          <li>React 18 or React 19</li>
          <li>React DOM 18 or React 19</li>
          <li>A React-based project</li>
        </ul>
      </section>

      {/* Install */}
      <section className="flex flex-col gap-4 border-b border-border py-8">
        <h2 className="text-xl font-semibold">Install the package</h2>

        <p className="text-sm leading-6 text-muted-foreground">
          The package is currently under development and has not yet
          been published to npm. After publication, install it using:
        </p>

        <CodePreview
          code={`npm install @ui/react`}
        >
          <code className="text-sm">npm install @ui/react</code>
        </CodePreview>

        <p className="text-xs text-muted-foreground">
          The command will become available after the package is published.
        </p>
      </section>

      {/* CSS */}
      <section className="flex flex-col gap-4 border-b border-border py-8">
        <h2 className="text-xl font-semibold">Import styles</h2>

        <p className="text-sm leading-6 text-muted-foreground">
          Import the library stylesheet in your application's global CSS
          file or root entry point.
        </p>

        <CodePreview
          code={`@import "@ui/react/style.css";`}
        >
          <code className="text-sm">
            @import "@ui/react/style.css";
          </code>
        </CodePreview>
      </section>

      {/* Usage */}
      <section className="flex flex-col gap-4 border-b border-border py-8">
        <h2 className="text-xl font-semibold">Usage</h2>

        <p className="text-sm leading-6 text-muted-foreground">
          Import components directly from the package.
        </p>

        <CodePreview
          code={`import { Button, Input } from "@ui/react";

export default function App() {
  return (
    <div>
      <Button>Get started</Button>
      <Input placeholder="Your email" />
    </div>
  );
}`}
        >
          <div className="flex w-full max-w-sm flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Email</span>
              <input
                disabled
                placeholder="you@example.com"
                className="h-9 rounded-xl border border-border bg-muted/30 px-3 text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button
                disabled
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground opacity-90"
              >
                Get started
              </button>
            </div>
            <p className="text-xs text-muted-foreground">
              Example of the intended component usage.
            </p>
          </div>
        </CodePreview>
      </section>

      {/* Customization */}
      <section className="flex flex-col gap-4 py-8">
        <h2 className="text-xl font-semibold">Customization</h2>

        <p className="text-sm leading-6 text-muted-foreground">
          UI uses CSS variables for its design tokens. You can customize
          colors, borders and other visual properties in your global CSS.
        </p>

        <CodePreview
          code={`:root {
  --ui-primary: #002bba;
  --ui-primary-foreground: #ffffff;
  --ui-secondary: #f1f3f5;
  --ui-border: #e5e7eb;
  --ui-radius: 8px;
}`}
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-[#002bba]" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Primary color</span>
              <code className="text-xs text-muted-foreground">
                #002bba
              </code>
            </div>
          </div>
        </CodePreview>
      </section>
    </main>
  );
}

