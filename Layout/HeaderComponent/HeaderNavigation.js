import clsx from 'clsx';
import React from 'react';
import { paths } from 'Routing/Paths';
import { useRouter } from 'next/router';

function HeaderNavigation(props) {
  const { navMenu, handleNav } = props;
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);

    setTimeout(() => {
      handleNav();
    }, 300);
  };

  return (
    <nav
      className={clsx(
        `navmenu  bg-global overflow-hidden ease-linear flex justify-center items-center text-6xl sm:text-8xl text-center absolute z-20`,
        {
          'nav-lightning': navMenu,
          'navbar-visible': navMenu,
          'navbar-hidden': !navMenu,
        }
      )}
    >
      <div className={`cloud-circle cloud-1`}></div>
      <div className={`cloud-circle cloud-2`}></div>
      <div className={`cloud-circle hidden lg:block cloud-3`}></div>
      <div className={`cloud-circle hidden lg:block cloud-4`}></div>
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
      <ul className="relative">
        <li className="my-10">
          {/* <Link onClick={handleClick}>Home</Link> */}
          <button onClick={() => handleClick(paths.home)}>Home</button>
        </li>
        <li className="my-10">
          <button onClick={() => handleClick(paths.about)}>About Me</button>
        </li>
        <li className="my-10">
          <button onClick={() => handleClick(paths.projects)}>Projects</button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
