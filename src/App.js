import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Overlay from './components/Overlay';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import PatpProjectPage from './components/path/PatpProjectPage';
import LetterProjectPage from './components/letterboxd/LetterProjectPage';

import ScrollToTop from './components/ScrollToTop'; // ensure this file exists

function AppBody({ sidebar, setSidebar }) {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith('/projects/');

  return (
    <>
      {/* Sidebar is NOT rendered on project pages */}
      {!hideSidebar && <Overlay sidebar={sidebar} setSidebar={setSidebar} />}

      <div
        id="body"
        className={`${sidebar && !hideSidebar ? 'translate-x-[26vw]' : ''} font-custom duration-500`}
      >
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home" className="w-1 h-1 absolute" />
                <Home />
                <About />
                <Skills />
                <Experience />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/projects/patp" element={<PatpProjectPage />} />
          <Route path="/projects/letterboxd" element={<LetterProjectPage />} />
          <Route path="*" element={<div className="p-8">Not Found</div>} />
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
