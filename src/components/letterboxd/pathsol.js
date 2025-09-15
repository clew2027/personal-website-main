/* components/pathSol.js */
import React from "react";

import Solution from "./Solutions.js";
const p1sandboxbefore = new URL('../images/pathimages/sandbox.png', import.meta.url).href;
const p1sandboxafter = new URL('../images/pathimages/patptopmid.png', import.meta.url).href;
const permissionbefore = new URL('../images/pathimages/permissionreqbefore.png', import.meta.url).href;
const prioritybefore = new URL('../images/pathimages/prioritybefore.png', import.meta.url).href;
const priorityafter = new URL('../images/pathimages/priorityafter.png', import.meta.url).href;
const permissionafter = new URL('../images/pathimages/permissionafter.png', import.meta.url).href;
const timebefore = new URL('../images/pathimages/timebefore.png', import.meta.url).href;
const timeafter = new URL('../images/pathimages/timeafter.png', import.meta.url).href;
const reviewbefore = new URL('../images/pathimages/reviewbefore.png', import.meta.url).href;
const reviewafter = new URL('../images/pathimages/reviewafter.png', import.meta.url).href;
const editplanbefore = new URL('../images/pathimages/editplanbefore.png', import.meta.url).href;
const editplanafter = new URL('../images/pathimages/editplanafter.png', import.meta.url).href;
const auditafter = new URL('../images/pathimages/auditafter.png', import.meta.url).href;
const termplanbefore = new URL('../images/pathimages/termplanbefore.png', import.meta.url).href;
const aftersubmit = new URL('../images/pathimages/aftersubmit.png', import.meta.url).href;
const submitfigma = new URL('../images/pathimages/submitfigma.png', import.meta.url).href;

const problems = [
  {
    id: "p1",
    title: "Problem 1: Reducing redundant flows",
    features: [
      {
        title: "Simplified authentication",
        description:
          "Authentication is straightforward with no looping flows or confusing branches. The optional tour is shown after signing in, keeping onboarding contextual."
      },
      {
        title: "Unified explore page",
        description:
          "Recommended and popular films, lists, and articles are combined into a single continuous explore page. This removes clutter and avoids infinite scrolling."
      },
      {
        title: "Streamlined add-to-film flow",
        description:
          "The add and search actions are merged into one clear process. Tagged films lead directly to movies instead of more lists, reducing circular flows."
      }
    ]
  },
  {
    id: "p2",
    title: "Problem 2: Clarifying navigation and labels",
    features: [
      {
        title: "Homepage reorganization",
        description:
          "Friends, my lists, and my reviews are surfaced directly on the homepage, cutting down on navigation steps."
      },
      {
        title: "Clear watchlist distinction",
        description:
          "The confusion between ‘Watchlist’ and ‘Lists’ is resolved with two preset lists: To Watch and Watched. Watched updates automatically after a review."
      },
      {
        title: "Consistent and descriptive sections",
        description:
          "The articles section is clearly titled, while new labels and icons distinguish whether friends watched, reviewed, or interacted with a film."
      }
    ]
  },
  {
    id: "p3",
    title: "Problem 3: Making key actions more discoverable",
    features: [
      {
        title: "Friend activity visibility",
        description:
          "Friends are shown in an organized layout with their activities displayed right beneath their names. Previously, this information was buried in profiles."
      },
      {
        title: "Comment and collaboration features",
        description:
          "A comment section fills blank space, encouraging conversation. Users can also collaborate on lists, making key social actions prominent."
      },
      {
        title: "Direct access to platforms",
        description:
          "‘Watch on’ links with platform icons connect users directly to where the movie is available. This can be personalized for each user."
      }
    ]
  }
];

  



export default function PathSol() {
  return (
    <section id="solution" className="bg-white-background px-48">
      {/* Top border line */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Outer bordered frame */}
      <div className="relative w-full border-1 border-t-0 border-grid p-10">
        {/* Corner accents */}
        <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
          <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
        </div>

        {/* Header */}
        <h2 className="text-2xl font-medium mb-6 text-off-black">Solution</h2>

        {/* Intro text */}
        <p className="text-base leading-relaxed max-w-3xl mb-8 text-off-black/80">
          Before I go into the details of everything I designed, here is a video
          demo of the whole flow:
        </p>
        <p className="mt-2 text-sm text-gray-500">
        If the video does not load, 
        <a 
            href="https://app.screencastify.com/watch/EOfa9wMFDkIilFVUkKYk" 
            target="_blank" 
            rel="noreferrer" 
            className="text-secondary-violet underline"
        >
            click here to view it directly.
        </a>
        </p>


        {/* Video embed */}
        <div className="relative border-1 border-grid rounded-lg overflow-hidden w-full aspect-video">
          <iframe
            src="https://app.screencastify.com/watch/EOfa9wMFDkIilFVUkKYk/embed"
            title="Charlotte Lew - Path@Penn Redesign Demo"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Solution problems={problems} />

    </section>
  );
}
