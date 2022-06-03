import React from 'react';

const Summary = () => {
  return (
    <div className="styled-card w-full flex-col pt-12 h-full p-5 flex items-center">
      <div className="about-image-container w-[200px] h-[200px] ">
        <img
          className="about-image-container-image"
          src="images/me2.jpg"
          alt=""
        />
      </div>
      <h5 className="pt-8 text-center text-grey-text text-3xl text-white">
        Levan Natsvlishvili
      </h5>
      <h1 className="pt-1 text-center pb-6 text-grey-text text-xl text-orange">
        Front-end Developer
      </h1>
      <p className="text-grey-text p-2  text-base scroll-bar firago-light lg:h-80 overflow-auto">
        I'm Front-end developer with 3 years of experience. Expert at UI,
        Javascript and ReactJS development, with which I Have more than 2 years
        of experience in ReactJS. Experienced in Typescript and NextJS
        technologies. I'm very Passionate about css animations and aesthetics in
        general.
        <br />
        I'm looking forward to learning improving my expertize and experience in
        Typescript and NextJS, as well as to learn Blockchain development which
        I believe soon will dominate the market.
        <br />
        <span className="text-orange">For the recruiters: </span>At the moment
        I'm taking only part-time offers or flexible hour contracts. I'm
        especially intersted in Blockchain offers.
      </p>
    </div>
  );
};

export default Summary;
