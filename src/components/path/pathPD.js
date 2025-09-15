/* components/Problem.js */
import React from 'react';

/**
 * Problem section
 * Props:
 *  - journeySrc: string (required)  → image URL for the journey map
 *  - affmapSrc: string (required)   → image URL for the affinity map
 */
export default function Problem({ journeySrc, affmapSrc }) {
  return (
    <section id="problem" className="bg-white-background px-48">
      {/* Top border line */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Framed container */}
      <div className="relative w-full border-1 border-t-0 border-grid p-10">
        {/* Corner accents */}
        <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
          <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
        </div>

        {/* Header */}
        <h2 className="text-2xl font-medium mb-4 text-off-black">Problem</h2>

        {/* Narrative */}
        <div className="text-off-black/80 space-y-4 max-w-3xl mb-10">
          <p>
            It seemed that students struggle to build schedules efficiently: course details, requirements, and actions are split across
            multiple surfaces, making it hard to compare options and understand trade-offs. Key cues (labels, checkboxes,
            progress signals) are easy to miss, so confidence drops at the moment of decision.
          </p>
          <p>
            To understand where friction accumulates at each step, I first mapped the user journey and annotated pain points. Then I
            synthesized interview data with an affinity map to cluster recurring themes and opportunities.
          </p>
        </div>

        {/* Journey Map (image card) */}
        <div className="mb-8">
          <div className="relative border-1 border-grid rounded-lg overflow-hidden w-full">
            <img
              src={journeySrc}
              alt="User Journey Map highlighting steps and frictions"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-sm text-off-black/60 mt-2">Figure: Mapping the user journey and frictions.</div>
        </div>

        {/* Affinity Map intro */}
        <div className="text-off-black/80 max-w-3xl mb-4">
          Affinity mapping to group similar information into
          themes and patterns behind confusion (scattered info), low discoverability (hidden cues), and
          decision friction (comparison across tabs).
        </div>

        {/* Affinity Map (image card) */}
        <div>
          <div className="relative border-1 border-grid rounded-lg overflow-hidden w-full">
            <img
              src={affmapSrc}
              alt="Affinity Map clustering research findings and design ideas"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-sm text-off-black/60 mt-2">Figure: Affinity map of themes and opportunities.</div>
        </div>

         {/* Key Pain Points */}
         <h3 className="text-xl font-semibold text-off-black mt-6 mb-6 tracking-wide">
          The 3 Main Problems
        </h3>

        <ul className="list-decimal list-inside space-y-6 text-off-black/80 max-w-3xl mb-8">
          <li>
            <strong>Inefficient Actions &amp; Multi-Step Processes</strong>
            <p className="ml-4 mt-1">
              Tasks like dropping a class, excluding times, or submitting permission requests require multiple clicks or steps.
              Users want actions to be quick, intuitive, and clearly connected to outcomes.
            </p>
          </li>
          <li>
            <strong>Confusing Information Organization</strong>
            <p className="ml-4 mt-1">
              Users get overwhelmed by too much text, too many links, and excessive calendar details.
              Confusing features like ranking systems, alternative carts, or overlapping schedules make it hard to plan efficiently.
            </p>
          </li>
          <li>
            <strong>Poor Visibility into System Status and Critical Actions</strong>
            <p className="ml-4 mt-1">
              Important information (credits left, course difficulty, lecture vs recitation, cart status) is either hard to see or easy to overlook.
              Users want essential info prioritized and presented clearly in one view.
            </p>
          </li>
        </ul>

      </div>
    </section>
  );
}
