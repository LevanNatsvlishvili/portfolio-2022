import clsx from 'clsx';
import React, { useEffect } from 'react';

const HeaderScrollNav = (props) => {
  const { currView, setCurrView } = props;

  const pages = [0, 1, 2, 3];

  const handleNavigation = (val) => {
    setCurrView(val);
    const axis = `translateY(-${val}00vh)`;
    document.getElementById('wrapper').style.transform = axis;
  };

  return (
    <>
      <div className="hidden lg:block">
        <DesktopWidth
          pages={pages}
          handleNavigation={handleNavigation}
          currView={currView}
        />
      </div>
      <div className="lg:hidden">
        <MobileWidth
          pages={pages}
          handleNavigation={handleNavigation}
          currView={currView}
        />
      </div>
    </>
  );
};

const MobileWidth = ({ pages, handleNavigation, currView }) => (
  <div className="fixed bottom-16 flex transform left-1/2 -translate-x-1/2 h-10 border-white">
    {pages.map((page) => (
      <div
        key={page}
        className={clsx(
          ' px-8 nav-scroll cursor-pointer relative flex justify-center items-center duration-300 ',
          {
            'nav-active': currView === page,
          }
        )}
        onClick={() => handleNavigation(page)}
      >
        <div className="absolute bg-white rounded-full h-1.5 w-1.5"></div>
        <div className="absolute bg-white duration-300"></div>
        <div className="absolute bg-white duration-300"></div>
        <div className="absolute rotate-45 bg-white duration-300"></div>
        <div className="absolute -rotate-45 bg-white duration-300"></div>
      </div>
    ))}
  </div>
);

const DesktopWidth = ({ pages, handleNavigation, currView }) => (
  <div className="fixed top-1/2 transform -translate-y-1/2 ml-10 border-white">
    {pages.map((page) => (
      <div
        key={page}
        className={clsx(
          'py-2 py-5 nav-scroll cursor-pointer relative flex justify-center items-center duration-300 ',
          {
            'nav-active': currView === page,
          }
        )}
        onClick={() => handleNavigation(page)}
      >
        <div className="absolute bg-white rounded-full h-1.5 w-1.5"></div>
        <div className="absolute bg-white duration-300"></div>
        <div className="absolute bg-white duration-300"></div>
        <div className="absolute rotate-45 bg-white duration-300"></div>
        <div className="absolute -rotate-45 bg-white duration-300"></div>
      </div>
    ))}
  </div>
);

export default HeaderScrollNav;
