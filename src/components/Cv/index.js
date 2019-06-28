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

const isMobileDevice = isMobile();

const Cv = () => {
  const GetContactAndSocial = () => (
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
        {isMobileDevice ? '' : <GetContactAndSocial />}
      </aside>
      <main>
        <Skills />
        <Paragraphs />
        <MyApps />
        {isMobileDevice ? <GetContactAndSocial /> : ''}
      </main>
    </div>
  );
};

export default Cv;
