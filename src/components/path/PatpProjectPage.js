import React from "react";
import Contact from "../Contact";
import PSide from "./pathSideBar";
const affmap = new URL('../images/pathimages/affinitymappath.png', import.meta.url).href;
const journey = new URL('../images/pathimages/pathjourney.png', import.meta.url).href;
import Problem from "./pathPD.js";
import PathSol from "./pathsol.js";
import DesignDeepDive from "./DesignDeepDive.js";
import DesignIteration from "./DesignIteration.js";
import Results from "./Results.js";
import WhatILearned from "./WhatILearned.js";


export default function PatpProjectPage() {
  return (
    <main className="bg-white-background text-black font-sans">
        <PSide/>
      {/* Top grid line with border style */}
      <div className="bg-white-background px-48">
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* Row */}
      <div className="w-full h-20 flex flex-row border-l-1 border-r-1 border-b-1 border-grid">
        <div className="relative flex-1 flex items-center px-10 text-3xl font-medium">
          <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
            PATH@PENN REDESIGN
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
                PERSONAL PROJECT · SPRING 2025
              </div>
              <h2 className="text-3xl leading-snug font-medium">
              A redesign that simplifies the course search and registration process for Penn students
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-off-black/50">TIMELINE</div>
                <div>Feb 2025 — Apr 2025</div>
              </div>
              <div>
                <div className="text-off-black/50">ROLE</div>
                <div> Sole Product designer</div>
              </div>
            </div>
          </div>

          {/* Right: mock image in bordered card */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-lg overflow-hidden border-1 border-grid bg-white">
              <img
                alt="Path@Penn mock"
                className="w-full h-auto block"
                src="/images/patpleft1.png" /* <-- replace with your image */
              />
              {/* optional hover slide panel like your Portfolio cards */}
              {/* <div className="group-hover:right-0 absolute top-0 -right-[50%] w-1/2 h-full border-l-1 border-grid bg-white duration-200 ease-in-out"></div> */}
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
            Path@Penn is the University of Pennsylvania's main student platform, offering services from 
            course search to financial aid. Despite its range of resources, students primarily use it to 
            search for and enroll in courses. This project focuses on enhancing this function of Path@Penn.
            </p>
            <p className="text-base leading-relaxed max-w-3xl mt-4">
            As an incoming freshman in Fall 2023, I remember struggling immensely to register for my first 
            classes at Penn. This redesign is my attempt to address those pain points, informed by 
            interviews and feedback from fellow students.
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

    <h2 className="text-2xl font-medium mb-4">User Research</h2>
    <p className="text-base leading-relaxed max-w-3xl mb-10">
      Having wrestled with Path@Penn myself, I set out to uncover how other students felt.
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
                        When deciding between classes, which information are you comparing, and how are you deciding?
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Walk me through your course search, adding a course to cart, and submitting a schedule.
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Show me how you would use the degree audit to check if you’re on track to graduate.
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
                    <td className="p-3">Undergraduate and graduate students</td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Students from all 4 schools: College of Arts & Sciences, Engineering, Nursing, and Wharton
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Freshmen through seniors that have used PennInTouch (previous version of Path@Penn)
                    </td>
                    </tr>
                    <tr className="border-b-1 border-grid">
                    <td className="p-3">
                        Students with nontraditional degrees and requirements (dual degrees, transfers)
                    </td>
                    </tr>
                    <tr>
                    <td className="p-3">Students from other universities for comparative insights</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>

        <div className="p-6 space-y-6 text-off-black">
    <blockquote className="italic border-l-2 border-off-black/30 pl-4">
      "The flow is confusing and I have to navigate multiple tabs and popups just to find and compare course information."
    </blockquote>

    <blockquote className="italic border-l-2 border-off-black/30 pl-4">
      "Course details and degree audit information feel scattered and unorganized, making it hard to see what’s completed or what’s missing."
    </blockquote>

    <blockquote className="italic border-l-2 border-off-black/30 pl-4">
      "Some actions, like adding to cart or submitting a schedule, aren’t intuitive, and important cues like checkboxes or labels aren’t obvious."
    </blockquote>
  </div>
    </div>

  </div>
</div>

    <Problem journeySrc={journey} affmapSrc={affmap} />
    <PathSol/>


<DesignIteration
  iterations={[
    {
      title: "Initial Hi-Fi",
      image: {affmap},
      feedback: "Too dense on the right; unclear affordance for cart actions; calendar steals focus."
    },
    {
      title: "Second Version",
      image: {affmap},
      feedback: "Better hierarchy; add inline warnings; surface prereq status and seats."
    }
  ]}
  final={{
    title: "Final v1.0",
    image: {affmap},
    notes: "Resolves density and action clarity; aligns with style guide."
  }}
/>

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
    { label: "Time-to-Schedule", value: "−32%", note: "From 12m → 8.1m in tests" },
    { label: "Confident Decisions", value: "+24%", note: "Self-reported" },
    { label: "Support Pings", value: "−18%" },
  ]}
  highlights={[
    "Inline prereq + seat visibility reduced dead-ends",
    "Sandbox flows improved exploration without risk",
    "Sticky cart/schedule boosted comparison speed",
  ]}
/>

<WhatILearned
  lessons={[
    { title: "Validate early, not just intuit", detail: "Benchmarks and user tests corrected my assumptions about density and action placement." },
    { title: "Design for flow, not pages", detail: "Keeping cart and schedule visible removed costly context switching." },
    { title: "Name the primitives", detail: "Atomic design helped keep variants consistent across states." },
  ]}
/>
    <Contact/>
    </main>
  );
}
