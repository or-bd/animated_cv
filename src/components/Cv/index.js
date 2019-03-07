import React from 'react';
import { isMobile } from '../../common/Helper';
import './style.scss';

import Me from '../Me';
import Contact from '../Contact';
import Social from '../Social';
import Skills from '../Skills';
import MyApps from '../MyApps';
import ProfilePhoto from '../ProfilePhoto';
import Paragraphs from '../Paragraphs';

const Cv = () => {
  const isMobileDevice = isMobile();

  const contactAndSocial = (
    <React.Fragment>
      <Contact />
      <Social />
    </React.Fragment>
  );

  return (
    <div id="cv-container">
      <aside>
        <ProfilePhoto />
        <Me />
        {isMobileDevice ? '' : contactAndSocial}
      </aside>
      <main>
        <Skills />
        <Paragraphs />
        <MyApps />
        {isMobileDevice ? contactAndSocial : ''}
      </main>
    </div>
  );
};

export default Cv;
