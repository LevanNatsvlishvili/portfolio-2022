import React from 'react';

const ExperienceDetails = (props) => {
  const { title, role, techStack, date, description } = props.company;

  return (
    <div className={` grid-cols-12 grid gap-5 mb-8 my-3`}>
      <div className="col-span-6 sm:col-span-4 styled-card text-grey-text p-4  ">
        <div className="scroll-bar overflow-y-auto overflow-x-hidden h-32">
          <h1 className="text-lg sm:text-2xl text-grey-text text-white">
            {title}
          </h1>
          <h2 className="text-sm sm:text-base text-grey-text text-orange">
            {role}
          </h2>
          <p className="text-grey-text text-sm sm:text-base firago-light">
            [{date}]
          </p>
        </div>
      </div>
      <div className="col-span-6 sm:col-span-3 styled-card p-4 ">
        <div className="scroll-bar overflow-y-auto overflow-x-hidden h-32">
          <h6 className="text-sm sm:text-base text-grey-text">Tech Stack:</h6>
          <ul className="text-sm text-grey-text list-disc pl-5 pt-1 ">
            {techStack?.map((tech, i) => (
              <li key={i} className="text-sm text-grey-text firago-light">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-5 styled-card p-4">
        <div className="text-grey-text text-sm scroll-bar overflow-y-auto overflow-x-hidden h-32 firago-light">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
