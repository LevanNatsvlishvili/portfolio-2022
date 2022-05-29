import React from 'react';
import Skill from '../../Components/Skill';

const skills = [
  {
    skill: 'Georgian Technical University',
    level: 'Informatics and Management Systems',
    time: '[ 2015-2019 ]',
  },
  {
    skill: 'The University Of Georgia',
    level: 'IT Management',
    time: '[ 2020-present ]',
  },
];

const Education = () => {
  return (
    <div className="grid-cols-12  mb-8 my-3">
      <div className="styled-card text-grey-text p-4 ">
        <div className="scroll-bar overflow-y-auto overflow-x-hidden h-60 p-2 ">
          <div className="w-full grid grid-cols-12 gap-x-10 gap-y-8">
            {skills.map((skill, i) => (
              <div key={i} className="col-span-12 xl:col-span-6">
                <Skill
                  logo={skill.logo}
                  skill={skill.skill}
                  level={skill.level}
                  time={skill.time}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
