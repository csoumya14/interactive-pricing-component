import React from 'react';
import { Div, Img } from './TopBackground.css';
import circularPatterns from '../../assets/pattern-circles.svg';

const TopBackground = () => {
  return (
    <Div>
      <Img src={circularPatterns} alt="" />
    </Div>
  );
};

export default TopBackground;
