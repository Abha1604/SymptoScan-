import React, { useState } from "react";

export function Sheet({ children, open, onOpenChange }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={() => onOpenChange(false)}></div>
      )}
      {children}
    </>
  );
}

export function SheetTrigger({ children, asChild = false }) {
  return asChild ? children : <button>{children}</button>;
}

export function SheetContent({ children, side = "right", className = "" }) {
  const sideClass = {
    right: "right-0",
    left: "left-0",
    top: "top-0",
    bottom: "bottom-0",
  }[side];

  return (
    <div
      className={`fixed top-0 ${sideClass} z-50 h-full w-80 bg-white shadow-lg p-6 overflow-auto transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
