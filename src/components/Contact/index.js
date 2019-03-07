import React from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import { email } from '../../common/config';
import './style.scss';

const Contact = () => (
  <AnimatedBox id="contact" title="Contact">
    <span className="text-machine">
      <i className="fas fa-at" />
      {email}
    </span>
  </AnimatedBox>
);

export default Contact;
