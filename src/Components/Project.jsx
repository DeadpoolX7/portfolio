import React from 'react';
import { projects } from '../data/projects_data';
import { techStack } from '../data/TechStack';

export default function Project() {
  const scrollLeft = () => {
    document.getElementById('content').scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    document.getElementById('content').scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <section id="Projects" className="min-h-screen bg-gray-800 flex flex-col overflow-x-hidden py-12 border-sky-600 border-y-2">
      <h1 className="text-4xl text-white text-center mb-8 underline ">Projects</h1>
      <div className="relative w-full">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          &lt;
        </button>
        <div id="content" className="flex overflow-x-scroll no-scrollbar scroll-smooth space-x-4 px-8">
        {projects.map((project, index) => (
  <div key={index} className="flex-shrink-0 w-64 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-md p-4 border border-white border-opacity-30">
    <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
    <h2 className="text-xl font-bold mb-2 text-center underline shadow-md">{project.title}</h2>
    <p className=" mb-4 text-white text-center selection:bg-amber-600">{project.subtitle}</p>
    <div className="flex justify-between">
      <a href={project.website} target='_blank' className="cursor-pointer text-blue-500 hover:underline text-lg font-semibold">Website</a>
      <a href={project.github_repo} target='_blank' className="cursor-pointer text-blue-500 hover:underline text-lg font-semibold">GitHub</a>
    </div>
  </div>
))}

        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          &gt;
        </button>
      </div>
    </section>

    <section id="TechStack" className="h-max bg-stone-800 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-white ">Tech Stack</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="relative group flex flex-col items-center">
            <img src={tech.image} alt={tech.name} className="w-16 h-16 object-contain" />
            <div className="absolute bottom-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md">
                {tech.name}
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
