/* eslint-disable global-require */
import React, { useState } from 'react';

const semesters = [
  {
    semester: 'Fall 2023',
    courses: [
      { code: 'CHEM 101', name: 'General Chemistry I' },
      { code: 'CIS 1100', name: 'Programming Languages & Techniques I' },
      { code: 'ECON 0100', name: 'Introduction to Microeconomics' },
      { code: 'MATH 1410', name: 'Calculus II' },
      { code: 'PHYS 1510', name: 'Physics Principles II' },
    ],
  },
  {
    semester: 'Spring 2024',
    courses: [
      { code: 'CIS 120',  name: 'Programming Languages & Techniques I' },
      { code: 'CIS 160',  name: 'Mathematical Foundations of Computer Science' },
      { code: 'MUSC 0070', name: 'Ensemble Performance: Jazz Combo' }, // 0.5 CU on transcript
      { code: 'MUSC 1450', name: 'Songwriting' },
      { code: 'WRIT 0570', name: 'Critical Writing Seminar' },
    ],
  },
  {
    semester: 'Fall 2024',
    courses: [
      { code: 'ACCT 1010', name: 'Accounting and Financial Reporting' },
      { code: 'CIS 1210',  name: 'Programming Languages & Techniques II' },
      { code: 'ECON 0200', name: 'Introduction to Economics: Macro' },
      { code: 'LGST 1000', name: 'Ethics & Social Responsibility' },
      { code: 'MUSC 1710', name: 'Materials in Jazz Improvisation' },
    ],
  },
  {
    semester: 'Spring 2025',
    courses: [
      { code: 'CIS 1951', name: 'iOS Programming' },                  
      { code: 'CIS 3500', name: 'Software Design/Engineering' },
      { code: 'NETS 2120', name: 'Scalable and Cloud Computing'},
      { code: 'MEAM 4110', name: 'How to Make Things: Production Prototyping Studio' },
      { code: 'DSGN 0020', name: 'User Experience (UX) and User Interface (UI) Design' },
      { code: 'DSGN 2570', name: 'Design 21: Design After the Digital' },

    ],
  },
  {
    semester: 'Fall 2025',
    courses: [
      { code: 'CIS 3200', name: 'Introduction to Algorithms' },
      { code: 'CIS 2400', name: 'Introduction to Computer Systems' },
      { code: 'CIS 5450', name: 'Big Data Analytics' },
      { code: 'CIS 5190', name: 'Applied Machine Learning' },
      { code: 'DSGN 1020', name: 'Art of the Web' },
    ],
  }
];
const outerLeftStyle = 'w-full h-[80%] top-[10%] sm:-translate-x-[30%] md:-translate-x-[60%] lg:-translate-x-[30%] xl:-translate-x-[55%]  z-0 blur-[2px]';
const leftCourseStyle = 'w-full h-[80%] top-[10%] sm:-translate-x-[30%] md:-translate-x-[60%] lg:-translate-x-[30%] xl:-translate-x-[55%] z-10 blur-[2px]';
const middleCourseStyle = 'w-full h-full top-0 delay-50 translate-x-0 z-20 blur-none shadow-md';
const rightCourseStyle = 'w-full h-[80%] top-[10%] sm:translate-x-[30%] md:translate-x-[60%] lg:translate-x-[30%] xl:translate-x-[55%] z-10 blur-[2px]';
const outerRightStyle = 'w-full h-[80%] top-[10%] sm:translate-x-[30%] md:translate-x-[60%] lg:translate-x-[30%] xl:translate-x-[55%] z-0 blur-[2px]';
const commonCardStyle = 'ease-in-out duration-200 absolute border-1 border-gray-300 rounded-md bg-white-background text-lg px-4 py-2';

function Skills() {
  const [semesterIdx, setSemesterIdx] = useState(4);

  return (
    <div className="bg-white-background px-32">
      <div className="w-full h-5 border-1 border-t-0 border-grid" />
      <div className="flex xs:flex-col lg:flex-row h-fit border-l-1 border-r-1 border-grid">
        <div className=" border-b-1 border-grid xs:w-full sm:w-full lg:w-1/2 h-fit text-center text-off-black text-3xl font-medium tracking-wide p-4">
          <div className="text-3xl font-medium  relative w-fit mx-auto flex flex-col text-center mb-6">
            <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-white-background z-10" />
            <div id="skills" className="w-1 h-1" />
            <div className="group relative cursor-default w-fit overflow-hidden">
              Coursework
              <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
            </div>
          </div>
          <div className="relative w-64 h-80 mx-auto">{semesters.map((semester, sIdx) => {
            let cardStyle = '';
            switch (sIdx) {
              case semesterIdx - 2: cardStyle = outerLeftStyle; break;
              case semesterIdx - 1: cardStyle = leftCourseStyle; break;
              case semesterIdx:     cardStyle = middleCourseStyle; break;
              case semesterIdx + 1: cardStyle = rightCourseStyle; break;
              case semesterIdx + 2: cardStyle = outerRightStyle; break;
              default: break;
            }

            if (sIdx >= semesterIdx - 2 && sIdx <= semesterIdx + 2) {
              return (
                <div
                  key={`semester-card-${sIdx}-${semester.semester}`}
                  className={`${cardStyle} ${commonCardStyle} overflow-hidden`}
                >
                  <div className="text-left">
                    {semester.courses.map((course, cIdx) => (
                      <div
                        key={`course-${sIdx}-${course.code}-${cIdx}`}
                        className="mt-3 text-sm"
                      >
                        {course.code}
                        <br />
                        <div className="text-xs text-black/60">{course.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Important: return null for items outside the visible window
            return null;
          })}

          </div>
          <div className="flex flex-row w-fit mx-auto mt-6 text-base">
            <button type="button" onClick={() => setSemesterIdx((state) => Math.max(state - 1, 0))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="w-52">
              {semesters[semesterIdx].semester}
            </div>
            <button type="button" onClick={() => setSemesterIdx((state) => Math.min(state + 1, semesters.length - 1))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative xs:w-full lg:w-6/12 h-fit border-grid xs:border-l-0 lg:border-l-1 items-center text-center text-off-black text-3xl font-medium tracking-wide p-4">
          <div className="absolute top-1/2 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1  border-l-1 -bottom-3 -right-3" />
          </div>
          <div className="relative w-fit mx-auto text-center mb-4 text-3xl font-medium ">
            <div style={{ '--shift': '150px', '--duration': '0.4s', '--delay': '0.3s' }} className="typeDisappear absolute w-full h-full bg-white-background z-10" />
            <div className="group relative cursor-default w-fit overflow-hidden">
              Skills
              <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full cursor-default flex flex-row justify-center">
              <div className="bg-white-background border-1 border-r-grid border-t-grid border-l-grid  hover:scale-105 h-fit w-1/2 group mr-2 duration-300 card text-left border-b-[#617891] border-b-8">
          
                <div className="group-hover:text-[#617891] duration-300 my-2 text-off-black text-xl">Software Development</div>
                <div className="text-off-black/70 text-lg">
                  <ul className="text-off-black/70">
                    <li className="list-element tracking-wide font-normal text-sm"> Java</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Swift</li>
                    <li className="list-element tracking-wide font-normal text-sm"> C#</li>
                    <li className="list-element tracking-wide font-normal text-sm"> OCaml</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white-background border-1 border-r-grid border-t-grid border-l-grid  hover:scale-105 h-fit w-1/2 group mr-2 duration-300 card text-left border-b-[#617891] border-b-8">
                <div className="group-hover:text-[#617891] duration-300 my-2 text-off-black text-xl">Data Science</div>
                <div className="text-off-black/70 text-lg">
                  <ul className="text-off-black/70">
                    <li className="list-element tracking-wide font-normal text-sm"> Python</li>
                    <li className="ml-4 list-element tracking-wide font-normal text-xs"> Pandas</li>
                    <li className="list-element tracking-wide font-normal text-sm"> PySpark</li>
                    <li className="list-element tracking-wide font-normal text-sm"> MATLAB</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Data Wrangling & Cleaning</li>
                  </ul>
                </div>
              </div>
              <div />
            </div>


            <div className="w-full cursor-default flex flex-row justify-center">
              <div className="bg-white-background border-1 border-r-grid border-t-grid border-l-grid  hover:scale-105 h-fit w-1/2 group mr-2 duration-300 card text-left border-b-[#617891] border-b-8">
          
                <div className="group-hover:text-[#617891] duration-300 my-2 text-off-black text-xl">Design (UI/UX and more)</div>
                <div className="text-off-black/70 text-lg">
                  <ul className="text-off-black/70">
                    <li className="list-element tracking-wide font-normal text-sm"> Figma</li>
                    <li className="list-element tracking-wide font-normal text-sm"> FigJam</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Rhino</li>
                    <li className="list-element tracking-wide font-normal text-sm"> Grasshopper</li>
                    <li className="list-element tracking-wide font-normal text-sm"> UX Research</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white-background border-1 border-r-grid border-t-grid border-l-grid hover:scale-105 h-fit xs:w-full sm:w-3/4 md:w-1/2 lg:w-3/4 xl:w-1/2 group m-auto duration-300 card text-left border-b-[#617891] border-b-8">
              <div className="group-hover:text-[#617891] duration-300 mt-5 mb-2 text-off-black text-xl">Web Development</div>
              <div className="text-off-black/90 text-lg grid grid-cols-2 gap-4">
                <div>
                  Frontend
                  <ul className="text-off-black/70">
                    <li className="truncate list-element tracking-wide font-normal text-sm"> JavaScript / TypeScript</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> React</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> Angular</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> CSS / Tailwind CSS</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> Vue.js</li>
                  </ul>
                </div>
                <div>
                  Backend
                  <ul className="text-off-black/70">
                    <li className="truncate list-element tracking-wide font-normal text-sm"> NodeJS</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> MongoDB</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> MySQL</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> DynamoDB</li>
                    <li className="truncate list-element tracking-wide font-normal text-sm"> ExpressJS</li>
                  </ul>
                </div>
              </div>
            </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
