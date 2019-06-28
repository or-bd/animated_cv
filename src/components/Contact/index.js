import React from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import Cv from '../../common/CvData';
import './style.scss';

const Contact = () => (
  <AnimatedBox id="contact" title="Contact">
    <span className="text-machine">
      <i className="fas fa-at" />
      {Cv.email}
    </span>
  </AnimatedBox>
);

export default Contact;
