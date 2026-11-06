import type { Metadata } from "next";
import { Button } from "@ui/react";

import { CodePreview } from "@/components/code-preview";

export const metadata: Metadata = {
  title: "Button",
  description: "Button component documentation.",
};

export default function ButtonPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <span className="text-sm font-medium text-primary">
          Components
        </span>

        <h1 className="text-3xl font-semibold tracking-tight">
          Button
        </h1>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Displays an interactive button that allows users to perform
          actions and make choices.
        </p>
      </div>

      {/* Installation */}
      <section className="flex flex-col gap-4 border-b border-border py-8">
        <h2 className="text-xl font-semibold">Installation</h2>

        <p className="text-sm leading-6 text-muted-foreground">
          Import the Button component from the UI package.
        </p>

        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-sm">
          <code>{`import { Button } from "@ui/react";`}</code>
        </pre>
      </section>

      {/* Variants */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Variants</h2>

          <p className="text-sm text-muted-foreground">
            Button supports multiple visual variants.
          </p>
        </div>

        <CodePreview
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
        >
      <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </CodePreview>
      </section>

      {/* Sizes */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Sizes</h2>

          <p className="text-sm text-muted-foreground">
            Three sizes are available for different use cases.
          </p>
        </div>

        <CodePreview
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
     <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </CodePreview>
      </section>

      {/* States */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">States</h2>

          <p className="text-sm text-muted-foreground">
            Buttons support disabled and loading states.
          </p>
        </div>

        <CodePreview
          code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
        >
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </CodePreview>
      </section>

<section className="mt-16 border-t border-border pt-10">
  <div className="mb-6">
    <h2 className="text-2xl font-semibold tracking-tight">
      API Reference
    </h2>
    <p className="mt-2 text-sm text-muted-foreground">
      Properties available in the Button component.
    </p>
  </div>

  <div className="overflow-x-auto rounded-xl border border-border">
    <table className="w-full text-left text-sm">
      <thead className="bg-muted/50">
        <tr>
          <th className="px-4 py-3 font-medium">Prop</th>
          <th className="px-4 py-3 font-medium">Type</th>
          <th className="px-4 py-3 font-medium">Default</th>
          <th className="px-4 py-3 font-medium">Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {[
          ["variant", '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"', '"default"', "Visual style of the button."],
          ["size", '"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg"', '"default"', "Controls button dimensions."],
          ["pill", "boolean", "false", "Applies fully rounded corners."],
          ["block", "boolean", "false", "Makes the button fill its container width."],
          ["loading", "boolean", "false", "Displays a spinner and disables interaction."],
          ["disabled", "boolean", "false", "Disables the button."],
          ["className", "string", "—", "Additional CSS classes."],
          ["type", '"button" | "submit" | "reset"', '"button"', "Native HTML button type."],
        ].map(([prop, type, defaultValue, description]) => (
          <tr key={prop}>
            <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">
              {prop}
            </td>
            <td className="min-w-48 px-4 py-3 font-mono text-xs text-muted-foreground">
              {type}
            </td>
            <td className="whitespace-nowrap px-4 py-3 font-mono text-xs">
              {defaultValue}
            </td>
            <td className="min-w-48 px-4 py-3 text-muted-foreground">
              {description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="mt-4 text-sm text-muted-foreground">
    Button also supports native HTML button attributes such as
    onClick, name, value, form, and aria-label.
  </p>
</section>
</main>

  );
}