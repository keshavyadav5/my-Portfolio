import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const ProgreshBar = () => {
  return (
    <div>
      <p>React.js</p>
      <ProgressBar completed={90} maxCompleted={100} className='mb-2' />
      <p>Tailwind CSS</p>
      <ProgressBar completed={85} maxCompleted={100} className='mb-2' />
      <p>JavaScript</p>
      <ProgressBar completed={80} maxCompleted={100} className='mb-2' />
      <p>Node & Express</p>
      <ProgressBar completed={85} maxCompleted={100} className='mb-2' />
      <p>MogoDB</p>
      <ProgressBar completed={80} maxCompleted={100} className='mb-2' />
    </div>
  );
}

export default ProgreshBar;
