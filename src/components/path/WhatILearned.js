import React from "react";
import Frame from "./Frame";

/**
 * Props:
 *  lessons: Array<{ title: string; detail: string }>
 */
export default function WhatILearned({ lessons = [] }) {
  return (
    <Frame>
      <h2 id="whatilearned" className="text-2xl font-medium text-off-black mb-8">What I Learned</h2>

      <div className="space-y-6">
        {lessons.map((l, i) => (
          <article key={i} className="border-1 border-grid rounded-lg p-6">
            <h3 className="text-lg font-semibold text-off-black">{l.title}</h3>
            <p className="text-off-black/80 mt-2 leading-relaxed">{l.detail}</p>
          </article>
        ))}
      </div>
    </Frame>
  );
}
