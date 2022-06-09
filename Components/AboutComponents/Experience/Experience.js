import React, { useEffect, useRef, useState } from 'react';
import ExperienceDetails from './ExperienceDetails';
import Timeline from './Timeline';

const companies = [
  {
    id: 0,
    title: 'Leavingstone',
    timelineTitle: 'Leavingstone',
    role: 'Front-end Developer',
    date: '2021 October - present',
    timelineDate: '2021 - Present',
    techStack: [
      'React',
      'Javascript',
      'Typescript',
      'Tailwind-css',
      'Bootstrap',
    ],
    description:
      'Currently Working on Archi web application. Built tool that allows users to visually choose their desired flat on their desired floor with just mouse hover. Also worked on National Bank Of Georgia.',
  },
  {
    id: 1,
    title: 'Helix Nebula Capital',
    timelineTitle: 'Helix Nebula Capital',
    role: 'Front-end Developer',
    date: '2020 October - 2021 July',
    timelineDate: '2020 - 2021',
    techStack: ['React', 'Javascript', 'Tailwind-css', 'Material-ui'],
    description:
      'A Sillicon valley startup, for which I worked, where I built a responsive User interface and was in constant challenge to turn a heavy application into a robust one',
  },
  {
    id: 2,
    title: 'Georgian State Electrosystem',
    timelineTitle: 'GSE',
    role: 'Full Stack Web Developer',
    date: '2020 October - 2021 July',
    timelineDate: '2019 - 2020',
    techStack: ['PHP', 'MYSQL', 'Bootstrap'],
    description:
      'Working on Private application, I had deal with databases, build and replace old code with new one',
  },
];

const Experience = () => {
  const [curr, setCurr] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(12);
  const ref = useRef();
  const handleCompany = (newCurr) => {
    setCurr(newCurr);
  };

  useEffect(() => {
    setScrollHeight(ref.current.offsetHeight > 300 ? 23 : 12);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <div>
      <Timeline
        handleCompany={handleCompany}
        companies={companies}
        curr={curr}
      />
      <div
        ref={ref}
        className="overflow-hidden h-96 sm:h-48 pl-2 mt-4 sm:mt-8 "
      >
        <div
          style={{ transform: `translateY(-${curr * scrollHeight}rem)` }}
          className="px-2 -ml-2 transition duration-500"
        >
          {companies.map((company, i) => (
            <ExperienceDetails company={company} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
