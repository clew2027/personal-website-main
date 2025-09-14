import React from "react";
import Frame from "./Frame";

/**
 * Props:
 *  metrics: Array<{ label: string; value: string; note?: string }>
 *  highlights?: string[]  // bullet points
 */
export default function Results({ metrics = [], highlights = [] }) {
  return (
    <Frame>
      <h2 id="results" className="text-2xl font-medium text-off-black mb-8">Results</h2>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="border-1 border-grid rounded-2xl p-6 bg-white">
            <div className="text-3xl font-semibold text-off-black">{m.value}</div>
            <div className="text-off-black/70 mt-1">{m.label}</div>
            {m.note && <div className="text-off-black/60 text-sm mt-2">{m.note}</div>}
          </div>
        ))}
      </div>

      {/* Highlights */}
      {highlights.length > 0 && (
        <div className="mt-10 border-1 border-grid rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold text-off-black mb-3">Highlights</h3>
          <ul className="list-disc list-inside text-off-black/80 space-y-2">
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </div>
      )}
    </Frame>
  );
}
