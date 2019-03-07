import React, { useState, useEffect } from 'react';
import Lottie from '../../common/LottieAnimation';
import wave from './wave';
import AnimatedBox from '../../common/AnimatedBox';
import { skills as skillsList } from '../../common/config';
import './style.scss';

const skillsIndexes = Object.keys(skillsList).sort(() => Math.random() - 0.5);

const Skills = () => {
  const [skills, setSkills] = useState(skillsList);

  useEffect(() => {
    let timeout = null;
    const sClone = [...skills];
    if (skillsIndexes.length) {
      timeout = setTimeout(() => {
        sClone[skillsIndexes[0]].level.current = sClone[skillsIndexes[0]].level.to;
        sClone[skillsIndexes[0]].class = 'visible';
        skillsIndexes.shift();
        setSkills(sClone);
      }, 100);
    }

    return () => {
      window.clearTimeout(timeout);
    };
  }, [skills]);

  return (
    <AnimatedBox id="skills" title="Skills">
      <div id="skills-container">
        {skills.map((skill) => {
          const className = `skill ${skill.class}`;
          return (
            <div key={skill.id} className={className}>
              <div className="skill-content">
                <i className={skill.logo} />
                <div className="skill-name">{skill.label}</div>
              </div>
              <div
                className="level-fill"
                style={{ height: `calc(${skill.level.current * 10}% - 17px)` }}
              >
                <Lottie animtion={wave} height={20} width={57} />
              </div>
            </div>
          );
        })}
        <div className="clear" />
      </div>
    </AnimatedBox>
  );
};

export default Skills;
