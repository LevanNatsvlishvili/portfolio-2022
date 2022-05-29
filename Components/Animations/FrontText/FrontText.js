import React from 'react';

function FrontText(props) {
  const { shouldDisplay, heading1, heading2, bottom } = props;
  return (
    <div
      className={`animated-title my-6 ${!heading2 ? 'h-40' : 'h-60'} ${
        shouldDisplay ? 'start-text-animation' : ''
      }`}
    >
      <div className="text-top h-3/4">
        <div className="text-7xl leading-tight px-44 mb-2">
          <h1 className="leading-tight text-4xl sm:text-7xl">{heading1}</h1>
          <h2 className="leading-tight text-4xl sm:text-7xl">{heading2}</h2>
        </div>
      </div>
      <p className="divider" />
      <div className="text-bottom h-1/3 top-3/4 ">
        <div className="text-lg sm:text-2xl">{bottom}</div>
      </div>
    </div>
  );
}

export default FrontText;
