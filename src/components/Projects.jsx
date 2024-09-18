import React from 'react';
import { projectJson } from '../project.js';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <div className='w-full flex flex-col my-10 gap-16 text-black dark:text-white' id='projects'>
      <div>
        <h1 className='text-4xl md:text-6xl font-bold'>
          pro<span className='text-[#01a2e6] underline'>J</span>ects
        </h1>
      </div>

      <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5'>
        {
          projectJson.map((project) => {
            return <ProjectCard key={project.id} project={project} />
          })
        }
      </div>
    </div>
  );
};

export default Projects;
