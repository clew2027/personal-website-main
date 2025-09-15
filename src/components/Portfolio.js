/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import GithubIcon from './GithubIcon';
const nokaicover = new URL('./images/nokaicover.jpg', import.meta.url).href;
const letter = new URL('./images/letter.png', import.meta.url).href;
const patp = new URL('./images/pathimages/patp.png', import.meta.url).href;
const pennstagram = new URL('./images/pennstagram.png', import.meta.url).href;

import { Link } from 'react-router-dom';




const featuredProjects = [
  {
    image_alt: 'Path@Penn Redesign',
    image_src: patp,
    title: 'Path@Penn Redesign',
    description: [
     'An intuitive redesign that simplifies the course search and registration for Penn students'
    ],
    technologies: [],

    position: 'right',

    github: '/projects/patp',
  },
  {
    image_alt: 'letterboxed',
    image_src: letter,
    title: 'LetterBoxd Redesign',
    description: [

      'Simplifying user flows and boosting engagement with friend-based features.'
    ],
    technologies: [],
    position: 'left',
    github: '/projects/letterboxd',
  },
  {
    image_alt: 'Pennstagram',
    image_src: pennstagram,
    title: 'Pennstagram',
    description: [
      'A scalable social media platform built on the cloud.',
      'Users can register accounts, post with hashtags, join real-time chat channels. Personalized posts powered by distributed PageRank.',
    ],
    technologies: ['React', 'NodeJS', 'AWS EC2', 'Apache Spark', 'DynamoDB', 'Kafka'],
    position: 'right',
  },
  {
    image_alt: 'NokAI',
    image_src:  nokaicover,
    title: 'NokAI',
    description: [
      'A multilingual iOS app that streams audio, transcribes speech, and delivers translations. Includes user authentification, a friend system and call history.'
    ],
    technologies: ['SwiftUI', 'Agora SDK', 'Node.js', 'Websockets'],
    position: 'left',
    github: 'https://github.com/clew2027/NokAI2025',
  },
];

const portfolioProjects = [
  {
    title: 'Minesweeper',
    link: 'https://github.com/clew2027/Minesweeper',
    description: 'A minesweeper game, which implemented recursion, 2D arrays, iterators, and JUnit testing',
    technologies: ['Java'],
  },
  {
    title: 'Personal Website',
    link: 'https://https://github.com/clew2027/personal-website-main',
    description: 'I created this website to experiment more with frontend technologies and showcase myself and my work',
    technologies: ['JavaScript', 'React', 'Tailwind'],
  },
];

function Portfolio() {
  useEffect(() => {
    const highlight = (elements, clientX, clientY) => {
      Array.from(elements).forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const container = document.getElementById('project-cards');
    if (container) {
      container.onmousemove = (e) => {
        highlight(document.getElementsByClassName('project-card'), e.clientX, e.clientY);
      };
    }
  }, []);

  const designProjects = featuredProjects.slice(0, 2);
  const programmingProjects = featuredProjects.slice(2, 4); // 3 items

  return (
    <div className="bg-white-background px-32">
      <div className="h-fit border-l-1 border-r-1 border-t-1 border-grid">
        <div id="portfolio" className="w-1 h-1" />
        <div className="w-full h-5 border-b-1 border-grid" />

        {/* Section Title */}
        <div className="relative text-3xl h-20 w-full flex items-center px-10 font-medium mx-auto border-b-1 border-grid">
          <div className="absolute -top-3 -right-[1px] w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
          <div className="group relative cursor-default w-fit overflow-hidden">
            <div
              style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }}
              className="typeDisappear absolute w-full h-full bg-white-background z-10"
            />
            Portfolio
            <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
          </div>
        </div>

        {/* DESIGN (2 projects) */}
<div className="p-4 border-b-1 border-grid">
  <h3 className="text-2xl font-medium tracking-wide mb-3">Design</h3>

  {/* 1 col on mobile, 3 cols on lg; first card spans 2 cols (2/3), second spans 1 (1/3) */}
  <div className="grid grid-cols-1 lg:grid-cols-10 gap-3">
    {designProjects.map((project, i) => (
      <div
        key={`design-${project.title ?? 'untitled'}-${i}`}
        className={`relative group rounded-lg border-1 overflow-hidden border-grid project-card ${
          i === 0 ? 'lg:col-span-6' : 'lg:col-span-4'
        }`}
      >
        <img
          loading="lazy"
          alt={project?.image_alt || project?.title || 'Design project image'}
          src={project?.image_src}
          style={{ '--delay': '0.5s', '--slideDuration': '0.5s' }}
          className="rounded-lg z-40 w-full h-full object-cover"
        />

        <div className="group-hover:right-0 p-3 duration-150 bg-white top-0 ease-in-out rounded-lg
                        xs:-right-full xs:w-full sm:-right-[70%] sm:w-[70%] md:-right-[55%] md:w-[55%]
                        lg:-right-[50%] lg:w-[50%] xl:-right-[45%] xl:w-[45%]
                        h-full z-20 absolute border-grid border-1 border-r-0">
          <div className="xs:text-base md:text-lg lg:text-base xl:text-lg text-off-black font-medium w-fit mx-auto mb-2">
            {project?.title}
          </div>

          {/* fixed typo: lg:text-s → lg:text-xs */}
          <div className="xs:text-xs sm:text-sm lg:text-xs xl:text-sm text-off-black/70">
            {(project?.description ?? []).map((d, j) => (
              <div key={`design-desc-${i}-${j}`} className="mb-1">
                {d}
              </div>
            ))}
          </div>

          <div className="group flex flex-row flex-wrap mt-2">
            {(project?.technologies ?? []).map((t, j) => (
              <div
                key={`design-tech-${i}-${t}-${j}`}
                className="bg-[#617891] xs:text-xs lg:text-[11px] xl:text-xs mr-1 mb-1 rounded-3xl py-1 px-2 text-[#f4f3f1]"
              >
                {t}
              </div>
            ))}
          </div>

          {!!project?.github && (
            
            <Link to={project.github} className="underline underline-offset-4">
            View Project
          </Link>
          )}
        </div>
      </div>
    ))}
  </div>
</div>


        {/* PROGRAMMING (3 projects) */}
        <div className="p-4">
          <h3 className="text-2xl font-medium tracking-wide mb-3">Programming</h3>
          <div
            id="project-cards"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 w-full h-fit mx-auto text-off-black"
          >
            <div className="absolute -top-[11px] -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
              <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3 z-20" />
            </div>

            {programmingProjects.map((project, i) => (
              <div
                key={`prog-${project.title}-${i}`}
                className="relative group rounded-lg border-1 overflow-hidden border-grid project-card"
              >
                <img
                  loading="lazy"
                  alt={project.image_alt || project.title}
                  src={project.image_src}
                  style={{ '--delay': '0.5s', '--slideDuration': '0.5s' }}
                  className="rounded-lg z-40 w-full h-full object-cover"
                />
                <div className="group-hover:right-0 p-3 duration-150 bg-white top-0 ease-in-out rounded-lg
                                xs:-right-full xs:w-full sm:-right-[75%] sm:w-[75%] md:-right-[60%] md:w-[60%]
                                lg:-right-[55%] lg:w-[55%] xl:-right-[50%] xl:w-[50%]
                                h-full z-20 absolute border-grid border-1 border-r-0">
                  <div className="xs:text-base md:text-lg lg:text-base xl:text-lg text-off-black font-medium w-fit mx-auto mb-1">
                    {project.title}
                  </div>
                  <div className="xs:text-xs sm:text-sm md:text-xs xl:text-sm text-off-black/70">
                    {project.description.map((d, j) => (
                      <div key={`prog-desc-${i}-${j}`} className="mb-1">
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="group flex flex-row flex-wrap mt-2">
                    {project.technologies.map((t, j) => (
                      <div
                        key={`prog-tech-${i}-${t}-${j}`}
                        className="bg-[#617891] text-xs mr-1 mb-1 rounded-3xl py-1 px-2 text-[#f4f3f1]"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  {project?.github && (
                    <a
                      href={project.github}
                      className="w-fit h-fit z-30 ml-auto mt-2 hover:text-secondary-violet"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Project Folder"
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}

          </div>


          <div
            id="project-cards"
            className="relative grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full h-fit mx-auto text-off-black"
          >
            <div className="absolute -top-[11px] -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
              <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3 z-20" />
            </div>

            {portfolioProjects.map((project, idx) => (
              <PortfolioCard
                key={`portfolio-card-${project.title}-${idx}`}
                index={idx}
                title={project.title}
                link={project.link}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
