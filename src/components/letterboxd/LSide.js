import React from 'react';
import { Link } from 'react-router-dom';

function LSide() {
  return (
    <>
      {/* Left rail: name + links */}
      <nav className="fixed left-6 top-1/4 -translate-y-1/2 z-40 flex flex-col gap-4 text-off-black/80">

        <Link to="/" className="text-lg font-medium hover:underline">Charlotte <br /> Lew</Link>


        {/* Anchor links — update IDs below to match your sections */}
        <a href="#intro" className="text-off-black/60 hover:text-off-black duration-200">Introduction</a>
        <a href="#research" className="text-off-black/60 hover:text-off-black duration-200">The User Journey</a>
        <a href="#problem" className="text-off-black/60 hover:text-off-black duration-200">Problem Definition</a>
        <a href="#solution" className="text-off-black/60 hover:text-off-black duration-200">Solution</a>
        <a href="#results" className="text-off-black/60 hover:text-off-black duration-200">Results</a>
        <a href="#whatilearned" className="text-off-black/60 hover:text-off-black duration-200">What I Learned</a>

      </nav>
    </>
  );
}

export default LSide;
