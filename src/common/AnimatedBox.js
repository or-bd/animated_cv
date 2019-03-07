import React, { useState, useEffect, useRef } from 'react';
import { isMobile } from './Helper';

const AnimatedBox = ({ id, title, children }) => {
  const [titleClass, setTitleClass] = useState('');
  const [visibilityClass, setVisibilityClass] = useState('focused');
  const isMobileDevice = isMobile();
  const boxRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(setVisibility, 300);
    return () => { // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, []);

  const setRandomTitleAnimation = (isVisible) => {
    const newTitleClass = 'visible';
    const random = isMobileDevice ? 0 : (Math.random() * 1000);
    if (isVisible && newTitleClass !== titleClass) {
      setTimeout(() => setTitleClass(newTitleClass), random);
    } else if (!isVisible) {
      setTitleClass('');
    }
  };

  const setVisibility = () => {
    let newVisibilityClass = 'no-focus';
    const windowHeight = window.innerHeight;
    const scrolled = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    const componentHeight = boxRef.current.getBoundingClientRect().height;
    const componentPosition = boxRef.current.offsetTop;

    if ((componentPosition + (componentHeight * 0.3)) < windowHeight + scrolled) {
      if (componentHeight + componentPosition > scrolled + componentHeight) {
        setRandomTitleAnimation(true);
        newVisibilityClass = 'focused';
      }
    }
    if (newVisibilityClass === 'no-focus') {
      setRandomTitleAnimation(false);
    }

    setVisibilityClass(newVisibilityClass);
  };

  return (
    <section id={id} className={visibilityClass} ref={boxRef}>
      <div className="box">
        <h2 className={titleClass}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default AnimatedBox;
