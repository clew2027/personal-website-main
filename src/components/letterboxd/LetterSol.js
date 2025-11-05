/* components/pathSol.js */
import React from "react";
import Frame from "./Frame";
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
      title: "Explore Page",
      features: [
        {
          title: "Sandbox scheduling with instant preview",
          afterSrc: p1sandboxafter,
          description:
            "Students can toggle a class on/off to instantly preview schedule changes, or remove it with a single click. This reduces friction when exploring options.",
          notes:
            "Before: click → remove → confirm (3 steps). After: single toggle or × (1 step)."
        },
        {
          title: "Drag-and-drop priority list (commit late, explore early)",
          afterSrc: priorityafter,
          description:
            "Prioritization moves from add-to-cart to just before submission, aligning with real planning behavior—explore broadly first, then commit. This cuts premature decisions and rework.",
          notes:
            "Before: set Primary/Alternate at add time for every class. After: batch prioritize immediately before submitting."
        },
        {
          title: "Time filter with draggable range",
          afterSrc: timeafter,
          description:
            "Interactive and less clunky handles let students quickly exclude unavailable time blocks and narrow results to courses that actually fit their schedules.",
          notes: "Instant calendar feedback; supports include/exclude windows (e.g., labs, work)."
        }
      ]
    },
    {
      id: "p2",
      title: "Profile Page",
      features: [
        {
          title: "Unified search with course info beside the calendar",
          afterSrc: p1sandboxafter,
          description:
            "Consolidates search results and key details adjacent to the calendar, reducing context switching and enabling faster scanning and decisions."
        },
        {
          title: "Reviews panel + condensed descriptions",
          afterSrc: reviewafter,
          description:
            "Path@Penn does not have course reviews, instead students have to navigate to a whole different platform (PennCourseReview). In the redesign, decisions stay on the same surface without detours."
        },
        {
          title: "Degree audit & multi-term planning",
          afterSrc: auditafter,
          description:
            "Connects selections to requirement progress across semesters, improving long-term planning confidence and reducing Microsoft Excel planning that students end up doing."
        }
      ]
    },
    {
      id: "p3",
      title: "Film Page",
      features: [
        {
          title: "Automated prerequisite checks with clear request flow",
          afterSrc: permissionafter,
          description:
            "Inline prerequisite status and unmet-requirement cues make eligibility obvious. Prominent CTAs guide students to request permissions when needed."
        },
        {
          title: "Section capacity & waitlist transparency",
          afterSrc: permissionafter,
          description:
            "A clear ‘Class Full’ state surfaces to reinform users",
        },
        {
          title: "Projected degree progress visualization",
          afterSrc: editplanafter,
          description:
            "Progress bars reflect the impact of plan changes on overall completion (major/minor/distribution), using accessible patterns beyond color alone."
        },
        {
          title: "Submission confirmation & next steps",
          afterSrc: submitfigma,
          description:
            "A definitive confirmation state summarizes results (enrolled, alternates, pending permissions), offers an undo window, and provides export/calendar sync and receipt.",
          notes:
            "Sets clear expectations and reduces post-submission uncertainty."
        }
      ]
    },
    {
        id: "p4",
        title: "Revamped Friends Features",
        features: [
          {
            title: "Automated prerequisite checks with clear request flow",
            afterSrc: permissionafter,
            description:
              "Inline prerequisite status and unmet-requirement cues make eligibility obvious. Prominent CTAs guide students to request permissions when needed."
          },
          {
            title: "Section capacity & waitlist transparency",
            afterSrc: permissionafter,
            description:
              "A clear ‘Class Full’ state surfaces to reinform users",
          },
          {
            title: "Projected degree progress visualization",
            afterSrc: editplanafter,
            description:
              "Progress bars reflect the impact of plan changes on overall completion (major/minor/distribution), using accessible patterns beyond color alone."
          },
          {
            title: "Submission confirmation & next steps",
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
    <Frame>
        <p className="text-xs tracking-widest text-off-black/50 mb-2">SOLUTION</p>
        {problems.map((problem) => (
        <div key={problem.id} className="mb-8">
          <h2 className="text-xl leading-relaxed max-w-3xl font-medium">{problem.title}</h2>
          {problem.features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-m font-semibold mb-1">{feature.title}</h3>
                <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">{feature.description}</p>
                {feature.notes && <p className="text-[.95rem] leading-relaxed text-off-black/70 max-w-3xl mb-4">{feature.notes}</p>}
              </div>
              <div>
                <img
                  src={feature.afterSrc}
                  alt={feature.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </Frame>
  );
}
