import React from 'react';
import { Button } from './ui/button';
import ProgreshBar from './ProgreshBar';
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa6";
import { FaReact, FaNode } from "react-icons/fa";
import myCv from '../assets/keshavKumarYadav.pdf';

const About = () => {
  return (
    <div className='my-32 text-black dark:text-white w-full flex items-center' id='about'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          ab<span className='text-[#01a2e6] underline'>O</span>ut
        </h1>
        <div className='flex rounded-md p-2 flex-col dark:rounded-none dark:p-0 md:flex-row gap-2 mt-2 shadow-2xl py-2 items-center justify-center h-full '>
          <div className='flex-1'>
            <div className='text-xs md:text-sm'>
              I am a web developer pursuing a Bachelor's in Computer Science at Lovely Professional University (2022-2026). Skilled in HTML, CSS, JavaScript, React.js, and Node.js, I enjoy building responsive, user-friendly websites. With a focus on learning and growth, I strive to deliver clean code and effective solutions while working in collaborative environments.
            </div>
            <div className='btn-cont'>
              <a href={myCv} download="KeshavYadav_CV.pdf">
                <Button variant='blue' className='my-4 btn shadow-lg'>Download CV</Button>
              </a>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <ProgreshBar />
          </div>
        </div>
        <div className='flex flex-col gap-5 w-full h-full'>
          <div >
            <h2 className='text-3xl font-bold'>Skills</h2>
          </div>
          <div className='flex items-center w-full justify-between'>
            <FaHtml5 className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaCss3 className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaJs className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaReact className='text-4xl md:text-5xl text-[#01a2e6]' />
            <FaNode className='text-4xl md:text-5xl text-[#01a2e6]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
