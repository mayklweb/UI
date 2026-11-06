
import {
  forwardRef,
  type ButtonHTMLAttributes,
} from "react";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1.5",
    "h-9 px-3 rounded-[var(--radius-lg)]",
    "border border-transparent bg-transparent",
    "font-['Quicksand',ui-sans-serif,system-ui,sans-serif]",
    "text-sm font-medium leading-none whitespace-nowrap",
    "text-inherit no-underline select-none cursor-pointer",
    "outline-none transition-all duration-150 ease-out",
    "[&:active:not([aria-haspopup])]:scale-[0.98]",
    "focus-visible:border-[var(--ring)]",
    "focus-visible:ring-[3px]",
    "focus-visible:ring-[color-mix(in_oklab,var(--ring)_50%,transparent)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "aria-[invalid=true]:border-[var(--destructive)]",
    "aria-[invalid=true]:ring-[3px]",
    "aria-[invalid=true]:ring-[color-mix(in_oklab,var(--destructive)_20%,transparent)]",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "has-[[data-icon=inline-start]]:pl-2",
    "has-[[data-icon=inline-end]]:pr-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--primary)] text-[var(--primary-foreground)]",
          "hover:bg-[color-mix(in_oklab,var(--primary)_80%,transparent)]",
        ].join(" "),
        outline: [
          "border-[var(--border)]",
          "bg-[var(--background)] text-[var(--foreground)]",
          "hover:bg-[var(--muted)]",
        ].join(" "),
        secondary: [
          "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
          "hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
        ].join(" "),
        ghost: [
          "text-[var(--foreground)]",
          "hover:bg-[var(--muted)]",
        ].join(" "),
        destructive: [
          "bg-[color-mix(in_oklab,var(--destructive)_10%,transparent)]",
          "text-[var(--destructive)]",
          "hover:bg-[color-mix(in_oklab,var(--destructive)_20%,transparent)]",
          "focus-visible:border-[color-mix(in_oklab,var(--destructive)_40%,transparent)]",
          "focus-visible:ring-[color-mix(in_oklab,var(--destructive)_20%,transparent)]",
        ].join(" "),
        link: [
          "text-[var(--primary)] underline-offset-4",
          "hover:underline",
        ].join(" "),
      },
      size: {
        default: "h-9 px-3",
        sm: [
          "h-8 gap-1.5 rounded-[var(--radius-md)] px-3 text-xs",
          "[&_svg]:size-3.5",
          "has-[[data-icon=inline-start]]:pl-1.5",
          "has-[[data-icon=inline-end]]:pr-1.5",
        ].join(" "),
        lg: "h-10 px-3",
        icon: "size-9 p-0",
        "icon-sm": "size-8 rounded-[var(--radius-md)] p-0",
        "icon-lg": "size-10 p-0",
      },
      pill: {
        true: "!rounded-full",
        false: "",
      },
      block: {
        true: "flex w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      pill: false,
      block: false,
    },
  },
);

export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

export type ButtonSize = NonNullable<
  VariantProps<typeof buttonVariants>["size"]
>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Spinner = () => (
  <svg
    className="animate-spin"
    data-icon="inline-start"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant,
      size,
      pill,
      block,
      loading = false,
      disabled,
      className,
      children,
      type = "button",
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        data-slot="button"
        data-variant={variant ?? "default"}
        data-size={size ?? "default"}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          buttonVariants({ variant, size, pill, block }),
          className,
        )}
        {...props}
      >
        {loading && <Spinner />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
export default Button;
