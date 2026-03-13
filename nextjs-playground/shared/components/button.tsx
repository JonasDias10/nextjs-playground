import { cn } from "@/lib/cn";

export type ButtonVariant = "contained" | "outlined" | "soft";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "default" | "primary" | "secondary" | "danger";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  className?: string;
};

const baseClasses =
  "rounded-2xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 active:scale-95 cursor-pointer";

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const variantColorClasses: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  contained: {
    default:
      "bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300",
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-400 dark:hover:bg-indigo-300",
    secondary:
      "bg-purple-600 text-white hover:bg-purple-500 dark:bg-purple-400 dark:text-black dark:hover:bg-purple-300",
    danger:
      "bg-red-600 text-white hover:bg-red-500 dark:bg-red-400 dark:text-black dark:hover:bg-red-300",
  },
  outlined: {
    default:
      "border border-gray-400 bg-transparent text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-700",
    primary:
      "border border-indigo-600 bg-transparent text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-800",
    secondary:
      "border border-purple-600 bg-transparent text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-800",
    danger:
      "border border-red-600 bg-transparent text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-800",
  },
  soft: {
    default:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
    primary:
      "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200 dark:hover:bg-indigo-700",
    secondary:
      "bg-purple-50 text-purple-700 hover:bg-purple-100 dark:bg-purple-800 dark:text-purple-200 dark:hover:bg-purple-700",
    danger:
      "bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-800 dark:text-red-200 dark:hover:bg-red-700",
  },
};

export function Button({
  children,
  variant = "contained",
  size = "medium",
  color = "default",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantColorClasses[variant][color],
        fullWidth ? "w-full" : "inline-block",
        className,
      )}
    >
      {children}
    </button>
  );
}
