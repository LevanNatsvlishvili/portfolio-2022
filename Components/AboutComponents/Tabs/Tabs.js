import React, { Fragment, useState } from 'react';
import Skills from './Tabs/Skills';
import Languages from './Tabs/Languages';
import Switch from './TabsSwitch';
import Education from './Tabs/Education';

const tabs = [<Skills />, <Education />, <Languages />];

const Tabs = () => {
  const [currTab, setCurrTab] = useState(0);

  const handleTab = (newCurr) => {
    setCurrTab(newCurr);
  };

  return (
    <div>
      <Switch handleTab={handleTab} currTab={currTab} />
      <div className="overflow-hidden h-72 pl-2 mt-2 ">
        <div
          style={{ transform: `translateY(-${currTab * 19}rem)` }}
          className="px-2 -ml-2 transition duration-500"
        >
          {tabs.map((tab, i) => (
            <Fragment key={i}>{tab}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
