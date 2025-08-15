import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  { className, variant = "primary", size = "md", children, ...props },
  ref) =>
  {
    const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
      "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
      secondary:
      "bg-secondary-200 hover:bg-secondary-300 text-secondary-800 focus:ring-secondary-500",
      outline:
      "border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
      ghost:
      "text-secondary-600 hover:bg-secondary-100 focus:ring-secondary-500"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
        data-oid="x-yj6g4">

        {children}
      </button>);

  }
);

Button.displayName = "Button";

export default Button;