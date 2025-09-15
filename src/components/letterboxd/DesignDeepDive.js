import React from "react";
import Frame from "./Frame";
const allcolors = new URL('../images/pathimages/allcolors.png', import.meta.url).href;
const atom = new URL('../images/pathimages/atom.png', import.meta.url).href;
const molecules = new URL('../images/pathimages/molecule.png', import.meta.url).href;
const organisms = new URL('../images/pathimages/organism.png', import.meta.url).href;

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
      <div className="mx-auto max-w-5xl px-4">
        <h3 className="text-2xl font-semibold text-off-black tracking-tight mb-6">
          Atomic Design
        </h3>

        <div className="space-y-6">
          <FigureCard title="Atoms" caption="Buttons, inputs, icons, tokens" img={atom} />
          <FigureCard title="Molecules" caption="Input groups, tags, compact cards" img={molecules} />
          <FigureCard title="Organisms" caption="Registration table, filters, degree planner" img={organisms} />
        </div>
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

function FigureCard({ title, caption, img }) {
    const handleClick = () => {
      const dlg = document.createElement("dialog");
      dlg.className =
        "backdrop:bg-black/60 p-0 rounded-xl overflow-hidden border border-grid";
      dlg.innerHTML = `
        <img src="${img}" alt="${title}" style="max-width:90vw;max-height:85vh;display:block" />
      `;
      dlg.onclick = () => dlg.close();
      document.body.appendChild(dlg);
      dlg.showModal();
    };
  
    return (
      <figure className="rounded-2xl border border-grid bg-neutral-50 p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <h4 className="text-base font-medium text-off-black">{title}</h4>
          <span className="text-xs text-neutral-500">{caption}</span>
        </div>
  
        <div
          onClick={handleClick}
          className=" w-full overflow-hidden rounded-xl border border-dashed border-grid bg-[#CFD8DC] grid place-items-center cursor-zoom-in"
        >
          <img 
            src={img}
            alt={title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </figure>
    );
  }
  