import React from "react";
import Frame from "./Frame";
const allcolors = new URL('../images/pathimages/allcolors.png', import.meta.url).href;

/**
 * Props:
 *  styleGuide: {
 *    palette: Array<{ name: string; hex: string }>;
 *    typography: Array<{ label: string; preview: string; className: string }>;
 *    components?: string[]; // quick bullets
 *  }
 *  atomic: {
 *    atoms: string[];
 *    molecules: string[];
 *    organisms: string[];
 *    templates?: string[];
 *    pages?: string[];
 *  }
 */
export default function DesignDeepDive({ styleGuide, atomic }) {
  return (
    <Frame>
      <h2 id="designdeepdive" className="text-2xl font-medium text-off-black mb-8">Design Deep Dive</h2>

      {/* Style Guide */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-off-black mb-4">Style Guide</h3>

        {/* Colors */}
        <div className="mb-6">
          <h4 className="text-sm tracking-widest text-off-black/60 mb-2">PALETTE</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {styleGuide?.palette?.map((c, i) => (
              <div key={i} className="border-1 border-grid rounded-lg overflow-hidden">
                <div className="h-16" style={{ backgroundColor: c.hex }} />
                <div className="px-3 py-2 text-sm">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-off-black/60">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-6">
          <h4 className="text-sm tracking-widest text-off-black/60 mb-2">EXTENDED PALETTE</h4>
          <div className="grid sm:grid-cols-2 gap-4">
          <div className="w-full bg-[#f7f7f7]">
                  <img src={allcolors} alt="extendedpaletter" className="w-full h-full object-cover" />
                </div>
          </div>
        </div>

        {/* Components list (optional) */}
        {styleGuide?.components?.length ? (
          <ul className="list-disc list-inside text-off-black/80 space-y-1">
            {styleGuide.components.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        ) : null}
      </section>

      {/* Atomic Design */}
      <section>
        <h3 className="text-xl font-semibold text-off-black mb-4">Atomic Design</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Block title="Atoms" items={atomic?.atoms} />
          <Block title="Molecules" items={atomic?.molecules} />
          <Block title="Organisms" items={atomic?.organisms} />
          {atomic?.templates && <Block title="Templates" items={atomic.templates} />}
          {atomic?.pages && <Block title="Pages" items={atomic.pages} />}
        </div>
      </section>
    </Frame>
  );
}

function Block({ title, items = [] }) {
  return (
    <article className="border-1 border-grid rounded-lg p-5">
      <h4 className="text-lg font-medium text-off-black mb-3">{title}</h4>
      <ul className="list-disc list-inside text-off-black/80 space-y-1">
        {items.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </article>
  );
}
