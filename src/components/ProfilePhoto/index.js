import React from 'react';
import './style.scss';
import Cv from '../../common/CvData';

const profile = require('../../media/profile.png');

const ProfilePhoto = () => (
  <section id="photo">
    <img src={profile} alt={`${Cv.first_name} ${Cv.last_name}`} />
  </section>
);

export default ProfilePhoto;
