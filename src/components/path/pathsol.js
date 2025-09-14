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
    title: "Problem 1: Inefficient Actions & Multi-Step Processes",
    features: [
      {
        title: "Sandbox for add/remove with instant preview",
        beforeSrc: p1sandboxbefore,
        afterSrc: p1sandboxafter,
        description:
        "Users can instantly compare schedules by toggling a class on or off, or remove it entirely with the ‘x’ button if they no longer want it in their plan.",
        notes: "Previously to remove a class: click → remove → confirm (3 steps). Now: 1-step toggle.",
      },
      {
        title:
          "Drag-and-drop priority list",
        beforeSrc: prioritybefore,
        afterSrc: priorityafter,
        description:
          "Previously, students had to assign priorities when adding each class to the cart, which was time-consuming and often premature since schedules were still in flux.By moving prioritization to just before submission, students can finalize their choices once they’ve explored all options. This streamlines the process, reduces unnecessary rework, and aligns better with how students actually plan their schedules—iterating first, then committing.",
        notes: "Previously to set priorities: add priority status (primary or alternate) to each class when adding to cart. Now: Prioritize right before submitting"
      },

      {
        title: "Time filter with drag interaction",
        beforeSrc: timebefore,
        afterSrc: timeafter,
        description:
          "Helps quickly narrow to courses that actually fit the schedule.",
      },
      
    ],
  },
  {
    id: "p2",
    title: "Problem 2: Relevant Information Organization",
    features: [
      {
        title: "Search tab + Course info next to calendar",
        beforeSrc: p1sandboxbefore,
        afterSrc: p1sandboxafter,
        description:
          "Reduces context switching and surfaces relevant details alongside the calendar for quicker scanning.",
      },
      {
        title: "Course reviews tab next to course info + Trimmed Descriptions",
        beforeSrc: reviewbefore,
        afterSrc: reviewafter,
        description:
          "Adds at-a-glance quality signals without leaving the decision surface.",
      },
      {
        title: "Degree audit & plans across semesters",
        beforeSrc: termplanbefore,
        afterSrc: auditafter,
        description:
          "Makes progress and projected completion visible, improving long-term planning confidence.",
      },
    ],
  },
  {
    id: "p3",
    title: "Problem 3: Poor Visibility into System Status and Important Functions",
    features: [
        {
            title: "Automated permission requests and cues for unmet prereqs",
            beforeSrc: permissionbefore,
            afterSrc: permissionafter,
            description:
              "Path@Penn does not explicitly tell students that they do not meet class prerequisites, leaving students to figure it out themselves. Additionally, the request permission is small and tucked away in the bottom left corner.",
          },

          {
            title: "Class Full",
            beforeSrc: permissionbefore,
            afterSrc: permissionafter,
            description:
              "Path@Penn does not explicitly tell students that they do not meet class prerequisites, leaving students to figure it out themselves. Additionally, the request permission is small and tucked away in the bottom left corner.",
          },
      
      {
        title:
          "Projected degree progress visualization (striped progress bar)",
        beforeSrc: editplanbefore,
        afterSrc: editplanafter,
        description:
          "Shows impact of choices on overall completion in real time.",
      },

      {
        title:
          "Confirmation of Submission",
        beforeSrc: aftersubmit,
        afterSrc: submitfigma,
        description:
          "Shows impact of choices on overall completion in real time.",
      },
    ],
  },
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
