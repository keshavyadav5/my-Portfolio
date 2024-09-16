import React, { useState } from 'react';
import { Button } from './ui/button';
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <div className="flex-grow bg-[#313743] p-8 rounded-lg shadow-2xl items-center gap-5 flex flex-col relative z-30 min-h-[400px] flex-1">
      <div className="w-20 h-20 overflow-hidden rounded-full">
        <img src={service.image} alt="Web Development" className="object-cover w-full h-full" />
      </div>
      <div className="text-center bg-transparent flex-1">
        <h2 className="text-2xl bg-transparent font-bold text-white mb-2">{service.name}</h2>
        <p className="text-sm bg-transparent text-gray-300 mb-4">
          {service.description}
        </p>
        <Button variant="blue" className="btn px-4 py-2 rounded-md" onClick={handleChange}>
          Read More
        </Button>
      </div>
      {show && (
        <div className="absolute flex-1 z-50 top-0 left-0 w-full h-full bg-[#071d28] p-4 py-6 flex flex-col justify-between">
          <div className="bg-transparent flex items-center justify-between text-2xl font-bold">
            <h1 className="bg-transparent">{service.name}</h1>
            <div className="cursor-pointer hover:scale-110 hover:text-red-50" onClick={handleChange}>
              <MdCancel />
            </div>
          </div>
          <div className='bg-transparent'>
            <div className='text-xl py-2 font-bold flex text-[#01a2e6]'>
              Project Name: <p className='text-white px-2 font-normal'>{service.project.name}</p>
            </div>
            <p className='text-sm mb-2 font-serif'>
              {service.project.describtion}
            </p>
            <p>
              View the source code <Link to={service.project.link} target='_blank' className='text-xs text-blue-500 underline'>here</Link>.
            </p>
          </div>
          <div>
            <Button variant='blue' className='btn' onClick={handleChange}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
