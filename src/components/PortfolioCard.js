import React from 'react';
import GithubIcon from './GithubIcon';

function PortfolioCard({
  index, title, description, technologies, link,
}) {
  return (
    <div
  className={`
    border-grid border-t-1 project-card p-6 cursor-default group
    hover:scale-100 duration-200 overflow-hidden relative w-full h-full
    ${index === 1 || index === 2 ? 'lg:border-l-1' : ''}
  `}
>
      <a 
        href={link}
        className="font-medium text-xl tracking-wide mt-5 group-hover:text-secondary-violet"
      >
        {title}
      </a>
      <div className="text-off-black/70 text-base mt-2">
        {description}
      </div>
      <div className="mt-4 text-sm text-off-black/50">
        {
          technologies.map((technology, index) => (
            <span key={technology} className="mr-2">
              {technology}
            </span>
          ))
        }
      </div>

      <div className="flex">
        {
        link && (
          <a href={link} className="w-fit h-fit z-30 ml-auto mt-2 hover:text-secondary-violet" aria-label="GitHub" target="_blank" rel="noreferrer" cursorshover="true">
            <GithubIcon />
          </a>
        )
      }
      </div>
    </div>
  );
}

export default PortfolioCard;
