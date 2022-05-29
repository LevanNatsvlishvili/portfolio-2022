import React from 'react';

function Blackhole({ shouldDisplay }) {
  return (
    <div
      className={`absolute top-0 left-0 lg:left-1/4 -z-10 ${
        shouldDisplay ? 'blackhole-load' : ''
      }`}
    >
      <bh-container>
        <bh-doppler></bh-doppler>
        <bh-photon-ring></bh-photon-ring>
        <bh-accretion></bh-accretion>
        <bh-backdrop></bh-backdrop>
        <bh-shadow></bh-shadow>
      </bh-container>
    </div>
  );
}

export default Blackhole;
