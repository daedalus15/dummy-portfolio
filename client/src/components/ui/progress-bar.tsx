import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value: number;
  className?: string;
  label?: string;
  showPercentage?: boolean;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, className, label, showPercentage = true }, ref) => {
    return (
      <div className={cn("space-y-2", className)} ref={ref}>
        {label && (
          <div className="flex justify-between items-center">
            <span className="text-gray-300 dark:text-gray-300">{label}</span>
            {showPercentage && (
              <span className="text-neon-green font-mono text-sm">{value}%</span>
            )}
          </div>
        )}
        <div className="w-full bg-gray-700 dark:bg-gray-700 rounded-full h-2">
          <div
            className="progress-bar-bg h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(value, 100)}%` }}
          />
        </div>
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
