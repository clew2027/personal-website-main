/* components/Problem.js */
import React from 'react';
import Frame from './Frame';

/**
 * Problem section
 * Props:
 *  - journeySrc: string (required)  → image URL for the journey map
 *  - affmapSrc: string (required)   → image URL for the affinity map
 */
export default function Problem() {
  return (
    <Frame>
      {/* Header */}
      <p className="text-xs tracking-widest text-off-black/50">PROBLEM DEFINITION</p>
       {/* Key Pain Points */}
       <h3 className="text-xl font-semibold text-off-black mt-6 mb-6 tracking-wide">
        The 3 Main Problems
      </h3>


      <div className="space-y-12">

      {/* PROBLEM #1 */}
      <div>
        <p className="text-xs tracking-widest text-off-black/50 mb-2">PROBLEM #1</p>
        <p className="text-xl leading-relaxed max-w-3xl font-medium">
          Inefficient Actions & Multi-Step Processes
        </p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl leading-snug mb-4">
          Key tasks—like dropping a class, excluding times, or submitting permissions—require too many clicks and steps. Users want fast, intuitive actions directly tied to outcomes.
        </p>

        <p className="text-sm font-semibold mb-1">EXAMPLE</p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">
          Dropping a course takes four or more clicks across multiple screens.
        </p>

        <p className="text-sm font-semibold mb-1">IMPACT</p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl">
          Users waste time, get frustrated, and are more likely to make mistakes or abandon tasks.
        </p>
      </div>

      {/* PROBLEM #2 */}
      <div>
        <p className="text-xs tracking-widest text-off-black/50 mb-2">PROBLEM #2</p>
        <p className="text-xl leading-relaxed max-w-3xl font-medium">
          Confusing Information Organization
        </p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl leading-snug mb-4">
          Important course details and scheduling info are scattered and cluttered. Too much text, links, and overlapping calendars make it hard to compare options and plan efficiently.
        </p>

        <p className="text-sm font-semibold mb-1">EXAMPLE</p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">
          Course carts show rankings and secondary details before critical schedule conflicts, forcing users to hunt for what matters most.
        </p>

        <p className="text-sm font-semibold mb-1">IMPACT</p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl">
          Users feel overwhelmed, lose confidence in their choices, and struggle to plan effectively.
        </p>
      </div>

      {/* PROBLEM #3 */}
      <div>
        <p className="text-xs tracking-widest text-off-black/50 mb-2">PROBLEM #3</p>
        <p className="text-xl leading-relaxed max-w-3xl font-medium">
          Inefficient Scheduling & Poor Visibility
        </p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl leading-snug mb-4">
          Students have trouble building schedules because details, requirements, and actions are split across multiple screens. Key cues—labels, checkboxes, progress signals—are easy to miss, eroding confidence at the point of decision.
        </p>

        <p className="text-sm font-semibold mb-1">EXAMPLE</p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">
          Credits, course requirements, and schedule conflicts are displayed separately, requiring constant back-and-forth navigation.
        </p>

        <p className="text-sm font-semibold mb-1">IMPACT</p>
        <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl">
          Users spend extra time planning, feel uncertain about their choices, and risk making errors when finalizing schedules.
        </p>

      </div>


      </div>
    </Frame>
  );
}
