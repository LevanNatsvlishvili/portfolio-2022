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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
