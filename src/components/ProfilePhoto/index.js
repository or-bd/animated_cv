import React from 'react';
import './style.scss';

const profile = require('../../media/profile.png');

const ProfilePhoto = () => (
  <section id="photo">
    <img src={profile} alt="Or Ben Dahan" title="Or Ben Dahan" />
  </section>
);

export default ProfilePhoto;
