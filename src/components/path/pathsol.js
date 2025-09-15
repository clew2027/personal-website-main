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
          title: "Sandbox scheduling with instant preview",
          beforeSrc: p1sandboxbefore,
          afterSrc: p1sandboxafter,
          description:
            "Students can toggle a class on/off to instantly preview schedule changes, or remove it with a single click. This reduces friction when exploring options.",
          notes:
            "Before: click → remove → confirm (3 steps). After: single toggle or × (1 step)."
        },
        {
          title: "Drag-and-drop priority list (commit late, explore early)",
          beforeSrc: prioritybefore,
          afterSrc: priorityafter,
          description:
            "Prioritization moves from add-to-cart to just before submission, aligning with real planning behavior—explore broadly first, then commit. This cuts premature decisions and rework.",
          notes:
            "Before: set Primary/Alternate at add time for every class. After: batch prioritize immediately before submitting."
        },
        {
          title: "Time filter with draggable range",
          beforeSrc: timebefore,
          afterSrc: timeafter,
          description:
            "Interactive and less clunky handles let students quickly exclude unavailable time blocks and narrow results to courses that actually fit their schedules.",
          notes: "Instant calendar feedback; supports include/exclude windows (e.g., labs, work)."
        }
      ]
    },
    {
      id: "p2",
      title: "Problem 2: Relevant Information Organization",
      features: [
        {
          title: "Unified search with course info beside the calendar",
          beforeSrc: p1sandboxbefore,
          afterSrc: p1sandboxafter,
          description:
            "Consolidates search results and key details adjacent to the calendar, reducing context switching and enabling faster scanning and decisions."
        },
        {
          title: "Reviews panel + condensed descriptions",
          beforeSrc: reviewbefore,
          afterSrc: reviewafter,
          description:
            "Path@Penn does not have course reviews, instead students have to navigate to a whole different platform (PennCourseReview). In the redesign, decisions stay on the same surface without detours."
        },
        {
          title: "Degree audit & multi-term planning",
          beforeSrc: termplanbefore,
          afterSrc: auditafter,
          description:
            "Connects selections to requirement progress across semesters, improving long-term planning confidence and reducing Microsoft Excel planning that students end up doing."
        }
      ]
    },
    {
      id: "p3",
      title: "Problem 3: Poor Visibility into System Status & Critical Actions",
      features: [
        {
          title: "Automated prerequisite checks with clear request flow",
          beforeSrc: permissionbefore,
          afterSrc: permissionafter,
          description:
            "Inline prerequisite status and unmet-requirement cues make eligibility obvious. Prominent CTAs guide students to request permissions when needed."
        },
        {
          title: "Section capacity & waitlist transparency",
          beforeSrc: permissionbefore,
          afterSrc: permissionafter,
          description:
            "A clear ‘Class Full’ state surfaces to reinform users",
        },
        {
          title: "Projected degree progress visualization",
          beforeSrc: editplanbefore,
          afterSrc: editplanafter,
          description:
            "Progress bars reflect the impact of plan changes on overall completion (major/minor/distribution), using accessible patterns beyond color alone."
        },
        {
          title: "Submission confirmation & next steps",
          beforeSrc: aftersubmit,
          afterSrc: submitfigma,
          description:
            "A definitive confirmation state summarizes results (enrolled, alternates, pending permissions), offers an undo window, and provides export/calendar sync and receipt.",
          notes:
            "Sets clear expectations and reduces post-submission uncertainty."
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
