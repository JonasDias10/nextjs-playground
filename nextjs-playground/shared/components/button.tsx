export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonColor = "default" | "secondary" | "danger";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200",
  secondary:
    "border border-white/20 bg-white/20 text-zinc-800 backdrop-blur-md hover:bg-white/30 dark:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const colorOverrides: Record<ButtonColor, string> = {
  default: "",
  secondary: "bg-purple-600 text-white hover:bg-purple-500",
  danger: "bg-red-600 text-white hover:bg-red-500",
};

export function Button({
  children,
  variant = "primary",
  size = "medium",
  color = "default",
}: ButtonProps) {
  const base =
    "rounded-xl font-medium transition-transform duration-200 focus:outline-none hover:scale-105 cursor-pointer";

  return (
    <button
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${colorOverrides[color]}`}
    >
      {children}
    </button>
  );
}
