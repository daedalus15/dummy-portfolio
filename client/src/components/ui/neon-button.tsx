import * as React from "react";
import { cn } from "@/lib/utils";

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-gradient-to-r from-neon-teal to-neon-green text-terminal-bg hover:shadow-lg hover:shadow-neon-teal/50 animate-pulse-glow",
      secondary: "border-2 border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-terminal-bg neon-glow",
      outline: "border border-neon-teal/30 text-neon-teal hover:border-neon-teal hover:text-neon-green"
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8"
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
NeonButton.displayName = "NeonButton";

export { NeonButton };
