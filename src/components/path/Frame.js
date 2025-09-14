import React from "react";

/** Reusable framed box with corner accents */
export default function Frame({ className = "", children }) {
  return (
    <section className={`bg-white-background px-48 ${className}`}>
      {/* Top border strip */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Framed container */}
      <div className="relative w-full border-1 border-t-0 border-grid p-10">
        {/* Corner accents */}
        <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
          <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
        </div>

        {children}
      </div>
    </section>
  );
}
