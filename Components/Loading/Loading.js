import clsx from 'clsx';
import React from 'react';

function Loading(props) {
  const { loading } = props;

  return (
    <div
      className={clsx(
        `navmenu bg-global overflow-hidden ease-linear flex justify-center items-center text-6xl sm:text-8xl text-center absolute z-50`,
        {
          'navbar-visible': loading,
          'navbar-hidden': !loading,
        }
      )}
    >
      <div className="loader">
        <div className="loader-face">
          <div className="loader-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
