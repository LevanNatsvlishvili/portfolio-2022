import { HeaderTagsRenderer } from 'Components/HeaderTagsRenderer';
import Image from 'Components/Image';
import React from 'react';

const projects = [
  {
    title: 'Archi',
    url: 'https://archi.ge',
    thumbnail: '/images/projects/no-image.jpg',
    techStack: ['React', 'Bootstrap', 'Javascript'],
  },
  {
    title: 'National Bank Of Georgia',
    url: 'https://nbg.gov.ge/',
    thumbnail: '/images/projects/bank-of-georgia.jpg',
    techStack: ['React', 'Tailwindcss', 'Javascript'],
  },
  {
    title: 'Dataninja',
    url: 'https://mydataninja.com',
    thumbnail: '/images/projects/dataninja.png',
    techStack: ['React', 'Material-UI', 'Tailwindcss', 'Javascript'],
  },
  {
    title: 'Citrus',
    url: 'https://www.citrus.ge/',
    thumbnail: '/images/projects/citrus.png',
    techStack: ['React', 'Javascript'],
  },
  {
    title: 'Clothing Store Template',
    url: 'https://levannatsvlishvili.github.io/clothingstoretemplate/',
    thumbnail: '/images/projects/clothingstore.png',
    techStack: ['React', 'Material-UI', 'Javascript'],
  },
  {
    title: 'Discover Greece',
    url: 'https://levannatsvlishvili.github.io/discoverGreece/',
    thumbnail: '/images/projects/tourism.png',
    techStack: ['Html', 'Css', 'Vanilla Javascript'],
  },
];

const Projects = () => {
  return (
    <div className="relative pt-20 sm:pt-32 px-4 sm:px-10 z-10 h-[90vh] w-screen ">
      <HeaderTagsRenderer
        title="Web Developer Portfolio Website Projects"
        metaTitle="Web Developer Portfolio Website"
        description="An experienced Web Developer Portfolio website, proficient in Javascript reactJS and nextJS"
        image="/images/projects/portfolio.png"
      />
      <div className="styled-card h-full px-1 sm:px-4">
        <div className="px-4 pb-4">
          <h1>Projects</h1>
        </div>
        <div className="px-4 scroll-bar overflow-auto h-[90%]">
          <div className="h-auto sm:gap-8 gap-y-10 grid   grid-cols-12">
            {projects.map((project, i) => (
              <div
                key={i}
                className="col-span-12 lg:col-span-4 2xl:col-span-3 h-fit"
              >
                <div className="hidden lg:block">
                  <ProjectCard project={project} />
                </div>
                <div className="block lg:hidden">
                  <ProjectCardMobile project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  const { title, url, thumbnail, techStack } = props.project;
  return (
    <div className="project-card relative glass-effect">
      <Image src={thumbnail} className="w-full h-60 rounded-xl " />
      <div className="opacity-0 z-10 transition duration-300 w-full h-full absolute top-0 rounded-xl bg-[#181D5E]/30 blur" />
      <div className="opacity-0 z-30 flex transition duration-300 w-full h-full absolute top-0 rounded-xl items-center justify-center flex-col mt-10">
        <a
          className="text-grey-text border-blue-glow border-2 text-xs w-28 h-7 flex items-center justify-center bg-[#0D162860] rounded-3xl mt-5"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT
        </a>
      </div>
      <div className="z-20 flex transition duration-300 w-full h-full absolute top-0 rounded-xl  items-center justify-center flex-col">
        <h1 className="text-lg text-center ">{title}</h1>
        <h3 className="text-sm text-orange w-1/2 text-center">
          {techStack.join(', ')}
        </h3>
      </div>
    </div>
  );
};

const ProjectCardMobile = (props) => {
  const { title, url, thumbnail, techStack } = props.project;
  return (
    <div>
      <HeaderTagsRenderer
        title="Web Developer Portfolio Website Projects"
        metaTitle="Web Developer Portfolio Website Projects"
        description="An experienced Web Developer Portfolio website, proficient in Javascript reactJS and nextJS"
      />
      <div className="relative glass-effect">
        <Image src={thumbnail} className="w-full h-full rounded-xl " />
      </div>
      <div className="z-20 mt-4 flex transition duration-300 w-full h-full  top-0 rounded-xl  items-center justify-center flex-col">
        <h1 className="text-lg text-center ">{title}</h1>
        <h3 className="text-sm text-orange mt-2 w-1/2 text-center">
          {techStack.join(', ')}
        </h3>
        <a
          className="text-grey-text border-blue-glow border-2 text-xs w-28 h-7 flex items-center justify-center bg-[#0D162860] rounded-3xl mt-2"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT
        </a>
      </div>
      <div className="h-1 border border-deep-blue mt-5" />
    </div>
  );
};

export default Projects;
