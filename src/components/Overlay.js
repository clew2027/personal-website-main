import React from 'react';

function Overlay() {
  return (
    <>
      {/* Left rail: name + links */}
      <nav className="fixed left-5 top-1/4 -translate-y-1/2 z-40 flex flex-col gap-4 text-off-black/80">
        <a href="#home" className="mb-2 font-xs tracking-medium">CHARLOTTE <br /> 
        LEW</a>

        <a
          href="#portfolio"
          className="text-sm tracking-widest text-off-black/50 mb-2 cursor-pointer no-underline transition-colors duration-200 hover:text-off-black"
        >
          PROJECTS
        </a>
        <a
          href="#about"
          className="text-sm tracking-widest text-off-black/50 mb-2 cursor-pointer no-underline transition-colors duration-200 hover:text-off-black"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="text-sm tracking-widest text-off-black/50 mb-2 cursor-pointer no-underline transition-colors duration-200 hover:text-off-black"
        >
          SKILLS
        </a>
        <a
          href="#contact"
          className="text-sm tracking-widest text-off-black/50 mb-2 cursor-pointer no-underline transition-colors duration-200 hover:text-off-black"
        >
          CONTACT
        </a>

        </nav>
    </>
  );
}

export default Overlay;
