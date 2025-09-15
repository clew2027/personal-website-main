import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Overlay from './components/Overlay';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import PatpProjectPage from './components/path/PatpProjectPage';
import LetterProjectPage from './components/letterboxd/LetterProjectPage';
import './index.css';

function IntroAnimation() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 1200); // match your CSS timing
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;
  return (
    <>
      <div className="intro-textAnimation w-0 overflow-hidden ml-[50vw] mt-[30vh] font-medium text-8xl fixed z-50">
        Charlotte
      </div>
      <div className="intro-dotAnimation w-full h-full z-50 fixed overflow-hidden">
        <div className="intro-slashAnimation w-full fixed h-full bg-black z-40" />
      </div>
      <div className="intro-mask fixed w-full h-full bg-white-background z-40" />
    </>
  );
}

function AppBody({ sidebar, setSidebar }) {
  const { pathname } = useLocation();
  const onProject = pathname.startsWith('/projects/'); // any project detail route

  // If you don't want the global sidebar on project pages:
  const showOverlay = !onProject;

  return (
    <>
      {showOverlay && <Overlay sidebar={sidebar} setSidebar={setSidebar} />}
      <div className="intro-textAnimation w-0 overflow-hidden ml-[50vw] mt-[30vh] font-medium text-8xl fixed z-50"> Charlotte </div> <div className="intro-dotAnimation w-full h-full z-50 fixed overflow-hidden"> <div className="intro-slashAnimation w-full fixed h-full bg-black z-40" /> </div> <div className="intro-mask fixed w-full h-full bg-white-background z-40" />
      <div
        id="body"
        className={`${showOverlay && sidebar ? 'translate-x-[26vw]' : ''} font-custom duration-500`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home" className="w-1 h-1 absolute" />
                <Home />
                <About />
                <Skills />
                <Portfolio />
                <Contact />
              </>
            }
          />

          {/* Path@Penn project page */}
          <Route path="/projects/patp/top" element={<PatpProjectPage />} />
          <Route path="/projects/letterboxd/top" element={<LetterProjectPage />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Router>
      <AppBody sidebar={sidebar} setSidebar={setSidebar} />
    </Router>
  );
}
