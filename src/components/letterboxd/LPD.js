/* components/Problem.js */
import React from 'react';
import Frame from './Frame';

export default function Problem() {
  return (
    <Frame>
      <div className="space-y-12">

        {/* PROBLEM #1 */}
        <div>
          <p className="text-xs tracking-widest text-off-black/50 mb-2">PROBLEM #1</p>
          <p className="text-xl leading-relaxed max-w-3xl font-medium">
            Information Overload & Visual Hierarchy
          </p>
          <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">
            Too much, too messy
          </p>

          <div className="flex items-start gap-3 bg-off-black/5 rounded-xl mt-2 mb-3 p-4 shadow-sm hover:shadow-md transition">
            <div>
              <h3 className="text-off-black text-[1rem] mb-1 font-medium">
                The Film Page
              </h3>
              <ul className="list-disc pl-5 text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl space-y-1.5">
                <li>Almost a dozen sections — from reviews and ratings to cast info and related films.</li>
                <li>Little to no visual hierarchy or organization.</li>
                <li>Scrolls infinitely, making navigation exhausting.</li>
                <li>Other pages like recommended lists, journals, and film-related tag pages follow a similar pattern.</li>
              </ul>
            </div>
          </div>

          <p className="text-sm font-semibold mt-2 mb-1">IMPACT</p>
          <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl">
            Users feel overwhelmed, struggle to find relevant content, and experience fatigue from the cluttered interface.
          </p>
        </div>

        {/* PROBLEM #2 */}
        <div>
          <p className="text-xs tracking-widest text-off-black/50 mb-2">PROBLEM #2</p>
          <p className="text-xl leading-relaxed max-w-3xl font-medium">
              Labels and Terminology / Information Architecture
          </p>
          <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">
            What you see isn't what you get. 
          </p>

          <div className="flex items-start gap-3 bg-off-black/5 rounded-xl mt-2 mb-3 p-4 shadow-sm hover:shadow-md transition">
            <div>
              <h3 className="text-off-black text-[1rem] mb-1 font-medium">
                Examples
              </h3>
              <ul className="list-disc pl-5 text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl space-y-1.5">
                <li>
                  Key actions like <span className="font-medium text-off-black/90">“Write Review”</span> or <span className="font-medium text-off-black/90">“Create List”</span> are hidden under <span className="italic text-off-black/80">Profile</span> instead of appearing in context.
                </li>
                <li>
                  <span className="font-medium text-off-black/90">Lists</span>, <span className="font-medium text-off-black/90">Watchlist</span>, <span className="font-medium text-off-black/90">Diary</span>, and <span className="font-medium text-off-black/90">Journal</span> overlap in meaning, confusing where content belongs.
                </li>
                <li>
                  Unclear whether <span className="font-medium text-off-black/90">Friends</span> and <span className="font-medium text-off-black/90">Followers</span> represent the same relationship.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm font-semibold mt-2 mb-1">IMPACT</p>
          <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl">
            Users hesitate or abandon tasks when labels conflict with expectations, breaking their mental model of how features relate.
          </p>
        </div>

        {/* PROBLEM #3 */}
        <div>
          <p className="text-xs tracking-widest text-off-black/50 mb-2">PROBLEM #3</p>
          <p className="text-xl leading-relaxed max-w-3xl font-medium">
            Interaction / Navigation Design
          </p>
          <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">
          Out of Reach, Out of Flow
          </p>

          <div className="flex items-start gap-3 bg-off-black/5 rounded-xl mt-2 mb-3 p-4 shadow-sm hover:shadow-md transition">
            <div>
              <h3 className="text-off-black text-[1rem] mb-1 font-medium">
                Examples
              </h3>
              <ul className="list-disc pl-5 text-[.95rem] text-off-black/70 max-w-3xl leading-relaxed space-y-1.5">
                <li>
                  <span className="font-medium text-off-black/90">“Add”</span> and <span className="font-medium text-off-black/90">“Search”</span> buttons lead to nearly identical pages, splitting similar intents and increasing cognitive load.
                </li>
                <li>
                  The <span className="font-medium text-off-black/90">“Add”</span> flow only supports reviews — adding a film to a list requires visiting the film’s detail page, creating extra steps.
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm font-semibold mt-2 mb-1">IMPACT</p>
          <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl">
            Users take unnecessary detours to perform simple tasks, making the experience feel fragmented and unintuitive.
          </p>
        </div>

      </div>
    </Frame>
  );
}
