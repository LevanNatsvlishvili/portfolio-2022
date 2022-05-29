import React from 'react';
import Skill from '../../Components/Skill';

const languages = [
  {
    skill: 'Georgian',
    level: 'Native',
  },
  {
    skill: 'English',
    level: 'Fluent',
  },
];

const Languages = () => {
  return (
    <div className="grid-cols-12  mb-8 my-3">
      <div className="styled-card text-grey-text p-4 ">
        <div className="scroll-bar overflow-y-auto overflow-x-hidden h-60 p-2 ">
          <div className="w-full grid grid-cols-12 gap-x-10 gap-y-8">
            {languages.map((language, i) => (
              <div key={i} className="col-span-4">
                <Skill
                  logo={language.logo}
                  skill={language.skill}
                  level={language.level}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
