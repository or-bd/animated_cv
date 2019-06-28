import React from 'react';
import './style.scss';
import { first_name, last_name } from '../../common/config';

const profile = require('../../media/profile.png');

const ProfilePhoto = () => (
  <section id="photo">
    <img src={profile} alt={`${first_name} ${last_name}`} />
  </section>
);

export default ProfilePhoto;
