import React from 'react';
import AnimatedBox from '../../common/AnimatedBox';
import { paragraphs } from '../../common/config';

const paragraphsExist = () => Object.keys(paragraphs).length;

const Paragraphs = () => {
  const GetParagraphs = () => {
    const sections = [];
    for (const [label, text] of Object.entries(paragraphs)) {
      sections.push(
        <AnimatedBox key={label} id={label} title={label}>
          <p>{text}</p>
        </AnimatedBox>,
      );
    }
    return sections;
  };

  return (
    paragraphsExist() && <GetParagraphs />
  );
};

export default Paragraphs;
