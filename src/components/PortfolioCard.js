import React from 'react';
import GithubIcon from './GithubIcon';

function PortfolioCard({
  index, title, description, technologies, link, type
}) {
  return (
    <div
      className={`
        border-grid border-t-1 project-card p-6 cursor-default group
        hover:scale-100 duration-200 overflow-hidden relative w-full h-full rounded-md
        ${index === 1 || index === 2 ? 'lg:border-l-1' : ''}
      `}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <div className="text-off-black font-medium text-lg">↳ {title}</div>
        <div className="text-off-black/70 text-sm md:ml-4">{type}</div>
      </div>
      <div className="relative w-full h-48 mb-4 rounded-lg">
        {/* Placeholder for the image */}
        <img
          src="/path/to/image.jpg" // Replace with the actual image path
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="text-off-black/70 text-base mb-2">{description}</div>
      <div className="text-off-black/50 text-sm mb-2">
        {technologies.map((technology) => (
          <span key={technology} className="mr-2">
            {technology}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          className="text-secondary-violet underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default PortfolioCard;
