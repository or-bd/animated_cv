import React, { useState } from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import { social as networks } from '../../common/config';
import './style.scss';

const Social = () => {
  const [nets] = useState(networks);

  const visitSocialPage = (link) => {
    setTimeout(() => {
      window.open(link, '_blank');
    }, 400);
  };

  return (
    <AnimatedBox id="social" title="Social">
      <div id="platform-container">
        {nets.map(social => (
          <i key={social.id} className={social.class} onClick={() => visitSocialPage(social.link)} />
        ))}
      </div>
    </AnimatedBox>
  );
};

export default Social;
