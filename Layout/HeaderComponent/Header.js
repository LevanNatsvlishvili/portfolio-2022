import React, { useState } from 'react';
import HeaderContactLinks from './HeaderContactLinks';
import HeaderNavigation from './HeaderNavigation';
import HeaderNavigationMobile from './HeaderNavigationMobile';
import HeaderScrollNav from './HeaderScrollNav';

function Head(props) {
  const { currView, setCurrView, shouldScrollDisplay } = props;
  const [navMenu, setNavMenu] = useState(false);

  const handleNav = () => {
    setNavMenu(!navMenu);
  };

  return (
    <header className="fixed w-full z-20">
      <HeaderContactLinks
        navMenu={navMenu}
        setNavMenu={setNavMenu}
        handleNav={handleNav}
      />

      <div className="hidden md:block">
        <HeaderNavigation navMenu={navMenu} handleNav={handleNav} />
      </div>
      <div className="block md:hidden">
        <HeaderNavigationMobile navMenu={navMenu} />
      </div>

      {shouldScrollDisplay && (
        <HeaderScrollNav currView={currView} setCurrView={setCurrView} />
      )}
    </header>
  );
}

export default Head;
