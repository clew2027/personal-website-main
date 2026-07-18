/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
const headshot = new URL('./images/c.jpg', import.meta.url).href;

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
      {/* top border strip */}
      <div className="w-full h-5 border-1 border-t-0 border-grid" />
  
      {/* header row */}
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
          <div id="home" className="group relative cursor-default w-fit overflow-hidden">
            <div className="group-hover:left-0 bottom-[1px] duration-150 absolute w-full h-[2px] bg-off-black -left-full" />
          </div>
        </div>
        <div className="w-20 h-20 flex-shrink-0 border-1 border-t-0 border-grid" />
      </div>
  
      {/* main framed content (matches About structure) */}
      <div className="flex flex-row h-fit text-off-black">
        {/* left border */}
        <div className="w-20 flex-shrink-0 border-1 border-gray-500/40 border-t-0" />
  
        {/* main hero content */}
        <div className="p-10 flex xs:flex-col lg:flex-row gap-12 border-b-1 border-grid w-full">
          {/* Text column */}
          <div className="mt-8 z-10 xs:w-full lg:w-1/2 xs:text-center lg:text-left">
            <div className="text-off-black/80 tracking-wide text-lg mb-3">
              Hi! My name is
            </div>
            <div className="text-7xl xl:text-8xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#25344F] via-[#617891] to-[#25344F] my-6 tracking-normal relative">
              <div
                style={{ '--shift': '500px', '--duration': '0.6s', '--delay': '0.9s' }}
                className="typeAnimation absolute w-full h-full bg-zinc-900"
              />
              Charlotte Lew
            </div>
            <div
              style={{ '--delay': '1.4s', '--slideDuration': '0.2s' }}
              className="text-off-black/80 slideAnimation tracking-wide max-w-md"
            >
              I&apos;m a senior @ Penn who loves challenging engineering problems and building fun products.
            </div>
          </div>
  
          {/* Image column */}
          

      <div
            id="am-picture"
            className="group relative xs:w-2/3 lg:w-1/2 h-fit m-auto"
          >
            <img loading="lazy" alt="headshot" width="500"
            height="500" src={headshot} />
            
            <div className="group-hover:top-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-r-[1px] border-r-black" />
            <div className="group-hover:right-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -top-5 -right-5 w-20 h-20 border-t-[1px] border-t-black" />
            <div className="group-hover:left-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-b-[1px] border-b-black" />
            <div className="group-hover:bottom-[calc(100%-80px+20px)] duration-300 ease-in-out absolute -bottom-5 -left-5 w-20 h-20 border-l-[1px] border-l-black" />
          </div>
        </div>
  
        {/* right border */}
        <div className="w-20 flex-shrink-0 border-1 border-grid border-t-0 relative" />
      </div>
    </div>
  );
  
}

export default Home;
