import Blackhole from 'Components/Animations/Blackhole';
import FrontText from 'Components/Animations/FrontText';
import React from 'react';
import useStore from 'Store/Context';

function Welcome() {
  const { currView } = useStore();
  return (
    <section>
      <div className="w-full absolute left-[22.5%] top-1/4 sm:top-auto sm:left-40">
        <FrontText
          shouldDisplay={currView === 0}
          heading1="Levan"
          heading2="Natsvlishvili"
          bottom="Front end developer"
        />
      </div>
      <div>
        <Blackhole shouldDisplay={currView === 0} />
      </div>
    </section>
  );
}

export default Welcome;
