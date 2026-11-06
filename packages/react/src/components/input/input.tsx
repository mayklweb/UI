
import {
  forwardRef,
  type InputHTMLAttributes,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib/utils";

// Input
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "default" | "lg";
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { size = "default", invalid, className, ...props },
    ref,
  ) {
    return (
      <input
        {...props}
        ref={ref}
        data-slot="input"
        aria-invalid={invalid || props["aria-invalid"] || undefined}
        className={cn(
          [
            "box-border h-9 w-full min-w-0 rounded-xl border",
            "border-(--input) bg-transparent px-2.5 py-1",
            "font-['Nunito',ui-sans-serif,system-ui,sans-serif]",
            "text-base leading-6 font-medium text-(--foreground)",
            "outline-none transition-[color,background-color,border-color,box-shadow] duration-150",
            "placeholder:text-(--muted-foreground)",
            "focus-visible:border-(--ring)",
            "disabled:pointer-events-none disabled:cursor-not-allowed",
            "disabled:bg-[color-mix(in_oklab,var(--input)_50%,transparent)]",
            "disabled:opacity-50",
            "aria-invalid:border-(--destructive)",
            "file:mr-2 file:inline-flex file:h-6 file:rounded-md",
            "file:border-0 file:bg-transparent file:px-2",
            "file:font-['Quicksand',ui-sans-serif,system-ui,sans-serif]",
            "file:text-sm file:font-medium file:text-(--foreground)",
          ].join(" "),
          size === "sm" && "h-8",
          size === "lg" && "h-10",
          "md:text-sm md:leading-5",
          "dark:bg-[color-mix(in_oklab,var(--input)_30%,transparent)]",
          "dark:disabled:bg-[color-mix(in_oklab,var(--input)_80%,transparent)]",
          className,
        )}
      />
    );
  },
);

Input.displayName = "Input";

// Field
type FieldProps = HTMLAttributes<HTMLDivElement> & {
  invalid?: boolean;
  disabled?: boolean;
  horizontal?: boolean;
};

export function Field({
  invalid,
  disabled,
  horizontal,
  className,
  ...props
}: FieldProps) {
  return (
    <div
      {...props}
      data-invalid={invalid ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
      className={cn(
        "grid w-full gap-2",
        horizontal && "flex items-center gap-2",
        invalid && "[&_.field-label]:text-(--destructive)",
        disabled && "[&_.field-label]:opacity-50",
        className,
      )}
    />
  );
}

// FieldGroup
export function FieldGroup({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn("grid w-full gap-5", className)} />;
}

// FieldGrid
export function FieldGrid({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-1 gap-4 min-[561px]:grid-cols-2",
        className,
      )}
    />
  );
}

// FieldLabel
type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function FieldLabel({
  required,
  className,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <label
      {...props}
      className={cn(
        "field-label flex items-center gap-2",
        "font-['Nunito',ui-sans-serif,system-ui,sans-serif]",
        "text-sm leading-none font-medium text-(--foreground)",
        className,
      )}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-(--destructive)">
          *
        </span>
      )}
    </label>
  );
}

// FieldDescription
export function FieldDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={cn("m-0 text-sm leading-5 text-(--muted-foreground)", className)}
    />
  );
}

// FieldError
export function FieldError({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      role="alert"
      className={cn("m-0 text-sm leading-5 text-(--destructive)", className)}
    />
  );
}

// InputGroup
export function InputGroup({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "relative flex h-9 w-full items-center",
        "rounded-xl border border-(--input)",
        "transition-[border-color,box-shadow] duration-150",
        "dark:bg-[color-mix(in_oklab,var(--input)_30%,transparent)]",
        "has-[[data-slot=input]:focus-visible]:border-(--ring)",
        "has-[[data-slot=input][aria-invalid=true]]:border-(--destructive)",
        "has-[[data-slot=input][aria-invalid=true]]:ring-[3px]",
        "has-[[data-slot=input][aria-invalid=true]]:ring-[color-mix(in_oklab,var(--destructive)_20%,transparent)]",
        "has-[[data-slot=input]:disabled]:opacity-50",
        "[&>[data-slot=input]]:h-full",
        "[&>[data-slot=input]]:min-w-0",
        "[&>[data-slot=input]]:flex-1",
        "[&>[data-slot=input]]:border-0",
        "[&>[data-slot=input]]:bg-transparent",
        className,
      )}
    />
  );
}

// InputGroupAddon
export function InputGroupAddon({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex shrink-0 items-center gap-2 px-2.5",
        "text-sm whitespace-nowrap text-(--muted-foreground)",
        "[&_svg]:size-4 [&_svg]:shrink-0",
        "first:pr-0 last:pl-0",
        className,
      )}
    />
  );
}

// ButtonGroup
export function ButtonGroup({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
}) {
  return (
    <div
      {...props}
      role="group"
      className={cn(
        "flex w-full",
        "*:rounded-none",
        "[&>*:first-child]:rounded-l-xl",
        "[&>*:last-child]:rounded-r-xl",
        "[&>*+*]:-ml-px",
        "[&>*:hover]:relative [&>*:hover]:z-1",
        "[&>*:focus-visible]:relative [&>*:focus-visible]:z-1",
        "[&>.btn]:shrink-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
