import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(project.url);
  }

  return (
    <div className='relative cursor-pointer w-full rounded-sm overflow-hidden shadow-md hover:shadow-2xl hover:scale-y-105 transition-all duration-300'>
      <img
        src={project.image}
        alt={project.name}
        className='w-full md:w-full md:h-48 transition-transform duration-300'
      />
      <Link to={project.url} target='__blank'>
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-transparent hover:bg-[#01a2e6] opacity-0 hover:opacity-100 transition-opacity duration-300'>
          <span className='text-white sm:text-xl text-sm font-bold mb-2 bg-transparent'>{project.name}</span>
          <p className='text-white text-xs sm:text-sm text-center bg-transparent'>{project.description}</p>
          <p className='bg-transparent underline my-1 text-pink-600'>Click me</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
