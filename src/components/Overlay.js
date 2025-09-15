import React from 'react';

function Overlay() {
  return (
    <>
      {/* Left rail: name + links */}
      <nav className="fixed left-6 top-1/4 -translate-y-1/2 z-40 flex flex-col gap-4 text-off-black/80">
        <a href="#home" className="mb-2 font-medium tracking-wide">Charlotte <br /> 
        Lew</a>

        {/* Anchor links — update IDs below to match your sections */}
        <a href="#about" className="text-off-black/60 hover:text-off-black duration-200">About</a>
        <a href="#skills" className="text-off-black/60 hover:text-off-black duration-200">Skills</a>
        <a href="#portfolio" className="text-off-black/60 hover:text-off-black duration-200">Projects</a>
        <a href="#contact" className="text-off-black/60 hover:text-off-black duration-200">Contact</a>
      </nav>
    </>
  );
}

export default Overlay;
