import React from "react";
import classNames from "classnames";

// Simple button component using Tailwind classes
export function Button({ children, className = "", variant = "default", asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";

  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent",
    ghost: "hover:bg-blue-50 text-blue-600",
  };

  return (
    <Comp className={classNames(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
