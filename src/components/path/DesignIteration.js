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
            <h3 className="text-xl font-semibold text-off-black mb-4">Version 1</h3>
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
            <div className="mt-6 p-4 border-1 border-dashed border-grid rounded-lg bg-white">
              <h4 className="text-lg font-medium text-off-black mb-2">Feedback</h4>
              <p className="text-off-black/80 leading-relaxed">
                {/* Write feedback for Version 1 here */}
              </p>
            </div>
          </div>
    
          {/* --- Version 2 --- */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-off-black mb-4">Version 2</h3>
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
            <div className="mt-6 p-4 border-1 border-dashed border-grid rounded-lg bg-white">
              <h4 className="text-lg font-medium text-off-black mb-2">Feedback</h4>
              <p className="text-off-black/80 leading-relaxed">
                {/* Write feedback for Version 2 here */}
              </p>
            </div>
          </div>
    
          {/* --- Photo Audits --- */}
          <div>
            <h3 className="text-xl font-semibold text-off-black mb-4">Photo Audits</h3>
            <figure className="border-1 border-grid rounded-lg overflow-hidden">
              <div className="w-full bg-[#f7f7f7]">
                <img src={audits} alt="Audit Plan Versions" className="w-full h-full object-cover" />
              </div>
            </figure>
            <div className="mt-6 p-4 border-1 border-dashed border-grid rounded-lg bg-white">
              <h4 className="text-lg font-medium text-off-black mb-2">Notes</h4>
              <p className="text-off-black/80 leading-relaxed">
                {/* Write notes for audit section here */}
              </p>
            </div>
          </div>
        </Frame>
      );
}
