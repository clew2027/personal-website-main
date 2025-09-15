import React from "react";

/**
 * Solution section
 * Props:
 *  - problems: Array<{
 *      id: string;
 *      title: string; // e.g., "Problem 1: Information Overload & Confusion"
 *      features: Array<{
 *        title: string;              // e.g., "Search tab and course info next to calendar"
 *        beforeSrc: string;          // image URL
 *        afterSrc: string;           // image URL
 *        description: string;        // short explanation of the change
 *        notes?: string;             // optional extra details
 *      }>
 *    }>
 */
export default function Solution({ problems = [] }) {
  return (
    <section id="solution" className="bg-transparent px-0">
      {/* Top border line */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Framed container */}
      <div className="relative w-full border-1 border-t-0 border-grid p-10">
        {/* Corner accents */}
        <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
          <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
        </div>

        <h2 className="text-2xl font-medium mb-8 text-off-black">Tackling each problem</h2>

        {problems.map((problem, pIdx) => (
          <div key={problem.id || pIdx} className={pIdx > 0 ? "mt-14" : ""}>
            {/* Problem header */}
            <div className="flex items-baseline gap-3">
              <h3 className="text-xl font-semibold text-off-black">
                {problem.title}
              </h3>
              <div className="h-[1px] flex-1 bg-grid/60" />
            </div>

            {/* Feature list */}
            <div className="mt-6 space-y-10">
              {problem.features.map((f, fIdx) => (
                <FeatureBlock key={fIdx} feature={f} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureBlock({ feature }) {
  return (
    <article className="border-1 border-grid  p-5">
      {/* Feature title */}
      <h4 className="text-lg font-medium text-off-black mb-3">
        {feature.title}
      </h4>

      {/* Before/After gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ImageCard
          label="Before"
          src={feature.beforeSrc}
          alt={`${feature.title} — before`}
        />
        <ImageCard
          label="After"
          src={feature.afterSrc}
          alt={`${feature.title} — after`}
        />
      </div>

      {/* Description */}
      <p className="text-off-black/80 mt-4 leading-relaxed">
        {feature.description}
      </p>
      {feature.notes && (
        <p className="text-off-black/60 mt-2 text-sm">{feature.notes}</p>
      )}
    </article>
  );
}

function ImageCard({ label, src, alt }) {
  return (
    <figure className="relative border-1 border-grid overflow-hidden w-full">
      {/* Keeps images neat and consistent; swap to `aspect-video` if you prefer */}
      <div className="w-full aspect-[16-11] bg-white">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="absolute top-2 left-2 text-xs px-2 py-1 border-1 border-grid 
                   text-off-black bg-white/90 rounded-sm shadow-sm"
      >
        {label}
      </figcaption>
    </figure>
  );
}
