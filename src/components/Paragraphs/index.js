import React from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import { paragraphs } from '../../common/config';

const Paragraphs = () => {
  const paragraphsExist = () => Object.keys(paragraphs).length;

  const getAll = () => {
    const sections = [];
    for (const [label, text] of Object.entries(paragraphs)) {
      sections.push(
        <AnimatedBox id={label} title={label}>
          <p>{text}</p>
        </AnimatedBox>,
      );
    }
    return sections;
  };

  return (
    paragraphsExist() && getAll()
  );
};

export default Paragraphs;
