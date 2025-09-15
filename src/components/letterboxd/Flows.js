/* components/Problem.js */
import React from "react";

/**
 * UserFlows (Letterboxd-style sections)
 */
export default function UserFlows({ auth, reviews, profile, search }) {
  return (
    <section id="problem" className="px-48 bg-transparent">
      {/* Top border line */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Framed container */}
      <div className="relative w-full border-1 border-t-0 border-grid p-10">
        {/* Corner accents */}
        <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
          <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
        </div>

        {/* Header */}
        <h2 className="text-2xl font-medium mb-8 text-off-black">Key Flows</h2>

        {/* 1) Authentication */}
        <SectionRow title="Authentication (Sign In)" data={auth} />

        <Divider />

        {/* 2) Reviews */}
        <SectionRow title="List Reviews & Journals" data={reviews} />

        <Divider />

        {/* 3) Profile */}
        <SectionRow title="Profile — Diary List & Watchlist" data={profile} />

        <Divider />

        {/* 4) Search */}
        <SectionRow title="Searching & Adding Film" data={search} />

        {/* Problem summary */}
        <Divider />
        <div className="border-1 border-grid p-5">
          <h3 className="text-xl font-semibold text-off-black mb-2">The Problem</h3>
          <p className="text-off-black/80 leading-relaxed">
            Consolidating all the flows and feedback, I identified three goals:
            <span className="font-medium"> (1) reduce redundant flows</span>,
            <span className="font-medium"> (2) clarify navigation and labels</span>, and
            <span className="font-medium"> (3) make key actions more discoverable</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionRow({ title, data }) {
  const { img, pros = [], cons = [] } = data || {};
  return (
    <div>
      {/* Section header */}
      <div className="mb-4 flex items-baseline gap-3">
        <h3 className="text-xl font-semibold text-off-black">{title}</h3>
        <div className="h-[1px] flex-1 bg-grid/60" />
      </div>

      {/* Flow image on top */}
      <figure className="mb-6 border-1 border-grid overflow-hidden">
        <div className="w-full max-w-2xl aspect-[4/3] bg-white grid place-items-center mx-auto">
          {img ? (
            <img
              src={img}
              alt={`${title} flow`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          ) : (
            <span className="text-xs text-off-black/50">Flow image</span>
          )}
        </div>
        <figcaption className="px-2 py-1 text-xs text-off-black/60 border-t-1 border-grid">
          {title}
        </figcaption>
      </figure>


      {/* Pros/Cons below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ListBlock label="Pros" items={pros} />
        <ListBlock label="Cons" items={cons} />
      </div>
    </div>
  );
}

function ListBlock({ label, items = [] }) {
  return (
    <div className="border-1 border-grid p-4">
      <h4 className="text-sm font-medium tracking-wide text-off-black mb-2">{label}</h4>
      {items.length ? (
        <ul className="list-disc list-inside space-y-2 text-off-black/80">
          {items.map((it, i) => (
            <li key={`${label}-${i}`}>{it}</li>
          ))}
        </ul>
      ) : (
        <p className="text-off-black/50 text-sm">—</p>
      )}
    </div>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-grid/60" />;
}
