/* components/pathSol.js */
import React from "react";

import Solution from "./Solutions.js";
const authbefore = new URL('../images/letterimages/auth.png', import.meta.url).href;
const authafter = new URL('../images/letterimages/authafter.png', import.meta.url).href;
const explorebefore = new URL('../images/letterimages/explorebefore.png', import.meta.url).href;
const exploreafter = new URL('../images/letterimages/exploreafter.png', import.meta.url).href;
const addbefore = new URL('../images/letterimages/addbefore.png', import.meta.url).href;
const addafter = new URL('../images/letterimages/addafter.png', import.meta.url).href;
const homebefore = new URL('../images/letterimages/homebefore.png', import.meta.url).href;
const homeafter = new URL('../images/letterimages/homeafter.png', import.meta.url).href;
const listsbefore = new URL('../images/letterimages/listsbefore.png', import.meta.url).href;
const listsafter = new URL('../images/letterimages/listsafter.png', import.meta.url).href;
const filmbefore = new URL('../images/letterimages/filmbefore.png', import.meta.url).href;
const filmafter = new URL('../images/letterimages/filmafter.png', import.meta.url).href;
const friendbefore = new URL('../images/letterimages/friendbefore.png', import.meta.url).href;
const friendafter = new URL('../images/letterimages/friendafter.png', import.meta.url).href;
const commentbefore = new URL('../images/letterimages/commentbefore.png', import.meta.url).href;
const commentafter = new URL('../images/letterimages/commentafter.png', import.meta.url).href;


  
const problems = [
  {
    id: "p1",
    title: "Problem 1: Reducing redundant flows",
    features: [
      {
        title: "Simplified authentication",
        beforeSrc: authbefore,
        afterSrc: authafter,
        description:
          "The original sign-in experience was a maze — you’d hit a ‘tour’ page that sent you through a mock homepage and search flow, only to loop back to a different login/signup screen. The redesign cuts the fluff and keeps things straightforward: you log in, you’re in."
      },
      {
        title: "Unified explore page",
        beforeSrc: explorebefore,
        afterSrc: exploreafter,
        description:
          "Explore used to be split into three endless feeds — Lists (that scrolled on forever), Friends, and Journal (also was endless). The redesign pulls these together into one cohesive explore page, optimizing space so everything has its place. Horizontal scroll replaces the bottomless feeds, making browsing feel lighter and more manageable."
      },
      {
        title: "Streamlined add review flow",
        beforeSrc: addbefore,
        afterSrc: addafter,
        description:
          "In the original app, adding a film meant either pressing a plus button at the bottom of the home page or trekking through the film’s info page (which was another endless scroll) before you could actually review. The new design makes it painless: ‘Add Review’ is right where you’d expect it, built into the review sections themselves."
      }
    ]
  },
  {
    id: "p2",
    title: "Problem 2: Reorganizing information and labels",
    features: [
      {
        title: "Homepage reorganization",
        beforeSrc: homebefore,
        afterSrc: homeafter,
        description:
          "Before, if you wanted to see your friends, lists, or reviews, you had to dig into your profile. Now those essentials are front and center on the homepage, cutting out unnecessary clicks and surfacing what people actually care about."
      },
      {
        title: "Clearing up watchlist vs. list vs. diary vs. journal",
        beforeSrc: listsbefore,
        afterSrc: listsafter,
        description:
          "‘Watchlist,’ ‘Lists,’ ‘Diary,’ ‘Journal’… too many confusing terms, that seemed like they meant the same thing. The redesign cleans this up with two built-in lists: To Watch and Watched. Watched updates automatically after a review, keeping it effortless. The old ‘Journal’ (really just recommended lists) now lives in Explore, while ‘Diary’ gets relabeled properly as Reviews."
      },
      {
        title: "Film info organization",
        beforeSrc: filmbefore,
        afterSrc: filmafter,
        description:
          "The old film pages had massive actor lists and walls of text. The redesign highlights just the main cast with clear icons, tucks similar films right under the streaming platforms, and trims down the mountain of text. Everything’s easier to scan at a glance without losing depth."
      }
    ]
  },
  {
    id: "p3",
    title: "Problem 3: Making key actions more discoverable",
    features: [
      {
        title: "Friend activity visibility",
        beforeSrc: friendbefore,
        afterSrc: friendafter,
        description:
          "Previously, if you wanted to know what your friends were up to, you had to dig through profiles. Now, activity is laid out cleanly right under each friend’s name — reviews, ratings, and lists are visible immediately."
      },
      {
        title: "Comment and collaboration features",
        beforeSrc: commentbefore,
        afterSrc: commentafter,
        description:
          "Blank space is put to work with a comment section that sparks conversation. On top of that, lists can now be collaborative, letting multiple people contribute. It turns passive lists into shared projects."
      },
      {
        title: "Direct access to platforms",
        beforeSrc: filmbefore,
        afterSrc: filmafter,
        description:
          "Instead of stopping at reviews, the redesign connects the dots: ‘Watch on’ buttons link straight to the streaming platforms where the film is available. Personalized icons make it clear which services each user actually has access to."
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
