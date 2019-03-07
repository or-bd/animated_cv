import React from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import { first_name, last_name, position } from '../../common/config';
import './style.scss';

const Me = () => (
  <AnimatedBox id="me" title="Me">
    <span id="first-name">{first_name}</span>
    <span id="last-name">{last_name}</span>
    <span id="position">{position}</span>
  </AnimatedBox>
);

export default Me;
