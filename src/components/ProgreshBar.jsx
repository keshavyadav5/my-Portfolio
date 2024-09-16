import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const ProgreshBar = () => {
  return (
    <div>
      <p>HTML</p>
      <ProgressBar completed={90} maxCompleted={100} className='mb-2' />
      <p>CSS</p>
      <ProgressBar completed={85} maxCompleted={100} className='mb-2' />
      <p>JavaScript</p>
      <ProgressBar completed={80} maxCompleted={100} className='mb-2' />
      <p>React</p>
      <ProgressBar completed={90} maxCompleted={100} className='mb-2' />
      <p>Node,Express,MogoDB</p>
      <ProgressBar completed={80} maxCompleted={100} className='mb-2' />
    </div>
  );
}

export default ProgreshBar;
