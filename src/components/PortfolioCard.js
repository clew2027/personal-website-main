import React from 'react';
import GithubIcon from './GithubIcon';

function PortfolioCard({
  index, title, description, technologies, link,
}) {
  return (
    <div className={` ${index % 4 === 0 ? '' : 'lg:border-l-1'} ${index % 2 === 1 ? 'md:border-l-1' : ''} ${index === 7 ? 'lg:border-r-1 xl:border-r-0' : ''} ${index === 3 || index === 6 ? 'lg:border-l-0 xl:border-l-1' : ''} ${index === 4 ? 'lg:border-l-1 xl:border-l-0' : ''} ${index === 5 ? 'lg:border-b-1 xl:border-b-0' : ''} border-grid border-t-1 project-card p-6 cursor-default group hover:scale-100 duration-200 overflow-hidden relative w-full h-full`}>
      <div className="font-medium text-xl tracking-wide mt-5 group-hover:text-secondary-violet">
        {title}
      </div>
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
