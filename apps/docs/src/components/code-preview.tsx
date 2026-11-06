"use client";

import { useState, type ReactNode } from "react";

interface CodePreviewProps {
  children: ReactNode;
  code: string;
}

export function CodePreview({ children, code }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
              activeTab === "preview"
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Preview
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
              activeTab === "code"
                ? "bg-muted font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Code
          </button>
        </div>

        {activeTab === "code" && (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

      {activeTab === "preview" ? (
        <div className="flex min-h-36 flex-wrap items-center gap-3 p-6">
          {children}
        </div>
      ) : (
        <pre className="min-h-36 overflow-x-auto bg-muted/30 p-6 text-sm leading-7">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}