/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const nokaicover = new URL('./images/nokaicover.jpg', import.meta.url).href;
const letter = new URL('./images/letter.png', import.meta.url).href;
const patp = new URL('./images/pathimages/patp.png', import.meta.url).href;
const pennstagram = new URL('./images/pennstagram.png', import.meta.url).href;

const featuredProjects = [
  {
    image_alt: 'Path@Penn Redesign',
    image_src: patp,
    title: 'Path@Penn Redesign',
    description: [
      'An intuitive redesign that simplifies the course search and registration for Penn students.',
    ],
    technologies: [],
    github: '/projects/patp',
    type: 'SPRING 2025 / PRODUCT DESIGN'
  },
  {
    image_alt: 'LetterBoxd Redesign',
    image_src: letter,
    title: 'LetterBoxd Redesign',
    description: [
      'Simplifying user flows and boosting engagement with friend-based features.',
    ],
    technologies: [],
    github: '/projects/letterboxd',
    type: 'SPRING 2025 / PRODUCT DESIGN'
  },
  {
    image_alt: 'Pennstagram',
    image_src: pennstagram,
    title: 'Pennstagram',
    description: [
      'A scalable social media platform built on the cloud.',
      'Users can register accounts, post with hashtags, join real-time chat channels. Personalized posts powered by distributed PageRank.',
    ],
    technologies: ['NodeJS', 'AWS', 'Apache Spark', 'Kafka', 'React'],
    type: 'SPRING 2025 / BACKEND'
  },
  {
    image_alt: 'NokAI',
    image_src: nokaicover,
    title: 'NokAI',
    description: [
      'A multilingual iOS app that streams audio, transcribes speech, and delivers translations. Includes user authentification, a friend system and call history.',
    ],
    technologies: ['SwiftUI', 'Agora SDK', 'Node.js', 'Websockets'],
    github: 'https://github.com/clew2027/NokAI2025',
    type: 'SUMMER 2025 / PRODUCT DESIGN & FULLSTACK'
  },
];

const portfolioProjects = [
  {
    title: 'PennDiningApp',
    link: 'https://github.com/clew2027/PennDiningApp',
    description:
      'An app to display all dining options @Penn. Built in Swift (SwiftUI, MapKit, WebKit, UserDefaults) and integrated a REST API to display dining hall hours and menus.',
    technologies: ['Swift'],
    type: 'FALL 2025 / PRODUCT DESIGN & FULLSTACK'
  },
  {
    title: 'Minesweeper',
    link: 'https://github.com/clew2027/Minesweeper',
    description:
      'A minesweeper game, which implemented recursion, 2D arrays, iterators, and JUnit testing.',
    technologies: ['Java'],
    type: 'SPRING 2024 / PROGRAMMING'
  },
  {
    title: 'Personal Website',
    link: 'https://github.com/clew2027/personal-website-main',
    description:
      'I created this website to experiment more with frontend technologies and showcase myself and my work.',
    technologies: ['JavaScript', 'React', 'Tailwind'],
    type: 'FALL 2025 / FRONTEND'
  },
];

const allProjects = [
  ...featuredProjects,
  ...portfolioProjects.map((project) => ({
    image_alt: project.title,
    image_src: '',
    title: project.title,
    description: [project.description],
    technologies: project.technologies,
    github: project.link,
  })),
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

  return (
    <div id="portfolio" className="bg-white-background px-32">
      {/* top border strip */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* title bar */}
      <div className="w-full h-20 flex flex-row">
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
        <div className="relative w-full flex items-center px-10 text-3xl font-medium mx-auto border-b-[1px] border-grid">
          <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
          <div
            style={{ '--shift': '250px', '--duration': '0.4s', '--delay': '0.1s' }}
            className="typeDisappear absolute w-full h-full bg-white-background z-10"
          />
          <div id="portfolio" className="group relative cursor-default w-fit overflow-hidden">
            <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
          </div>
        </div>
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
      </div>

      {/* projects section */}
      <div className="flex flex-row h-fit text-off-black">
        <div className="w-20 flex-shrink-0 border-1 border-gray-500/40 border-t-0" />
        <div className="flex flex-col flex-1 border-b-1 border-grid">
          <div className="p-4">
          <p className="text-m tracking-widest text-off-black/50 mb-2 ml-4">PROJECTS</p>
            <div
              id="project-cards"
              className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 w-full h-fit px-4 pb-6 mx-auto text-off-black"
            >
              {allProjects.map((project, idx) => (
                <a
                  key={`project-${project.title}-${idx}`}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card group relative flex flex-col overflow-hidden hover:opacity-90 transition-all duration-300"
                >
                  {project.image_src && (
                    <div className="w-full overflow-hidden">
                      <img
                        src={project.image_src}
                        alt={project.image_alt || project.title}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  <div className="flex flex-col mt-4 px-4 pb-6">
                    <div className="text-off-black font-medium text-lg mb-2">
                      {project.title}
                    </div>

                    <div className="text-off-black/70 text-base">
                      {project.description.map((desc, descIdx) => (
                        <p key={`${project.title}-desc-${descIdx}`}>{desc}</p>
                      ))}
                    </div>

                    <div className="mt-auto text-off-black/50 text-sm">
                      {project.technologies.map((tech, techIdx) => (
                        <span key={`${project.title}-tech-${techIdx}`} className="mr-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-20 flex-shrink-0 border-1 border-grid border-t-0 relative" />
      </div>
    </div>
  );
}

export default Portfolio;
