
import type { Metadata } from "next";
import {
  Input,
  Field,
  FieldGroup,
  FieldGrid,
  FieldLabel,
  FieldDescription,
  FieldError,
  InputGroup,
  InputGroupAddon,
  ButtonGroup,
} from "@ui/react";


import { CodePreview } from "@/components/code-preview";

export const metadata: Metadata = {
  title: "Input",
  description: "Input component documentation.",
};

export default function InputPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <span className="text-sm font-medium text-primary">
          Components
        </span>

        <h1 className="text-3xl font-semibold tracking-tight">
          Input
        </h1>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          Displays a form input field for collecting user information.
          Supports different sizes, validation states and field layouts.
        </p>
      </div>

      {/* Installation */}
      <section className="flex flex-col gap-4 border-b border-border py-8">
        <h2 className="text-xl font-semibold">Installation</h2>

        <p className="text-sm leading-6 text-muted-foreground">
          Import Input and related field components.
        </p>

        <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-sm">
          <code>{`import {
  Input,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@ui/react";`}</code>
        </pre>
      </section>

      {/* Basic */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Basic</h2>
          <p className="text-sm text-muted-foreground">
            A simple input field.
          </p>
        </div>

        <CodePreview code={`<Input placeholder="Enter your name..." />`}>
          <div className="w-full max-w-sm">
            <Input placeholder="Enter your name..." />
          </div>
        </CodePreview>
      </section>

      {/* Sizes */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Sizes</h2>
          <p className="text-sm text-muted-foreground">
            Three sizes are available.
          </p>
        </div>

        <CodePreview
          code={`<Input size="sm" placeholder="Small input" />
<Input placeholder="Default input" />
<Input size="lg" placeholder="Large input" />`}
        >
          <div className="grid w-full max-w-sm gap-4">
            <Input size="sm" placeholder="Small input" />
            <Input placeholder="Default input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </CodePreview>
      </section>

      {/* States */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">States</h2>
          <p className="text-sm text-muted-foreground">
            Disabled and invalid input states.
          </p>
        </div>

        <CodePreview
          code={`<Input disabled placeholder="Disabled input" />
<Input invalid placeholder="Invalid input" />`}
        >
          <div className="grid w-full max-w-sm gap-4">
            <Input disabled placeholder="Disabled input" />
            <Input invalid placeholder="Invalid input" />
          </div>
        </CodePreview>
      </section>

      {/* Field */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Field</h2>
          <p className="text-sm text-muted-foreground">
            Combine Input with labels and descriptions.
          </p>
        </div>

        <CodePreview
          code={`<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" placeholder="you@example.com" />
  <FieldDescription>
    Enter your email address.
  </FieldDescription>
</Field>`}
        >
          <div className="w-full max-w-sm">
            <Field>
              <FieldLabel htmlFor="preview-email">Email</FieldLabel>
              <Input
                id="preview-email"
                type="email"
                placeholder="you@example.com"
              />
              <FieldDescription>
                Enter your email address.
              </FieldDescription>
            </Field>
          </div>
        </CodePreview>
      </section>

      {/* Required */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Required</h2>
          <p className="text-sm text-muted-foreground">
            Mark required fields with an asterisk.
          </p>
        </div>

        <CodePreview
          code={`<Field>
  <FieldLabel htmlFor="name" required>
    Full name
  </FieldLabel>
  <Input id="name" placeholder="Your name" />
</Field>`}
        >
          <div className="w-full max-w-sm">
            <Field>
              <FieldLabel htmlFor="preview-name" required>
                Full name
              </FieldLabel>
              <Input id="preview-name" placeholder="Your name" />
            </Field>
          </div>
        </CodePreview>
      </section>

      {/* Error */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Error</h2>
          <p className="text-sm text-muted-foreground">
            Display validation messages with FieldError.
          </p>
        </div>

        <CodePreview
          code={`<Field invalid>
  <FieldLabel htmlFor="invalid-email">
    Email
  </FieldLabel>
  <Input
    id="invalid-email"
    type="email"
    invalid
    defaultValue="invalid-email"
  />
  <FieldError>Please enter a valid email.</FieldError>
</Field>`}
        >
          <div className="w-full max-w-sm">
            <Field invalid>
              <FieldLabel htmlFor="preview-invalid-email">
                Email
              </FieldLabel>
              <Input
                id="preview-invalid-email"
                type="email"
                invalid
                defaultValue="invalid-email"
              />
              <FieldError>
                Please enter a valid email.
              </FieldError>
            </Field>
          </div>
        </CodePreview>
      </section>

      {/* Input Group */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Input Group</h2>
          <p className="text-sm text-muted-foreground">
            Add prefix and suffix content to an input.
          </p>
        </div>

        <CodePreview
          code={`<InputGroup>
  <InputGroupAddon>$</InputGroupAddon>
  <Input placeholder="0.00" />
  <InputGroupAddon>USD</InputGroupAddon>
</InputGroup>`}
        >
          <div className="w-full max-w-sm">
            <InputGroup>
              <InputGroupAddon>$</InputGroupAddon>
              <Input placeholder="0.00" />
              <InputGroupAddon>USD</InputGroupAddon>
            </InputGroup>
          </div>
        </CodePreview>
      </section>

      {/* Field Group */}
      <section className="flex flex-col gap-5 py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Field Group</h2>
          <p className="text-sm text-muted-foreground">
            Organize multiple fields into a form layout.
          </p>
        </div>

        <CodePreview
          code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="form-email">Email</FieldLabel>
    <Input id="form-email" type="email" />
  </Field>

  <Field>
    <FieldLabel htmlFor="form-password">Password</FieldLabel>
    <Input id="form-password" type="password" />
  </Field>
</FieldGroup>`}
        >
          <div className="w-full max-w-sm">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="preview-form-email">
                  Email
                </FieldLabel>
                <Input
                  id="preview-form-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="preview-form-password">
                  Password
                </FieldLabel>
                <Input
                  id="preview-form-password"
                  type="password"
                  placeholder="Password"
                />
              </Field>
            </FieldGroup>
          </div>
        </CodePreview>
      </section>

      {/* Field Grid */}
      <section className="flex flex-col gap-5 border-b border-border py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Field Grid</h2>
          <p className="text-sm text-muted-foreground">
            Arrange fields in a responsive two-column grid.
          </p>
        </div>

        <CodePreview
          code={`<FieldGrid>
  <Field>
    <FieldLabel htmlFor="first-name">First name</FieldLabel>
    <Input id="first-name" placeholder="John" />
  </Field>
  <Field>
    <FieldLabel htmlFor="last-name">Last name</FieldLabel>
    <Input id="last-name" placeholder="Doe" />
  </Field>
</FieldGrid>`}
        >
          <div className="w-full">
            <FieldGrid>
              <Field>
                <FieldLabel htmlFor="grid-first-name">First name</FieldLabel>
                <Input id="grid-first-name" placeholder="John" />
              </Field>
              <Field>
                <FieldLabel htmlFor="grid-last-name">Last name</FieldLabel>
                <Input id="grid-last-name" placeholder="Doe" />
              </Field>
            </FieldGrid>
          </div>
        </CodePreview>
      </section>

      {/* API Reference */}
      <section className="flex flex-col gap-5 py-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">API Reference</h2>
          <p className="text-sm text-muted-foreground">
            Properties available on the Input component.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-3 font-medium">Prop</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Default</th>
                <th className="px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono">size</td>
                <td className="px-4 py-3 font-mono text-xs">"sm" | "default" | "lg"</td>
                <td className="px-4 py-3 font-mono">"default"</td>
                <td className="px-4 py-3 text-muted-foreground">Input height.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">invalid</td>
                <td className="px-4 py-3 font-mono">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3 text-muted-foreground">Displays the invalid state.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">disabled</td>
                <td className="px-4 py-3 font-mono">boolean</td>
                <td className="px-4 py-3 font-mono">false</td>
                <td className="px-4 py-3 text-muted-foreground">Disables user interaction.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">placeholder</td>
                <td className="px-4 py-3 font-mono">string</td>
                <td className="px-4 py-3 font-mono">-</td>
                <td className="px-4 py-3 text-muted-foreground">Placeholder text.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono">className</td>
                <td className="px-4 py-3 font-mono">string</td>
                <td className="px-4 py-3 font-mono">-</td>
                <td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground">
          Input also supports native HTML input attributes.
        </p>
      </section>

      {/* API Reference */}
      <section className="mt-16 border-t border-border pt-10">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            API Reference
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Properties and components available in the Input module.
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
                ["Input", "Component", "—", "Base input element."],
                ["size", '"sm" | "default" | "lg"', '"default"', "Controls input height."],
                ["invalid", "boolean", "false", "Displays the invalid state."],
                ["Field", "Component", "—", "Groups a label, input and messages."],
                ["Field.invalid", "boolean", "false", "Marks the field as invalid."],
                ["Field.disabled", "boolean", "false", "Applies disabled styling to the label."],
                ["Field.horizontal", "boolean", "false", "Displays field content horizontally."],
                ["FieldGroup", "Component", "—", "Groups multiple fields vertically."],
                ["FieldGrid", "Component", "—", "Arranges fields in a responsive grid."],
                ["FieldLabel", "Component", "—", "Label for a form field."],
                ["FieldLabel.required", "boolean", "false", "Displays a required indicator."],
                ["FieldDescription", "Component", "—", "Displays supporting field text."],
                ["FieldError", "Component", "—", "Displays an accessible error message."],
                ["InputGroup", "Component", "—", "Groups an input with additional content."],
                ["InputGroupAddon", "Component", "—", "Adds content beside an input."],
                ["ButtonGroup", "Component", "—", "Groups related buttons together."],
                ["className", "string", "—", "Additional CSS classes."],
              ].map(([prop, type, defaultValue, description]) => (
                <tr key={prop}>
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-primary">
                    {prop}
                  </td>
                  <td className="min-w-40 px-4 py-3 font-mono text-xs text-muted-foreground">
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
          Input also supports native HTML input attributes such as
          placeholder, type, value, onChange, disabled and required.
          Field components support their respective native HTML attributes.
        </p>
      </section>


    </main>
  );
}
