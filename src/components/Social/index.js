import React, { useState } from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import Cv from '../../common/CvData';
import './style.scss';

const Social = () => {
  const [nets] = useState(Cv.social);

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
