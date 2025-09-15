/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
const headshot = new URL('./images/portrait.jpg', import.meta.url).href;

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('typeAnimation');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const types = document.querySelectorAll('.typeDisappear');
    types.forEach((type) => observer.observe(type));

    return () => {
      types.forEach((type) => observer.unobserve(type));
    };
  }, []);

  
  return (
    <div className="bg-white-background px-32">
      {/* top border strip (matches About/Experience) */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />

      {/* header row with side blocks + bottom border */}
      <div className="w-full h-20 flex flex-row">
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
        <div className="relative w-full flex items-center px-10 text-3xl font-medium mx-auto border-b-[1px] border-grid">
          <div className="absolute -top-3 -left-3 w-3 h-3 border-r-1 border-b-1 border-off-black">
            <div className="absolute w-3 h-3 border-off-black border-t-1 border-l-1 -bottom-3 -right-3" />
          </div>
          <div id="home" className="group relative cursor-default w-fit overflow-hidden">
            Home
            <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
          </div>
        </div>
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
      </div>

      {/* main content row framed with left/right borders + bottom border */}
      <div className="flex flex-row text-off-black">
        <div className="w-20 flex-shrink-0 border-1 border-gray-500/40 border-t-0" />
        <div className="p-10 w-full border-b-1 border-grid">
          {/* your original hero content */}
          <div className="flex flex-row xs:px-0 lg:px-4 xl:px-10 xs:flex-col xs:pb-14 lg:gap-12 lg:flex-row lg:gap-12 max-w-6xl mx-auto">
            <div className="mt-8 z-10 xs:w-full lg:w-1/2 xs:justify-center lg:justify-start xs:text-center md:text-left ">
              <div className="text-off-black/80 relative tracking-wide xs:mx-auto lg:m-0 overflow-hidden text-lg xs:text-center lg:text-left">
                Hi! My name is
              </div>
              <div className="xs::mx-auto xs:w-fit lg:w-5/4 xs:text-8xl lg:text-7xl xl:text-8xl overflow-hidden xs:m-auto xs:text-center md:text-left animate-gradient relative bg-clip-text text-transparent bg-gradient-to-r from-[#25344F] via-[#617891] to-[#25344F] xs:my-6 font-medium tracking-normal">
                <div
                  style={{ '--shift': '500px', '--duration': '0.6s', '--delay': '0.9s' }}
                  className="typeAnimation absolute w-full h-full bg-zinc-900"
                />
                Charlotte Lew
              </div>
              <div
                style={{ '--delay': '1.4s', '--slideDuration': '0.2s' }}
                className="lg:w-1/2 text-off-black/80 slideAnimation xs:text-center lg:text-left translate-y-5 relative w-auto tracking-wide xs:mx-auto md:w-96 lg:m-0 lg:w-96"
              >
                I&apos;m a junior @ penn who loves using design and software to build thoughtful and accessible tech!
              </div>
              <div className="xs:mt-10 text-white-background flex flex-row w-fit xs:mx-auto lg:mx-0">
              </div>
            </div>

            <div className="lg:w-1/2 text-off-black/80 relative text-center w-fit h-fit items-center mx-auto mt-14">
              <img
                alt="profile"
                className="object-cover mx-auto lg:ml-12"

                width="400"
                height="400"
                src={headshot}
              />
              <div className="group-hover:top-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-r-[1px] border-r-white-background" />
              <div className="group-hover:right-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-t-[1px] border-t-white-background" />
              <div className="group-hover:left-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-b-[1px] border-b-white-background" />
              <div className="group-hover:bottom-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-l-[1px] border-l-white-background" />
            </div>
          </div>
        </div>
        <div className="w-20 flex-shrink-0 border-1 border-grid border-t-0 relative" />
      </div>
    </div>
  );
}

export default Home;
