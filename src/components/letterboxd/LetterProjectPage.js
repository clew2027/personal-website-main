import React from "react";
import Contact from "../Contact.js";
import LSide from "./LSide.js";
const authFlowImg = new URL('../images/letterimages/auth.png', import.meta.url).href;
const reviewsFlowImg = new URL('../images/letterimages/list.png', import.meta.url).href;
const profileFlowImg = new URL('../images/letterimages/profile.png', import.meta.url).href;
const searchFlowImg = new URL('../images/letterimages/search.png', import.meta.url).href;
import UserFlows from "./Flows.js";
import PathSol from "./pathsol.js";
import DesignDeepDive from "./DesignDeepDive.js";
import Results from "./Results.js";
import WhatILearned from "./WhatILearned.js";

const path = new URL('../images/pathimages/path.png', import.meta.url).href;


export default function LetterProjectPage() {
  return (
    <main id="top" className="bg-white-background text-black font-sans">
        <LSide/>
      {/* Top grid line with border style */}
      <div className="bg-white-background px-48">
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Row */}
      <div className="w-full h-20 flex flex-row border-l-1 border-r-1 border-b-1 border-grid">
        <div className="relative flex-1 flex items-center px-10 text-3xl font-medium">
          <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
            LETTERBOXD REDESIGN
          </div>
        </div>
      </div>
      
      <section className="bg-white-background px-48">
      {/* Outer frame (top+left+right) */}
      <div className="h-fit border-l-1 border-r-1 border-t-0 border-grid">
        {/* Top strip */}
        <div className="w-full h-5 border-b-1 border-grid" />

        {/* Content row (text left, image right) */}
        <div className="grid lg:grid-cols-12 gap-6 p-10 border-b-1 border-grid">
          {/* Left: meta + headline */}
          <div className="lg:col-span-5 flex flex-col justify-between text-off-black">
            <div className="space-y-2">
              <div className="text-xs tracking-widest text-off-black/60">
                PERSONAL PROJECT · WINTER 2025
              </div>
              <h2 className="text-3xl leading-snug font-medium">
              Extensively exploring user flows and designing for simplicity, engagement, and efficiency.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-off-black/50">TIMELINE</div>
                <div>Dec 2025 — Jan 2025</div>
              </div>
              <div>
                <div className="text-off-black/50">ROLE</div>
                <div> Sole Product designer</div>
              </div>
            </div>
          </div>

          {/* Right: mock image in bordered card */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-lg overflow-hidden border border-grid">
              <img
                alt="Letterboxd mock"
                src={path} /* <-- replace with your image */
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Bottom corner accent */}
        <div className="relative">
          <div className="absolute -top-[11px] -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
        </div>
      </div>
    </section>

      {/* Continue with rest of project sections as before */}


        
      {/* Intro Section */}
        <div id="intro" className="bg-white-background px-48">
        {/* Top border line */}
        <div className="w-full h-5 border-1 border-t-0 border-grid" />

        <div className="relative w-full border-1 border-t-0 border-grid p-10">
            {/* Corner accents (optional, same style as header) */}
            <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
            </div>

            <h2 className="text-2xl font-medium mb-4">Introduction</h2>
            <p className="text-base leading-relaxed max-w-3xl">
            Letterboxd is a social platform for film lovers, allowing users to track, review, and discuss movies they've watched. Users can create personalized movie lists, write reviews, rate films, and follow other members to see their movie activity and recommendations. </p>
            <p className="text-base leading-relaxed max-w-3xl mt-4">
            I occasionally use Letterboxd, but for this redesign, I took a deeper dive by mapping out the app’s user flow in detail. Here's what I discovered:
            </p>
        </div>
        </div>

        <div id="research" className="bg-white-background px-48">
  {/* Top border line */}
  <div className="w-full h-5 border-1 border-t-0 border-grid" />

  <div className="relative w-full border-1 border-t-0 border-grid p-10">
    {/* Corner accents */}
    <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
      <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
    </div>

    <h2 className="text-2xl font-medium mb-4">The User Journey</h2>
    <p className="text-base leading-relaxed max-w-3xl mb-10">
      I mapped out all major flows of the app, and interviewed 7 people to understand their interactions, friction points, and to confusions. 
    </p>

    {/* Grid: two tables on top, photo on bottom */}
        <div className="grid gap-10 items-start">
        {/* TOP ROW: two tables side by side */}
        <div className="grid lg:grid-cols-2 gap-10">
            {/* LEFT: Questions Table */}
            <div className="h-fit border-1 border-grid">
            <div className="w-full h-5 border-b-1 border-grid" />
            <div className="relative text-xl h-14 w-full flex items-center px-6 font-medium border-b-1 border-grid text-off-black">
                Questions I Asked
            </div>
            <div className="p-6 text-off-black">
                <table className="w-full border-collapse">
                <tbody>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                    Walk me through how you’d log and review a film on Letterboxd.
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                    Show me how you would use your profile or watchlist to track what you’ve seen and what you want to watch.
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                    When deciding what movie to watch, which information are you comparing, and how do you decide?
                    </td>
                    </tr>
                    <tr>
                    <td className="p-3">
                        If you could change one thing about this design, what would it be?
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>

            {/* RIGHT: Participants Table */}
            <div className="h-fit border-1 border-grid">
            <div className="w-full h-5 border-b-1 border-grid" />
            <div className="relative text-xl h-14 w-full flex items-center px-6 font-medium border-b-1 border-grid text-off-black">
                People I Interviewed
            </div>
            <div className="p-6 text-off-black">
                <table className="w-full border-collapse">
                <tbody>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">Avid Users - log every movie, write reviews, and follow friends.  </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Casual users - occasionally save films.
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Retirees - used to use the app often but now don't
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>

        <div className="p-6 space-y-6 text-off-black">
    <blockquote className="italic border-l-2 border-off-black/30 pl-4">
    "I don’t understand the difference between a watchlist and a list."
    </blockquote>

    <blockquote className="italic border-l-2 border-off-black/30 pl-4">
    "There’s so much information crammed onto each page that I’m constantly scrolling, and it makes the experience feel overwhelming instead of enjoyable."
    </blockquote>

    <blockquote className="italic border-l-2 border-off-black/30 pl-4">
      "Some buttons, like adding a movie or review, aren’t placed in convenient places, and I'm always looking for them."
    </blockquote>
  </div>
    </div>

  </div>
</div>

<UserFlows
  auth={{
    img: authFlowImg, // replace with your image var
    pros: [
      "UI elements are consistent across screens; prominent buttons/links build familiarity and reduce cognitive load.",
      "Vibrant, high-quality imagery makes the interface engaging and enjoyable to use."
    ],
    cons: [
      "Start page branches into separate Sign In and Create Account pages; could be simplified to remove an extra click.",
      "Including an app tour on the sign-in screen is non-standard and potentially distracting; tours are more effective post-sign-in.",
      "Pre-sign-in access to home-like and search-like pages can confuse feature availability (e.g., cannot add or review while signed out).",
      "Tour ends back on an authentication page, creating a loop that may be confusing."
    ]
  }}
  reviews={{
    img: reviewsFlowImg, // replace with your image var
    pros: [
      "Rich imagery enhances browsing and provides visual cues about content.",
      "Home surfaces popular and socially relevant items, driving engagement via trends and peer interactions.",
      "Friends’ activity stream fosters a sense of community and encourages participation.",
      "Popular articles spark interest and deeper exploration of films.",
      "Lists support diverse interests and discovery, encouraging users to add films and increase activity.",
      "Comments on friends’ reviews build community within friend circles."
    ],
    cons: [
      "Lists page is effectively infinite; a curated set of trending lists would be more focused. Page is overly text-heavy.",
      "Journals view also scrolls endlessly; information density is overwhelming and the 'Journal' title is misleading.",
      "Tag detail pages (from clicking a tag) also feel infinite; users likely expect films for the tag, not more lists."
    ]
  }}
  profile={{
    img: profileFlowImg, // replace with your image var
    pros: [
      "Displaying all watched films motivates continued logging (light gamification).",
      "Lists and watchlist support organization and planning, encouraging return visits."
    ],
    cons: [
      "Footer links duplicate navigation (Lists/Watchlist) available from Home, creating circular flows.",
      "A 'Diary' link appears despite a top Diary tab, adding redundancy.",
      "Terminology inconsistency: 'Followers/Following' vs 'Friends' (used on Home).",
      "Uniform text/field sizes reduce hierarchy and scannability.",
      "Core actions (create lists, write reviews, access past films) are buried under Profile, creating friction.",
      "'Diary' label is ambiguous; it doesn't clearly indicate ratings/reviews.",
      "Bottom tab list is long and cluttered, and is often overlooked.",
      "Distinction between Lists and Watchlist is unclear.",
      "Significant unused space could support comments or larger artwork."
    ]
  }}
  search={{
    img: searchFlowImg, // replace with your image var
    pros: [
      "Prominent search encourages targeted discovery; detail-page filters (e.g., 'Browse by', 'Most popular') streamline exploration.",
      "Film elements (poster, ratings, similar films) provide at-a-glance context; Trailer CTA promotes engagement."
    ],
    cons: [
      "Both 'Add' and 'Search' buttons route to search-like experiences, increasing cognitive load.",
      "Film detail page is overloaded (e.g., too many cast entries), which is distracting.",
      "'Add' action only supports reviews (not lists); adding to a list requires opening the film page and using the overflow menu."
    ]
  }}
/>

    <PathSol/>

<DesignDeepDive
  styleGuide={{
    palette: [
      { name: "Red", hex: "#990000" },
      { name: "Blue", hex: "#011F5B" },
    ]
  }}
/>

<Results
  metrics={[
    { label: "Steps for common tasks (logging and reviewing films)", value: "−40%", note: "Steps reduced from ~6 to 3.5 steps" },
    { label: "Navigation steps reduced", value: "−52%", note: "Fewer clicks needed to reach core features like friends, lists, and reviews" },
    { label: "Ease-of-use score", value: "+65%", note: "From an average of 4.6/10 to 7.6/10 in usability surveys" },
  ]}
  highlights={[
    "Users appreciated having friends, lists, and reviews immediately available on the homepage rather than hidden in menus",
    "A unified explore page with recommendations, articles, and social activity felt comprehensive without being overwhelming",
    "Participants noted less confusion between watchlists and lists, thanks to the preset 'To Watch' and 'Watched' categories",
    "The addition of direct 'Watch on' platform links and collaborative lists made the experience feel more connected and actionable",
  ]}
/>

<WhatILearned
  lessons={[
    { 
      title: "Surface core actions early", 
      detail: "Placing friends, lists, and reviews at the homepage emphasized that Letterboxd is first and foremost social, increasing engagement right away." 
    },
    { 
      title: "Consolidate discovery", 
      detail: "Instead of spreading recommended films, articles, and lists across infinite pages, bringing them into a single continuous explore flow made exploration more intuitive." 
    },
    { 
      title: "Design for clarity and reduction of clutter", 
      detail: "Simplifying labels (e.g., Watchlist vs. Lists) and removing redundant flows highlighted how much clearer navigation becomes when hierarchy is respected." 
    },
  ]}
/>

    <Contact/>
    </main>
  );
}
