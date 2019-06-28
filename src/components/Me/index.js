import React from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import Cv from '../../common/CvData';
import './style.scss';

const Me = () => (
  <AnimatedBox id="me" title="Me">
    <span id="first-name">{Cv.first_name}</span>
    <span id="last-name">{Cv.last_name}</span>
    <span id="position">{Cv.position}</span>
  </AnimatedBox>
);

export default Me;
