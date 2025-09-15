import React from "react";
import Frame from "./Frame";

const v11 = new URL('../images/pathimages/v1-1.png', import.meta.url).href;
const v12 = new URL('../images/pathimages/v1-2.png', import.meta.url).href;
const v21 = new URL('../images/pathimages/v2-1.png', import.meta.url).href;
const v22 = new URL('../images/pathimages/v2-2.png', import.meta.url).href;
const audits = new URL('../images/pathimages/auditplanversions.png', import.meta.url).href;


/**
 * Props:
 *  iterations: Array<{
 *    title: string;                // e.g., "Initial Hi-Fi"
 *    image: string;                // screenshot URL
 *    feedback: string;             // bullet/paragraph text
 *  }>
 *  final: { title: string; image: string; notes?: string }
 */
export default function DesignIteration({ iterations = [], final }) {
    return (
        <Frame>
          <h2 className="text-2xl font-medium text-off-black mb-8">
            Design Iteration
          </h2>
    
          {/* --- Version 1 --- */}
            <div className="mb-12">
            <h3 className="text-xl font-semibold text-off-black mb-4">Initial Hi-Fi</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <figure className="border-1 border-grid rounded-lg overflow-hidden">
                <div className="w-full bg-[#f7f7f7]">
                    <img src={v11} alt="Version 1 – Screen A" className="w-full h-full object-cover" />
                </div>
                </figure>
                <figure className="border-1 border-grid rounded-lg overflow-hidden">
                <div className="w-full bg-[#f7f7f7]">
                    <img src={v12} alt="Version 1 – Screen B" className="w-full h-full object-cover" />
                </div>
                </figure>
            </div>
            <div className="mt-6 p-4 border-1 border-dashed border-grid rounded-lg">
                <h4 className="text-lg font-medium text-off-black mb-2">Major Feedback Points</h4>
                <ul className="list-disc list-inside text-off-black/80 leading-relaxed space-y-4">
                <>Inefficient Use of Screen Real Estate</>
                <ul className="list-disc list-inside ml-6 space-y-1">
                <li>The course list and schedule cart feel cluttered while showing little information.</li>
                <li>The course detail panel competes visually with the calendar, creating tension around user focus.</li>
                <li>The Schedule Insights section is underutilized despite taking up valuable space.</li>
                </ul>
            
            
                <>Typography</>
                <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Font sizes, weights, and styles lack refinement.</li>
                <li>Minimal variation makes it difficult to distinguish elements like course names, times, and instructors.</li>
                <li>The dense, heavy presentation feels visually overwhelming.</li>
                </ul>
            
            
                <>Visual Hierarchy & Content Organization</>
                <ul className="list-disc list-inside ml-6 space-y-1">
                <li>The interface does not guide attention with hierarchy.</li>
                <li>The course list, cart, and insights all appear equally prominent.</li>
                <li>Related information is not clearly grouped, flattening importance and weakening logical flow.</li>
                </ul>
            
            </ul>

  </div>
</div>

    
          {/* --- Version 2 --- */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-off-black mb-4">Through several rounds of changes, feedback, and interviews…</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <figure className="border-1 border-grid rounded-lg overflow-hidden">
                <div className="w-full bg-[#f7f7f7]">
                  <img src={v21} alt="Version 2 – Screen A" className="w-full h-full object-cover" />
                </div>
              </figure>
              <figure className="border-1 border-grid rounded-lg overflow-hidden">
                <div className="w-full bg-[#f7f7f7]">
                  <img src={v22} alt="Version 2 – Screen B" className="w-full h-full object-cover" />
                </div>
              </figure>
            </div>
          </div>
    
          {/* --- Photo Audits --- */}
          <div>
            <h3 className="text-xl font-semibold text-off-black mb-4">Iterations in Degree Planning</h3>
            <figure className="border-1 border-grid rounded-lg overflow-hidden">
              <div className="w-full bg-[#f7f7f7]">
                <img src={audits} alt="Audit Plan Versions" className="w-full h-full object-cover" />
              </div>
            </figure>
            <div className="mt-6 p-4 border-1 border-dashed border-grid rounded-lg space-y-4">
                <h4 className="text-lg font-medium text-off-black">Feedback on Iteration 1</h4>
                <p className="text-off-black/80 leading-relaxed">
                    The design relied solely on color to indicate which semesters were completed, in progress, or upcoming. 
                    Users found this cue unclear, and it also posed accessibility issues for people with color vision impairments.
                </p>

                <h4 className="text-lg font-medium text-off-black">Improved Semester Plan Design</h4>
                <p className="text-off-black/80 leading-relaxed">
                    The update introduced clearer distinctions, but it still gave the impression that Semester 4 was actively selected, 
                    rather than simply marked as in progress.
                </p>

                <h4 className="text-lg font-medium text-off-black">Outcome After Iterative Feedback</h4>
                <p className="text-off-black/80 leading-relaxed">
                    After two rounds of refinement, the final design resolved the ambiguity and communicated progress more intuitively. 
                    By combining symbols, text, and color, the interface became both clearer and more accessible.
                </p>
            </div>
          </div>
        </Frame>
      );
}
