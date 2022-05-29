import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const tabs = ['Skills', 'Education', 'Languages'];

const Switch = (props) => {
  const { currTab, handleTab } = props;
  const [divider, setDivider] = useState(2);
  const activeColor = 'shadow-neon-glow bg-[#2c3d7a60]';

  useEffect(() => {
    const dividerNum = 100 / tabs.length;
    setDivider(dividerNum);
  }, []);

  const LeftButton = ({ children, active, divide, ...rest }) => (
    <div
      className={clsx('h-full cursor-pointer transition flex rounded-l-full', {
        [activeColor]: active,
      })}
      style={{
        width: `${divide}%`,
      }}
      {...rest}
    >
      <div className="h-full w-full flex items-center justify-center text-base text-grey-text rounded-l-full">
        {children}
      </div>
      <div className="h-full bg-[#2c3d7a] opacity-40 w-1 blue-glow shadow-blue-glow" />
    </div>
  );
  const RightButton = ({ children, active, divide, ...rest }) => (
    <div
      className={clsx('h-full cursor-pointer transition flex rounded-r-full', {
        [activeColor]: active,
      })}
      style={{
        width: `${divide}%`,
      }}
      {...rest}
    >
      <div className="h-full w-full flex items-center justify-center text-base text-grey-text rounded-r-full">
        {children}
      </div>
    </div>
  );
  const MiddleButton = ({ children, active, divide, ...rest }) => (
    <div
      className={clsx('h-full cursor-pointer transition flex', {
        [activeColor]: active,
      })}
      style={{
        width: `${divide}%`,
      }}
      {...rest}
    >
      <div className="h-full w-full flex items-center justify-center text-base text-grey-text ">
        {children}
      </div>
      <div className="h-full bg-[#2c3d7a] opacity-40 w-1 blue-glow shadow-blue-glow" />
    </div>
  );

  const generateButton = (tab, i) => {
    const last = tabs.length - 1 === i;
    const props = {
      key: i,
      onClick: () => handleTab(i),
      divide: divider,
      active: currTab === i,
    };
    if (i === 0) return <LeftButton {...props}>{tab}</LeftButton>;
    if (last) return <RightButton {...props}>{tab}</RightButton>;
    return <MiddleButton {...props}>{tab}</MiddleButton>;
  };

  return (
    <div className="w-full h-20 flex items-center">
      <div className="w-full h-10 styled-card flex items-center p-0 rounded-full transition">
        {tabs.map((tab, i) => generateButton(tab, i))}
      </div>
    </div>
  );
};

export default Switch;
