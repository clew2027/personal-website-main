/* eslint-disable no-trailing-spaces */
/* eslint-disable global-require */
import React, { useState } from 'react';

const experiences = [
  {
    title: 'Forward Deployed Software Engineer',
    company: 'Palantir',
    link: 'https://www.palantir.com/',
    date: 'Jan 2025 - Sep 2025',
    description: [
      'Worked as a client-facing software engineer on Palantir x Lumen to advance their telecom network!',
      'Built and optimized PySpark pipelines with partioning and broadcast joins to process >10M rows per day identifying millions in annual savings',
      'Owned, designed, and built full stack client facing applications with TypeScript and Python to make network analysis more efficient and accurate - many of which applications became the primary source of truth for business wide executive decisions',
      'Spent a large amount of time 1:1 with clients decomposing the full product lifecycle from a customer problem to a software feature',
      'Joined the team when it was ~10 engineers and contributed to lasting engineering standards even as it grows to >50 engineers',
      'Reach out to hear more about what I worked on :)',
    ],
    image: require('./images/icons/palantir.webp'),
  },
  {
    title: 'Software Engineering Intern',
    company: 'J.P. Morgan Chase',
    link: 'https://www.jpmorganchase.com/',
    date: 'June 2024 - Aug 2024',
    description: [
      'Worked on the Operating Systems Build Factory team to enhance the pipeline of creating customized AWS EC2 images for all 80+ lines of businesses',
      'Utilized AWS CloudFormation, SNS, Lambda and SSM with the boto3 Python library to capture and expose 1,000+ EC2 image package lists weekly to streamline vulnerability detection',
      'Developed a schema with Python to segment package lists of on average 24KB into multiple 4KB standard parameters in AWS SSM in order to be captured by AWS Config',
      "Deployed the team's first API Gateway secured in a VPC offering 4 endpoints for HTTP based access to package lists with a private REST API",
      'Won 2nd place in the Jersey City intern scavenger hunt :)',
    ],
    image: require('./images/icons/jpmc.webp'),
  },
  {
    title: 'Teaching Assistant',
    company: 'University of Pennsylvania',
    link: 'https://www.cis.upenn.edu/',
    date: 'Jan 2023 - May 2023, Aug 2023 - Dec 2024',
    description: [
      'CIS 3200 Introduction to Algorithms (Jan 2023 - May 2024)',
      'CIS 3500 Software Design and Engineering (Jan 2024 - May 2024)',
      'CIS 5550 Internet and Web Systems (Aug 2024 - Dec 2024)',
      'Taught advanced algorithms and data structures class of 175+ students in topics such as graphs algorithms, flow networks and approximation algorithms.',
      'Acted as a product manager to help guide student built projects in JavaScript, React, and NodeJS',
    ],
    image: require('./images/icons/upenn.webp'),
  },
  {
    title: 'Research Assistant',
    company: 'Computational Social Science Lab',
    link: 'https://css.seas.upenn.edu/',
    date: 'Sep 2022 - May 2023, Aug 2023 - May 2024',
    description: [
      'Built digital experiments to assist with high throughput on group dynamics research with JavaScript, React, Meteor and Empirica stack',
      'Deployed weekly real time experiments with 15+ participants from MTurk to collect group dynamics data',
      'Containerized and deployed a web app with Docker on AWS Elastic Beanstalk to study altruistic behavior',
      "Created a Python script to automate cookie collection and aid with research on YouTube's recommendation algorithm",
      'Collaborated with senior researchers and research assistants weekly to accelerate the data analysis process',
    ],
    image: require('./images/icons/csslogo.webp'),
  },
  {
    title: 'Software Engineering Intern',
    company: 'Mathworks',
    link: 'https://www.mathworks.com/products/signal-integrity.html',
    date: 'May 2023 - Aug 2023',
    description: [
      'Worked with the MATLAB Signal Integrity team to make a better user experience for the toolbox!',
      'Designed and implemented a new user facing introduction modal for all beginner and experienced users picking up the toolbox',
      'Integrated an editor for Clock Domain changes to allow for an error safe and intuitive editing experience for anyone editing their circuits',
      'Collaborated with senior developers and UX designers to ensure a smooth transition for the new features into the toolbox',
      'Catch my changes in the SI Toolbox in the 2024a release :)',
    ],
    image: require('./images/icons/mathworks.webp'),
  },
  {
    title: 'Software Developer Intern',
    company: 'Ren Energy',
    link: 'https://www.ren.inc/',
    date: 'Aug 2022 - Dec 2022',
    description: [
      'Assembled production level components with Angular, TypeScript and frameworks such as MapBoxGL for Ren’s main user facing application which led to a smoother client targeted experience',
      'Decreased carbon emission data loading time on the user facing map by designing an aggregation pipeline for emissions/country',
      'Maintained a mature codebase and optimized workflow in 2-week sprints through version control on GitLab',
    ],
    image: require('./images/icons/ren.webp'),
  },
  {
    title: 'Computer Science Instructor',
    company: 'Juni Learning',
    link: 'https://junilearning.com/',
    date: 'June 2021 - Sep 2022',
    description: [
      'Tutored students and developed projects in Python, Java and Scratch for children ages 8-18 and encouraged resiliency and problem-solving skills while facilitating a motivating environment',
      'Developed communication skills with parents via updates on student progress and learning assessments',
    ],
    image: require('./images/icons/juni.webp'),
  },
];

function Experience() {
  const [experienceIdx, setExperienceIdx] = useState(0);

  const changeSem = (semester) => {
    const slider = document.getElementById('coursework-chooser');
    slider.style.setProperty('--coursework-chooser-index', semester);
  };
  
  return (
    <div className="bg-white-background px-32">
      <div className="relative w-full h-5 border-1 border-grid" />
      <div className="h-fit">
        <div className="w-full h-20 flex flex-row relative">
          <div className="xs:w-0 lg:w-24 xl:w-32 xs:border-r-1 xs:border-0 lg:border-1 lg:border-b-0 lg:border-t-0 h-20 flex-shrink-0 border-grid" />
          <div className="text-3xl relative w-full text-center flex items-center justify-center font-medium mx-auto border-b-[1px] border-grid">
            <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
              <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
            </div>
            <div className="group relative cursor-default w-fit overflow-hidden">
              <div id="experience" className="w-1 h-1" />
              <div style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }} className="typeDisappear absolute w-full h-full bg-white-background z-10" />
              Experience
              <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
            </div>
          </div>
          <div className="xs:w-0 lg:w-24 xl:w-32 xs:border-r-1 xs:border-0 lg:border-1 lg:border-b-0 lg:border-t-0 h-20 flex-shrink-0 border-grid" />
        </div>
        <div className="flex flex-row">
          <div className="xs:w-0 lg:w-24 xl:w-32 xs:border-0 xs:border-r-1 lg:border-1 lg:border-b-0 lg:border-t-0 flex-shrink-0  border-grid" />
          <div className="xs:w-0 md:w-16 lg:w-24 xl:w-40 xs:border-0 md:border-r-1 flex-shrink-0 border-grid" />
          <div className="w-full h-full flex sm:flex-row xs:flex-col">
            <div className="xs:w-full sm:w-20 h-fit relative flex xs:flex-row sm:flex-col">
              <div id="coursework-chooser" style={{ '--coursework-chooser-index': experienceIdx }} className="xs:invisible sm:visible duration-300" />
              {experiences.map((experience, idx) => (
                <div
                  key={experience.id || experience.name || `experience-${idx}`}
                  onClick={() => { setExperienceIdx(idx); changeSem(idx); }}
                  className="cursor-pointer xs:border-r-0 sm:border-r-1 border-b-1 border-grid xs:w-1/5 sm:w-20 xs:h-fit sm:h-20"
                >
                  <img
                    loading="lazy"
                    alt={`${experience.name || 'experience'} logo`}
                    width="160"
                    src={experience.image}
                  />
                </div>
              ))}
            </div>
            <div className="text-xl xs:text-center overflow-hidden md:text-left p-3 font-medium tracking-normal text-off-black">
              {experiences[experienceIdx].title}
              <a href={experiences[experienceIdx].link} target="blank_" className="text-[#7256ff] inline">
                {' '}
                @ 
                {' '}
                {experiences[experienceIdx].company}
                {' '}
              </a>
              <div className="mt-1 mb-4 text-off-black/70 text-sm">{experiences[experienceIdx].date}</div>
              {
                experiences[experienceIdx].description.map((description, i) => (
                  <div
                    key={`exp-desc-${i}`}
                    className="list-element my-2 text-off-black/70 text-base font-normal tracking-wide"
                  >
                    {description}
                  </div>
                ))
              }
            </div>
          </div>
          <div className="xs:w-0 xs:border-0 md:border-l-1 md:w-16 lg:w-24 xl:w-36 flex-shrink-0 border-grid" />
          <div className="xs:w-0 xs:border-r-1 xs:border-0 lg:border-1 lg:border-b-0 lg:border-t-0 lg:w-24 xl:w-32 flex-shrink-0 border-gray-500/40" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
