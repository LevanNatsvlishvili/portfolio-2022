import Button from 'Components/Button';
import React from 'react';
import AboutSummary from './AboutSummary';
import Experience from './Experience';
import Tabs from './Tabs';
import { paths } from 'Routing/Paths';
import useStore from 'Store/Context';

const About = () => {
  const { handleNavigationLoading } = useStore();
  return (
    <div className="overflow-auto scroll-bar h-[100vh] pb-16">
      <div className="relative pt-20 sm:pt-32 px-4 md:px-10 z-10 flex grid-cols-12 gap-y-8 gap-x-2 gap-2 md:gap-8 grid">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <AboutSummary />
        </div>
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          <Experience />
          <Tabs />
          <div className="px-1">
            <Button
              onClick={() => handleNavigationLoading(paths.projects)}
              className="mt-5 w-full text-base sm:text-2xl"
            >
              Continue To Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
