import React, { useState, useEffect } from 'react';
import { getRandomColorClassesFactory } from './colors'
import './logo.scss';

const DELAY = 2750;
const getRandomColorClasses = getRandomColorClassesFactory(16);

export default function Logo(props) {

  const [state, setState] = useState({
    triangleElementColorClasses: getRandomColorClasses()
  });

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setState({ triangleElementColorClasses: getRandomColorClasses() });
    }, DELAY);

    return () => {
      clearTimeout(intervalId)
    };
  });

  return (
    <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 500">
      <polygon points="150,0 0,120 0,330 150,500" fill="#CDC9C9" />
      <polygon points="150,0 300,120 300,330 150,500" fill="#D8D8D8" />
      <polygon points="140,370 55,300 55,150" className={state.triangleElementColorClasses[0] + ' triangle-element'} />
      <polygon points="55,150 140,100 140,370" className={state.triangleElementColorClasses[1] + ' triangle-element'} />
      <polygon points="45,298 140,390 140,475" className={state.triangleElementColorClasses[2] + ' triangle-element'} />
      <polygon points="10,125 140,20 140,80" className={state.triangleElementColorClasses[3] + ' triangle-element'} />
      <polygon points="45,298 140,475 10,330" className={state.triangleElementColorClasses[4] + ' triangle-element'} />
      <polygon points="10,125 140,80 45,148" className={state.triangleElementColorClasses[5] + ' triangle-element'} />
      <polygon points="45,148 45,298 10,330" className={state.triangleElementColorClasses[6] + ' triangle-element'} />
      <polygon points="10,330 10,125 45,148" className={state.triangleElementColorClasses[7] + ' triangle-element'} />
      <polygon points="160,475 160,20 205,55" className={state.triangleElementColorClasses[8] + ' triangle-element'} />
      <polygon points="256,149 234,135 235,80" className={state.triangleElementColorClasses[9] + ' triangle-element'} />
      <polygon points="160,475 205,55 205,350" className={state.triangleElementColorClasses[10] + ' triangle-element'} />
      <polygon points="256,149 235,80 290,125" className={state.triangleElementColorClasses[11] + ' triangle-element'} />
      <polygon points="290,330 160,475 205,350" className={state.triangleElementColorClasses[12] + ' triangle-element'} />
      <polygon points="256,299 256,149 290,125" className={state.triangleElementColorClasses[13] + ' triangle-element'} />
      <polygon points="290,330 205,350 256,299" className={state.triangleElementColorClasses[14] + ' triangle-element'} />
      <polygon points="256,299 290,125 290,330" className={state.triangleElementColorClasses[15] + ' triangle-element'} />
    </svg>
  );
}